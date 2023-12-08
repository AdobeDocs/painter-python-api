---
title: display - Painter Python API
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

<span id="display-module"></span><h1>display module<a class="headerlink" href="#module-substance_painter.display" title="Link to this heading"> </a></h1>
<p>This module exposes functions that change how the model of a project is presented
in the viewports. They correspond to settings available in the “Display
Settings” window.</p>
<p>The Environment Map used to light the scene can be retrieved with
<a class="reference internal" href="#substance_painter.display.get_environment_resource" title="substance_painter.display.get_environment_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">get_environment_resource()</span></code></a>, or set with <a class="reference internal" href="#substance_painter.display.set_environment_resource" title="substance_painter.display.set_environment_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">set_environment_resource()</span></code></a>.
The look up table (LUT) used as a Color Profile can be retrieved with
<a class="reference internal" href="#substance_painter.display.get_color_lut_resource" title="substance_painter.display.get_color_lut_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">get_color_lut_resource()</span></code></a>, or set with <a class="reference internal" href="#substance_painter.display.set_color_lut_resource" title="substance_painter.display.set_color_lut_resource"><code class="xref py py-func docutils literal notranslate"><span class="pre">set_color_lut_resource()</span></code></a>.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.display

# Show the currently used color profile:
color_lut = substance_painter.display.get_color_lut_resource()
if (color_lut != None):
	print(color_lut.url())
else:
	print("No color profile is used.")

# Set a different color profile:
new_color_lut = substance_painter.resource.ResourceID(context="starter_assets",
													  name="sepia")
substance_painter.display.set_color_lut_resource(new_color_lut)


# Show the currently used environment map:
envmap = substance_painter.display.get_environment_resource()
print(envmap.url())

# Set a different environment map:
new_envmap = substance_painter.resource.ResourceID(context="starter_assets",
												   name="Bonifacio Street")
substance_painter.display.set_environment_resource(new_envmap)


# Show the currently active tone mapping operator:
try:
	tone_mapping = substance_painter.display.get_tone_mapping()
	print(tone_mapping)
except RuntimeError:
	print("The project is color managed; tone mapping is not available")

# Set a different tone mapping:
try:
	new_tone_mapping = substance_painter.display.ToneMappingFunction.ACES
	substance_painter.display.set_tone_mapping(new_tone_mapping)
except RuntimeError:
	print("The project is color managed; tone mapping is not available")
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-color-profile">Color Profile documentation</a>,
<a class="reference external" href="https://www.adobe.com/go/painter-environment-settings">Environment Settings documentation</a>,
<a class="reference external" href="https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html">Camera Settings documentation</a>.</p>
</div>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.display.ToneMappingFunction">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">ToneMappingFunction</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.display.ToneMappingFunction" title="Link to this definition"> </a></dt>
<dd><p>Tone mapping function used in display.</p>
<p>This corresponds to the “Tone mapping” list in the “Camera settings” section
of the “Display settings” view.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Linear</span></code></p></td>
<td><p>Transformation from linear to sRGB without any color remapping.
Color values above 1 are clamped.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">ACES</span></code></p></td>
<td><p>Use the standard color remapping from the Academy Color Encoding
System (ACES).</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.get_environment_resource">
<span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">get_environment_resource</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><span class="pre">ResourceID</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.display.get_environment_resource" title="Link to this definition"> </a></dt>
<dd><p>Get the environment map resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The environment map resource or None.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.set_environment_resource">
<span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">set_environment_resource</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">new_env_map</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><span class="pre">ResourceID</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.display.set_environment_resource" title="Link to this definition"> </a></dt>
<dd><p>Set the environment map resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>new_env_map</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a>) – The new environment map resource.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>TypeError</strong> – If <code class="docutils literal notranslate"><span class="pre">new_env_map</span></code> is not a ResourceID.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><strong>ResourceNotFoundError</strong></a> – If the environment map <code class="docutils literal notranslate"><span class="pre">new_env_map</span></code> is not found.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.get_color_lut_resource">
<span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">get_color_lut_resource</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><span class="pre">ResourceID</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.display.get_color_lut_resource" title="Link to this definition"> </a></dt>
<dd><p>Get the color profile LUT resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The color profile LUT resource or None.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.set_color_lut_resource">
<span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">set_color_lut_resource</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">new_color_lut</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><span class="pre">ResourceID</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.display.set_color_lut_resource" title="Link to this definition"> </a></dt>
<dd><p>Set the color profile LUT resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>new_color_lut</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a>) – The new color profile LUT.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>TypeError</strong> – If <code class="docutils literal notranslate"><span class="pre">new_color_lut</span></code> is not a ResourceID.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><strong>ResourceNotFoundError</strong></a> – If the color profile <code class="docutils literal notranslate"><span class="pre">new_color_lut</span></code> is not found.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.get_tone_mapping">
<span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">get_tone_mapping</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction"><span class="pre">ToneMappingFunction</span></a></span></span><a class="headerlink" href="#substance_painter.display.get_tone_mapping" title="Link to this definition"> </a></dt>
<dd><p>Get the tone mapping operator used to display the current project.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The tone mapping function is disabled when color management is enabled.
In that case trying to call get_tone_mapping will throw a RuntimeError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p><dl class="simple">
<dt>The tone mapping function currently used by</dt><dd><p>the project.</p>
</dd>
</dl>
</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction">ToneMappingFunction</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>RuntimeError</strong> – If the project is color managed.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.set_tone_mapping">
<span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">set_tone_mapping</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">new_tone_mapping</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction"><span class="pre">ToneMappingFunction</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.display.set_tone_mapping" title="Link to this definition"> </a></dt>
<dd><p>Set the tone mapping operator to display the current project.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The tone mapping function is disabled when color management is enabled.
In that case trying to call set_tone_mapping will throw a RuntimeError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>new_tone_mapping</strong> (<a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction"><em>ToneMappingFunction</em></a>) – The new tone mapping function
to use in the project.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><strong>TypeError</strong> – If <code class="docutils literal notranslate"><span class="pre">new_tone_mapping</span></code> is not a ToneMappingFunction.</p></li>
<li><p><strong>RuntimeError</strong> – If the project is color managed.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.display.CameraProjectionType">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">CameraProjectionType</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.display.CameraProjectionType" title="Link to this definition"> </a></dt>
<dd><p>Camera projection type.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Perspective</span></code></p></td>
<td><p>Objects appear smaller when they are far from the camera.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Orthographic</span></code></p></td>
<td><p>Preserves relative size of objects regardless its distance from the camera.</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.display.Camera">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.display.</span></span><span class="sig-name descname"><span class="pre">Camera</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">_camera_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.display.Camera" title="Link to this definition"> </a></dt>
<dd><p>Allows the manipulation of the properties of an existing Camera.
Coordinates of the camera are defined in the scene space.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.display
import substance_painter.project

substance_painter.project.open("C:/projects/MeetMat.spp")

# Get the dimensions of the scene
bounding_box = substance_painter.project.get_scene_bounding_box()

# Get the main camera
camera = substance_painter.display.Camera.get_default_camera()

# Update camera properties
camera.projection_type = substance_painter.display.CameraProjectionType.Perspective
# Move the camera away from the center of the scene
camera.position = [
	bounding_box.center[0] + 15,
	bounding_box.center[1],
	bounding_box.center[2] + 15]
# Rotate the camera (45° of Y-axis)
camera.rotation = [0, 45, 0]
# Update the camera field of view (in degrees)
camera.field_of_view = 50
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference external" href="https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html">Camera Settings documentation</a>.
<a class="reference internal" href="project.html#substance_painter.project.get_scene_bounding_box" title="substance_painter.project.get_scene_bounding_box"><code class="xref py py-func docutils literal notranslate"><span class="pre">substance_painter.project.get_scene_bounding_box()</span></code></a></p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.display.Camera.get_default_camera">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">get_default_camera</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.display.Camera" title="substance_painter.display.Camera"><span class="pre">Camera</span></a></span></span><a class="headerlink" href="#substance_painter.display.Camera.get_default_camera" title="Link to this definition"> </a></dt>
<dd><p>Get the default camera.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The default (main) camera.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="#substance_painter.display.Camera" title="substance_painter.display.Camera">Camera</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>RuntimeError</strong> – If no camera has been found.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.position">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">position</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">]</span></span></em><a class="headerlink" href="#substance_painter.display.Camera.position" title="Link to this definition"> </a></dt>
<dd><p>The position (x,y,z) of the camera.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the position of the camera.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the position of the camera.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>List[float]</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.rotation">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">rotation</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">]</span></span></em><a class="headerlink" href="#substance_painter.display.Camera.rotation" title="Link to this definition"> </a></dt>
<dd><p>The rotation (x,y,z) of the camera as Euler angles in degrees.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the rotation of the camera.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the rotation of the camera.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>List[float]</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.field_of_view">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">field_of_view</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">float</span></em><a class="headerlink" href="#substance_painter.display.Camera.field_of_view" title="Link to this definition"> </a></dt>
<dd><p>The field of view of the camera in degrees.
This value is only used if the <code class="docutils literal notranslate"><span class="pre">CameraProjectionType</span></code> is <code class="docutils literal notranslate"><span class="pre">Perspective</span></code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the field of view of the camera.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the field of view of the camera. Value is clamped between 3 and 179.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>float</p>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Modifing the field of view will change the focal length.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.focal_length">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">focal_length</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">float</span></em><a class="headerlink" href="#substance_painter.display.Camera.focal_length" title="Link to this definition"> </a></dt>
<dd><p>The focal length of the camera in mm.
This value is only used if the <code class="docutils literal notranslate"><span class="pre">CameraProjectionType</span></code> is <code class="docutils literal notranslate"><span class="pre">Perspective</span></code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the focal length of the camera.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the focal length of the camera. Value is clamped between 1 and 500.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>float</p>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Modifing the focal length will change the field of view.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.focus_distance">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">focus_distance</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">float</span></em><a class="headerlink" href="#substance_painter.display.Camera.focus_distance" title="Link to this definition"> </a></dt>
<dd><p>The focus distance of the camera.
Defines the distance at which the focus point is located.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the focus distance of the camera.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the focus distance of the camera.
Value is clamped between 0 and 10 * scene radius.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>float</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.aperture">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">aperture</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">float</span></em><a class="headerlink" href="#substance_painter.display.Camera.aperture" title="Link to this definition"> </a></dt>
<dd><p>The aperture of the camera. Defines how wide the Depth of Field will be.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the lens radius.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the lens radius. Value is clamped between 0 and 1 * scene radius.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>float</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.orthographic_height">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">orthographic_height</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">float</span></em><a class="headerlink" href="#substance_painter.display.Camera.orthographic_height" title="Link to this definition"> </a></dt>
<dd><p>The orthographic height of the camera.
This value is only used if the <code class="docutils literal notranslate"><span class="pre">CameraProjectionType</span></code> is <code class="docutils literal notranslate"><span class="pre">Orthographic</span></code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the orthographic height of the camera.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the orthographic height of the camera.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>float</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.projection_type">
<em class="property"><span class="pre">property</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">projection_type</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.display.CameraProjectionType" title="substance_painter.display.CameraProjectionType"><span class="pre">CameraProjectionType</span></a></em><a class="headerlink" href="#substance_painter.display.Camera.projection_type" title="Link to this definition"> </a></dt>
<dd><p>The projection type (perspective or orthographic) of the camera.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter<span class="colon">:</span></dt>
<dd class="field-odd"><p>Returns the projection type of the camera.</p>
</dd>
<dt class="field-even">Setter<span class="colon">:</span></dt>
<dd class="field-even"><p>Sets the projection type of the camera.</p>
</dd>
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.display.CameraProjectionType" title="substance_painter.display.CameraProjectionType">CameraProjectionType</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


