---
title: Randomize all seeds in a project - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

Randomize all seeds in a project
========================

This example adds an action in the Edit menu to randomize all the random seed properties from the Substance present in the current project.

---

To use this example:

> 1. Go to your Python plugin folder (see [this page](/guides/creating-python-plugin/) to know where)
> 2. Create a folder named **blending_mode**
> 3. Create a file named **__init__.py**
> 4. Copy the code below inside the file.

---

```python
import os
import re
import sys
import math
import json
import random
from datetime import datetime

import substance_painter as sp
import substance_painter_plugins as spp

# Qt5 vs Qt6 check
IsQt5 = sp.application.version_info() < (10,1,0)

if IsQt5 :
	from PySide2 import QtGui
	from PySide2 import QtCore
	from PySide2 import QtWidgets
else :
	from PySide6 import QtGui
	from PySide6 import QtCore
	from PySide6 import QtWidgets

WIDGETS = []

ValidNodeTypes = (
	sp.layerstack.NodeType.FillLayer,
	sp.layerstack.NodeType.FillEffect,
	sp.layerstack.NodeType.FilterEffect,
	sp.layerstack.NodeType.GeneratorEffect
)

def GetSourceMode( Source ) :
	try:
		return Source.source_mode
	except:
		return None

def CheckForRandomseed( CurrentSource, Sources ) :
	if type( CurrentSource ) == sp.source.SourceSubstance :
		Parameters = CurrentSource.get_parameters()

		# Check if the Substance has a random seed
		if "$randomseed" in Parameters :
			Sources.append( CurrentSource )

		# Check if any of the inputs of the Substance has another
		# Substance with a random seed too
		for Name in CurrentSource.image_inputs :
			InputSource = CurrentSource.get_source( Name )
			CheckForRandomseed( InputSource, Sources )

def FindSources( Node, Sources ) :
	if Node.get_type() in ValidNodeTypes :
		Source = []
		Mode = GetSourceMode( Node )

		if Mode == sp.source.SourceMode.Material :
			Source.append( Node.get_material_source() )

		elif Mode == sp.source.SourceMode.Split :
			for Channel in Node.active_channels :
				Source.append( Node.get_source( Channel ) )

		else :
			Source.append( Node.get_source() )

		for CurrentSource in Source :
			CheckForRandomseed( CurrentSource, Sources )

def IterateLayer( Parent, Sources ) :
	if Parent.get_type() == sp.layerstack.NodeType.FillLayer :
		FindSources( Parent, Sources )

	if Parent.get_type() == sp.layerstack.NodeType.FillLayer \
	or Parent.get_type() == sp.layerstack.NodeType.GroupLayer \
	or Parent.get_type() == sp.layerstack.NodeType.PaintLayer :
		for Effect in Parent.content_effects() :
			FindSources( Effect, Sources )

		for Effect in Parent.mask_effects() :
			FindSources( Effect, Sources )

	if Parent.get_type() == sp.layerstack.NodeType.GroupLayer :
		for Layer in Parent.sub_layers() :
			IterateLayer( Layer, Sources )

def RandomizeSeed() :
	if not sp.project.is_open():
		sp.logging.warning( "No project open" )
		return

	# Sources list
	Sources = []

	# List all stacks and gather their resources
	for TextureSet in sp.textureset.all_texture_sets() :
		for Stack in TextureSet.all_stacks() :
			for Layer in sp.layerstack.get_root_layer_nodes( Stack ) :
				IterateLayer( Layer, Sources )

	# Setup parameters
	Parameters = { "$randomseed" : random.getrandbits(16) }

	# Batch
	with sp.layerstack.ScopedModification( "Randomize all the seeds" ) :
		for Source in Sources :
			Source.set_parameters( Parameters )

def start_plugin():
	ActionBuilder = None
	if IsQt5 :
		ActionBuilder = QtWidgets.QAction
	else :
		ActionBuilder = QtGui.QAction

	Action = ActionBuilder(
		"Randomize all seeds",
		triggered=RandomizeSeed
	)

	sp.ui.add_action(
		sp.ui.ApplicationMenu.Edit,
		Action
	)

	WIDGETS.append( Action )

def close_plugin():
	for Widget in WIDGETS :
		sp.ui.delete_ui_element( Widget )

if __name__ == "__main__":
	start_plugin()
```
