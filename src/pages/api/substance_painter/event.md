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

<span id="event-module"></span><h1>event module<a class="headerlink" href="#module-substance_painter.event" title="Link to this heading"> </a></h1>
<p>The <code class="docutils literal notranslate"><span class="pre">event</span></code> module defines application events and allows to subscribe to
notifications.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.Event">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">Event</span></span><a class="headerlink" href="#substance_painter.event.Event" title="Link to this definition"> </a></dt>
<dd><p>Base event class.</p>
</dd></dl>

<h2>Event dispatcher<a class="headerlink" href="#event-dispatcher" title="Link to this heading"> </a></h2>
<dl class="py data">
<dt class="sig sig-object py" id="substance_painter.event.DISPATCHER">
<span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">DISPATCHER</span></span><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">&lt;substance_painter.event.Dispatcher</span> <span class="pre">object&gt;</span></em><a class="headerlink" href="#substance_painter.event.DISPATCHER" title="Link to this definition"> </a></dt>
<dd><p>The event dispatcher instance that will be used by the application.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">Dispatcher</span></span><a class="headerlink" href="#substance_painter.event.Dispatcher" title="Link to this definition"> </a></dt>
<dd><p>The Event Dispatcher.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher.connect">
<span class="sig-name descname"><span class="pre">connect</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">event_cls</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Type</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><span class="pre">Event</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">callback</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Callable</span><span class="p"><span class="pre">[</span></span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><span class="pre">Event</span></a><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">Any</span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.event.Dispatcher.connect" title="Link to this definition"> </a></dt>
<dd><p>Connect a callback to handle the given event type.</p>
<p>The callback is stored as a weak reference, it is automatically disconnected
once the callback gets garbage collected.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>event_cls</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><em>Type</em></a><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em>) – An event class.</p></li>
<li><p><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – A method or a bound method that will be called when
an instance of the given event class is triggered.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher.connect_strong">
<span class="sig-name descname"><span class="pre">connect_strong</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">event_cls</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Type</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><span class="pre">Event</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">callback</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Callable</span><span class="p"><span class="pre">[</span></span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><span class="pre">Event</span></a><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">Any</span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.event.Dispatcher.connect_strong" title="Link to this definition"> </a></dt>
<dd><p>Connect a callback to handle the given event type.</p>
<p>The callback is stored as a strong reference, it is never automatically disconnected.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>event_cls</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><em>Type</em></a><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em>) – An event class.</p></li>
<li><p><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – A method or a bound method that will be called when
an instance of the given event class is triggered.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.Dispatcher.disconnect">
<span class="sig-name descname"><span class="pre">disconnect</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">event_cls</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Type</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><span class="pre">Event</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">callback</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Callable</span><span class="p"><span class="pre">[</span></span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><span class="pre">Event</span></a><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">Any</span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.event.Dispatcher.disconnect" title="Link to this definition"> </a></dt>
<dd><p>Disconnect a previously connected callback.</p>
<p>This method can be called to explicitly disconnect a callback.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>event_cls</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><em>Type</em></a><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em>) – An event class.</p></li>
<li><p><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.event.Event" title="substance_painter.event.Event"><em>Event</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – A method or a bound method that has been connected
to the given event class.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Export events<a class="headerlink" href="#export-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesAboutToStart">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ExportTexturesAboutToStart</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">textures</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.ExportTexturesAboutToStart" title="Link to this definition"> </a></dt>
<dd><p>Event triggered just before a textures export.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesAboutToStart.textures">
<span class="sig-name descname"><span class="pre">textures</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></em><a class="headerlink" href="#substance_painter.event.ExportTexturesAboutToStart.textures" title="Link to this definition"> </a></dt>
<dd><p>List of texture files
to be written to disk, grouped by stack (Texture Set name, stack name).</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>Dict[Tuple[str, str], List[str]]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ExportTexturesEnded</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">status</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="export.html#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus"><span class="pre">ExportStatus</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">textures</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.ExportTexturesEnded" title="Link to this definition"> </a></dt>
<dd><p>Event triggered after textures export is finished.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded.message">
<span class="sig-name descname"><span class="pre">message</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em><a class="headerlink" href="#substance_painter.event.ExportTexturesEnded.message" title="Link to this definition"> </a></dt>
<dd><p>Human readable status message.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded.status">
<span class="sig-name descname"><span class="pre">status</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="export.html#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus"><span class="pre">ExportStatus</span></a></em><a class="headerlink" href="#substance_painter.event.ExportTexturesEnded.status" title="Link to this definition"> </a></dt>
<dd><p>Status code.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="export.html#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus">ExportStatus</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ExportTexturesEnded.textures">
<span class="sig-name descname"><span class="pre">textures</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></em><a class="headerlink" href="#substance_painter.event.ExportTexturesEnded.textures" title="Link to this definition"> </a></dt>
<dd><p>List of texture files
written to disk, grouped by stack (Texture Set name, stack name).</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>Dict[Tuple[str, str], List[str]]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Project events<a class="headerlink" href="#project-events" title="Link to this heading"> </a></h2>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Project loading is done asynchronously. When the event <code class="docutils literal notranslate"><span class="pre">ProjectOpened</span></code> or
<code class="docutils literal notranslate"><span class="pre">ProjectCreated</span></code> is triggered, the project may still be loading. The event
<code class="docutils literal notranslate"><span class="pre">ProjectEditionEntered</span></code> is triggered when the project is ready to work with.</p>
</div>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectOpened">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectOpened</span></span><a class="headerlink" href="#substance_painter.event.ProjectOpened" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when an existing project has been opened.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectCreated">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectCreated</span></span><a class="headerlink" href="#substance_painter.event.ProjectCreated" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when a new project has been created.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectAboutToClose">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectAboutToClose</span></span><a class="headerlink" href="#substance_painter.event.ProjectAboutToClose" title="Link to this definition"> </a></dt>
<dd><p>Event triggered just before closing the current project.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectAboutToSave">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectAboutToSave</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.ProjectAboutToSave" title="Link to this definition"> </a></dt>
<dd><p>Event triggered just before saving the current project.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ProjectAboutToSave.file_path">
<span class="sig-name descname"><span class="pre">file_path</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em><a class="headerlink" href="#substance_painter.event.ProjectAboutToSave.file_path" title="Link to this definition"> </a></dt>
<dd><p>The destination file.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectSaved">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectSaved</span></span><a class="headerlink" href="#substance_painter.event.ProjectSaved" title="Link to this definition"> </a></dt>
<dd><p>Event triggered once the current project is saved.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectEditionEntered">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectEditionEntered</span></span><a class="headerlink" href="#substance_painter.event.ProjectEditionEntered" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when the project is fully loaded and ready to work with.</p>
<p>When edition is entered, it is for example possible to query/edit the project
properties, to bake textures or do project export.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ProjectEditionLeft">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectEditionLeft</span></span><a class="headerlink" href="#substance_painter.event.ProjectEditionLeft" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when the current project can non longer be edited.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BusyStatusChanged">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">BusyStatusChanged</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">busy</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.BusyStatusChanged" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when Substance 3D Painter busy state changed.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="project.html#substance_painter.project.execute_when_not_busy" title="substance_painter.project.execute_when_not_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.execute_when_not_busy()</span></code></a>,
<a class="reference internal" href="project.html#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.is_busy()</span></code></a>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BusyStatusChanged.busy">
<span class="sig-name descname"><span class="pre">busy</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">bool</span></em><a class="headerlink" href="#substance_painter.event.BusyStatusChanged.busy" title="Link to this definition"> </a></dt>
<dd><p>Whether Substance 3D Painter is busy now.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>bool</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">TextureStateEvent</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">action</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.event.TextureStateEventAction" title="substance_painter.event.TextureStateEventAction"><span class="pre">TextureStateEventAction</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">stack_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">tile_indices</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">channel_type</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">cache_key</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.TextureStateEvent" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when a document texture is added, removed or updated.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.action">
<span class="sig-name descname"><span class="pre">action</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.event.TextureStateEventAction" title="substance_painter.event.TextureStateEventAction"><span class="pre">TextureStateEventAction</span></a></em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.action" title="Link to this definition"> </a></dt>
<dd><p>Performed action (add, remove, update).</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.event.TextureStateEventAction" title="substance_painter.event.TextureStateEventAction">TextureStateEventAction</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.cache_key">
<span class="sig-name descname"><span class="pre">cache_key</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">int</span></em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.cache_key" title="Link to this definition"> </a></dt>
<dd><p>The texture current cache key. Those cache keys are persistent across sessions.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.cache_key_invalidation_throttling_period">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">cache_key_invalidation_throttling_period</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">timedelta</span></span></span><a class="headerlink" href="#substance_painter.event.TextureStateEvent.cache_key_invalidation_throttling_period" title="Link to this definition"> </a></dt>
<dd><p>Get the minimum duration between two texture update events (for a given texture).</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The minimum duration between two update events.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>datetime.timedelta</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.channel_type">
<span class="sig-name descname"><span class="pre">channel_type</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="textureset/index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.channel_type" title="Link to this definition"> </a></dt>
<dd><p>The document channel type.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="textureset/index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">substance_painter.textureset.ChannelType</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.set_cache_key_invalidation_throttling_period">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">set_cache_key_invalidation_throttling_period</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">period</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">timedelta</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.event.TextureStateEvent.set_cache_key_invalidation_throttling_period" title="Link to this definition"> </a></dt>
<dd><p>Set the minimum duration between two texture update events (for a given texture).</p>
<p>Warning: this setting is global and every work made in a callback associated to this event
may greatly hurt the painting experience.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>period</strong> (<em>datetime.timedelta</em>) – The minimum duration between two update events, can’t
be lower than 500ms.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><strong>ValueError</strong> – If period is below 500ms.</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.stack_id">
<span class="sig-name descname"><span class="pre">stack_id</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">int</span></em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.stack_id" title="Link to this definition"> </a></dt>
<dd><p>The stack the texture bellongs to, can be used to create a
<a class="reference internal" href="textureset/stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.Stack</span></code></a> instance.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEvent.tile_indices">
<span class="sig-name descname"><span class="pre">tile_indices</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span></em><a class="headerlink" href="#substance_painter.event.TextureStateEvent.tile_indices" title="Link to this definition"> </a></dt>
<dd><p>The uv tile indices.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>Tuple[int, int]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.TextureStateEventAction">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">TextureStateEventAction</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.TextureStateEventAction" title="Link to this definition"> </a></dt>
<dd><p>The TextureStateEvent possible actions.</p>
<p>Members:</p>
<p><code class="docutils literal notranslate"><span class="pre">ADD</span></code>, <code class="docutils literal notranslate"><span class="pre">UPDATE</span></code>, <code class="docutils literal notranslate"><span class="pre">REMOVE</span></code></p>
</dd></dl>


<h2>Shelf events<a class="headerlink" href="#shelf-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingStarted">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ShelfCrawlingStarted</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">shelf_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.ShelfCrawlingStarted" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when a shelf starts reading the file system to discover
new resources.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><code class="xref py py-meth docutils literal notranslate"><span class="pre">Shelf.is_crawling()</span></code>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingStarted.shelf_name">
<span class="sig-name descname"><span class="pre">shelf_name</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em><a class="headerlink" href="#substance_painter.event.ShelfCrawlingStarted.shelf_name" title="Link to this definition"> </a></dt>
<dd><p>Name of the shelf discovering resources.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingEnded">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ShelfCrawlingEnded</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">shelf_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.ShelfCrawlingEnded" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when a shelf has finished discovering new resources and
loading their thumbnails.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><code class="xref py py-meth docutils literal notranslate"><span class="pre">Shelf.is_crawling()</span></code>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.ShelfCrawlingEnded.shelf_name">
<span class="sig-name descname"><span class="pre">shelf_name</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em><a class="headerlink" href="#substance_painter.event.ShelfCrawlingEnded.shelf_name" title="Link to this definition"> </a></dt>
<dd><p>Name of the shelf that has finished discovering resources.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Baking events<a class="headerlink" href="#baking-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessAboutToStart">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">BakingProcessAboutToStart</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">stop_source</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource"><span class="pre">StopSource</span></a></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.BakingProcessAboutToStart" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when a baking is about to start.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="baking.html#substance_painter.baking.bake_async" title="substance_painter.baking.bake_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_async()</span></code></a>
<a class="reference internal" href="baking.html#substance_painter.baking.bake_selected_textures_async" title="substance_painter.baking.bake_selected_textures_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_selected_textures_async()</span></code></a></p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessAboutToStart.stop_source">
<span class="sig-name descname"><span class="pre">stop_source</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource"><span class="pre">StopSource</span></a></em><a class="headerlink" href="#substance_painter.event.BakingProcessAboutToStart.stop_source" title="Link to this definition"> </a></dt>
<dd><p>The baking stop source, can be compared with the StopSource
returned from the baking launch methods to identify the baking process.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource">StopSource</a></p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessProgress">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">BakingProcessProgress</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">progress</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">float</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.BakingProcessProgress" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when baking process progress changes.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="baking.html#substance_painter.baking.bake_async" title="substance_painter.baking.bake_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_async()</span></code></a>
<a class="reference internal" href="baking.html#substance_painter.baking.bake_selected_textures_async" title="substance_painter.baking.bake_selected_textures_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_selected_textures_async()</span></code></a></p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessProgress.progress">
<span class="sig-name descname"><span class="pre">progress</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">float</span></em><a class="headerlink" href="#substance_painter.event.BakingProcessProgress.progress" title="Link to this definition"> </a></dt>
<dd><p>The baking progress, between [0.0, 1.0].</p>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessEnded">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">BakingProcessEnded</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">status</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="baking.html#substance_painter.baking.BakingStatus" title="substance_painter.baking.BakingStatus"><span class="pre">BakingStatus</span></a></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.BakingProcessEnded" title="Link to this definition"> </a></dt>
<dd><p>Event triggered after baking is finished.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="baking.html#substance_painter.baking.bake_async" title="substance_painter.baking.bake_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_async()</span></code></a>
<a class="reference internal" href="baking.html#substance_painter.baking.bake_selected_textures_async" title="substance_painter.baking.bake_selected_textures_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_selected_textures_async()</span></code></a></p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.event.BakingProcessEnded.status">
<span class="sig-name descname"><span class="pre">status</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="baking.html#substance_painter.baking.BakingStatus" title="substance_painter.baking.BakingStatus"><span class="pre">BakingStatus</span></a></em><a class="headerlink" href="#substance_painter.event.BakingProcessEnded.status" title="Link to this definition"> </a></dt>
<dd><p>Status of the baking process</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="baking.html#substance_painter.baking.BakingStatus" title="substance_painter.baking.BakingStatus">BakingStatus</a></p>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Layer stack events<a class="headerlink" href="#layer-stack-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.LayerStacksModelDataChanged">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">LayerStacksModelDataChanged</span></span><a class="headerlink" href="#substance_painter.event.LayerStacksModelDataChanged" title="Link to this definition"> </a></dt>
<dd><p>Event triggered whenever the status of the Layer Stacks changes.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.layerstack</span></code></p>
</div>
</dd></dl>


<h2>Application wide events<a class="headerlink" href="#application-wide-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.EngineComputationsStatusChanged">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">EngineComputationsStatusChanged</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">engine_computations_enabled</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.EngineComputationsStatusChanged" title="Link to this definition"> </a></dt>
<dd><p>Event triggered whenever the status of the engine computations changes.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="application.html#substance_painter.application.engine_computations_status" title="substance_painter.application.engine_computations_status"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.application.engine_computations_status()</span></code></a></p>
</div>
</dd></dl>


<h2>Display events<a class="headerlink" href="#display-events" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.event.CameraPropertiesChanged">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">CameraPropertiesChanged</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">camera_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.event.CameraPropertiesChanged" title="Link to this definition"> </a></dt>
<dd><p>Event triggered when the camera properties change.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="display.html#substance_painter.display.Camera" title="substance_painter.display.Camera"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.display.Camera</span></code></a></p>
</div>
</dd></dl>


</div>
</div>

</div>
</div>

</div>


