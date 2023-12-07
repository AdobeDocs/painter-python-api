---
title: event - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






event module — Substance 3D Painter Python API 0.2.11 documentation
















event module
============


The `event` module defines application events and allows to subscribe to
notifications.





------


*class* substance_painter.event.Event
Base event class.




Event dispatcher
----------------




substance_painter.event.DISPATCHER *= <substance_painter.event.Dispatcher object>*
The event dispatcher instance that will be used by the application.






------


*class* substance_painter.event.Dispatcher
The Event Dispatcher.




connect(*event_cls: Type[[Event](#substance_painter.event.Event "substance_painter.event.Event")]*, *callback: Callable[[[Event](#substance_painter.event.Event "substance_painter.event.Event")], Any]*) → None
Connect a callback to handle the given event type.


The callback is stored as a weak reference, it is automatically disconnected
once the callback gets garbage collected.



Parameters:
* **event_cls** ([*Type*](resource.html#substance_painter.resource.Type "substance_painter.resource.Type")*[*[*Event*](#substance_painter.event.Event "substance_painter.event.Event")*]*) – An event class.
* **callback** (*Callable**[**[*[*Event*](#substance_painter.event.Event "substance_painter.event.Event")*]**,* *Any**]*) – A method or a bound method that will be called when
an instance of the given event class is triggered.







connect_strong(*event_cls: Type[[Event](#substance_painter.event.Event "substance_painter.event.Event")]*, *callback: Callable[[[Event](#substance_painter.event.Event "substance_painter.event.Event")], Any]*) → None
Connect a callback to handle the given event type.


The callback is stored as a strong reference, it is never automatically disconnected.



Parameters:
* **event_cls** ([*Type*](resource.html#substance_painter.resource.Type "substance_painter.resource.Type")*[*[*Event*](#substance_painter.event.Event "substance_painter.event.Event")*]*) – An event class.
* **callback** (*Callable**[**[*[*Event*](#substance_painter.event.Event "substance_painter.event.Event")*]**,* *Any**]*) – A method or a bound method that will be called when
an instance of the given event class is triggered.







disconnect(*event_cls: Type[[Event](#substance_painter.event.Event "substance_painter.event.Event")]*, *callback: Callable[[[Event](#substance_painter.event.Event "substance_painter.event.Event")], Any]*) → None
Disconnect a previously connected callback.


This method can be called to explicitly disconnect a callback.



Parameters:
* **event_cls** ([*Type*](resource.html#substance_painter.resource.Type "substance_painter.resource.Type")*[*[*Event*](#substance_painter.event.Event "substance_painter.event.Event")*]*) – An event class.
* **callback** (*Callable**[**[*[*Event*](#substance_painter.event.Event "substance_painter.event.Event")*]**,* *Any**]*) – A method or a bound method that has been connected
to the given event class.








Export events
-------------





------


*class* substance_painter.event.ExportTexturesAboutToStart(*textures: Dict[Tuple[str, str], List[str]]*)
Event triggered just before a textures export.




textures*: Dict[Tuple[str, str], List[str]]*
List of texture files
to be written to disk, grouped by stack (Texture Set name, stack name).



Type:
Dict[Tuple[str, str], List[str]]









------


*class* substance_painter.event.ExportTexturesEnded(*status: [ExportStatus](export.html#substance_painter.export.ExportStatus "substance_painter.export.ExportStatus")*, *message: str*, *textures: Dict[Tuple[str, str], List[str]]*)
Event triggered after textures export is finished.




message*: str*
Human readable status message.



Type:
str







status*: [ExportStatus](export.html#substance_painter.export.ExportStatus "substance_painter.export.ExportStatus")*
Status code.



Type:
[ExportStatus](export.html#substance_painter.export.ExportStatus "substance_painter.export.ExportStatus")







textures*: Dict[Tuple[str, str], List[str]]*
List of texture files
written to disk, grouped by stack (Texture Set name, stack name).



Type:
Dict[Tuple[str, str], List[str]]








Project events
--------------



Note


Project loading is done asynchronously. When the event `ProjectOpened` or
`ProjectCreated` is triggered, the project may still be loading. The event
`ProjectEditionEntered` is triggered when the project is ready to work with.






------


*class* substance_painter.event.ProjectOpened
Event triggered when an existing project has been opened.






------


*class* substance_painter.event.ProjectCreated
Event triggered when a new project has been created.






------


*class* substance_painter.event.ProjectAboutToClose
Event triggered just before closing the current project.






------


*class* substance_painter.event.ProjectAboutToSave(*file_path: str*)
Event triggered just before saving the current project.




file_path*: str*
The destination file.



Type:
str









------


*class* substance_painter.event.ProjectSaved
Event triggered once the current project is saved.






------


*class* substance_painter.event.ProjectEditionEntered
Event triggered when the project is fully loaded and ready to work with.


When edition is entered, it is for example possible to query/edit the project
properties, to bake textures or do project export.






------


*class* substance_painter.event.ProjectEditionLeft
Event triggered when the current project can non longer be edited.






------


*class* substance_painter.event.BusyStatusChanged(*busy: bool*)
Event triggered when Substance 3D Painter busy state changed.



See also


[`substance_painter.project.execute_when_not_busy()`](project.html#substance_painter.project.execute_when_not_busy "substance_painter.project.execute_when_not_busy"),
[`substance_painter.project.is_busy()`](project.html#substance_painter.project.is_busy "substance_painter.project.is_busy").





busy*: bool*
Whether Substance 3D Painter is busy now.



Type:
bool









------


*class* substance_painter.event.TextureStateEvent(*action: [TextureStateEventAction](#substance_painter.event.TextureStateEventAction "substance_painter.event.TextureStateEventAction")*, *stack_id: int*, *tile_indices: Tuple[int, int]*, *channel_type: [ChannelType](textureset/index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")*, *cache_key: int*)
Event triggered when a document texture is added, removed or updated.




action*: [TextureStateEventAction](#substance_painter.event.TextureStateEventAction "substance_painter.event.TextureStateEventAction")*
Performed action (add, remove, update).



Type:
[TextureStateEventAction](#substance_painter.event.TextureStateEventAction "substance_painter.event.TextureStateEventAction")







cache_key*: int*
The texture current cache key. Those cache keys are persistent across sessions.



Type:
int







*static* cache_key_invalidation_throttling_period() → timedelta
Get the minimum duration between two texture update events (for a given texture).



Returns:
The minimum duration between two update events.



Return type:
datetime.timedelta







channel_type*: [ChannelType](textureset/index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")*
The document channel type.



Type:
[substance_painter.textureset.ChannelType](textureset/index.html#substance_painter.textureset.ChannelType "substance_painter.textureset.ChannelType")







*static* set_cache_key_invalidation_throttling_period(*period: timedelta*) → None
Set the minimum duration between two texture update events (for a given texture).


Warning: this setting is global and every work made in a callback associated to this event
may greatly hurt the painting experience.



Parameters:
**period** (*datetime.timedelta*) – The minimum duration between two update events, can’t
be lower than 500ms.



Raises:
**ValueError** – If period is below 500ms.







stack_id*: int*
The stack the texture bellongs to, can be used to create a
[`substance_painter.textureset.Stack`](textureset/stack.html#substance_painter.textureset.Stack "substance_painter.textureset.Stack") instance.



Type:
int







tile_indices*: Tuple[int, int]*
The uv tile indices.



Type:
Tuple[int, int]









------


*class* substance_painter.event.TextureStateEventAction(*value*)
The TextureStateEvent possible actions.


Members:


`ADD`, `UPDATE`, `REMOVE`





Shelf events
------------





------


*class* substance_painter.event.ShelfCrawlingStarted(*shelf_name: str*)
Event triggered when a shelf starts reading the file system to discover
new resources.



See also


`Shelf.is_crawling()`.





shelf_name*: str*
Name of the shelf discovering resources.



Type:
str









------


*class* substance_painter.event.ShelfCrawlingEnded(*shelf_name: str*)
Event triggered when a shelf has finished discovering new resources and
loading their thumbnails.



See also


`Shelf.is_crawling()`.





shelf_name*: str*
Name of the shelf that has finished discovering resources.



Type:
str








Baking events
-------------





------


*class* substance_painter.event.BakingProcessAboutToStart(*stop_source: [StopSource](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")*)
Event triggered when a baking is about to start.



See also


[`substance_painter.baking.bake_async()`](baking.html#substance_painter.baking.bake_async "substance_painter.baking.bake_async")
[`substance_painter.baking.bake_selected_textures_async()`](baking.html#substance_painter.baking.bake_selected_textures_async "substance_painter.baking.bake_selected_textures_async")





stop_source*: [StopSource](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")*
The baking stop source, can be compared with the StopSource
returned from the baking launch methods to identify the baking process.



Type:
[StopSource](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")









------


*class* substance_painter.event.BakingProcessProgress(*progress: float*)
Event triggered when baking process progress changes.



See also


[`substance_painter.baking.bake_async()`](baking.html#substance_painter.baking.bake_async "substance_painter.baking.bake_async")
[`substance_painter.baking.bake_selected_textures_async()`](baking.html#substance_painter.baking.bake_selected_textures_async "substance_painter.baking.bake_selected_textures_async")





progress*: float*
The baking progress, between [0.0, 1.0].







------


*class* substance_painter.event.BakingProcessEnded(*status: [BakingStatus](baking.html#substance_painter.baking.BakingStatus "substance_painter.baking.BakingStatus")*)
Event triggered after baking is finished.



See also


[`substance_painter.baking.bake_async()`](baking.html#substance_painter.baking.bake_async "substance_painter.baking.bake_async")
[`substance_painter.baking.bake_selected_textures_async()`](baking.html#substance_painter.baking.bake_selected_textures_async "substance_painter.baking.bake_selected_textures_async")





status*: [BakingStatus](baking.html#substance_painter.baking.BakingStatus "substance_painter.baking.BakingStatus")*
Status of the baking process



Type:
[BakingStatus](baking.html#substance_painter.baking.BakingStatus "substance_painter.baking.BakingStatus")








Layer stack events
------------------





------


*class* substance_painter.event.LayerStacksModelDataChanged
Event triggered whenever the status of the Layer Stacks changes.



See also


`substance_painter.layerstack`






Application wide events
-----------------------





------


*class* substance_painter.event.EngineComputationsStatusChanged(*engine_computations_enabled: bool*)
Event triggered whenever the status of the engine computations changes.



See also


[`substance_painter.application.engine_computations_status()`](application.html#substance_painter.application.engine_computations_status "substance_painter.application.engine_computations_status")






Display events
--------------





------


*class* substance_painter.event.CameraPropertiesChanged(*camera_id: int*)
Event triggered when the camera properties change.



See also


[`substance_painter.display.Camera`](display.html#substance_painter.display.Camera "substance_painter.display.Camera")













