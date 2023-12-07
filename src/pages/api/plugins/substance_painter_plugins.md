---
title: substance_painter_plugins - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






substance_painter_plugins module — Substance 3D Painter Python API 0.2.11 documentation
















substance_painter_plugins module
================================


This module allows to manage the Substance 3D Painter Plugins: listing existing
Plugins, loading or unloading a given Plugin, etc.


A Substance 3D Painter Plugin is a standard Python module, placed in a path added
to [`substance_painter_plugins.path`](#substance_painter_plugins.path "substance_painter_plugins.path"), which can use the Substance 3D Painter
Python API to do certain tasks.


Example



```python
import importlib
import substance_painter_plugins

# Get the list of available Plugin names:
all_plugins_names = substance_painter_plugins.plugin_module_names()
for name in all_plugins_names:
	print(name)

# Load the "hello world" Plugin:
plugin = importlib.import_module("hello_plugin")

# Start the Plugin if it wasn't already:
if not substance_painter_plugins.is_plugin_started(plugin):
	substance_painter_plugins.start_plugin(plugin)

```




substance_painter_plugins.path *= []*
A list of strings that specifies the search path for plugins.
Initialized from `SUBSTANCE_PAINTER_PLUGINS_PATH` environment variable, Substance 3D Painter
installation directory and Substance 3D Painter user resources directory.


You need to call explicitly [`substance_painter_plugins.update_sys_path`](#substance_painter_plugins.update_sys_path "substance_painter_plugins.update_sys_path") after updating this
variable.


A plugins directory is expected to contain three subdirectories, automatically added to
`sys.path`:



> 
> * **plugins** : Modules that are loaded as optional components.
> * **startup** : Modules that are always loaded at application startup.
> * **modules** : Utility modules, shared across plugins.
> 
> 
> 


Modules in `plugins/` and `startup/` directories are expected to have a `start_plugin()` and
a `close_plugin()` methods, respectively called after loading the module and before unloading it.
Modules added in `plugins/` directory take precedence over modules added in `startup/`
directory.



Type:
list







substance_painter_plugins.plugins *= {}*
Currently started plugins.



Type:
dict







substance_painter_plugins.start_plugin(*module*)
Start the given Substance 3D Painter plugin.



Parameters:
**module** – A Python module that is expected to have a `start_plugin` method.







substance_painter_plugins.close_plugin(*module*, *gc_collect=True*)
Close the given Substance 3D Painter plugin.



Parameters:
* **module** – A Python module that is expected to have a `close_plugin` method.
* **gc_collect** – Run a full garbage collection if set to True.







substance_painter_plugins.is_plugin_started(*module*)
Check if the given plugin is currently started.



Parameters:
**module** – A Python module.



Returns:
`True` if the given module is currently started, `False` otherwise.







substance_painter_plugins.reload_plugin(*module*)
Reload a plugin and start it.


Read [importlib.reload(module) documentation](https://docs.python.org/3/library/importlib.html#importlib.reload) for possible caveats. See [`start_plugin()`](#substance_painter_plugins.start_plugin "substance_painter_plugins.start_plugin")
and [`close_plugin()`](#substance_painter_plugins.close_plugin "substance_painter_plugins.close_plugin") for details about starting and closing a plugin. If the plugin has
a `reload_plugin` method, it will be executed after closing and before restarting the plugin.
The purpose of `reload_plugin` method is to reload manually all sub-modules the plugin
depends on (in case the plugin is a Python package for example).



Parameters:
**module** – A Python module.



Returns:
The reloaded plugin module.





See also


[`start_plugin()`](#substance_painter_plugins.start_plugin "substance_painter_plugins.start_plugin"), [`close_plugin()`](#substance_painter_plugins.close_plugin "substance_painter_plugins.close_plugin"), [importlib.reload(module) documentation](https://docs.python.org/3/library/importlib.html#importlib.reload).






substance_painter_plugins.startup_module_names()
List the names of the available *startup* modules.



Returns:
The names of all the available *startup* modules.



Return type:
list[str]







substance_painter_plugins.plugin_module_names()
List the names of the available *plugins* modules.



Returns:
The names of all the available *plugins* modules.



Return type:
list[str]







substance_painter_plugins.load_startup_modules()
Load all startup modules.





substance_painter_plugins.close_all_plugins()
Close all started plugins.





substance_painter_plugins.update_sys_path()
Update `sys.path` according to [`substance_painter_plugins.path`](#substance_painter_plugins.path "substance_painter_plugins.path") and
`SUBSTANCE_PAINTER_PLUGINS_PATH` environment variable.











