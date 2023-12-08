---
title: event - Painter Python API
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

<h1>event module<a class="headerlink" href="#module-substance_painter.event" title="Link to this heading"> </a></h1>
<p class>The <code class="docutils literal notranslate">event</code> module defines application events and allows to subscribe to
notifications.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.Event">
<em class="property">class </em>substance_painter.event.Event<a class="headerlink" href="#substance_painter.event.Event" title="Link to this definition"> </a></dt>
<dd><p class>Base event class.</p>
</dd></dl>

<h2>Event dispatcher<a class="headerlink" href="#event-dispatcher" title="Link to this heading"> </a></h2>
<dl class="py data">
<dt class="sig sig-object py" id="substance_painter.event.DISPATCHER">
substance_painter.event.DISPATCHER<em class="property"> = &lt;substance_painter.event.Dispatcher object&gt;</em><a class="headerlink" href="#substance_painter.event.DISPATCHER" title="Link to this definition"> </a></dt>
<dd><p class>The event dispatcher instance that will be used by the application.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher">
<em class="property">class </em>substance_painter.event.Dispatcher<a class="headerlink" href="#substance_painter.event.Dispatcher" title="Link to this definition"> </a></dt>
<dd><p class>The Event Dispatcher.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher.connect">
connect(<em class="sig-param">event_cls: Type[<a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event">Event</a>]</em>, <em class="sig-param">callback: Callable[[<a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event">Event</a>], Any]</em>) → None<a class="headerlink" href="#substance_painter.event.Dispatcher.connect" title="Link to this definition"> </a></dt>
<dd><p class>Connect a callback to handle the given event type.</p>
<p class>The callback is stored as a weak reference, it is automatically disconnected
once the callback gets garbage collected.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>event_cls</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><em>Type</em></a><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em>) – An event class.</p></li>
<li><p class><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – A method or a bound method that will be called when
an instance of the given event class is triggered.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher.connect_strong">
connect_strong(<em class="sig-param">event_cls: Type[<a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event">Event</a>]</em>, <em class="sig-param">callback: Callable[[<a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event">Event</a>], Any]</em>) → None<a class="headerlink" href="#substance_painter.event.Dispatcher.connect_strong" title="Link to this definition"> </a></dt>
<dd><p class>Connect a callback to handle the given event type.</p>
<p class>The callback is stored as a strong reference, it is never automatically disconnected.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>event_cls</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><em>Type</em></a><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em>) – An event class.</p></li>
<li><p class><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – A method or a bound method that will be called when
an instance of the given event class is triggered.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher.disconnect">
disconnect(<em class="sig-param">event_cls: Type[<a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event">Event</a>]</em>, <em class="sig-param">callback: Callable[[<a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event">Event</a>], Any]</em>) → None<a class="headerlink" href="#substance_painter.event.Dispatcher.disconnect" title="Link to this definition"> </a></dt>
<dd><p class>Disconnect a previously connected callback.</p>
<p class>This method can be called to explicitly disconnect a callback.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>event_cls</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><em>Type</em></a><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em>) – An event class.</p></li>
<li><p class><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – A method or a bound method that has been connected
to the given event class.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Export events<a class="headerlink" href="#export-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesAboutToStart">
<em class="property">class </em>substance_painter.event.ExportTexturesAboutToStart(<em class="sig-param">textures: Dict[Tuple[str, str], List[str]]</em>)<a class="headerlink" href="#substance_painter.event.ExportTexturesAboutToStart" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered just before a textures export.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesAboutToStart.textures">
textures<em class="property">: Dict[Tuple[str, str], List[str]]</em><a class="headerlink" href="#substance_painter.event.ExportTexturesAboutToStart.textures" title="Link to this definition"> </a></dt>
<dd><p class>List of texture files
to be written to disk, grouped by stack (Texture Set name, stack name).</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>Dict[Tuple[str, str], List[str]]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded">
<em class="property">class </em>substance_painter.event.ExportTexturesEnded(<em class="sig-param">status: <a class="reference internal" href="export.html#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus">ExportStatus</a></em>, <em class="sig-param">message: str</em>, <em class="sig-param">textures: Dict[Tuple[str, str], List[str]]</em>)<a class="headerlink" href="#substance_painter.event.ExportTexturesEnded" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered after textures export is finished.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded.message">
message<em class="property">: str</em><a class="headerlink" href="#substance_painter.event.ExportTexturesEnded.message" title="Link to this definition"> </a></dt>
<dd><p class>Human readable status message.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded.status">
status<em class="property">: <a class="reference internal" href="export.html#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus">ExportStatus</a></em><a class="headerlink" href="#substance_painter.event.ExportTexturesEnded.status" title="Link to this definition"> </a></dt>
<dd><p class>Status code.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="export.html#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus">ExportStatus</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded.textures">
textures<em class="property">: Dict[Tuple[str, str], List[str]]</em><a class="headerlink" href="#substance_painter.event.ExportTexturesEnded.textures" title="Link to this definition"> </a></dt>
<dd><p class>List of texture files
written to disk, grouped by stack (Texture Set name, stack name).</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>Dict[Tuple[str, str], List[str]]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Project events<a class="headerlink" href="#project-events" title="Link to this heading"> </a></h2>
<div class="admonition note">
<p class>Note</p>
<p class>Project loading is done asynchronously. When the event <code class="docutils literal notranslate">ProjectOpened</code> or
<code class="docutils literal notranslate">ProjectCreated</code> is triggered, the project may still be loading. The event
<code class="docutils literal notranslate">ProjectEditionEntered</code> is triggered when the project is ready to work with.</p>
</div>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectOpened">
<em class="property">class </em>substance_painter.event.ProjectOpened<a class="headerlink" href="#substance_painter.event.ProjectOpened" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when an existing project has been opened.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectCreated">
<em class="property">class </em>substance_painter.event.ProjectCreated<a class="headerlink" href="#substance_painter.event.ProjectCreated" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when a new project has been created.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectAboutToClose">
<em class="property">class </em>substance_painter.event.ProjectAboutToClose<a class="headerlink" href="#substance_painter.event.ProjectAboutToClose" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered just before closing the current project.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectAboutToSave">
<em class="property">class </em>substance_painter.event.ProjectAboutToSave(<em class="sig-param">file_path: str</em>)<a class="headerlink" href="#substance_painter.event.ProjectAboutToSave" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered just before saving the current project.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ProjectAboutToSave.file_path">
file_path<em class="property">: str</em><a class="headerlink" href="#substance_painter.event.ProjectAboutToSave.file_path" title="Link to this definition"> </a></dt>
<dd><p class>The destination file.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectSaved">
<em class="property">class </em>substance_painter.event.ProjectSaved<a class="headerlink" href="#substance_painter.event.ProjectSaved" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered once the current project is saved.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectEditionEntered">
<em class="property">class </em>substance_painter.event.ProjectEditionEntered<a class="headerlink" href="#substance_painter.event.ProjectEditionEntered" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when the project is fully loaded and ready to work with.</p>
<p class>When edition is entered, it is for example possible to query/edit the project
properties, to bake textures or do project export.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectEditionLeft">
<em class="property">class </em>substance_painter.event.ProjectEditionLeft<a class="headerlink" href="#substance_painter.event.ProjectEditionLeft" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when the current project can non longer be edited.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BusyStatusChanged">
<em class="property">class </em>substance_painter.event.BusyStatusChanged(<em class="sig-param">busy: bool</em>)<a class="headerlink" href="#substance_painter.event.BusyStatusChanged" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when Substance 3D Painter busy state changed.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="project.html#substance_painter.project.execute_when_not_busy" title="substance_painter.project.execute_when_not_busy"><code class="xref py py-func docutils literal notranslate">substance_painter.project.execute_when_not_busy()</code></a>,
<a class="reference internal" href="project.html#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate">substance_painter.project.is_busy()</code></a>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BusyStatusChanged.busy">
busy<em class="property">: bool</em><a class="headerlink" href="#substance_painter.event.BusyStatusChanged.busy" title="Link to this definition"> </a></dt>
<dd><p class>Whether Substance 3D Painter is busy now.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>bool</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent">
<em class="property">class </em>substance_painter.event.TextureStateEvent(<em class="sig-param">action: <a class="reference internal" href="#substance_painter.event.TextureStateEventAction" title="substance_painter.event.TextureStateEventAction">TextureStateEventAction</a></em>, <em class="sig-param">stack_id: int</em>, <em class="sig-param">tile_indices: Tuple[int, int]</em>, <em class="sig-param">channel_type: <a class="reference internal" href="textureset/index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></em>, <em class="sig-param">cache_key: int</em>)<a class="headerlink" href="#substance_painter.event.TextureStateEvent" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when a document texture is added, removed or updated.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.action">
action<em class="property">: <a class="reference internal" href="#substance_painter.event.TextureStateEventAction" title="substance_painter.event.TextureStateEventAction">TextureStateEventAction</a></em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.action" title="Link to this definition"> </a></dt>
<dd><p class>Performed action (add, remove, update).</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.event.TextureStateEventAction" title="substance_painter.event.TextureStateEventAction">TextureStateEventAction</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.cache_key">
cache_key<em class="property">: int</em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.cache_key" title="Link to this definition"> </a></dt>
<dd><p class>The texture current cache key. Those cache keys are persistent across sessions.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.cache_key_invalidation_throttling_period">
<em class="property">static </em>cache_key_invalidation_throttling_period() → timedelta<a class="headerlink" href="#substance_painter.event.TextureStateEvent.cache_key_invalidation_throttling_period" title="Link to this definition"> </a></dt>
<dd><p class>Get the minimum duration between two texture update events (for a given texture).</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The minimum duration between two update events.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>datetime.timedelta</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.channel_type">
channel_type<em class="property">: <a class="reference internal" href="textureset/index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.channel_type" title="Link to this definition"> </a></dt>
<dd><p class>The document channel type.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="textureset/index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">substance_painter.textureset.ChannelType</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.set_cache_key_invalidation_throttling_period">
<em class="property">static </em>set_cache_key_invalidation_throttling_period(<em class="sig-param">period: timedelta</em>) → None<a class="headerlink" href="#substance_painter.event.TextureStateEvent.set_cache_key_invalidation_throttling_period" title="Link to this definition"> </a></dt>
<dd><p class>Set the minimum duration between two texture update events (for a given texture).</p>
<p class>Warning: this setting is global and every work made in a callback associated to this event
may greatly hurt the painting experience.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>period</strong> (<em>datetime.timedelta</em>) – The minimum duration between two update events, can’t
be lower than 500ms.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><strong>ValueError</strong> – If period is below 500ms.</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.stack_id">
stack_id<em class="property">: int</em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.stack_id" title="Link to this definition"> </a></dt>
<dd><p class>The stack the texture bellongs to, can be used to create a
<a class="reference internal" href="textureset/stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack"><code class="xref py py-class docutils literal notranslate">substance_painter.textureset.Stack</code></a> instance.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.tile_indices">
tile_indices<em class="property">: Tuple[int, int]</em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.tile_indices" title="Link to this definition"> </a></dt>
<dd><p class>The uv tile indices.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>Tuple[int, int]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEventAction">
<em class="property">class </em>substance_painter.event.TextureStateEventAction(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.event.TextureStateEventAction" title="Link to this definition"> </a></dt>
<dd><p class>The TextureStateEvent possible actions.</p>
<p class>Members:</p>
<p class><code class="docutils literal notranslate">ADD</code>, <code class="docutils literal notranslate">UPDATE</code>, <code class="docutils literal notranslate">REMOVE</code></p>
</dd></dl>


<h2>Shelf events<a class="headerlink" href="#shelf-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingStarted">
<em class="property">class </em>substance_painter.event.ShelfCrawlingStarted(<em class="sig-param">shelf_name: str</em>)<a class="headerlink" href="#substance_painter.event.ShelfCrawlingStarted" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when a shelf starts reading the file system to discover
new resources.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><code class="xref py py-meth docutils literal notranslate">Shelf.is_crawling()</code>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingStarted.shelf_name">
shelf_name<em class="property">: str</em><a class="headerlink" href="#substance_painter.event.ShelfCrawlingStarted.shelf_name" title="Link to this definition"> </a></dt>
<dd><p class>Name of the shelf discovering resources.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingEnded">
<em class="property">class </em>substance_painter.event.ShelfCrawlingEnded(<em class="sig-param">shelf_name: str</em>)<a class="headerlink" href="#substance_painter.event.ShelfCrawlingEnded" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when a shelf has finished discovering new resources and
loading their thumbnails.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><code class="xref py py-meth docutils literal notranslate">Shelf.is_crawling()</code>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingEnded.shelf_name">
shelf_name<em class="property">: str</em><a class="headerlink" href="#substance_painter.event.ShelfCrawlingEnded.shelf_name" title="Link to this definition"> </a></dt>
<dd><p class>Name of the shelf that has finished discovering resources.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Baking events<a class="headerlink" href="#baking-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessAboutToStart">
<em class="property">class </em>substance_painter.event.BakingProcessAboutToStart(<em class="sig-param">stop_source: <a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource">StopSource</a></em>)<a class="headerlink" href="#substance_painter.event.BakingProcessAboutToStart" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when a baking is about to start.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="baking.html#substance_painter.baking.bake_async" title="substance_painter.baking.bake_async"><code class="xref py py-func docutils literal notranslate">substance_painter.baking.bake_async()</code></a>
<a class="reference internal" href="baking.html#substance_painter.baking.bake_selected_textures_async" title="substance_painter.baking.bake_selected_textures_async"><code class="xref py py-func docutils literal notranslate">substance_painter.baking.bake_selected_textures_async()</code></a></p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessAboutToStart.stop_source">
stop_source<em class="property">: <a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource">StopSource</a></em><a class="headerlink" href="#substance_painter.event.BakingProcessAboutToStart.stop_source" title="Link to this definition"> </a></dt>
<dd><p class>The baking stop source, can be compared with the StopSource
returned from the baking launch methods to identify the baking process.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource">StopSource</a></p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessProgress">
<em class="property">class </em>substance_painter.event.BakingProcessProgress(<em class="sig-param">progress: float</em>)<a class="headerlink" href="#substance_painter.event.BakingProcessProgress" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when baking process progress changes.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="baking.html#substance_painter.baking.bake_async" title="substance_painter.baking.bake_async"><code class="xref py py-func docutils literal notranslate">substance_painter.baking.bake_async()</code></a>
<a class="reference internal" href="baking.html#substance_painter.baking.bake_selected_textures_async" title="substance_painter.baking.bake_selected_textures_async"><code class="xref py py-func docutils literal notranslate">substance_painter.baking.bake_selected_textures_async()</code></a></p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessProgress.progress">
progress<em class="property">: float</em><a class="headerlink" href="#substance_painter.event.BakingProcessProgress.progress" title="Link to this definition"> </a></dt>
<dd><p class>The baking progress, between [0.0, 1.0].</p>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessEnded">
<em class="property">class </em>substance_painter.event.BakingProcessEnded(<em class="sig-param">status: <a class="reference internal" href="baking.html#substance_painter.baking.BakingStatus" title="substance_painter.baking.BakingStatus">BakingStatus</a></em>)<a class="headerlink" href="#substance_painter.event.BakingProcessEnded" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered after baking is finished.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="baking.html#substance_painter.baking.bake_async" title="substance_painter.baking.bake_async"><code class="xref py py-func docutils literal notranslate">substance_painter.baking.bake_async()</code></a>
<a class="reference internal" href="baking.html#substance_painter.baking.bake_selected_textures_async" title="substance_painter.baking.bake_selected_textures_async"><code class="xref py py-func docutils literal notranslate">substance_painter.baking.bake_selected_textures_async()</code></a></p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessEnded.status">
status<em class="property">: <a class="reference internal" href="baking.html#substance_painter.baking.BakingStatus" title="substance_painter.baking.BakingStatus">BakingStatus</a></em><a class="headerlink" href="#substance_painter.event.BakingProcessEnded.status" title="Link to this definition"> </a></dt>
<dd><p class>Status of the baking process</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="baking.html#substance_painter.baking.BakingStatus" title="substance_painter.baking.BakingStatus">BakingStatus</a></p>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Layer stack events<a class="headerlink" href="#layer-stack-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.LayerStacksModelDataChanged">
<em class="property">class </em>substance_painter.event.LayerStacksModelDataChanged<a class="headerlink" href="#substance_painter.event.LayerStacksModelDataChanged" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered whenever the status of the Layer Stacks changes.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><code class="xref py py-mod docutils literal notranslate">substance_painter.layerstack</code></p>
</div>
</dd></dl>


<h2>Application wide events<a class="headerlink" href="#application-wide-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.EngineComputationsStatusChanged">
<em class="property">class </em>substance_painter.event.EngineComputationsStatusChanged(<em class="sig-param">engine_computations_enabled: bool</em>)<a class="headerlink" href="#substance_painter.event.EngineComputationsStatusChanged" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered whenever the status of the engine computations changes.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="application.html#substance_painter.application.engine_computations_status" title="substance_painter.application.engine_computations_status"><code class="xref py py-func docutils literal notranslate">substance_painter.application.engine_computations_status()</code></a></p>
</div>
</dd></dl>


<h2>Display events<a class="headerlink" href="#display-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.CameraPropertiesChanged">
<em class="property">class </em>substance_painter.event.CameraPropertiesChanged(<em class="sig-param">camera_id: int</em>)<a class="headerlink" href="#substance_painter.event.CameraPropertiesChanged" title="Link to this definition"> </a></dt>
<dd><p class>Event triggered when the camera properties change.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="display.html#substance_painter.display.Camera" title="substance_painter.display.Camera"><code class="xref py py-class docutils literal notranslate">substance_painter.display.Camera</code></a></p>
</div>
</dd></dl>


</div>
</div>

</div>
</div>

</div>


