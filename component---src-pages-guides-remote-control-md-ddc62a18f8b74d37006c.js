"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[879],{71310:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return h}});var o,i=t(87462),a=t(63366),r=(t(15007),t(64983)),s=t(91515),l=["components"],c={},p=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),m={_frontmatter:c},d=s.Z;function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.mdx)(d,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"remote-control--headless"},"Remote control / headless"),(0,r.mdx)("p",null,"This page describes how to control the application remotely to execute Javascript or Python commands."),(0,r.mdx)("p",null,"This requires a specific command line argument, then a simple Python script can execute any commands available from the existing Javascript and Python APIs."),(0,r.mdx)("h2",{id:"starting-the-application"},"Starting the application"),(0,r.mdx)("p",null,"In order to control remotely the application, Substance 3D Painter needs to be launched with the following command line:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'"Adobe Substance 3D painter.exe" --enable-remote-scripting\n')),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": Make sure the application is up and running with this command before running any scripts. Scripts may fail if the application is still starting up/not ready yet."),(0,r.mdx)("h2",{id:"remote-control-script"},"Remote control script"),(0,r.mdx)("p",null,"The following Python script can serve as a library to communicate with the application."),(0,r.mdx)("p",null,"Save the following script in a file named ",(0,r.mdx)("strong",{parentName:"p"},"lib_remote.py")," to make the examples below work properly."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"import sys\nimport json\nimport base64\nimport subprocess\n\nif sys.version_info >= (3, 0):\n    import http.client as http\nelse:\n    import httplib as http\n\nclass PainterError(Exception):\n    def __init__(self, message):\n        super(PainterError, self).__init__(message)\n\nclass ExecuteScriptError(PainterError):\n    def __init__(self, data):\n        super(PainterError, self).__init__('An error occured when executing script: {0}'.format(data))\n\nclass RemotePainter() :\n    def __init__(self, port=60041, host='localhost'):\n        self._host = host\n        self._port = port\n\n        # Json server connection\n        self._PAINTER_ROUTE = '/run.json'\n        self._HEADERS = {\n            'Content-type': 'application/json',\n            'Accept': 'application/json'\n        }\n\n    # Execute a HTTP POST request to the Substance Painter server and send/receive JSON data\n    def _jsonPostRequest( self, route, body, type ) :\n        connection = http.HTTPConnection(self._host, self._port, timeout=3600)\n        connection.request('POST', route, body, self._HEADERS)\n        response = connection.getresponse()\n\n        data = response.read()\n        connection.close()\n\n        if type == \"js\" :\n            data = json.loads( data.decode('utf-8') )\n\n        if 'error' in data:\n            OutJson = json.loads( body.decode() )\n            print( base64.b64decode(OutJson[\"js\"]) )\n            raise ExecuteScriptError(data['error'])\n        else :\n        # Python can return nothing, so decoding can fail\n        try:\n            data = data.decode('utf-8').rstrip()\n        except:\n            pass\n\n        return data\n\n    def checkConnection(self):\n        connection = http.HTTPConnection(self._host, self._port)\n        connection.connect()\n\n    # Execute a command\n    def execScript( self, script, type ) :\n        Command = base64.b64encode( script.encode('utf-8') )\n\n        if type == \"js\" :\n            Command = '{{\"js\":\"{0}\"}}'.format( Command.decode('utf-8') )\n        else :\n            Command = '{{\"python\":\"{0}\"}}'.format( Command.decode('utf-8') )\n\n        Command = Command.encode( \"utf-8\" )\n\n        return self._jsonPostRequest( self._PAINTER_ROUTE, Command, type )\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("p",null,"Below are two simple examples that shows how to run commands in both API supported by the application:"),(0,r.mdx)("h3",{id:"running-javascript-commands"},"Running Javascript commands"),(0,r.mdx)("p",null,"Most Javascript function in the API return String or Json data which make them easy to manipulate within the Python script. There shouldn't be any major problems to send and receive data."),(0,r.mdx)("p",null,"Create a python script file named ",(0,r.mdx)("strong",{parentName:"p"},"example_js.py")," and add the following code:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'import lib_remote\n\nRemote = lib_remote.RemotePainter()\nRemote.checkConnection()\n\n# Print the API version\nVersion = Remote.execScript( "alg.version.painter", "js" )\nprint( Version )\n\n# Get a list of all the files in the default shelf/library:\nFiles = Remote.execScript( \'alg.resources.findResources("starter_assets", "*")\', "js" )\n\nfor File in Files :\n    print( File )\n')),(0,r.mdx)("h3",{id:"running-python-commands"},"Running Python commands"),(0,r.mdx)("p",null,"Most Python functions may return objects which cannot be passed into the remote script, this means that in order receive data they need to be explicitly converted to strings or Json dictionaries."),(0,r.mdx)("p",null,"To make things easier, it is possible to create custom python script that is loaded during the startup of the application and call functions that handle this kind of conversion without having to rely on inline conversions."),(0,r.mdx)("p",null,"Create a python script file named ",(0,r.mdx)("strong",{parentName:"p"},"example_py.py")," and add the following code:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'import lib_remote\n\nRemote = lib_remote.RemotePainter()\nRemote.checkConnection()\n\n# import the substance_painter module to make\n# its API available to us\nRemote.execScript( "import substance_painter", "python" )\n\n# Print the API version\nVersion = Remote.execScript( "substance_painter.__version__", "python" )\nprint( Version )\n\n# Get a list of all the files in the default shelf/library\n# Because the search function return objects, we have to convert\n# the information into a string within the same command (inline)\nCommand = \'substance_painter.resource.search( "p:starter_assets/" )\'\nCommand = \'"|||".join( [ x.identifier().url() for x in {0}] )\'.format( Command )\n\nFiles = Remote.execScript( Command, "python" )\nFiles = Files.split( "|||" )\n\nfor File in Files :\n    print( File )\n')),(0,r.mdx)("p",null,"If the application is running with the command line, then running this script will make it execute commands and retrieve their results."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-remote-control-md-ddc62a18f8b74d37006c.js.map