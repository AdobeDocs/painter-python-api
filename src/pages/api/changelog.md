---
title: changelog - Painter Python API
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

<h1>Changelog<a class="headerlink" href="#changelog" title="Link to this heading"> </a></h1>

<h2>0.2.12 (Substance 3D painter 9.1.1)<a class="headerlink" href="#substance-3d-painter-9-1-1" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.get_uuid" title="substance_painter.project.get_uuid"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.get_uuid()</span></code></a> to query the project UUID.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.11 (Substance 3D painter 9.1.0)<a class="headerlink" href="#substance-3d-painter-9-1-0" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/application.html#module-substance_painter.application" title="substance_painter.application"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.application</span></code></a></dt><dd><ul>
<li><p>Add ability to disable engine computations</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/application.html#substance_painter.application.close" title="substance_painter.application.close"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.application.close()</span></code></a> to close Substance 3D Painter.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.display</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/display.html#substance_painter.display.Camera" title="substance_painter.display.Camera"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.display.Camera</span></code></a> to manipulate camera settings.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a></dt><dd><ul>
<li><p>Add a new event <a class="reference internal" href="substance_painter/event.html#substance_painter.event.EngineComputationsStatusChanged" title="substance_painter.event.EngineComputationsStatusChanged"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.EngineComputationsStatusChanged</span></code></a> to be notified when engine computations status changes.</p></li>
<li><p>Add a new event <a class="reference internal" href="substance_painter/event.html#substance_painter.event.CameraPropertiesChanged" title="substance_painter.event.CameraPropertiesChanged"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.CameraPropertiesChanged</span></code></a> to be notified when the properties of a camera change.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/export.html#module-substance_painter.export" title="substance_painter.export"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.export</span></code></a></dt><dd><ul>
<li><p>Add ability to export the mesh of the current project.</p></li>
<li><p>Add ability to get the default export path used for exporting textures.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.BoundingBox" title="substance_painter.project.BoundingBox"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.BoundingBox</span></code></a> and <a class="reference internal" href="substance_painter/project.html#substance_painter.project.get_scene_bounding_box" title="substance_painter.project.get_scene_bounding_box"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.get_scene_bounding_box()</span></code></a> to query dimensions of the scene.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.10 (Substance 3D painter 9.0.0)<a class="headerlink" href="#substance-3d-painter-9-0-0" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/export.html#module-substance_painter.export" title="substance_painter.export"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.export</span></code></a></dt><dd><ul>
<li><p>Fix textures exported in EXR with 32f bit depth were incorrectly saved in 16f.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.UsdSettings</span></code></a> in <a class="reference internal" href="substance_painter/project.html#substance_painter.project.Settings" title="substance_painter.project.Settings"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.Settings</span></code></a> to support USD parameters for project creation.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.UsdSettings</span></code></a> in <a class="reference internal" href="substance_painter/project.html#substance_painter.project.MeshReloadingSettings" title="substance_painter.project.MeshReloadingSettings"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.MeshReloadingSettings</span></code></a> to support USD parameters for mesh reloading.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.9 (Substance 3D Painter 8.3.1)<a class="headerlink" href="#substance-3d-painter-8-3-1" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/async_utils.html#module-substance_painter.async_utils" title="substance_painter.async_utils"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.async_utils</span></code></a></dt><dd><ul>
<li><p>New module to expose primitives used in async computations.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a></dt><dd><ul>
<li><p>Add a new event <a class="reference internal" href="substance_painter/event.html#substance_painter.event.BakingProcessProgress" title="substance_painter.event.BakingProcessProgress"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessProgress</span></code></a> to be notified about baking process progress.</p></li>
<li><p>Add a new event <a class="reference internal" href="substance_painter/event.html#substance_painter.event.BakingProcessAboutToStart" title="substance_painter.event.BakingProcessAboutToStart"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessAboutToStart</span></code></a> to be notified of the start of a baking process.</p></li>
<li><p>Allow to configure throttling period for <a class="reference internal" href="substance_painter/event.html#substance_painter.event.TextureStateEvent" title="substance_painter.event.TextureStateEvent"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.TextureStateEvent</span></code></a>.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/baking.html#module-substance_painter.baking" title="substance_painter.baking"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.baking</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/baking.html#substance_painter.baking.bake_selected_textures_async" title="substance_painter.baking.bake_selected_textures_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_selected_textures_async()</span></code></a> to bake all selected texture set.</p></li>
<li><p>Fix <a class="reference internal" href="substance_painter/baking.html#substance_painter.baking.bake_async" title="substance_painter.baking.bake_async"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.baking.bake_async()</span></code></a> to take UV Tiles selection into account.</p></li>
<li><p>Now async functions return a <a class="reference internal" href="substance_painter/async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.async_utils.StopSource</span></code></a> to allow for cancellation.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.8 (Substance 3D Painter 8.3.0)<a class="headerlink" href="#substance-3d-painter-8-3-0" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/application.html#module-substance_painter.application" title="substance_painter.application"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.application</span></code></a></dt><dd><ul>
<li><p>New module to expose functionnalities on the application level.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/application.html#substance_painter.application.version_info" title="substance_painter.application.version_info"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.application.version_info()</span></code></a> to query Substance 3D Painter version as a tuple.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/application.html#substance_painter.application.version" title="substance_painter.application.version"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.application.version()</span></code></a> to query Substance 3D Painter version as a string.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a></dt><dd><ul>
<li><p>Add a new event <a class="reference internal" href="substance_painter/event.html#substance_painter.event.BakingProcessEnded" title="substance_painter.event.BakingProcessEnded"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessEnded</span></code></a> to be notified of the end of the baking process.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.last_saved_substance_painter_version" title="substance_painter.project.last_saved_substance_painter_version"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.last_saved_substance_painter_version()</span></code></a> to query wich Substance 3D
Painter version was used to last save the project.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.uv_tile" title="substance_painter.textureset.TextureSet.uv_tile"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet.uv_tile()</span></code></a> to get a specific UV Tile.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/ui.html#module-substance_painter.ui" title="substance_painter.ui"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.ui</span></code></a></dt><dd><ul>
<li><p>Add Baking to <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><code class="xref py py-attr docutils literal notranslate"><span class="pre">substance_painter.ui.UIMode</span></code></a>.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.get_current_mode" title="substance_painter.ui.get_current_mode"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.ui.get_current_mode()</span></code></a> to query the current UI mode.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.switch_to_mode" title="substance_painter.ui.switch_to_mode"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.ui.switch_to_mode()</span></code></a> to switch to some UI mode.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>
<p>This version introduces the modules:</p>
<ul class="simple">
<li><p><a class="reference internal" href="substance_painter/baking.html#module-substance_painter.baking" title="substance_painter.baking"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.baking</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/properties.html#module-substance_painter.properties" title="substance_painter.properties"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.properties</span></code></a></p></li>
</ul>


<h2>0.2.7 (Substance 3D Painter 8.2.0)<a class="headerlink" href="#substance-3d-painter-8-2-0" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a></dt><dd><ul>
<li><p>Add new values to <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.resource.Type</span></code></a> enumeration.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.children" title="substance_painter.resource.Resource.children"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.children()</span></code></a> to query child resources of a resource.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.parent" title="substance_painter.resource.Resource.parent"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.parent()</span></code></a> to query parent resource of a resource.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.MeshMapUsage</span></code></a> to enumerate possible Mesh map usages.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.get_mesh_map_resource" title="substance_painter.textureset.TextureSet.get_mesh_map_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet.get_mesh_map_resource()</span></code></a> to query the resource set as some Mesh map usage.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.set_mesh_map_resource" title="substance_painter.textureset.TextureSet.set_mesh_map_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet.set_mesh_map_resource()</span></code></a> to replace the resource for some Mesh map usage.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/ui.html#module-substance_painter.ui" title="substance_painter.ui"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.ui</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.get_layout" title="substance_painter.ui.get_layout"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.ui.get_layout()</span></code></a> to save UI layout state.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.get_layout_mode" title="substance_painter.ui.get_layout_mode"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.ui.get_layout_mode()</span></code></a> to query the UI mode of a saved state.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.set_layout" title="substance_painter.ui.set_layout"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.ui.set_layout()</span></code></a> to restore a saved UI state.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.reset_layout" title="substance_painter.ui.reset_layout"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.ui.reset_layout()</span></code></a> to reset UI state to default.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a></dt><dd><ul>
<li><p>Add a new event <a class="reference internal" href="substance_painter/event.html#substance_painter.event.TextureStateEvent" title="substance_painter.event.TextureStateEvent"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.TextureStateEvent</span></code></a> to be notified of document textures edition.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.6 (Substance 3D Painter 8.1.2)<a class="headerlink" href="#substance-3d-painter-8-1-2" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p><a class="reference internal" href="substance_painter/project.html#substance_painter.project.create" title="substance_painter.project.create"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.create()</span></code></a> and <a class="reference internal" href="substance_painter/project.html#substance_painter.project.Settings" title="substance_painter.project.Settings"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.Settings</span></code></a>
now supports using a custom unit scale for mesh size.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.all_mesh_names" title="substance_painter.textureset.TextureSet.all_mesh_names"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet.all_mesh_names()</span></code></a> to query the list of mesh names used in a Texture Set.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/uvtile.html#substance_painter.textureset.UVTile.all_mesh_names" title="substance_painter.textureset.UVTile.all_mesh_names"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile.all_mesh_names()</span></code></a> to query the list of mesh names used in a UV Tile.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.resource.Usage</span></code></a> enumeration to describe resource usages.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Type" title="substance_painter.resource.Type"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.resource.Type</span></code></a> enumeration to describe resource types.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.category" title="substance_painter.resource.Resource.category"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.category()</span></code></a> to query the category of a resource.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.usages" title="substance_painter.resource.Resource.usages"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.usages()</span></code></a> to query the usages of a resource.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.gui_name" title="substance_painter.resource.Resource.gui_name"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.gui_name()</span></code></a> to query the name of a resource.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.type" title="substance_painter.resource.Resource.type"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.type()</span></code></a> to query the type of a resource.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.tags" title="substance_painter.resource.Resource.tags"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.tags()</span></code></a> to query the tags of a resource.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.internal_properties" title="substance_painter.resource.Resource.internal_properties"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.internal_properties()</span></code></a> to query a dictionnary of a resource internal properties.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.5 (Substance 3D Painter 8.1.0)<a class="headerlink" href="#substance-3d-painter-8-1-0" title="Link to this heading"> </a></h2>
<p>This version upgrades to Python 3.9.9.</p>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p><a class="reference internal" href="substance_painter/project.html#substance_painter.project.create" title="substance_painter.project.create"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.create()</span></code></a> supports PAINTER_ACE_CONFIG
environment variable, to setup the project color management mode.</p></li>
<li><p><a class="reference internal" href="substance_painter/project.html#substance_painter.project.create" title="substance_painter.project.create"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.create()</span></code></a> now raise an error if OCIO
or PAINTER_ACE_CONFIG environment variable is set to an invalid
configuration.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.4 (Substance 3D Painter 7.4.3)<a class="headerlink" href="#substance-3d-painter-7-4-3" title="Link to this heading"> </a></h2>
<p>This version exposes the tone mapping operator to the Python API, and adds
a hook to execute code when Substance 3D Painter is not busy.</p>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.display</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/display.html#substance_painter.display.get_tone_mapping" title="substance_painter.display.get_tone_mapping"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.display.get_tone_mapping()</span></code></a> to query the
project tone mapping.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/display.html#substance_painter.display.set_tone_mapping" title="substance_painter.display.set_tone_mapping"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.display.set_tone_mapping()</span></code></a> to set the
project tone mapping.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.execute_when_not_busy" title="substance_painter.project.execute_when_not_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.execute_when_not_busy()</span></code></a> to execute
code when Substance 3D Painter is no longer busy.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.3 (Substance 3D Painter 7.4.0)<a class="headerlink" href="#substance-3d-painter-7-4-0" title="Link to this heading"> </a></h2>
<p>This version makes it possible to work with JavaScript from the Python API.
It also allows creating projects with OCIO color management capabilities.</p>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/js.html#module-substance_painter.js" title="substance_painter.js"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.js</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/js.html#substance_painter.js.evaluate" title="substance_painter.js.evaluate"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.js.evaluate()</span></code></a> to evaluate some JavaScript code.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p><a class="reference internal" href="substance_painter/project.html#substance_painter.project.create" title="substance_painter.project.create"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.create()</span></code></a> supports OCIO environment variable,
to setup the project color management mode.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.2 (Substance 3D Painter 7.3.0)<a class="headerlink" href="#substance-3d-painter-7-3-0" title="Link to this heading"> </a></h2>
<p>This version adds functions to help with scripted project loading, project
mesh reloading and UV Tiles manipulation. It also improves error handling
in several modules.</p>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.display</span></code></a></dt><dd><ul>
<li><p><a class="reference internal" href="substance_painter/display.html#substance_painter.display.set_color_lut_resource" title="substance_painter.display.set_color_lut_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.display.set_color_lut_resource()</span></code></a> and
<a class="reference internal" href="substance_painter/display.html#substance_painter.display.set_environment_resource" title="substance_painter.display.set_environment_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.display.set_environment_resource()</span></code></a> throw a
TypeError instead of a ValueError when an argument has a type different
from expected.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/event.html#substance_painter.event.Dispatcher.connect_strong" title="substance_painter.event.Dispatcher.connect_strong"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.event.Dispatcher.connect_strong()</span></code></a> to connect
strong reference callbacks to the event dispatcher.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.is_busy()</span></code></a> to query whether Substance
3D Painter is busy.</p></li>
<li><p>Project saving functions are disabled when Substance 3D Painter is
busy.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.last_imported_mesh_path" title="substance_painter.project.last_imported_mesh_path"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.last_imported_mesh_path()</span></code></a> to query the
path to the last imported mesh.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.reload_mesh" title="substance_painter.project.reload_mesh"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.reload_mesh()</span></code></a> to load a new mesh in the
current opened project.</p></li>
<li><p><a class="reference internal" href="substance_painter/project.html#substance_painter.project.create" title="substance_painter.project.create"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.create()</span></code></a> throws a TypeError instead
of a ValueError when its settings argument has a type different from
expected.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.show_resources_in_ui" title="substance_painter.resource.show_resources_in_ui"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.show_resources_in_ui()</span></code></a> to highlight a
list of resources in the aplication UI.</p></li>
<li><p><a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.update_layer_stack_resource" title="substance_painter.resource.update_layer_stack_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.update_layer_stack_resource()</span></code></a> throws
a TypeError when an argument has a type different from expected.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile</span></code></a> to interact with UV Tiles.
Add ability to manipulate UV Tiles resolutions.</p></li>
<li><p><a class="reference internal" href="substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.from_name" title="substance_painter.textureset.TextureSet.from_name"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet.from_name()</span></code></a> throws a
TypeError instead of a ValueError when its argument has a type different
from expected.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.1 (Substance 3D Painter 7.2.1)<a class="headerlink" href="#substance-3d-painter-7-2-1" title="Link to this heading"> </a></h2>
<p>This version adds functions to list and update resources used by the layer
stack.</p>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.list_layer_stack_resources" title="substance_painter.resource.list_layer_stack_resources"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.list_layer_stack_resources()</span></code></a> to
list resources used by the layer stack and mesh maps.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.update_layer_stack_resource" title="substance_painter.resource.update_layer_stack_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.update_layer_stack_resource()</span></code></a> to
update resources used by the layer stack and mesh maps.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.2.0 (Substance 3D Painter 7.2.0)<a class="headerlink" href="#substance-3d-painter-7-2-0" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource.show_in_ui" title="substance_painter.resource.Resource.show_in_ui"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Resource.show_in_ui()</span></code></a> to highlight
a resource in the UI.</p></li>
<li><p>Modify <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Shelves.user_shelf" title="substance_painter.resource.Shelves.user_shelf"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.Shelves.user_shelf()</span></code></a> to take
user settings into account.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></dt><dd><ul>
<li><p>Modify <a class="reference internal" href="substance_painter/textureset/index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.ChannelType</span></code></a> to include
the new available texture channels.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/ui.html#module-substance_painter.ui" title="substance_painter.ui"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.ui</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/ui.html#substance_painter.ui.add_plugins_toolbar_widget" title="substance_painter.ui.add_plugins_toolbar_widget"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.ui.add_plugins_toolbar_widget()</span></code></a> to add
a widget to the plugins toolbar.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.1.0 (Substance Painter 7.1.0)<a class="headerlink" href="#substance-painter-7-1-0" title="Link to this heading"> </a></h2>
<p>This version adds several features to manage resources, shelves and UV Tiles.</p>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/event.html#substance_painter.event.ProjectEditionEntered" title="substance_painter.event.ProjectEditionEntered"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ProjectEditionEntered</span></code></a> event.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/event.html#substance_painter.event.ProjectEditionLeft" title="substance_painter.event.ProjectEditionLeft"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ProjectEditionLeft</span></code></a> event.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/event.html#substance_painter.event.ShelfCrawlingStarted" title="substance_painter.event.ShelfCrawlingStarted"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ShelfCrawlingStarted</span></code></a> event.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/event.html#substance_painter.event.ShelfCrawlingEnded" title="substance_painter.event.ShelfCrawlingEnded"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ShelfCrawlingEnded</span></code></a> event.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.is_in_edition_state" title="substance_painter.project.is_in_edition_state"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.is_in_edition_state()</span></code></a>.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Resource" title="substance_painter.resource.Resource"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.resource.Resource</span></code></a> to manipulate substance
painter resources.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.search" title="substance_painter.resource.search"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.resource.search()</span></code></a> to search for available
resources.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Shelf" title="substance_painter.resource.Shelf"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.resource.Shelf</span></code></a>.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/resource.html#substance_painter.resource.Shelves" title="substance_painter.resource.Shelves"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.resource.Shelves</span></code></a> for shelves manipulation
facilities.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.all_uv_tiles" title="substance_painter.textureset.TextureSet.all_uv_tiles"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet.all_uv_tiles()</span></code></a>.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/textureset.html#substance_painter.textureset.TextureSet.has_uv_tiles" title="substance_painter.textureset.TextureSet.has_uv_tiles"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet.has_uv_tiles()</span></code></a>.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile</span></code></a>.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.0.3 (Substance Painter 6.2.2)<a class="headerlink" href="#substance-painter-6-2-2" title="Link to this heading"> </a></h2>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/export.html#module-substance_painter.export" title="substance_painter.export"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.export</span></code></a></dt><dd><ul>
<li><p>Document the use of existing export presets.</p></li>
<li><p>Add a module overview example.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/channel.html#substance_painter.textureset.Channel.type" title="substance_painter.textureset.Channel.type"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.Channel.type()</span></code></a>.</p></li>
<li><p>Add <a class="reference internal" href="substance_painter/textureset/stack.html#substance_painter.textureset.Stack.all_channels" title="substance_painter.textureset.Stack.all_channels"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.textureset.Stack.all_channels()</span></code></a>.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.0.2 (Substance Painter 6.2.0)<a class="headerlink" href="#substance-painter-6-2-0" title="Link to this heading"> </a></h2>
<p>This version adapts the module <a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a> to the new
UV Tile workflow.</p>
<ul class="simple">
<li><dl class="simple">
<dt><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></dt><dd><ul>
<li><p>Add <a class="reference internal" href="substance_painter/project.html#substance_painter.project.ProjectWorkflow" title="substance_painter.project.ProjectWorkflow"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.ProjectWorkflow</span></code></a>.</p></li>
<li><p>Change the constructor of <a class="reference internal" href="substance_painter/project.html#substance_painter.project.Settings" title="substance_painter.project.Settings"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.project.Settings</span></code></a>.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>


<h2>0.0.1 (Substance Painter 6.1.0)<a class="headerlink" href="#substance-painter-6-1-0" title="Link to this heading"> </a></h2>
<p>Initial version of the Substance Painter Python API.</p>
<p>It uses Python 3.7.6 and introduces the modules:</p>
<ul class="simple">
<li><p><a class="reference internal" href="substance_painter/index.html#module-substance_painter" title="substance_painter"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.display</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/exception.html#module-substance_painter.exception" title="substance_painter.exception"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.exception</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/export.html#module-substance_painter.export" title="substance_painter.export"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.export</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/logging.html#module-substance_painter.logging" title="substance_painter.logging"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.logging</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/textureset/index.html#module-substance_painter.textureset" title="substance_painter.textureset"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.textureset</span></code></a></p></li>
<li><p><a class="reference internal" href="substance_painter/ui.html#module-substance_painter.ui" title="substance_painter.ui"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.ui</span></code></a></p></li>
<li><p><a class="reference internal" href="plugins/substance_painter_plugins.html#module-substance_painter_plugins" title="substance_painter_plugins"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter_plugins</span></code></a></p></li>
</ul>


</div>
</div>

</div>
</div>

</div>


