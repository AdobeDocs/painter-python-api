"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6765],{48801:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return u}});var a=n(87462),r=n(63366),s=(n(15007),n(64983)),m=n(91515),p=["components"],l={},i={_frontmatter:l},d=m.Z;function u(e){var t=e.components,n=(0,r.Z)(e,p);return(0,s.mdx)(d,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,"event module — Substance 3D Painter Python API 0.2.11 documentation"),(0,s.mdx)("h1",{id:"event-module"},"event module"),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"event")," module defines application events and allows to subscribe to\nnotifications."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.Event\nBase event class."),(0,s.mdx)("h2",{id:"event-dispatcher"},"Event dispatcher"),(0,s.mdx)("p",null,"substance_painter.event.DISPATCHER ",(0,s.mdx)("em",{parentName:"p"},"= <substance_painter.event.Dispatcher object>"),"\nThe event dispatcher instance that will be used by the application."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.Dispatcher\nThe Event Dispatcher."),(0,s.mdx)("p",null,"connect(",(0,s.mdx)("em",{parentName:"p"},"event_cls: Type[",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},"Event"),"]"),", ",(0,s.mdx)("em",{parentName:"p"},"callback: Callable[[",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},"Event"),"], Any]"),") → None\nConnect a callback to handle the given event type."),(0,s.mdx)("p",null,"The callback is stored as a weak reference, it is automatically disconnected\nonce the callback gets garbage collected."),(0,s.mdx)("p",null,"Parameters:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"event_cls")," (",(0,s.mdx)("a",{parentName:"li",href:"resource.html#substance_painter.resource.Type",title:"substance_painter.resource.Type"},(0,s.mdx)("em",{parentName:"a"},"Type")),(0,s.mdx)("em",{parentName:"li"},"["),(0,s.mdx)("a",{parentName:"li",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},(0,s.mdx)("em",{parentName:"a"},"Event")),(0,s.mdx)("em",{parentName:"li"},"]"),") – An event class."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"callback")," (",(0,s.mdx)("em",{parentName:"li"},"Callable",(0,s.mdx)("strong",{parentName:"em"},"["),"["),(0,s.mdx)("a",{parentName:"li",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},(0,s.mdx)("em",{parentName:"a"},"Event")),(0,s.mdx)("em",{parentName:"li"},"]**,")," ",(0,s.mdx)("em",{parentName:"li"},"Any**]"),") – A method or a bound method that will be called when\nan instance of the given event class is triggered.")),(0,s.mdx)("p",null,"connect_strong(",(0,s.mdx)("em",{parentName:"p"},"event_cls: Type[",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},"Event"),"]"),", ",(0,s.mdx)("em",{parentName:"p"},"callback: Callable[[",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},"Event"),"], Any]"),") → None\nConnect a callback to handle the given event type."),(0,s.mdx)("p",null,"The callback is stored as a strong reference, it is never automatically disconnected."),(0,s.mdx)("p",null,"Parameters:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"event_cls")," (",(0,s.mdx)("a",{parentName:"li",href:"resource.html#substance_painter.resource.Type",title:"substance_painter.resource.Type"},(0,s.mdx)("em",{parentName:"a"},"Type")),(0,s.mdx)("em",{parentName:"li"},"["),(0,s.mdx)("a",{parentName:"li",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},(0,s.mdx)("em",{parentName:"a"},"Event")),(0,s.mdx)("em",{parentName:"li"},"]"),") – An event class."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"callback")," (",(0,s.mdx)("em",{parentName:"li"},"Callable",(0,s.mdx)("strong",{parentName:"em"},"["),"["),(0,s.mdx)("a",{parentName:"li",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},(0,s.mdx)("em",{parentName:"a"},"Event")),(0,s.mdx)("em",{parentName:"li"},"]**,")," ",(0,s.mdx)("em",{parentName:"li"},"Any**]"),") – A method or a bound method that will be called when\nan instance of the given event class is triggered.")),(0,s.mdx)("p",null,"disconnect(",(0,s.mdx)("em",{parentName:"p"},"event_cls: Type[",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},"Event"),"]"),", ",(0,s.mdx)("em",{parentName:"p"},"callback: Callable[[",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},"Event"),"], Any]"),") → None\nDisconnect a previously connected callback."),(0,s.mdx)("p",null,"This method can be called to explicitly disconnect a callback."),(0,s.mdx)("p",null,"Parameters:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"event_cls")," (",(0,s.mdx)("a",{parentName:"li",href:"resource.html#substance_painter.resource.Type",title:"substance_painter.resource.Type"},(0,s.mdx)("em",{parentName:"a"},"Type")),(0,s.mdx)("em",{parentName:"li"},"["),(0,s.mdx)("a",{parentName:"li",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},(0,s.mdx)("em",{parentName:"a"},"Event")),(0,s.mdx)("em",{parentName:"li"},"]"),") – An event class."),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("strong",{parentName:"li"},"callback")," (",(0,s.mdx)("em",{parentName:"li"},"Callable",(0,s.mdx)("strong",{parentName:"em"},"["),"["),(0,s.mdx)("a",{parentName:"li",href:"#substance_painter.event.Event",title:"substance_painter.event.Event"},(0,s.mdx)("em",{parentName:"a"},"Event")),(0,s.mdx)("em",{parentName:"li"},"]**,")," ",(0,s.mdx)("em",{parentName:"li"},"Any**]"),") – A method or a bound method that has been connected\nto the given event class.")),(0,s.mdx)("h2",{id:"export-events"},"Export events"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ExportTexturesAboutToStart(",(0,s.mdx)("em",{parentName:"p"},"textures: Dict[Tuple","[str, str]",", List","[str]","]"),")\nEvent triggered just before a textures export."),(0,s.mdx)("p",null,"textures",(0,s.mdx)("em",{parentName:"p"},": Dict[Tuple","[str, str]",", List","[str]","]"),"\nList of texture files\nto be written to disk, grouped by stack (Texture Set name, stack name)."),(0,s.mdx)("p",null,"Type:\nDict[Tuple","[str, str]",", List","[str]","]"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ExportTexturesEnded(",(0,s.mdx)("em",{parentName:"p"},"status: ",(0,s.mdx)("a",{parentName:"em",href:"export.html#substance_painter.export.ExportStatus",title:"substance_painter.export.ExportStatus"},"ExportStatus")),", ",(0,s.mdx)("em",{parentName:"p"},"message: str"),", ",(0,s.mdx)("em",{parentName:"p"},"textures: Dict[Tuple","[str, str]",", List","[str]","]"),")\nEvent triggered after textures export is finished."),(0,s.mdx)("p",null,"message",(0,s.mdx)("em",{parentName:"p"},": str"),"\nHuman readable status message."),(0,s.mdx)("p",null,"Type:\nstr"),(0,s.mdx)("p",null,"status",(0,s.mdx)("em",{parentName:"p"},": ",(0,s.mdx)("a",{parentName:"em",href:"export.html#substance_painter.export.ExportStatus",title:"substance_painter.export.ExportStatus"},"ExportStatus")),"\nStatus code."),(0,s.mdx)("p",null,"Type:\n",(0,s.mdx)("a",{parentName:"p",href:"export.html#substance_painter.export.ExportStatus",title:"substance_painter.export.ExportStatus"},"ExportStatus")),(0,s.mdx)("p",null,"textures",(0,s.mdx)("em",{parentName:"p"},": Dict[Tuple","[str, str]",", List","[str]","]"),"\nList of texture files\nwritten to disk, grouped by stack (Texture Set name, stack name)."),(0,s.mdx)("p",null,"Type:\nDict[Tuple","[str, str]",", List","[str]","]"),(0,s.mdx)("h2",{id:"project-events"},"Project events"),(0,s.mdx)("p",null,"Note"),(0,s.mdx)("p",null,"Project loading is done asynchronously. When the event ",(0,s.mdx)("inlineCode",{parentName:"p"},"ProjectOpened")," or\n",(0,s.mdx)("inlineCode",{parentName:"p"},"ProjectCreated")," is triggered, the project may still be loading. The event\n",(0,s.mdx)("inlineCode",{parentName:"p"},"ProjectEditionEntered")," is triggered when the project is ready to work with."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ProjectOpened\nEvent triggered when an existing project has been opened."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ProjectCreated\nEvent triggered when a new project has been created."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ProjectAboutToClose\nEvent triggered just before closing the current project."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ProjectAboutToSave(",(0,s.mdx)("em",{parentName:"p"},"file_path: str"),")\nEvent triggered just before saving the current project."),(0,s.mdx)("p",null,"file_path",(0,s.mdx)("em",{parentName:"p"},": str"),"\nThe destination file."),(0,s.mdx)("p",null,"Type:\nstr"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ProjectSaved\nEvent triggered once the current project is saved."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ProjectEditionEntered\nEvent triggered when the project is fully loaded and ready to work with."),(0,s.mdx)("p",null,"When edition is entered, it is for example possible to query/edit the project\nproperties, to bake textures or do project export."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ProjectEditionLeft\nEvent triggered when the current project can non longer be edited."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.BusyStatusChanged(",(0,s.mdx)("em",{parentName:"p"},"busy: bool"),")\nEvent triggered when Substance 3D Painter busy state changed."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"project.html#substance_painter.project.execute_when_not_busy",title:"substance_painter.project.execute_when_not_busy"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.project.execute_when_not_busy()")),",\n",(0,s.mdx)("a",{parentName:"p",href:"project.html#substance_painter.project.is_busy",title:"substance_painter.project.is_busy"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.project.is_busy()")),"."),(0,s.mdx)("p",null,"busy",(0,s.mdx)("em",{parentName:"p"},": bool"),"\nWhether Substance 3D Painter is busy now."),(0,s.mdx)("p",null,"Type:\nbool"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.TextureStateEvent(",(0,s.mdx)("em",{parentName:"p"},"action: ",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.TextureStateEventAction",title:"substance_painter.event.TextureStateEventAction"},"TextureStateEventAction")),", ",(0,s.mdx)("em",{parentName:"p"},"stack_id: int"),", ",(0,s.mdx)("em",{parentName:"p"},"tile_indices: Tuple","[int, int]"),", ",(0,s.mdx)("em",{parentName:"p"},"channel_type: ",(0,s.mdx)("a",{parentName:"em",href:"textureset/index.html#substance_painter.textureset.ChannelType",title:"substance_painter.textureset.ChannelType"},"ChannelType")),", ",(0,s.mdx)("em",{parentName:"p"},"cache_key: int"),")\nEvent triggered when a document texture is added, removed or updated."),(0,s.mdx)("p",null,"action",(0,s.mdx)("em",{parentName:"p"},": ",(0,s.mdx)("a",{parentName:"em",href:"#substance_painter.event.TextureStateEventAction",title:"substance_painter.event.TextureStateEventAction"},"TextureStateEventAction")),"\nPerformed action (add, remove, update)."),(0,s.mdx)("p",null,"Type:\n",(0,s.mdx)("a",{parentName:"p",href:"#substance_painter.event.TextureStateEventAction",title:"substance_painter.event.TextureStateEventAction"},"TextureStateEventAction")),(0,s.mdx)("p",null,"cache_key",(0,s.mdx)("em",{parentName:"p"},": int"),"\nThe texture current cache key. Those cache keys are persistent across sessions."),(0,s.mdx)("p",null,"Type:\nint"),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"static")," cache_key_invalidation_throttling_period() → timedelta\nGet the minimum duration between two texture update events (for a given texture)."),(0,s.mdx)("p",null,"Returns:\nThe minimum duration between two update events."),(0,s.mdx)("p",null,"Return type:\ndatetime.timedelta"),(0,s.mdx)("p",null,"channel_type",(0,s.mdx)("em",{parentName:"p"},": ",(0,s.mdx)("a",{parentName:"em",href:"textureset/index.html#substance_painter.textureset.ChannelType",title:"substance_painter.textureset.ChannelType"},"ChannelType")),"\nThe document channel type."),(0,s.mdx)("p",null,"Type:\n",(0,s.mdx)("a",{parentName:"p",href:"textureset/index.html#substance_painter.textureset.ChannelType",title:"substance_painter.textureset.ChannelType"},"substance_painter.textureset.ChannelType")),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"static")," set_cache_key_invalidation_throttling_period(",(0,s.mdx)("em",{parentName:"p"},"period: timedelta"),") → None\nSet the minimum duration between two texture update events (for a given texture)."),(0,s.mdx)("p",null,"Warning: this setting is global and every work made in a callback associated to this event\nmay greatly hurt the painting experience."),(0,s.mdx)("p",null,"Parameters:\n",(0,s.mdx)("strong",{parentName:"p"},"period")," (",(0,s.mdx)("em",{parentName:"p"},"datetime.timedelta"),") – The minimum duration between two update events, can’t\nbe lower than 500ms."),(0,s.mdx)("p",null,"Raises:\n",(0,s.mdx)("strong",{parentName:"p"},"ValueError")," – If period is below 500ms."),(0,s.mdx)("p",null,"stack_id",(0,s.mdx)("em",{parentName:"p"},": int"),"\nThe stack the texture bellongs to, can be used to create a\n",(0,s.mdx)("a",{parentName:"p",href:"textureset/stack.html#substance_painter.textureset.Stack",title:"substance_painter.textureset.Stack"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.textureset.Stack"))," instance."),(0,s.mdx)("p",null,"Type:\nint"),(0,s.mdx)("p",null,"tile_indices",(0,s.mdx)("em",{parentName:"p"},": Tuple","[int, int]"),"\nThe uv tile indices."),(0,s.mdx)("p",null,"Type:\nTuple","[int, int]"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.TextureStateEventAction(",(0,s.mdx)("em",{parentName:"p"},"value"),")\nThe TextureStateEvent possible actions."),(0,s.mdx)("p",null,"Members:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"ADD"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"REMOVE")),(0,s.mdx)("h2",{id:"shelf-events"},"Shelf events"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ShelfCrawlingStarted(",(0,s.mdx)("em",{parentName:"p"},"shelf_name: str"),")\nEvent triggered when a shelf starts reading the file system to discover\nnew resources."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Shelf.is_crawling()"),"."),(0,s.mdx)("p",null,"shelf_name",(0,s.mdx)("em",{parentName:"p"},": str"),"\nName of the shelf discovering resources."),(0,s.mdx)("p",null,"Type:\nstr"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.ShelfCrawlingEnded(",(0,s.mdx)("em",{parentName:"p"},"shelf_name: str"),")\nEvent triggered when a shelf has finished discovering new resources and\nloading their thumbnails."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Shelf.is_crawling()"),"."),(0,s.mdx)("p",null,"shelf_name",(0,s.mdx)("em",{parentName:"p"},": str"),"\nName of the shelf that has finished discovering resources."),(0,s.mdx)("p",null,"Type:\nstr"),(0,s.mdx)("h2",{id:"baking-events"},"Baking events"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.BakingProcessAboutToStart(",(0,s.mdx)("em",{parentName:"p"},"stop_source: ",(0,s.mdx)("a",{parentName:"em",href:"async_utils.html#substance_painter.async_utils.StopSource",title:"substance_painter.async_utils.StopSource"},"StopSource")),")\nEvent triggered when a baking is about to start."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"baking.html#substance_painter.baking.bake_async",title:"substance_painter.baking.bake_async"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.baking.bake_async()")),"\n",(0,s.mdx)("a",{parentName:"p",href:"baking.html#substance_painter.baking.bake_selected_textures_async",title:"substance_painter.baking.bake_selected_textures_async"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.baking.bake_selected_textures_async()"))),(0,s.mdx)("p",null,"stop_source",(0,s.mdx)("em",{parentName:"p"},": ",(0,s.mdx)("a",{parentName:"em",href:"async_utils.html#substance_painter.async_utils.StopSource",title:"substance_painter.async_utils.StopSource"},"StopSource")),"\nThe baking stop source, can be compared with the StopSource\nreturned from the baking launch methods to identify the baking process."),(0,s.mdx)("p",null,"Type:\n",(0,s.mdx)("a",{parentName:"p",href:"async_utils.html#substance_painter.async_utils.StopSource",title:"substance_painter.async_utils.StopSource"},"StopSource")),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.BakingProcessProgress(",(0,s.mdx)("em",{parentName:"p"},"progress: float"),")\nEvent triggered when baking process progress changes."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"baking.html#substance_painter.baking.bake_async",title:"substance_painter.baking.bake_async"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.baking.bake_async()")),"\n",(0,s.mdx)("a",{parentName:"p",href:"baking.html#substance_painter.baking.bake_selected_textures_async",title:"substance_painter.baking.bake_selected_textures_async"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.baking.bake_selected_textures_async()"))),(0,s.mdx)("p",null,"progress",(0,s.mdx)("em",{parentName:"p"},": float"),"\nThe baking progress, between ","[0.0, 1.0]","."),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.BakingProcessEnded(",(0,s.mdx)("em",{parentName:"p"},"status: ",(0,s.mdx)("a",{parentName:"em",href:"baking.html#substance_painter.baking.BakingStatus",title:"substance_painter.baking.BakingStatus"},"BakingStatus")),")\nEvent triggered after baking is finished."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"baking.html#substance_painter.baking.bake_async",title:"substance_painter.baking.bake_async"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.baking.bake_async()")),"\n",(0,s.mdx)("a",{parentName:"p",href:"baking.html#substance_painter.baking.bake_selected_textures_async",title:"substance_painter.baking.bake_selected_textures_async"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.baking.bake_selected_textures_async()"))),(0,s.mdx)("p",null,"status",(0,s.mdx)("em",{parentName:"p"},": ",(0,s.mdx)("a",{parentName:"em",href:"baking.html#substance_painter.baking.BakingStatus",title:"substance_painter.baking.BakingStatus"},"BakingStatus")),"\nStatus of the baking process"),(0,s.mdx)("p",null,"Type:\n",(0,s.mdx)("a",{parentName:"p",href:"baking.html#substance_painter.baking.BakingStatus",title:"substance_painter.baking.BakingStatus"},"BakingStatus")),(0,s.mdx)("h2",{id:"layer-stack-events"},"Layer stack events"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.LayerStacksModelDataChanged\nEvent triggered whenever the status of the Layer Stacks changes."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"substance_painter.layerstack")),(0,s.mdx)("h2",{id:"application-wide-events"},"Application wide events"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.EngineComputationsStatusChanged(",(0,s.mdx)("em",{parentName:"p"},"engine_computations_enabled: bool"),")\nEvent triggered whenever the status of the engine computations changes."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"application.html#substance_painter.application.engine_computations_status",title:"substance_painter.application.engine_computations_status"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.application.engine_computations_status()"))),(0,s.mdx)("h2",{id:"display-events"},"Display events"),(0,s.mdx)("hr",null),(0,s.mdx)("p",null,(0,s.mdx)("em",{parentName:"p"},"class")," substance_painter.event.CameraPropertiesChanged(",(0,s.mdx)("em",{parentName:"p"},"camera_id: int"),")\nEvent triggered when the camera properties change."),(0,s.mdx)("p",null,"See also"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"display.html#substance_painter.display.Camera",title:"substance_painter.display.Camera"},(0,s.mdx)("inlineCode",{parentName:"a"},"substance_painter.display.Camera"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-substance-painter-event-md-2e530700cad45d967dd6.js.map