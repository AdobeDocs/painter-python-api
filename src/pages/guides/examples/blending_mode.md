---
title: Layer blending mode editor - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

Layer blending mode editor
========================

This example shows how to gather in a dock the list of all the channels of the currently selected layer to be able to change their blending mode.

Note: to keep things simple, this example ignore effects.

---

To use this example:

> 1. Go to your Python plugin folder (see [this page](/guides/creating-python-plugin/) to know where)
> 2. Create a folder named **blending_mode**
> 3. Create a file named **__init__.py**
> 4. Copy the code below inside the file.

---

```python
import os
import substance_painter as sp

# Qt5 vs Qt6 check
IsQt5 = sp.application.version_info() < (10,1,0)

if IsQt5 :
	from PySide2 import QtGui
	from PySide2 import QtWidgets
else :
	from PySide6 import QtGui
	from PySide6 import QtWidgets

SCRIPT_FOLDER = os.path.dirname(os.path.realpath(__file__))

WIDGETS = []
WIDGET_NODE_NAME = None
WIDGET_NODE_TYPE = None
WIDGET_NODE_ID = None
WIDGET_BLEND_LAYOUT = None
VALID_TYPES = [
	sp.layerstack.NodeType.PaintLayer,
	sp.layerstack.NodeType.FillLayer
]
FRAME_STYLE = """
.QFrame
{
	border: 1px solid #252525;
	border-radius: 4px;
	background-color: #303030;
}
"""
BLEND_MODES = []

def ChangeBlendMode( Layer, ChannelType, Dropdown ) :
	# Retrieve blending mode
	Index = Dropdown.currentIndex()
	BlendMode = sp.layerstack.BlendingMode( Index )

	# Change blending mode
	Layer.set_blending_mode( BlendMode, ChannelType )

def BuildChannelUI( Layer, ChannelType, ChannelInfo ) :
	Parent = QtWidgets.QFrame()
	Parent.setFrameStyle( QtWidgets.QFrame.Panel )
	Parent.setFrameShadow( QtWidgets.QFrame.Raised )
	Parent.setStyleSheet( FRAME_STYLE )

	Layout = QtWidgets.QVBoxLayout()
	Parent.setLayout( Layout )

	Label = QtWidgets.QLabel( ChannelType.name )
	Layout.addWidget( Label )

	Dropdown = QtWidgets.QComboBox()
	Dropdown.addItems( BLEND_MODES )
	Layout.addWidget( Dropdown )

	# Retrieve layer current blending mode
	# and update dropdown to show it
	BlendModeName = Layer.get_blending_mode( ChannelType ).name
	BlendModeIndex = BLEND_MODES.index( BlendModeName )
	Dropdown.setCurrentIndex( BlendModeIndex )

	# Connect a function to be able to change the
	# blending mode from our own UI
	Dropdown.currentIndexChanged.connect(
		lambda: ChangeBlendMode( Layer, ChannelType, Dropdown )
	)

	WIDGET_BLEND_LAYOUT.addWidget(Parent)

def Update( Arg ) :
	global WIDGET_NODE_ID

	Stack = sp.textureset.get_active_stack()
	Layers = sp.layerstack.get_selected_nodes( Stack )

	if not len(Layers) == 1 :
		WIDGET_NODE_NAME.setText( "(Too many selected)" )
		WIDGET_NODE_TYPE.setText( "(none)" )
		WIDGET_BLEND_LAYOUT.setEnabled( False )
		ResetUI()
		return

	if not any( Layers[0].get_type() == Type for Type in VALID_TYPES ) :
		WIDGET_NODE_NAME.setText( "(Unsupported layer/effect)" )
		WIDGET_NODE_TYPE.setText( "(none)" )
		WIDGET_BLEND_LAYOUT.setEnabled( False )
		ResetUI()
		return

	WIDGET_NODE_NAME.setText( Layers[0].get_name() )
	WIDGET_NODE_TYPE.setText( "(" + str(Layers[0].get_type()) + ")" )
	WIDGET_BLEND_LAYOUT.setEnabled( True )

	ResetUI()

	Channels = Stack.all_channels()

	for ChannelType in Channels :
		BuildChannelUI( Layers[0], ChannelType, Channels[ChannelType] )

def ResetUI() :
	if WIDGET_BLEND_LAYOUT :
		while WIDGET_BLEND_LAYOUT.count():
			child = WIDGET_BLEND_LAYOUT.takeAt(0)
			if child.widget():
				child.widget().deleteLater()

def Separator() :
	Separator = QtWidgets.QFrame()
	Separator.setFrameShape( QtWidgets.QFrame.HLine )
	Separator.setFrameShadow( QtWidgets.QFrame.Raised )
	Separator.setStyleSheet( "QFrame { border-bottom: 1px solid #252525; }" )
	return Separator

def BuildUI() :
	global WIDGET_NODE_NAME
	global WIDGET_NODE_TYPE
	global WIDGET_BLEND_LAYOUT

	Parent = QtWidgets.QFrame()
	Parent.setWindowTitle("Blend Modes")
	Parent.setWindowIcon( QtGui.QIcon(SCRIPT_FOLDER + "/" + "icon.svg") )

	ParentLayout = QtWidgets.QVBoxLayout()
	Parent.setLayout( ParentLayout )

	Margin = 10
	ParentLayout.setContentsMargins( Margin, Margin, Margin, Margin )

	# Build top UI
	TitleLabel = QtWidgets.QLabel( "<b>INFO</b>" )
	NodeLabel = QtWidgets.QLabel( "(No layer selected)" )
	NodeType = QtWidgets.QLabel( "(none)" )

	ParentLayout.addWidget( TitleLabel )
	ParentLayout.addWidget( NodeLabel )
	ParentLayout.addWidget( NodeType )

	EmptyLabel = QtWidgets.QLabel( "" )
	ParentLayout.addWidget( EmptyLabel )

	ParentLayout.addWidget( Separator() )

	# Build scrollable layout for blend modes
	BlendLabel = QtWidgets.QLabel( "<b>BLEND MODES</b>" )
	ParentLayout.addWidget( BlendLabel )

	Widget = QtWidgets.QWidget()
	VerticalLayout = QtWidgets.QVBoxLayout( Widget )

	BlendLayout = QtWidgets.QVBoxLayout()
	VerticalLayout.addLayout( BlendLayout )
	VerticalLayout.addStretch()
	VerticalLayout.setContentsMargins( 0, 0, 8, 0 )

	ScrollArea = QtWidgets.QScrollArea()
	ScrollArea.setWidget( Widget )
	ScrollArea.setWidgetResizable( True )

	ParentLayout.addWidget( ScrollArea )

	# Finish
	WIDGET_NODE_NAME = NodeLabel
	WIDGET_NODE_TYPE = NodeType
	WIDGET_BLEND_LAYOUT = BlendLayout

	return Parent

def start_plugin():
	global BLEND_MODES

	# Add event for getting layer stack selection updates
	sp.event.DISPATCHER.connect( sp.event.LayerStacksModelDataChanged, Update )

	# Build dock UI
	Parent = BuildUI()
	sp.ui.add_dock_widget( Parent, sp.ui.UIMode.Edition )
	ResetUI()
	WIDGETS.append(Parent)

	# Some enums at not iteratable currently,
	# so we rely on the members attribute to build a list
	BLEND_MODES = [ Value for Value in sp.layerstack.BlendingMode.__members__ ]


def close_plugin():
	sp.event.DISPATCHER.disconnect( sp.event.LayerStacksModelDataChanged, Update )

	for Widget in WIDGETS :
		sp.ui.delete_ui_element( Widget )

	WIDGETS.clear()

if __name__ == "__main__":
	start_plugin()
```