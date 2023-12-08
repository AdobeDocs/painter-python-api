---
title: hello_plugin - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






<div class="wy-grid-for-nav">


<div class="wy-nav-content">
<div class="rst-content style-external-links">

<div class="document" itemscope="itemscope" itemtype="http://schema.org/Article" role="main">
<div itemprop="articleBody">

<h1>Hello Plugin<a class="headerlink" href="#hello-plugin" title="Link to this heading"> </a></h1>
<div class="literal-block-wrapper docutils container" id="id1">
<div class="code-block-caption"><span class="caption-text">hello_plugin.py</span><a class="headerlink" href="#id1" title="Link to this code"> </a></div>
<div class="highlight-default notranslate"><div class="highlight"><pre>##########################################################################
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
</pre></div>
</div>
</div>

</div>
</div>

</div>
</div>

</div>


