---
title: changelog - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






Changelog — Substance 3D Painter Python API 0.2.11 documentation














Changelog
=========



0.2.12 (Substance 3D painter 9.1.1)
-----------------------------------


* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.get_uuid()`](substance_painter/project.html#substance_painter.project.get_uuid "substance_painter.project.get_uuid") to query the project UUID.




0.2.11 (Substance 3D painter 9.1.0)
-----------------------------------


* [`substance_painter.application`](substance_painter/application.html#module-substance_painter.application "substance_painter.application")
	+ Add ability to disable engine computations
	+ Add [`substance_painter.application.close()`](substance_painter/application.html#substance_painter.application.close "substance_painter.application.close") to close Substance 3D Painter.
* [`substance_painter.display`](substance_painter/display.html#module-substance_painter.display "substance_painter.display")
	+ Add [`substance_painter.display.Camera`](substance_painter/display.html#substance_painter.display.Camera "substance_painter.display.Camera") to manipulate camera settings.
* [`substance_painter.event`](substance_painter/event.html#module-substance_painter.event "substance_painter.event")
	+ Add a new event [`substance_painter.event.EngineComputationsStatusChanged`](substance_painter/event.html#substance_painter.event.EngineComputationsStatusChanged "substance_painter.event.EngineComputationsStatusChanged") to be notified when engine computations status changes.
	+ Add a new event [`substance_painter.event.CameraPropertiesChanged`](substance_painter/event.html#substance_painter.event.CameraPropertiesChanged "substance_painter.event.CameraPropertiesChanged") to be notified when the properties of a camera change.
* [`substance_painter.export`](substance_painter/export.html#module-substance_painter.export "substance_painter.export")
	+ Add ability to export the mesh of the current project.
	+ Add ability to get the default export path used for exporting textures.
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.BoundingBox`](substance_painter/project.html#substance_painter.project.BoundingBox "substance_painter.project.BoundingBox") and [`substance_painter.project.get_scene_bounding_box()`](substance_painter/project.html#substance_painter.project.get_scene_bounding_box "substance_painter.project.get_scene_bounding_box") to query dimensions of the scene.




0.2.10 (Substance 3D painter 9.0.0)
-----------------------------------


* [`substance_painter.export`](substance_painter/export.html#module-substance_painter.export "substance_painter.export")
	+ Fix textures exported in EXR with 32f bit depth were incorrectly saved in 16f.
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.UsdSettings`](substance_painter/project.html#substance_painter.project.UsdSettings "substance_painter.project.UsdSettings") in [`substance_painter.project.Settings`](substance_painter/project.html#substance_painter.project.Settings "substance_painter.project.Settings") to support USD parameters for project creation.
	+ Add [`substance_painter.project.UsdSettings`](substance_painter/project.html#substance_painter.project.UsdSettings "substance_painter.project.UsdSettings") in [`substance_painter.project.MeshReloadingSettings`](substance_painter/project.html#substance_painter.project.MeshReloadingSettings "substance_painter.project.MeshReloadingSettings") to support USD parameters for mesh reloading.




0.2.9 (Substance 3D Painter 8.3.1)
----------------------------------


* [`substance_painter.async_utils`](substance_painter/async_utils.html#module-substance_painter.async_utils "substance_painter.async_utils")
	+ New module to expose primitives used in async computations.
* [`substance_painter.event`](substance_painter/event.html#module-substance_painter.event "substance_painter.event")
	+ Add a new event [`substance_painter.event.BakingProcessProgress`](substance_painter/event.html#substance_painter.event.BakingProcessProgress "substance_painter.event.BakingProcessProgress") to be notified about baking process progress.
	+ Add a new event [`substance_painter.event.BakingProcessAboutToStart`](substance_painter/event.html#substance_painter.event.BakingProcessAboutToStart "substance_painter.event.BakingProcessAboutToStart") to be notified of the start of a baking process.
	+ Allow to configure throttling period for [`substance_painter.event.TextureStateEvent`](substance_painter/event.html#substance_painter.event.TextureStateEvent "substance_painter.event.TextureStateEvent").
* [`substance_painter.baking`](substance_painter/baking.html#module-substance_painter.baking "substance_painter.baking")
	+ Add [`substance_painter.baking.bake_selected_textures_async()`](substance_painter/baking.html#substance_painter.baking.bake_selected_textures_async "substance_painter.baking.bake_selected_textures_async") to bake all selected texture set.
	+ Fix [`substance_painter.baking.bake_async()`](substance_painter/baking.html#substance_painter.baking.bake_async "substance_painter.baking.bake_async") to take UV Tiles selection into account.
	+ Now async functions return a [`substance_painter.async_utils.StopSource`](substance_painter/async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource") to allow for cancellation.




0.2.8 (Substance 3D Painter 8.3.0)
----------------------------------


* [`substance_painter.application`](substance_painter/application.html#module-substance_painter.application "substance_painter.application")
	+ New module to expose functionnalities on the application level.
	+ Add [`substance_painter.application.version_info()`](substance_painter/application.html#substance_painter.application.version_info "substance_painter.application.version_info") to query Substance 3D Painter version as a tuple.
	+ Add [`substance_painter.application.version()`](substance_painter/application.html#substance_painter.application.version "substance_painter.application.version") to query Substance 3D Painter version as a string.
* [`substance_painter.event`](substance_painter/event.html#module-substance_painter.event "substance_painter.event")
	+ Add a new event [`substance_painter.event.BakingProcessEnded`](substance_painter/event.html#substance_painter.event.BakingProcessEnded "substance_painter.event.BakingProcessEnded") to be notified of the end of the baking process.
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.last_saved_substance_painter_version()`](substance_painter/project.html#substance_painter.project.last_saved_substance_painter_version "substance_painter.project.last_saved_substance_painter_version") to query wich Substance 3D
	Painter version was used to last save the project.
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
	+ Add [`substance_painter.textureset.TextureSet.uv_tile()`](substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.uv_tile "substance_painter.textureset.TextureSet.uv_tile") to get a specific UV Tile.
* [`substance_painter.ui`](substance_painter/ui.html#module-substance_painter.ui "substance_painter.ui")
	+ Add Baking to [`substance_painter.ui.UIMode`](substance_painter/ui.html#substance_painter.ui.UIMode "substance_painter.ui.UIMode").
	+ Add [`substance_painter.ui.get_current_mode()`](substance_painter/ui.html#substance_painter.ui.get_current_mode "substance_painter.ui.get_current_mode") to query the current UI mode.
	+ Add [`substance_painter.ui.switch_to_mode()`](substance_painter/ui.html#substance_painter.ui.switch_to_mode "substance_painter.ui.switch_to_mode") to switch to some UI mode.


This version introduces the modules:


* [`substance_painter.baking`](substance_painter/baking.html#module-substance_painter.baking "substance_painter.baking")
* [`substance_painter.properties`](substance_painter/properties.html#module-substance_painter.properties "substance_painter.properties")




0.2.7 (Substance 3D Painter 8.2.0)
----------------------------------


* [`substance_painter.resource`](substance_painter/resource.html#module-substance_painter.resource "substance_painter.resource")
	+ Add new values to [`substance_painter.resource.Type`](substance_painter/resource.html#substance_painter.resource.Type "substance_painter.resource.Type") enumeration.
	+ Add [`substance_painter.resource.Resource.children()`](substance_painter/resource.html#substance_painter.resource.Resource.children "substance_painter.resource.Resource.children") to query child resources of a resource.
	+ Add [`substance_painter.resource.Resource.parent()`](substance_painter/resource.html#substance_painter.resource.Resource.parent "substance_painter.resource.Resource.parent") to query parent resource of a resource.
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
	+ Add [`substance_painter.textureset.MeshMapUsage`](substance_painter/textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage") to enumerate possible Mesh map usages.
	+ Add [`substance_painter.textureset.TextureSet.get_mesh_map_resource()`](substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.get_mesh_map_resource "substance_painter.textureset.TextureSet.get_mesh_map_resource") to query the resource set as some Mesh map usage.
	+ Add [`substance_painter.textureset.TextureSet.set_mesh_map_resource()`](substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.set_mesh_map_resource "substance_painter.textureset.TextureSet.set_mesh_map_resource") to replace the resource for some Mesh map usage.
* [`substance_painter.ui`](substance_painter/ui.html#module-substance_painter.ui "substance_painter.ui")
	+ Add [`substance_painter.ui.get_layout()`](substance_painter/ui.html#substance_painter.ui.get_layout "substance_painter.ui.get_layout") to save UI layout state.
	+ Add [`substance_painter.ui.get_layout_mode()`](substance_painter/ui.html#substance_painter.ui.get_layout_mode "substance_painter.ui.get_layout_mode") to query the UI mode of a saved state.
	+ Add [`substance_painter.ui.set_layout()`](substance_painter/ui.html#substance_painter.ui.set_layout "substance_painter.ui.set_layout") to restore a saved UI state.
	+ Add [`substance_painter.ui.reset_layout()`](substance_painter/ui.html#substance_painter.ui.reset_layout "substance_painter.ui.reset_layout") to reset UI state to default.
* [`substance_painter.event`](substance_painter/event.html#module-substance_painter.event "substance_painter.event")
	+ Add a new event [`substance_painter.event.TextureStateEvent`](substance_painter/event.html#substance_painter.event.TextureStateEvent "substance_painter.event.TextureStateEvent") to be notified of document textures edition.




0.2.6 (Substance 3D Painter 8.1.2)
----------------------------------


* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ [`substance_painter.project.create()`](substance_painter/project.html#substance_painter.project.create "substance_painter.project.create") and [`substance_painter.project.Settings`](substance_painter/project.html#substance_painter.project.Settings "substance_painter.project.Settings")
	now supports using a custom unit scale for mesh size.
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
	+ Add [`substance_painter.textureset.TextureSet.all_mesh_names()`](substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.all_mesh_names "substance_painter.textureset.TextureSet.all_mesh_names") to query the list of mesh names used in a Texture Set.
	+ Add [`substance_painter.textureset.UVTile.all_mesh_names()`](substance_painter/textureset/uvtile.html#substance_painter.textureset.UVTile.all_mesh_names "substance_painter.textureset.UVTile.all_mesh_names") to query the list of mesh names used in a UV Tile.
* [`substance_painter.resource`](substance_painter/resource.html#module-substance_painter.resource "substance_painter.resource")
	+ Add [`substance_painter.resource.Usage`](substance_painter/resource.html#substance_painter.resource.Usage "substance_painter.resource.Usage") enumeration to describe resource usages.
	+ Add [`substance_painter.resource.Type`](substance_painter/resource.html#substance_painter.resource.Type "substance_painter.resource.Type") enumeration to describe resource types.
	+ Add [`substance_painter.resource.Resource.category()`](substance_painter/resource.html#substance_painter.resource.Resource.category "substance_painter.resource.Resource.category") to query the category of a resource.
	+ Add [`substance_painter.resource.Resource.usages()`](substance_painter/resource.html#substance_painter.resource.Resource.usages "substance_painter.resource.Resource.usages") to query the usages of a resource.
	+ Add [`substance_painter.resource.Resource.gui_name()`](substance_painter/resource.html#substance_painter.resource.Resource.gui_name "substance_painter.resource.Resource.gui_name") to query the name of a resource.
	+ Add [`substance_painter.resource.Resource.type()`](substance_painter/resource.html#substance_painter.resource.Resource.type "substance_painter.resource.Resource.type") to query the type of a resource.
	+ Add [`substance_painter.resource.Resource.tags()`](substance_painter/resource.html#substance_painter.resource.Resource.tags "substance_painter.resource.Resource.tags") to query the tags of a resource.
	+ Add [`substance_painter.resource.Resource.internal_properties()`](substance_painter/resource.html#substance_painter.resource.Resource.internal_properties "substance_painter.resource.Resource.internal_properties") to query a dictionnary of a resource internal properties.




0.2.5 (Substance 3D Painter 8.1.0)
----------------------------------


This version upgrades to Python 3.9.9.


* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ [`substance_painter.project.create()`](substance_painter/project.html#substance_painter.project.create "substance_painter.project.create") supports PAINTER_ACE_CONFIG
	environment variable, to setup the project color management mode.
	+ [`substance_painter.project.create()`](substance_painter/project.html#substance_painter.project.create "substance_painter.project.create") now raise an error if OCIO
	or PAINTER_ACE_CONFIG environment variable is set to an invalid
	configuration.




0.2.4 (Substance 3D Painter 7.4.3)
----------------------------------


This version exposes the tone mapping operator to the Python API, and adds
a hook to execute code when Substance 3D Painter is not busy.


* [`substance_painter.display`](substance_painter/display.html#module-substance_painter.display "substance_painter.display")
	+ Add [`substance_painter.display.get_tone_mapping()`](substance_painter/display.html#substance_painter.display.get_tone_mapping "substance_painter.display.get_tone_mapping") to query the
	project tone mapping.
	+ Add [`substance_painter.display.set_tone_mapping()`](substance_painter/display.html#substance_painter.display.set_tone_mapping "substance_painter.display.set_tone_mapping") to set the
	project tone mapping.
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.execute_when_not_busy()`](substance_painter/project.html#substance_painter.project.execute_when_not_busy "substance_painter.project.execute_when_not_busy") to execute
	code when Substance 3D Painter is no longer busy.




0.2.3 (Substance 3D Painter 7.4.0)
----------------------------------


This version makes it possible to work with JavaScript from the Python API.
It also allows creating projects with OCIO color management capabilities.


* [`substance_painter.js`](substance_painter/js.html#module-substance_painter.js "substance_painter.js")
	+ Add [`substance_painter.js.evaluate()`](substance_painter/js.html#substance_painter.js.evaluate "substance_painter.js.evaluate") to evaluate some JavaScript code.
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ [`substance_painter.project.create()`](substance_painter/project.html#substance_painter.project.create "substance_painter.project.create") supports OCIO environment variable,
	to setup the project color management mode.




0.2.2 (Substance 3D Painter 7.3.0)
----------------------------------


This version adds functions to help with scripted project loading, project
mesh reloading and UV Tiles manipulation. It also improves error handling
in several modules.


* [`substance_painter.display`](substance_painter/display.html#module-substance_painter.display "substance_painter.display")
	+ [`substance_painter.display.set_color_lut_resource()`](substance_painter/display.html#substance_painter.display.set_color_lut_resource "substance_painter.display.set_color_lut_resource") and
	[`substance_painter.display.set_environment_resource()`](substance_painter/display.html#substance_painter.display.set_environment_resource "substance_painter.display.set_environment_resource") throw a
	TypeError instead of a ValueError when an argument has a type different
	from expected.
* [`substance_painter.event`](substance_painter/event.html#module-substance_painter.event "substance_painter.event")
	+ Add [`substance_painter.event.Dispatcher.connect_strong()`](substance_painter/event.html#substance_painter.event.Dispatcher.connect_strong "substance_painter.event.Dispatcher.connect_strong") to connect
	strong reference callbacks to the event dispatcher.
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.is_busy()`](substance_painter/project.html#substance_painter.project.is_busy "substance_painter.project.is_busy") to query whether Substance
	3D Painter is busy.
	+ Project saving functions are disabled when Substance 3D Painter is
	busy.
	+ Add [`substance_painter.project.last_imported_mesh_path()`](substance_painter/project.html#substance_painter.project.last_imported_mesh_path "substance_painter.project.last_imported_mesh_path") to query the
	path to the last imported mesh.
	+ Add [`substance_painter.project.reload_mesh()`](substance_painter/project.html#substance_painter.project.reload_mesh "substance_painter.project.reload_mesh") to load a new mesh in the
	current opened project.
	+ [`substance_painter.project.create()`](substance_painter/project.html#substance_painter.project.create "substance_painter.project.create") throws a TypeError instead
	of a ValueError when its settings argument has a type different from
	expected.
* [`substance_painter.resource`](substance_painter/resource.html#module-substance_painter.resource "substance_painter.resource")
	+ Add [`substance_painter.resource.show_resources_in_ui()`](substance_painter/resource.html#substance_painter.resource.show_resources_in_ui "substance_painter.resource.show_resources_in_ui") to highlight a
	list of resources in the aplication UI.
	+ [`substance_painter.resource.update_layer_stack_resource()`](substance_painter/resource.html#substance_painter.resource.update_layer_stack_resource "substance_painter.resource.update_layer_stack_resource") throws
	a TypeError when an argument has a type different from expected.
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
	+ Add [`substance_painter.textureset.UVTile`](substance_painter/textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile") to interact with UV Tiles.
	Add ability to manipulate UV Tiles resolutions.
	+ [`substance_painter.textureset.TextureSet.from_name()`](substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.from_name "substance_painter.textureset.TextureSet.from_name") throws a
	TypeError instead of a ValueError when its argument has a type different
	from expected.




0.2.1 (Substance 3D Painter 7.2.1)
----------------------------------


This version adds functions to list and update resources used by the layer
stack.


* [`substance_painter.resource`](substance_painter/resource.html#module-substance_painter.resource "substance_painter.resource")
	+ Add [`substance_painter.resource.list_layer_stack_resources()`](substance_painter/resource.html#substance_painter.resource.list_layer_stack_resources "substance_painter.resource.list_layer_stack_resources") to
	list resources used by the layer stack and mesh maps.
	+ Add [`substance_painter.resource.update_layer_stack_resource()`](substance_painter/resource.html#substance_painter.resource.update_layer_stack_resource "substance_painter.resource.update_layer_stack_resource") to
	update resources used by the layer stack and mesh maps.




0.2.0 (Substance 3D Painter 7.2.0)
----------------------------------


* [`substance_painter.resource`](substance_painter/resource.html#module-substance_painter.resource "substance_painter.resource")
	+ Add [`substance_painter.resource.Resource.show_in_ui()`](substance_painter/resource.html#substance_painter.resource.Resource.show_in_ui "substance_painter.resource.Resource.show_in_ui") to highlight
	a resource in the UI.
	+ Modify [`substance_painter.resource.Shelves.user_shelf()`](substance_painter/resource.html#substance_painter.resource.Shelves.user_shelf "substance_painter.resource.Shelves.user_shelf") to take
	user settings into account.
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
	+ Modify [`substance_painter.textureset.ChannelType`](substance_painter/textureset/index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType") to include
	the new available texture channels.
* [`substance_painter.ui`](substance_painter/ui.html#module-substance_painter.ui "substance_painter.ui")
	+ Add [`substance_painter.ui.add_plugins_toolbar_widget()`](substance_painter/ui.html#substance_painter.ui.add_plugins_toolbar_widget "substance_painter.ui.add_plugins_toolbar_widget") to add
	a widget to the plugins toolbar.




0.1.0 (Substance Painter 7.1.0)
-------------------------------


This version adds several features to manage resources, shelves and UV Tiles.


* [`substance_painter.event`](substance_painter/event.html#module-substance_painter.event "substance_painter.event")
	+ Add [`substance_painter.event.ProjectEditionEntered`](substance_painter/event.html#substance_painter.event.ProjectEditionEntered "substance_painter.event.ProjectEditionEntered") event.
	+ Add [`substance_painter.event.ProjectEditionLeft`](substance_painter/event.html#substance_painter.event.ProjectEditionLeft "substance_painter.event.ProjectEditionLeft") event.
	+ Add [`substance_painter.event.ShelfCrawlingStarted`](substance_painter/event.html#substance_painter.event.ShelfCrawlingStarted "substance_painter.event.ShelfCrawlingStarted") event.
	+ Add [`substance_painter.event.ShelfCrawlingEnded`](substance_painter/event.html#substance_painter.event.ShelfCrawlingEnded "substance_painter.event.ShelfCrawlingEnded") event.
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.is_in_edition_state()`](substance_painter/project.html#substance_painter.project.is_in_edition_state "substance_painter.project.is_in_edition_state").
* [`substance_painter.resource`](substance_painter/resource.html#module-substance_painter.resource "substance_painter.resource")
	+ Add [`substance_painter.resource.Resource`](substance_painter/resource.html#substance_painter.resource.Resource "substance_painter.resource.Resource") to manipulate substance
	painter resources.
	+ Add [`substance_painter.resource.search()`](substance_painter/resource.html#substance_painter.resource.search "substance_painter.resource.search") to search for available
	resources.
	+ Add [`substance_painter.resource.Shelf`](substance_painter/resource.html#substance_painter.resource.Shelf "substance_painter.resource.Shelf").
	+ Add [`substance_painter.resource.Shelves`](substance_painter/resource.html#substance_painter.resource.Shelves "substance_painter.resource.Shelves") for shelves manipulation
	facilities.
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
	+ Add [`substance_painter.textureset.TextureSet.all_uv_tiles()`](substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.all_uv_tiles "substance_painter.textureset.TextureSet.all_uv_tiles").
	+ Add [`substance_painter.textureset.TextureSet.has_uv_tiles()`](substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.has_uv_tiles "substance_painter.textureset.TextureSet.has_uv_tiles").
	+ Add [`substance_painter.textureset.UVTile`](substance_painter/textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile").




0.0.3 (Substance Painter 6.2.2)
-------------------------------


* [`substance_painter.export`](substance_painter/export.html#module-substance_painter.export "substance_painter.export")
	+ Document the use of existing export presets.
	+ Add a module overview example.
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
	+ Add [`substance_painter.textureset.Channel.type()`](substance_painter/textureset/channel.html#substance_painter.textureset.Channel.type "substance_painter.textureset.Channel.type").
	+ Add [`substance_painter.textureset.Stack.all_channels()`](substance_painter/textureset/stack.html#substance_painter.textureset.Stack.all_channels "substance_painter.textureset.Stack.all_channels").




0.0.2 (Substance Painter 6.2.0)
-------------------------------


This version adapts the module [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project") to the new
UV Tile workflow.


* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
	+ Add [`substance_painter.project.ProjectWorkflow`](substance_painter/project.html#substance_painter.project.ProjectWorkflow "substance_painter.project.ProjectWorkflow").
	+ Change the constructor of [`substance_painter.project.Settings`](substance_painter/project.html#substance_painter.project.Settings "substance_painter.project.Settings").




0.0.1 (Substance Painter 6.1.0)
-------------------------------


Initial version of the Substance Painter Python API.


It uses Python 3.7.6 and introduces the modules:


* [`substance_painter`](substance_painter/index.html#module-substance_painter "substance_painter")
* [`substance_painter.display`](substance_painter/display.html#module-substance_painter.display "substance_painter.display")
* [`substance_painter.event`](substance_painter/event.html#module-substance_painter.event "substance_painter.event")
* [`substance_painter.exception`](substance_painter/exception.html#module-substance_painter.exception "substance_painter.exception")
* [`substance_painter.export`](substance_painter/export.html#module-substance_painter.export "substance_painter.export")
* [`substance_painter.logging`](substance_painter/logging.html#module-substance_painter.logging "substance_painter.logging")
* [`substance_painter.project`](substance_painter/project.html#module-substance_painter.project "substance_painter.project")
* [`substance_painter.resource`](substance_painter/resource.html#module-substance_painter.resource "substance_painter.resource")
* [`substance_painter.textureset`](substance_painter/textureset/index.html#module-substance_painter.textureset "substance_painter.textureset")
* [`substance_painter.ui`](substance_painter/ui.html#module-substance_painter.ui "substance_painter.ui")
* [`substance_painter_plugins`](plugins/substance_painter_plugins.html#module-substance_painter_plugins "substance_painter_plugins")











