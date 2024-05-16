---
title: Save and restore layer selection - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

Save and restore layer selection
========================

This example shows how to store a selection of layer or effects in a project and restore it when the project is re-opened.

---

To use this example:

> 1. Go to your Python plugin folder (see [this page](/guides/creating-python-plugin/) to know where)
> 2. Create a folder named **blending_mode**
> 3. Create a file named **__init__.py**
> 4. Copy the code below inside the file.

---


```python
import substance_painter as sp

PROJECT_READY = False

def OnStackChange( Arg ) :
	if not sp.project.is_in_edition_state() or not PROJECT_READY :
		return

	Stack = sp.textureset.get_active_stack()
	Layers = sp.layerstack.get_selected_nodes( Stack )
	IDs = []

	for Layer in Layers :
		IDs.append( Layer.uid() )

	Metadata = sp.project.Metadata( "LayerStackSelection" )
	Metadata.set( "Selection", IDs )

	if len(IDs) == 1 and (
		Layer.get_type() == sp.layerstack.NodeType.PaintLayer \
	or  Layer.get_type() == sp.layerstack.NodeType.FillLayer \
	or  Layer.get_type() == sp.layerstack.NodeType.InstanceLayer \
	or  Layer.get_type() == sp.layerstack.NodeType.GroupLayer )	:
		Type = sp.layerstack.get_selection_type( Layers[0] )

		Metadata.set(
			"SelectionType",
			sp.layerstack.SelectionType( Type )
		)

def OnEditionStart( Arg ) :
	Metadata = sp.project.Metadata( "LayerStackSelection" )
	IDs = Metadata.get( "Selection" )
	Nodes = []

	if IDs :
		for ID in IDs :
			Nodes.append( sp.layerstack.Node(ID) )

		sp.layerstack.set_selected_nodes( Nodes )

		if len(IDs) == 1 and (
			Nodes[0].get_type() == sp.layerstack.NodeType.PaintLayer \
		or  Nodes[0].get_type() == sp.layerstack.NodeType.FillLayer \
		or  Nodes[0].get_type() == sp.layerstack.NodeType.InstanceLayer \
		or  Nodes[0].get_type() == sp.layerstack.NodeType.GroupLayer )	:
			Type = Metadata.get( "SelectionType" )
			sp.layerstack.set_selection_type( Nodes[0], int(Type) )

	# Need to be done at the end because
	# of concurrency between events
	global PROJECT_READY
	PROJECT_READY = True

def OnEditionStop( Arg ) :
	global PROJECT_READY
	PROJECT_READY = False

def start_plugin():
	sp.event.DISPATCHER.connect( sp.event.ProjectEditionEntered, OnEditionStart )
	sp.event.DISPATCHER.connect( sp.event.ProjectEditionLeft, OnEditionStop )
	sp.event.DISPATCHER.connect( sp.event.LayerStacksModelDataChanged, OnStackChange )

def close_plugin():
	sp.event.DISPATCHER.disconnect( sp.event.ProjectEditionEntered, OnEditionStart )
	sp.event.DISPATCHER.disconnect( sp.event.ProjectEditionLeft, OnEditionStop )
	sp.event.DISPATCHER.disconnect( sp.event.LayerStacksModelDataChanged, OnStackChange )

if __name__ == "__main__":
	start_plugin()
```