---
title: Using external modules - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

# Using external modules

This page shows how to use external modules with the Python integration by using the PYTHONPATH environment variable.

> **Note**: External modules must be installed and compatible with the Python version provided within the application. Any modules that rely on older or newer Python versions may lead to compatibility or stability issues.

## Installing an external module

Install modules like any other modules. The recommended method is to use **pip**, for example with [numpy](https://numpy.org/doc/stable/user/whatisnumpy.html):

```bash
> pip install numpy
Defaulting to user installation because normal site-packages is not writeable
Collecting numpy
  Downloading numpy-1.21.0-cp38-cp38-manylinux_2_12_x86_64.manylinux2010_x86_64.whl (15.7 MB)
     |████████████████████████████████| 15.7 MB 2.5 MB/s
Installing collected packages: numpy
Successfully installed numpy-1.21.0
```

Depending on the platform and installation path, the modules may be installed in specific locations.

The easiest way to discover these locations is to start a command line/terminal and type the following commands:

```python
python
>>> import sys
>>> sys.path
['', '/usr/lib/python37.zip', '/usr/lib/python3.7', '/usr/lib/python3.7/lib-dynload', '/home/username/.local/lib/python3.7/site-packages', '/usr/lib/python3.7/site-packages']
```

In the example above, the **sys.path** variable shows the list where Python and its modules have been installed on a Linux system. The most interesting paths are the one with the **site-packages** folders.

## Setting up the environment variable

There are several ways to setup the environment variable, either once for all or in a more temporary manner.

### With the system settings

This method is the best way to setup the path for the long run and will work anytime the application will run.

On **Windows**:

1. Open the System from the Control Panel.
2. Click on the Advanced system settings link and then on Environment Variables.
3. Under the section System Variables, select the environment variable to edit, and click on New or Edit (if it already exists).
4. Input the value of the variable in the New System Variable (or Edit System Variable) window
5. Validate by clicking OK.
6. Log off or restart the computer for the change to take effect.

### With a command line

On **Windows**, open a command line and type:

```cmd
set PYTHONPATH=C:/Python/lib/site-packages/
start "" "C:/Path/To/Installation/Folder/Adobe Substance 3D Painter.exe"
```

For Windows, make sure the path doesn't use quotation marks (") otherwise it won't be read properly by Python.

On Linux, open a terminal and type:

```bash
cd "/Path/To/Installation/Folder/"
export PYTHONPATH="/home/username/.local/lib/python3.7/site-packages"
./"Adobe Substance 3D Painter"
```

### With Python

Here is a simple script to setup the environment and launch the application:

```python
import os
import subprocess

# Add the environment variable
os.environ["PYTHONPATH"] = "C:/Python/lib/site-packages/"

# Launch the application with the new environment
subprocess.call( "Adobe Substance 3D Painter.exe", env=os.environ )
```

## Loading and using an external module

Once the application is running, check that the custom module location is available. To do so open the Python Console window and type:

```python
>>> import sys
>>> sys.path
['/home/username', '/installation/path/Substance 3D Painter/resources/pythonsdk/lib/python37.zip', ... ]
```

If the path specified via the environment variable doesn't appear or its value is incorrect, this means the variable wasn't set properly.

If the path is correct, then the custom modules can be imported and used:

```python
>>> import numpy
>>> numpy.__version__
'1.21.0'
```