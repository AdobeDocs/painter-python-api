---
title: stack - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






Stack class — Substance 3D Painter Python API 0.2.11 documentation
















Stack class
===========



> 
> 


------

> 
> *class* substance_painter.textureset.Stack(*stack_id: int | None = None*)
> A Substance 3D Painter paintable stack.
> 
> 
> A stack can contain a number of channels (BaseColor, Specular, Roughness,
> etc.), that correspond to the material. The stack belongs to a Texture Set,
> which may contain one or more stacks.
> 
> 
> Typically, only one stack is used and that stack is transparent to the user.
> Selecting the Texture Set will select its stack. However, a Texture Set can
> use layered materials with custom shaders, in which case a specific stack
> needs to be selected.
> 
> 
> If the Texture Set doesn’t use material layering, you can retrieve its stack
> as follows:
> 
> 
> 
> ```python
> import substance_painter.textureset
> 
> # Get the unnamed stack of "TextureSetName":
> paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName")
> 
> # Alternatively, get the stack from a Texture Set instance:
> my_texture_set = substance_painter.textureset.TextureSet.from_name("TextureSetName")
> paintable_stack = my_texture_set.get_stack()
> 
> ```
> 
> 
> If the Texture Set does use material layering, you can retrieve its stacks
> as follows:
> 
> 
> 
> ```python
> import substance_painter.textureset
> 
> # Get the stack called "Mask1" from the Texture Set "TextureSetName":
> paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName",
> 															   "Mask1")
> 
> # Alternatively, get the stack from a Texture Set instance:
> my_texture_set = substance_painter.textureset.TextureSet.from_name("TextureSetName")
> paintable_stack = my_texture_set.get_stack("Mask1")
> 
> # Show the name of the stack:
> print(paintable_stack.name())
> 
> ```
> 
> 
> It is possible to query, add, remove or edit the channels of a stack:
> 
> 
> 
> ```python
> import substance_painter.textureset
> 
> # Get the unnamed stack of "TextureSetName":
> paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName")
> 
> # List all the channels of the "TextureSetName" Texture Set:
> for k,v in paintable_stack.all_channels().items():
> 	print("{0}: {1}".format(k, str(v.format())))
> 
> # Add a scattering channel to the "TextureSetName" Texture Set:
> paintable_stack.add_channel(substance_painter.textureset.ChannelType.Scattering,
> 							substance_painter.textureset.ChannelFormat.L8)
> 
> # Query details of the added scattering channel:
> if paintable_stack.has_channel(substance_painter.textureset.ChannelType.Scattering):
> 	channel = paintable_stack.get_channel(
> 		substance_painter.textureset.ChannelType.Scattering)
> 	print("The Texture Set now has a scattering channel with {0} bits per pixel."
> 		.format(channel.bit_depth()))
> 
> # Change the scattering channel to 16 bits inside the "TextureSetName" Texture Set:
> paintable_stack.edit_channel(
> 	channel_type = substance_painter.textureset.ChannelType.Scattering,
> 	channel_format = substance_painter.textureset.ChannelFormat.L16)
> 
> # Remove the scattering channel from "TextureSetName":
> paintable_stack.remove_channel(substance_painter.textureset.ChannelType.Scattering)
> 
> ```
> 
> 
> 
> See also
> 
> 
> [`TextureSet`](textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
> [Texture Set documentation](https://www.adobe.com/go/painter-texture-set).
> 
> 
> 
> 
> 
> *static* from_name(*texture_set_name: str*, *stack_name: str = ''*)
> Get a stack from its name.
> 
> 
> 
> Parameters:
> * **texture_set_name** (*str*) – Texture Set name.
> * **stack_name** (*str*) – Stack name.
> Leave empty if the Texture Set does not use material layering.
> 
> 
> 
> 
> 
> Note
> 
> 
> The Texture Set and stack names are case sensitive.
> 
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> * **ValueError** – If `texture_set_name` is not string.
> * **ValueError** – If there is no Texture Set with the name `texture_set_name`.
> * **ValueError** – If there is no stack with the name `stack_name`.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`TextureSet.all_stacks()`](textureset.html#substance_painter.textureset.TextureSet.all_stacks "substance_painter.textureset.TextureSet.all_stacks"),
> [`TextureSet.get_stack()`](textureset.html#substance_painter.textureset.TextureSet.get_stack "substance_painter.textureset.TextureSet.get_stack").
> 
> 
> 
> 
> 
> 
> name() → str
> Get the stack name.
> A stack name is empty if the Texture Set it belongs to uses material layering.
> 
> 
> 
> Returns:
> The stack name.
> 
> 
> 
> Return type:
> str
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> * **ValueError** – If the stack is invalid.
> 
> 
> 
> 
> 
> 
> 
> material()
> Get the Texture Set this stack belongs to.
> 
> 
> 
> Returns:
> The Texture Set this stack belongs to.
> 
> 
> 
> Return type:
> [TextureSet](textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> * **ValueError** – If the stack is invalid.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`TextureSet`](textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
> [`all_texture_sets()`](index.html#substance_painter.textureset.all_texture_sets "substance_painter.textureset.all_texture_sets").
> 
> 
> 
> 
> 
> 
> all_channels() → Dict[[ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType"), [Channel](channel.html#substance_painter.textureset.Channel "substance_painter.textureset.Channel")]
> List all the channels of a stack.
> 
> 
> 
> Returns:
> Map of all the channels of the stack.
> 
> 
> 
> Return type:
> dict[[ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType"), [Channel](channel.html#substance_painter.textureset.Channel "substance_painter.textureset.Channel")]
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Stack.add_channel()`](#substance_painter.textureset.Stack.add_channel "substance_painter.textureset.Stack.add_channel"),
> [`Stack.remove_channel()`](#substance_painter.textureset.Stack.remove_channel "substance_painter.textureset.Stack.remove_channel").
> 
> 
> 
> 
> 
> 
> add_channel(*channel_type: [ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")*, *channel_format: [ChannelFormat](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")*, *label: str | None = None*) → [Channel](channel.html#substance_painter.textureset.Channel "substance_painter.textureset.Channel")
> Add a new channel to a stack.
> 
> 
> 
> Note
> 
> 
> add_channel is not available with material layering.
> 
> 
> 
> 
> Parameters:
> * **channel_type** ([*ChannelType*](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")) – The channel type.
> * **channel_format** ([*ChannelFormat*](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")) – The texture format of the new channel.
> * **label** (*str**,* *optional*) – The label of the channel in case of User channel as type.
> 
> 
> 
> Returns:
> The created channel.
> 
> 
> 
> Return type:
> [Channel](channel.html#substance_painter.textureset.Channel "substance_painter.textureset.Channel")
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * **ValueError** – If a channel of type `channel_type` already exists in this Texture Set.
> * **ValueError** – If a label was provided but `channel_type` is not a user type.
>  Standard channel types have fixed labels.
> * **ValueError** – If the stack is invalid.
> * **ValueError** – If the Texture Set uses material layering.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Stack.all_channels()`](#substance_painter.textureset.Stack.all_channels "substance_painter.textureset.Stack.all_channels"),
> [`Stack.remove_channel()`](#substance_painter.textureset.Stack.remove_channel "substance_painter.textureset.Stack.remove_channel"),
> [`Stack.edit_channel()`](#substance_painter.textureset.Stack.edit_channel "substance_painter.textureset.Stack.edit_channel").
> 
> 
> 
> 
> 
> 
> remove_channel(*channel_type: [ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")*) → None
> Remove a channel from a stack.
> 
> 
> 
> Note
> 
> 
> remove_channel is not available with material layering.
> 
> 
> 
> 
> Parameters:
> **channel_type** ([*ChannelType*](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")) – The channel type.
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * **ValueError** – If there is no channel of type `channel_type` in this Texture Set.
> * **ValueError** – If the stack is invalid.
> * **ValueError** – If the Texture Set uses material layering.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Stack.all_channels()`](#substance_painter.textureset.Stack.all_channels "substance_painter.textureset.Stack.all_channels"),
> [`Stack.add_channel()`](#substance_painter.textureset.Stack.add_channel "substance_painter.textureset.Stack.add_channel"),
> [`Stack.edit_channel()`](#substance_painter.textureset.Stack.edit_channel "substance_painter.textureset.Stack.edit_channel").
> 
> 
> 
> 
> 
> 
> edit_channel(*channel_type: [ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")*, *channel_format: [ChannelFormat](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")*, *label: str | None = None*) → None
> Change the texture format and label of a channel.
> 
> 
> 
> Parameters:
> * **channel_type** ([*ChannelType*](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")) – The channel type.
> * **channel_format** ([*ChannelFormat*](index.html#substance_painter.textureset.ChannelFormat "substance_painter.textureset.ChannelFormat")) – The new texture format of the channel.
> * **label** (*str**,* *optional*) – The label of the channel in case of User channel as type.
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * **ValueError** – If there is no stack labeled `stack_id` in this Texture Set.
> * **ValueError** – If there is no channel of type `channel_type` in this Texture Set.
> * **ValueError** – If a label was provided but `channel_type` is not a user type.
>  Standard channel types have fixed labels.
> * **ValueError** – If the stack is invalid.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Stack.add_channel()`](#substance_painter.textureset.Stack.add_channel "substance_painter.textureset.Stack.add_channel"),
> [`Stack.remove_channel()`](#substance_painter.textureset.Stack.remove_channel "substance_painter.textureset.Stack.remove_channel").
> 
> 
> 
> 
> 
> 
> has_channel(*channel_type: [ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")*) → bool
> Check if a channel exists in a stack.
> 
> 
> 
> Parameters:
> **channel_type** ([*ChannelType*](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")) – The channel type.
> 
> 
> 
> Returns:
> `True` if the stack has a channel of the given type, `False` otherwise.
> 
> 
> 
> Return type:
> bool
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * **ValueError** – If the stack is invalid.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Stack.add_channel()`](#substance_painter.textureset.Stack.add_channel "substance_painter.textureset.Stack.add_channel"),
> [`Stack.remove_channel()`](#substance_painter.textureset.Stack.remove_channel "substance_painter.textureset.Stack.remove_channel").
> 
> 
> 
> 
> 
> 
> get_channel(*channel_type: [ChannelType](index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")*) → [Channel](channel.html#substance_painter.textureset.Channel "substance_painter.textureset.Channel")
> Get an existing channel from its type.
> 
> 
> 
> Parameters:
> **channel_type** ([*Channel*](channel.html#substance_painter.textureset.Channel "substance_painter.textureset.Channel")) – The channel type.
> 
> 
> 
> Returns:
> The channel.
> 
> 
> 
> Return type:
> [Channel](channel.html#substance_painter.textureset.Channel "substance_painter.textureset.Channel")
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> * **ValueError** – If the channel doesn’t exists.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`Stack.has_channel()`](#substance_painter.textureset.Stack.has_channel "substance_painter.textureset.Stack.has_channel"),
> [`Stack.add_channel()`](#substance_painter.textureset.Stack.add_channel "substance_painter.textureset.Stack.add_channel"),
> [`Stack.remove_channel()`](#substance_painter.textureset.Stack.remove_channel "substance_painter.textureset.Stack.remove_channel").
> 
> 
> 
> 
> 
> 










