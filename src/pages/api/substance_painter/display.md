---
title: display - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>display module<a class="headerlink" href="#module-substance_painter.display" title="Link to this heading"> </a></h1>
<p class>This module exposes functions that change how the model of a project is presented
in the viewports. They correspond to settings available in the “Display
Settings” window.</p>
<p class>The Environment Map used to light the scene can be retrieved with
<a class="reference internal" href="#substance_painter.display.get_environment_resource" title="substance_painter.display.get_environment_resource"><code class="xref py py-func docutils literal notranslate">get_environment_resource()</code></a>, or set with <a class="reference internal" href="#substance_painter.display.set_environment_resource" title="substance_painter.display.set_environment_resource"><code class="xref py py-func docutils literal notranslate">set_environment_resource()</code></a>.
The look up table (LUT) used as a Color Profile can be retrieved with
<a class="reference internal" href="#substance_painter.display.get_color_lut_resource" title="substance_painter.display.get_color_lut_resource"><code class="xref py py-func docutils literal notranslate">get_color_lut_resource()</code></a>, or set with <a class="reference internal" href="#substance_painter.display.set_color_lut_resource" title="substance_painter.display.set_color_lut_resource"><code class="xref py py-func docutils literal notranslate">set_color_lut_resource()</code></a>.</p>
<p class>Example</p>


```python
import substance_painter.display

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
```



<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate">substance_painter.resource</code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-color-profile">Color Profile documentation</a>,
<a class="reference external" href="https://www.adobe.com/go/painter-environment-settings">Environment Settings documentation</a>,
<a class="reference external" href="https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html">Camera Settings documentation</a>.</p>
</div>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.display.ToneMappingFunction">
<em class="property">class </em>substance_painter.display.ToneMappingFunction(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.display.ToneMappingFunction" title="Link to this definition"> </a></dt>
<dd><p class>Tone mapping function used in display.</p>
<p class>This corresponds to the “Tone mapping” list in the “Camera settings” section
of the “Display settings” view.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Linear</code></p></td>
<td><p class>Transformation from linear to sRGB without any color remapping.
Color values above 1 are clamped.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">ACES</code></p></td>
<td><p class>Use the standard color remapping from the Academy Color Encoding
System (ACES).</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.get_environment_resource">
substance_painter.display.get_environment_resource() → <a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a> | None<a class="headerlink" href="#substance_painter.display.get_environment_resource" title="Link to this definition"> </a></dt>
<dd><p class>Get the environment map resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The environment map resource or None.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.set_environment_resource">
substance_painter.display.set_environment_resource(<em class="sig-param">new_env_map: <a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></em>) → None<a class="headerlink" href="#substance_painter.display.set_environment_resource" title="Link to this definition"> </a></dt>
<dd><p class>Set the environment map resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>new_env_map</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a>) – The new environment map resource.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>TypeError</strong> – If <code class="docutils literal notranslate">new_env_map</code> is not a ResourceID.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><strong>ResourceNotFoundError</strong></a> – If the environment map <code class="docutils literal notranslate">new_env_map</code> is not found.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.get_color_lut_resource">
substance_painter.display.get_color_lut_resource() → <a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a> | None<a class="headerlink" href="#substance_painter.display.get_color_lut_resource" title="Link to this definition"> </a></dt>
<dd><p class>Get the color profile LUT resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The color profile LUT resource or None.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.set_color_lut_resource">
substance_painter.display.set_color_lut_resource(<em class="sig-param">new_color_lut: <a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></em>) → None<a class="headerlink" href="#substance_painter.display.set_color_lut_resource" title="Link to this definition"> </a></dt>
<dd><p class>Set the color profile LUT resource of the active project.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>new_color_lut</strong> (<a class="reference internal" href="resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a>) – The new color profile LUT.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>TypeError</strong> – If <code class="docutils literal notranslate">new_color_lut</code> is not a ResourceID.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><strong>ResourceNotFoundError</strong></a> – If the color profile <code class="docutils literal notranslate">new_color_lut</code> is not found.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.get_tone_mapping">
substance_painter.display.get_tone_mapping() → <a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction">ToneMappingFunction</a><a class="headerlink" href="#substance_painter.display.get_tone_mapping" title="Link to this definition"> </a></dt>
<dd><p class>Get the tone mapping operator used to display the current project.</p>
<div class="admonition note">
<p class>Note</p>
<p class>The tone mapping function is disabled when color management is enabled.
In that case trying to call get_tone_mapping will throw a RuntimeError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><dl class="simple">
<dt>The tone mapping function currently used by</dt><dd><p class>the project.</p>
</dd>
</dl>
</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction">ToneMappingFunction</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>RuntimeError</strong> – If the project is color managed.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.display.set_tone_mapping">
substance_painter.display.set_tone_mapping(<em class="sig-param">new_tone_mapping: <a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction">ToneMappingFunction</a></em>) → None<a class="headerlink" href="#substance_painter.display.set_tone_mapping" title="Link to this definition"> </a></dt>
<dd><p class>Set the tone mapping operator to display the current project.</p>
<div class="admonition note">
<p class>Note</p>
<p class>The tone mapping function is disabled when color management is enabled.
In that case trying to call set_tone_mapping will throw a RuntimeError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>new_tone_mapping</strong> (<a class="reference internal" href="#substance_painter.display.ToneMappingFunction" title="substance_painter.display.ToneMappingFunction"><em>ToneMappingFunction</em></a>) – The new tone mapping function
to use in the project.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>TypeError</strong> – If <code class="docutils literal notranslate">new_tone_mapping</code> is not a ToneMappingFunction.</p></li>
<li><p class><strong>RuntimeError</strong> – If the project is color managed.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.display.CameraProjectionType">
<em class="property">class </em>substance_painter.display.CameraProjectionType(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.display.CameraProjectionType" title="Link to this definition"> </a></dt>
<dd><p class>Camera projection type.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Perspective</code></p></td>
<td><p class>Objects appear smaller when they are far from the camera.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">Orthographic</code></p></td>
<td><p class>Preserves relative size of objects regardless its distance from the camera.</p></td>
</tr>
</tbody>
</table>
</dd></dl>

<dt class="sig sig-object py" id="substance_painter.display.Camera">
<em class="property">class </em>substance_painter.display.Camera(<em class="sig-param">_camera_id: int</em>)<a class="headerlink" href="#substance_painter.display.Camera" title="Link to this definition"> </a></dt>
<p class>Allows the manipulation of the properties of an existing Camera.
Coordinates of the camera are defined in the scene space.</p>
<p class>Example</p>


```python
import substance_painter.display
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
```



<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference external" href="https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html">Camera Settings documentation</a>.
<a class="reference internal" href="project.html#substance_painter.project.get_scene_bounding_box" title="substance_painter.project.get_scene_bounding_box"><code class="xref py py-func docutils literal notranslate">substance_painter.project.get_scene_bounding_box()</code></a></p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.display.Camera.get_default_camera">
<em class="property">static </em>get_default_camera() → <a class="reference internal" href="#substance_painter.display.Camera" title="substance_painter.display.Camera">Camera</a><a class="headerlink" href="#substance_painter.display.Camera.get_default_camera" title="Link to this definition"> </a></dt>
<dd><p class>Get the default camera.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The default (main) camera.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="#substance_painter.display.Camera" title="substance_painter.display.Camera">Camera</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>RuntimeError</strong> – If no camera has been found.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.position">
<em class="property">property </em>position<em class="property">: List[float]</em><a class="headerlink" href="#substance_painter.display.Camera.position" title="Link to this definition"> </a></dt>
<dd><p class>The position (x,y,z) of the camera.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the position of the camera.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the position of the camera.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>List[float]</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.rotation">
<em class="property">property </em>rotation<em class="property">: List[float]</em><a class="headerlink" href="#substance_painter.display.Camera.rotation" title="Link to this definition"> </a></dt>
<dd><p class>The rotation (x,y,z) of the camera as Euler angles in degrees.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the rotation of the camera.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the rotation of the camera.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>List[float]</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.field_of_view">
<em class="property">property </em>field_of_view<em class="property">: float</em><a class="headerlink" href="#substance_painter.display.Camera.field_of_view" title="Link to this definition"> </a></dt>
<dd><p class>The field of view of the camera in degrees.
This value is only used if the <code class="docutils literal notranslate">CameraProjectionType</code> is <code class="docutils literal notranslate">Perspective</code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the field of view of the camera.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the field of view of the camera. Value is clamped between 3 and 179.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>float</p>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>Modifing the field of view will change the focal length.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.focal_length">
<em class="property">property </em>focal_length<em class="property">: float</em><a class="headerlink" href="#substance_painter.display.Camera.focal_length" title="Link to this definition"> </a></dt>
<dd><p class>The focal length of the camera in mm.
This value is only used if the <code class="docutils literal notranslate">CameraProjectionType</code> is <code class="docutils literal notranslate">Perspective</code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the focal length of the camera.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the focal length of the camera. Value is clamped between 1 and 500.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>float</p>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>Modifing the focal length will change the field of view.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.focus_distance">
<em class="property">property </em>focus_distance<em class="property">: float</em><a class="headerlink" href="#substance_painter.display.Camera.focus_distance" title="Link to this definition"> </a></dt>
<dd><p class>The focus distance of the camera.
Defines the distance at which the focus point is located.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the focus distance of the camera.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the focus distance of the camera.
Value is clamped between 0 and 10 * scene radius.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>float</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.aperture">
<em class="property">property </em>aperture<em class="property">: float</em><a class="headerlink" href="#substance_painter.display.Camera.aperture" title="Link to this definition"> </a></dt>
<dd><p class>The aperture of the camera. Defines how wide the Depth of Field will be.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the lens radius.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the lens radius. Value is clamped between 0 and 1 * scene radius.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>float</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.orthographic_height">
<em class="property">property </em>orthographic_height<em class="property">: float</em><a class="headerlink" href="#substance_painter.display.Camera.orthographic_height" title="Link to this definition"> </a></dt>
<dd><p class>The orthographic height of the camera.
This value is only used if the <code class="docutils literal notranslate">CameraProjectionType</code> is <code class="docutils literal notranslate">Orthographic</code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the orthographic height of the camera.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the orthographic height of the camera.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>float</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py property">
<dt class="sig sig-object py" id="substance_painter.display.Camera.projection_type">
<em class="property">property </em>projection_type<em class="property">: <a class="reference internal" href="#substance_painter.display.CameraProjectionType" title="substance_painter.display.CameraProjectionType">CameraProjectionType</a></em><a class="headerlink" href="#substance_painter.display.Camera.projection_type" title="Link to this definition"> </a></dt>
<dd><p class>The projection type (perspective or orthographic) of the camera.</p>
<dl class="field-list simple">
<dt class="field-odd">Getter:</dt>
<dd class="field-odd"><p class>Returns the projection type of the camera.</p>
</dd>
<dt class="field-even">Setter:</dt>
<dd class="field-even"><p class>Sets the projection type of the camera.</p>
</dd>
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.display.CameraProjectionType" title="substance_painter.display.CameraProjectionType">CameraProjectionType</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>











