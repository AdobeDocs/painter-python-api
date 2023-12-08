---
title: versioning_plugin - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>Versioning Plugin<a class="headerlink" href="#versioning-plugin" title="Link to this heading"> </a></h1>

<div class="code-block-caption">versioning_plugin.py<a class="headerlink" href="#id1" title="Link to this code"> </a></div>


```python
##########################################################################
# ADOBE CONFIDENTIAL
# ___________________
# Copyright 2010-2020 Adobe
# All Rights Reserved.
# NOTICE:  All information contained herein is, and remains
# the property of Adobe and its suppliers, if any. The intellectual
# and technical concepts contained herein are proprietary to Adobe
# and its suppliers and are protected by all applicable intellectual
# property laws, including trade secret and copyright laws.
# Dissemination of this information or reproduction of this material
# is strictly forbidden unless prior written permission is obtained
# from Adobe.
##########################################################################
"""This is a skeleton for a plugin to integrate Substance 3D Painter with a versioning system.

This plugin listens for project events and provides a custom export action. All methods
whose name starts with ``on_`` can be customized to integrate the application with a
versioning system.
"""

from PySide2 import QtWidgets, QtCore
import substance_painter.export
import substance_painter.project
import substance_painter.textureset
import substance_painter.ui


class VersioningPlugin:
	def __init__(self):
		# Create a dock widget to report plugin activity.
		self.log = QtWidgets.QTextEdit()
		self.log.setReadOnly(True)
		self.log.setWindowTitle("Projects Versioning")
		substance_painter.ui.add_dock_widget(self.log)
		# Create a custom export action in the FILE application menu.
		self.export_action = QtWidgets.QAction("Versioned Export...")
		self.export_action.triggered.connect(self.export_textures)
		substance_painter.ui.add_action(
			substance_painter.ui.ApplicationMenu.File,
			self.export_action
		)
		# Subscribe to project related events.
		connections = {
			substance_painter.event.ProjectOpened: self.on_project_opened,
			substance_painter.event.ProjectCreated: self.on_project_created,
			substance_painter.event.ProjectAboutToClose: self.on_project_about_to_close,
			substance_painter.event.ProjectAboutToSave: self.on_project_about_to_save,
			substance_painter.event.ProjectSaved: self.on_project_saved,
		}
		for event, callback in connections.items():
			substance_painter.event.DISPATCHER.connect(event, callback)

	def __del__(self):
		# Remove all added UI elements.
		substance_painter.ui.delete_ui_element(self.log)
		substance_painter.ui.delete_ui_element(self.export_action)

	def on_project_opened(self, e):
		self.log.append("Project `{}` opened.".format(substance_painter.project.name()))
		##################################
		# Add custom integration code here

	def on_project_created(self, e):
		self.log.append("New project created.")
		##################################
		# Add custom integration code here

	def on_project_about_to_close(self, e):
		self.log.append("Project `{}` closed.".format(substance_painter.project.name()))
		##################################
		# Add custom integration code here

	def on_project_about_to_save(self, e):
		self.log.append("Project will be saved in `{}`.".format(e.file_path))
		##################################
		# Add custom integration code here

	def on_project_saved(self, e):
		self.log.append("Project `{}` saved.".format(substance_painter.project.name()))
		##################################
		# Add custom integration code here

	def on_export_about_to_start(self, export_configuration):
		self.log.append("Export textures.")
		##################################
		# Add custom integration code here

	def on_export_finished(self, res):
		self.log.append(res.message)
		self.log.append("Exported files:")
		for file_list in res.textures.values():
			for file_path in file_list:
				self.log.append("  {}".format(file_path))
		##################################
		# Add custom integration code here

	def on_export_error(self, err):
		self.log.append("Export failed.")
		self.log.append(repr(err))
		##################################
		# Add custom integration code here

	@QtCore.Slot()
	def export_textures(self):
		"""Export base color of all Texture Sets to a location choosen by the user."""
		json_config = dict()
		# Set export directory.
		export_path = QtWidgets.QFileDialog.getExistingDirectory(
			substance_painter.ui.get_main_window(),
			"Choose export directoty")
		if not export_path:
			# Export aborted.
			return
		json_config["exportPath"] = export_path + "/" + substance_painter.project.name()
		# Export configuration.
		json_config["exportShaderParams"] = False
		channels = []
		for channel in "RGBA":
			channels.append({
				"destChannel": channel,
				"srcChannel": channel,
				"srcMapType": "DocumentMap",
				"srcMapName": "BaseColor"
			})
		json_config["exportPresets"] = [{
			"name": "OnlyBaseColorExamplePreset",
			"maps": [{
				"fileName": "$textureSet_BaseColor",
				"channels": channels,
			}]
		}]
		json_config["exportParameters"] = [{
			"parameters": {
				"fileFormat" : "png",
				"bitDepth" : "8",
				"dithering": True,
				"paddingAlgorithm": "infinite"
			}
		}]
		# Create the list of Texture Sets to export.
		json_config["exportList"] = []
		for texture_set in substance_painter.textureset.all_texture_sets():
			try:
				stack = texture_set.get_stack()
				channel = stack.get_channel(substance_painter.textureset.ChannelType.BaseColor)
				if channel.is_color():
					json_config["exportList"].append({
						"rootPath": texture_set.name(),
						"exportPreset" : "OnlyBaseColorExamplePreset",
					})
			except:
				pass
		# Do the export.
		self.on_export_about_to_start(json_config)
		try:
			res = substance_painter.export.export_project_textures(json_config)
			self.on_export_finished(res)
		except ValueError as err:
			self.on_export_error(err)


VERSIONING_PLUGIN = None


def start_plugin():
	"""This method is called when the plugin is started."""
	global VERSIONING_PLUGIN
	VERSIONING_PLUGIN = VersioningPlugin()


def close_plugin():
	"""This method is called when the plugin is stopped."""
	global VERSIONING_PLUGIN
	del VERSIONING_PLUGIN


if __name__ == "__main__":
	start_plugin()
```














