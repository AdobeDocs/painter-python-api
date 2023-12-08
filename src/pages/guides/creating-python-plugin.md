---
title: creating-python-plugin - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

yolo

<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf.import_resource">
<span class="sig-name descname"><span class="pre">import_resource</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">resource_usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><span class="pre">Usage</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">group</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">uuid</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">&#x2192;</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource"><span class="pre">Resource</span></a></span></span><a class="headerlink" href="#substance_painter.resource.Shelf.import_resource" title="Link to this definition"></a></dt>
<dd><p>Import a resource into this shelf.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>file_path</strong> (<em>str</em>) – The file path to the resource to be imported.</p></li>
<li><p><strong>resource_usage</strong> (<a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><em>Usage</em></a>) – The resource usage.</p></li>
<li><p><strong>name</strong> (<em>str</em><em>, </em><em>optional</em>) – The name of the resource if different from the
file name.</p></li>
<li><p><strong>group</strong> (<em>str</em><em>, </em><em>opional</em>) – An optional group name, can be used in resource
queries.</p></li>
<li><p><strong>uuid</strong> (<em>str</em><em>, </em><em>opional</em>) – An optional uuid. If a resource already exists with
the same uuid, it will be replaced.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The imported resource object.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><strong>ValueError</strong> – If parameters validation failed.</p></li>
<li><p><strong>RuntimeError</strong> – If import failed.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

Creating a Python plugin
========================

This step by step guide describes how to create a simple Python plugin that allows to export channels of a Texture Set with a specific export preset.


## 1 - Navigate to the plugins folder

To add a new Python plugin, a simple script file can be created into the plugin folder of Substance 3D Painter.

To access the python folder, navigate to:

<table columnWidths="20,20,60">
	<tr>
		<th>Platform</th>
		<th>Version</th>
		<th>Path</th>
	</tr>
	<tr>
		<td>Windows</td>
		<td><strong>7.2</strong> or newer</td>
		<td>C:\Users\username\Documents\Adobe\Adobe Substance 3D Painter</td>
	</tr>
	<tr>
		<td></td>
		<td>Legacy</td>
		<td>C:\Users\username\Documents\Allegorithmic\Substance Painter</td>
	</tr>
	<tr>
		<td>Mac</td>
		<td><strong>7.2</strong> or newer</td>
		<td>/Users/username/Documents/Adobe/Adobe Substance 3D Painter</td>
	</tr>
	<tr>
		<td></td>
		<td>Legacy</td>
		<td>/Users/username/Documents/Allegorithmic/Substance Painter</td>
	</tr>
	<tr>
		<td>Linux</td>
		<td><strong>7.2</strong> or newer</td>
		<td>/home/username/Documents/Adobe/Adobe Substance 3D Painter</td>
	</tr>
	<tr>
		<td></td>
		<td>Legacy</td>
		<td>/home/username/Documents/Allegorithmic/Substance Painter</td>
	</tr>
</table>

| Test | Test2 |
|------|-------|
| Value | Value 2 |

> **Note**: The folder "**plugins**" is for Javascript plugins. Python plugins need to go under the "**python/plugins**" folder.

## 2 - Creating the new plugin file

At the root of the plugin folder, create a new text file and give it the name of **custom_export.py**.

## 3 - Script content

Open the empty script file into a text editor and paste the following code snippet. Take a look at the code comments for more details on its behavior.

```python
import os

# Substance 3D Painter modules
import substance_painter.ui
import substance_painter.export
import substance_painter.project
import substance_painter.textureset

# PySide module to build custom UI
from PySide2 import QtWidgets

plugin_widgets = []


def export_textures() :
	# Verify if a project is open before trying to export something
	if not substance_painter.project.is_open() :
		return

	# Get the currently active layer stack (paintable)
	stack = substance_painter.textureset.get_active_stack()

	# Get the parent Texture Set of this layer stack
	material = stack.material()

	# Build Export Preset resource URL
	# - Context: name of the library where the resource is located
	# - Name: name of the resource (filename without extension or Substance graph path)
	export_preset = substance_painter.resource.ResourceID(
		context="starter_assets",
		name="PBR Metallic Roughness" )

	print( "Preset:" )
	print( export_preset.url() )

	# Setup the export settings
	resolution = material.get_resolution()

	# Setup the export path, in this case the textures
	# will be put next to the spp project file on the disk
	Path = substance_painter.project.file_path()
	Path = os.path.dirname(Path) + "/"

	# Build the configuration
	config = {
		"exportShaderParams"  : False,
		"exportPath" : Path,
		"exportList" : [ { "rootPath" : str(stack) } ],
		"exportPresets" : [ { "name" : "default", "maps" : [] } ],
		"defaultExportPreset" : export_preset.url(),
		"exportParameters" : [
			{
				"parameters" : { "paddingAlgorithm": "infinite" }
			}
		]
	}

	substance_painter.export.export_project_textures( config )


def start_plugin():
	# Create a text widget for a menu
	Action = QtWidgets.QAction("Custom Python Export",
			triggered=export_textures)

	# Add this widget to the existing File menu of the application
	substance_painter.ui.add_action(
	substance_painter.ui.ApplicationMenu.File,
	Action )

	# Store the widget for proper cleanup later when stopping the plugin
	plugin_widgets.append(Action)


def close_plugin():
	# Remove all widgets that have been added to the UI
	for widget in plugin_widgets:
	substance_painter.ui.delete_ui_element(widget)

	plugin_widgets.clear()


if __name__ == "__main__":
	start_plugin()
```

## 4 - Loading and enabling the plugin

Launch Substance 3D Painter to make the application discover the plugin.

Click on the Python menu and then click on the plugin name to enable it:

![Enable plugin](img/enable-python-plugin.png)

Finally click on the File menu and select Custom Python Export to trigger the export function of the script:

![Run plugin](img/export-textures-python.png)
