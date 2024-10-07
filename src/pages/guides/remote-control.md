---
title: Remote Control - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

# Remote control / headless

This page describes how to control the application remotely to execute Javascript or Python commands.

This requires a specific command line argument, then a simple Python script can execute any commands available from the existing Javascript and Python APIs.

## Starting the application

In order to control remotely the application, Substance 3D Painter needs to be launched with the following command line:

```
"Adobe Substance 3D painter.exe" --enable-remote-scripting
```

<InlineAlert variant="info" slots="text" />

**Note**: Make sure the application is up and running with this command before running any scripts. Scripts may fail if the application is still starting up/not ready yet.

## Remote control script

The following Python script can serve as a library to communicate with the application.

Save the following script in a file named **lib_remote.py** to make the examples below work properly.

```python
import sys
import json
import base64
import subprocess

if sys.version_info >= (3, 0):
	import http.client as http
else:
	import httplib as http

class PainterError(Exception):
	def __init__(self, message):
		super(PainterError, self).__init__(message)

class ExecuteScriptError(PainterError):
	def __init__(self, data):
		super(PainterError, self).__init__('An error occured when executing script: {0}'.format(data))

class RemotePainter() :
	def __init__(self, port=60041, host='localhost'):
		self._host = host
		self._port = port

		# Json server connection
		self._PAINTER_ROUTE = '/run.json'
		self._HEADERS = {
			'Content-type': 'application/json',
			'Accept': 'application/json'
		}

	# Execute a HTTP POST request to the Substance Painter server and send/receive JSON data
	def _jsonPostRequest( self, route, body, type ) :
		connection = http.HTTPConnection(self._host, self._port, timeout=3600)
		connection.request('POST', route, body, self._HEADERS)
		response = connection.getresponse()

		data = response.read()
		connection.close()

		if type == "js" :
			data = json.loads( data.decode('utf-8') )

		if 'error' in data:
			OutJson = json.loads( body.decode() )
			print( base64.b64decode(OutJson["js"]) )
			raise ExecuteScriptError(data['error'])
		else :
		# Python can return nothing, so decoding can fail
		try:
			data = data.decode('utf-8').rstrip()
		except:
			pass

		return data

	def checkConnection(self):
		connection = http.HTTPConnection(self._host, self._port)
		connection.connect()

	# Execute a command
	def execScript( self, script, type ) :
		Command = base64.b64encode( script.encode('utf-8') )

		if type == "js" :
			Command = '{{"js":"{0}"}}'.format( Command.decode('utf-8') )
		else :
			Command = '{{"python":"{0}"}}'.format( Command.decode('utf-8') )

		Command = Command.encode( "utf-8" )

		return self._jsonPostRequest( self._PAINTER_ROUTE, Command, type )
```

## Examples

Below are two simple examples that shows how to run commands in both API supported by the application:

### Running Javascript commands

Most Javascript function in the API return String or Json data which make them easy to manipulate within the Python script. There shouldn't be any major problems to send and receive data.

Create a python script file named **example_js.py** and add the following code:

```python
import lib_remote

Remote = lib_remote.RemotePainter()
Remote.checkConnection()

# Print the API version
Version = Remote.execScript( "alg.version.painter", "js" )
print( Version )

# Get a list of all the files in the default shelf/library:
Files = Remote.execScript( 'alg.resources.findResources("starter_assets", "*")', "js" )

for File in Files :
	print( File )
```

### Running Python commands

Most Python functions may return objects which cannot be passed into the remote script, this means that in order receive data they need to be explicitly converted to strings or Json dictionaries.

To make things easier, it is possible to create custom python script that is loaded during the startup of the application and call functions that handle this kind of conversion without having to rely on inline conversions.

Create a python script file named **example_py.py** and add the following code:

```python
import lib_remote

Remote = lib_remote.RemotePainter()
Remote.checkConnection()

# import the substance_painter module to make
# its API available to us
Remote.execScript( "import substance_painter", "python" )

# Print the API version
Version = Remote.execScript( "substance_painter.__version__", "python" )
print( Version )

# Get a list of all the files in the default shelf/library
# Because the search function return objects, we have to convert
# the information into a string within the same command (inline)
Command = 'substance_painter.resource.search( "p:starter_assets/" )'
Command = '"|||".join( [ x.identifier().url() for x in {0}] )'.format( Command )

Files = Remote.execScript( Command, "python" )
Files = Files.split( "|||" )

for File in Files :
	print( File )
```

If the application is running with the command line, then running this script will make it execute commands and retrieve their results.
