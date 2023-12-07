---
title: channel - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






Channel class — Substance 3D Painter Python API 0.2.11 documentation
















Channel class
=============



> 
> 


------

> 
> *class* substance_painter.textureset.Channel(*channel_id: int | None = None*)
> A Substance 3D Painter channel.
> 
> 
> A channel can be one of the predefined types (BaseColor, Specular, Roughness,
> etc.) or a user defined type (User0 to User7), corresponding to the material.
> The channel belongs to a stack. The stack can have one or more of them, but it
> can have only one channel of each [`ChannelType`](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType").
> 
> 
> Example
> 
> 
> 
> ```python
> import substance_painter.textureset
> 
> # Get the unnamed stack of "TextureSetName":
> paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName")
> 
> # Get the channel "BaseColor" of that stack:
> base_color_channel = paintable_stack.get_channel(
> 	substance_painter.textureset.ChannelType.BaseColor)
> 
> # Print the color format and bit depth of the base color channel:
> print("The channel format uses {0} {1}.".format(
> 	"RGB" if base_color_channel.is_color() else "L",
> 	base_color_channel.bit_depth()))
> 
> # Change the format and bit depth of the base color channel:
> base_color_channel.edit(
> 	channel_format = substance_painter.textureset.ChannelFormat.RGB16)
> 
> ```
> 
> 
> 
> 
> format() → [ChannelFormat](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")
> Get the channel format. The format indicates both if the channel is color
> or grayscale, its dynamic range, its bits per component, and if the storage
> is linear or sRGB.
> 
> 
> 
> Returns:
> This channel format.
> 
> 
> 
> Return type:
> [ChannelFormat](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")
> 
> 
> 
> 
> 
> 
> 
> label() → str
> Get the user label for User channels (User0 to User7).
> 
> 
> 
> Returns:
> This channel user label. This is the empty string for non User channels.
> 
> 
> 
> Return type:
> str
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Channel.type()`](#substance_painter.textureset.Channel.type "substance_painter.textureset.Channel.type"),
> [`ChannelType`](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType").
> 
> 
> 
> 
> 
> 
> is_color() → bool
> Check if the channel is in color or grayscale format.
> 
> 
> 
> Returns:
> `True` if the channel format is a color format.
> 
> 
> 
> Return type:
> bool
> 
> 
> 
> 
> 
> 
> 
> is_floating() → bool
> Check if the channel is in floating point or normalized fixed point format.
> 
> 
> 
> Returns:
> `True` if the channel format is a floating point format.
> 
> 
> 
> Return type:
> bool
> 
> 
> 
> 
> 
> 
> 
> bit_depth() → int
> Get the number of bits per component.
> 
> 
> 
> Returns:
> The channel bit depth per component.
> 
> 
> 
> Return type:
> int
> 
> 
> 
> 
> 
> 
> 
> type() → [ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")
> Get the channel type.
> 
> 
> 
> Returns:
> This channel type.
> 
> 
> 
> Return type:
> [ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Channel.label()`](#substance_painter.textureset.Channel.label "substance_painter.textureset.Channel.label").
> 
> 
> 
> 
> 
> 
> edit(*channel_format: [ChannelFormat](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")*, *label: str | None = None*) → None
> Change the channel format and label.
> 
> 
> 
> Parameters:
> * **channel_format** ([*ChannelFormat*](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")) – The new texture format of the channel.
> * **label** (*str**,* *optional*) – Label of the channel in case of User channel as type.
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * **ValueError** – If there is no stack labeled `stack_id` in this Texture Set.
> * **ValueError** – If there is no channel of type `channel_type` in this Texture Set.
> * **ValueError** – If a label was provided but `channel_type` is not a user type.
>  Standard channel types have fixed labels.
> * **ValueError** – If the channel is invalid.
> 
> 
> 
> 
> 
> 
> 










