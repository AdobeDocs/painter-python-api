---
title: hello_plugin - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






Hello Plugin — Substance 3D Painter Python API 0.2.11 documentation
















Hello Plugin
============



hello_plugin.py

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
"""The hello world of python scripting in Substance 3D Painter
"""

from PySide2 import QtWidgets
import substance_painter.ui

plugin_widgets = []
"""Keep track of added ui elements for cleanup"""

def start_plugin():
	"""This method is called when the plugin is started."""
	# Create a simple text widget
	hello_widget = QtWidgets.QTextEdit()
	hello_widget.setText("Hello from python scripting!")
	hello_widget.setReadOnly(True)
	hello_widget.setWindowTitle("Hello Plugin")
	# Add this widget as a dock to the interface
	substance_painter.ui.add_dock_widget(hello_widget)
	# Store added widget for proper cleanup when stopping the plugin
	plugin_widgets.append(hello_widget)

def close_plugin():
	"""This method is called when the plugin is stopped."""
	# We need to remove all added widgets from the UI.
	for widget in plugin_widgets:
		substance_painter.ui.delete_ui_element(widget)
	plugin_widgets.clear()

if __name__ == "__main__":
	start_plugin()

```











