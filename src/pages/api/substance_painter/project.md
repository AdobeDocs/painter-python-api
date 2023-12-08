---
title: project - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>project module<a class="headerlink" href="#module-substance_painter.project" title="Link to this heading"> </a></h1>
<p class>This module allows to open, create, save and close projects, and change some of
their properties.</p>
<p class>First, here is a complete example showing how to use this module:</p>


```python
import substance_painter.project

# A few declarations used in this example:
workFolder = "C:/MyWorkDir"
meshFile = workFolder+"/MeetMat.FBX"
templateFile = workFolder+"/MyTemplate.spt"
mySettings = substance_painter.project.Settings(
	import_cameras=True,
	normal_map_format=substance_painter.project.NormalMapFormat.OpenGL)

# This should print nothing if you just opened Substance 3D Painter,
# since no project is opened:
if substance_painter.project.is_open():
	print("There is already a project opened!")


# Create a project from a file, import cameras from the file, and set up
# the project for OpenGL:
substance_painter.project.create(mesh_file_path=meshFile, settings=mySettings)

# Show the current state of the project:
if substance_painter.project.is_open():
	print("The project was successfully created.")
if substance_painter.project.needs_saving():
	print("The project hasn't been saved yet.")
# At this stage the file path is empty:
print("The file path of the project is: '{0}'"
	.format(substance_painter.project.file_path()))


# Save the project to a file:
substance_painter.project.save_as(workFolder+"/MyNewProject.spp") # No errors
if not substance_painter.project.needs_saving():
	print("As expected, there is nothing to save since this was just done.")
print("The file path of the project is now: '{0}'"
	.format(substance_painter.project.file_path()))
print("The name of the project is now: '{0}'"
	.format(substance_painter.project.name()))

# ...
# Do some painting here.
# ...

# Create a backup copy of the project, but keep on working on the initial project:
substance_painter.project.save_as_copy(workFolder+"/MyBackupProject.spp")
if not substance_painter.project.needs_saving():
	print("Even though a back copy was made, the project still has to be saved.")
print("The file path of the project is still: '{0}'"
	.format(substance_painter.project.file_path()))

# ...
# Do some more painting here.
# Suppose you make a terrible mistake and want to revert to the backup copy.
# ...

# Close the current project; all unsaved changes are lost!
substance_painter.project.close()
if not substance_painter.project.is_open():
	print("No project is opened anymore.")

# Open the backup copy:
substance_painter.project.open(workFolder+"/MyBackupProject.spp")
if substance_painter.project.is_open()
	print("Our project is back!")


# We can save a template from the project:
substance_painter.project.save_as_template(templateFile, "01_Head")
substance_painter.project.close()

# We can now create a new project with that template file:
substance_painter.project.create(mesh_file_path=meshFile,
								 template_file_path=templateFile)

# End of our little example...
substance_painter.project.close()
```



<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox">
<em class="property">class </em>substance_painter.project.BoundingBox(<em class="sig-param">dimensions: List[float]</em>, <em class="sig-param">center: List[float]</em>, <em class="sig-param">radius: float</em>)<a class="headerlink" href="#substance_painter.project.BoundingBox" title="Link to this definition"> </a></dt>
<dd><p class>Axis-aligned bounding box (AABB).</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox.dimensions">
dimensions<a class="headerlink" href="#substance_painter.project.BoundingBox.dimensions" title="Link to this definition"> </a></dt>
<dd><p class>The dimensions (x,y,z) of the bounding box.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>List[float]</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox.center">
center<a class="headerlink" href="#substance_painter.project.BoundingBox.center" title="Link to this definition"> </a></dt>
<dd><p class>The center (x,y,z) of the bounding box..</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>List[float]</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox.radius">
radius<a class="headerlink" href="#substance_painter.project.BoundingBox.radius" title="Link to this definition"> </a></dt>
<dd><p class>The radius of the bounding box.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>float</p>
</dd>
</dl>
</dd></dl>
<p class>See also:
<a class="reference internal" href="#substance_painter.project.get_scene_bounding_box" title="substance_painter.project.get_scene_bounding_box"><code class="xref py py-func docutils literal notranslate">get_scene_bounding_box()</code></a>,</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.execute_when_not_busy">
substance_painter.project.execute_when_not_busy(<em class="sig-param">callback: Callable[[], None]</em>) → None<a class="headerlink" href="#substance_painter.project.execute_when_not_busy" title="Link to this definition"> </a></dt>
<dd><p class>Execute the given callback when Substance 3D Painter is not busy.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><em>]</em><em>, </em><em>None</em><em>]</em>) – The callback to be executed.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate">is_busy()</code></a>,
<a class="reference internal" href="event.html#substance_painter.event.BusyStatusChanged" title="substance_painter.event.BusyStatusChanged"><code class="xref py py-class docutils literal notranslate">substance_painter.event.BusyStatusChanged</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.file_path">
substance_painter.project.file_path() → str | None<a class="headerlink" href="#substance_painter.project.file_path" title="Link to this definition"> </a></dt>
<dd><p class>Return the file path of the current project. This is the path where the
project will be written to when it is saved.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The file path of the current project, or <code class="docutils literal notranslate">None</code> if the project
hasn’t been saved yet.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.save" title="substance_painter.project.save"><code class="xref py py-func docutils literal notranslate">save()</code></a>,
<a class="reference internal" href="#substance_painter.project.save_as" title="substance_painter.project.save_as"><code class="xref py py-func docutils literal notranslate">save_as()</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.get_scene_bounding_box">
substance_painter.project.get_scene_bounding_box() → <a class="reference internal" href="#substance_painter.project.BoundingBox" title="substance_painter.project.BoundingBox">BoundingBox</a><a class="headerlink" href="#substance_painter.project.get_scene_bounding_box" title="Link to this definition"> </a></dt>
<dd><p class>Return the bounding box of the scene.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The bounding box of the scene.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="#substance_painter.project.BoundingBox" title="substance_painter.project.BoundingBox">BoundingBox</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.get_uuid">
substance_painter.project.get_uuid() → UUID<a class="headerlink" href="#substance_painter.project.get_uuid" title="Link to this definition"> </a></dt>
<dd><p class>Return the UUID of the current project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The UUID of the current project.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>uuid.UUID</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.is_busy">
substance_painter.project.is_busy() → bool<a class="headerlink" href="#substance_painter.project.is_busy" title="Link to this definition"> </a></dt>
<dd><p class>Check if Substance 3D Painter is currently busy.
If busy, the project cannot be saved at the moment.
The application may be busy because no project is in edition state,
or a long process such as baking/export/unwrap process is ongoing.
The corresponding BusyStatusChanged event is fired when the busy state changes.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if the project is ready to be saved,
<code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.execute_when_not_busy" title="substance_painter.project.execute_when_not_busy"><code class="xref py py-func docutils literal notranslate">execute_when_not_busy()</code></a>,
<a class="reference internal" href="event.html#substance_painter.event.BusyStatusChanged" title="substance_painter.event.BusyStatusChanged"><code class="xref py py-class docutils literal notranslate">substance_painter.event.BusyStatusChanged</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.is_in_edition_state">
substance_painter.project.is_in_edition_state() → bool<a class="headerlink" href="#substance_painter.project.is_in_edition_state" title="Link to this definition"> </a></dt>
<dd><p class>Check if the current project is ready to work with.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class><code class="docutils literal notranslate">True</code> if the project is ready to work with,
<code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>bool</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="event.html#substance_painter.event.ProjectEditionEntered" title="substance_painter.event.ProjectEditionEntered"><code class="xref py py-class docutils literal notranslate">substance_painter.event.ProjectEditionEntered</code></a>,
<a class="reference internal" href="event.html#substance_painter.event.ProjectEditionLeft" title="substance_painter.event.ProjectEditionLeft"><code class="xref py py-class docutils literal notranslate">substance_painter.event.ProjectEditionLeft</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.last_saved_substance_painter_version">
substance_painter.project.last_saved_substance_painter_version() → Tuple[int, int, int] | None<a class="headerlink" href="#substance_painter.project.last_saved_substance_painter_version" title="Link to this definition"> </a></dt>
<dd><p class>Return the version of Substance 3D Painter used to last save the project, or None
if the project is unsaved or was saved with version &lt;= 8.2.0.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The concerned version of Substance 3D Painter, as a major/minor/patch
tuple.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>Tuple(int, int, int)</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.name">
substance_painter.project.name() → str | None<a class="headerlink" href="#substance_painter.project.name" title="Link to this definition"> </a></dt>
<dd><p class>Return the name of the current project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The name of the current project, or <code class="docutils literal notranslate">None</code> if the project hasn’t
been saved yet.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<h2>Creating a project<a class="headerlink" href="#creating-a-project" title="Link to this heading"> </a></h2>

<dt>Example:</dt>

```python
import substance_painter.project

# Use OpenGL / right handed normal map format:
ogl_normal_map_format = substance_painter.project.NormalMapFormat.OpenGL

# Use per vertex tangent space:
per_vertex_tangent = substance_painter.project.TangentSpace.PerVertex

# Declare the settings for the project:
project_settings = substance_painter.project.Settings(
	import_cameras=True,
	normal_map_format=ogl_normal_map_format,
	tangent_space_mode=per_vertex_tangent)

# A list of maps to use:
maps = ["C:/Documents/DefaultMaterial_ambient_occlusion.png",
	"C:/Documents/DefaultMaterial_id.png"]

# Create the project with those settings:
substance_painter.project.create(
	mesh_file_path = "C:/Documents/my_mesh.fbx",
	mesh_map_file_paths = maps,
	settings = project_settings)


# If this is a project with UDIMs, we need to choose the workflow:
uv_tile_workflow = substance_painter.project.ProjectWorkflow.UVTile

# Declare the settings for the project:
project_settings = substance_painter.project.Settings(
	import_cameras=True,
	normal_map_format=ogl_normal_map_format,
	tangent_space_mode=per_vertex_tangent,
	project_workflow=uv_tile_workflow)

# A list of maps to use (in this example, the file name indicates a
# a sequence of potentially several UDIMs; the project will load all
# of them without having to list them individually):
maps = ["C:/Documents/DefaultMaterial_ambient_occlusion.1001.png"]

# Create the project with those settings:
substance_painter.project.create(
	mesh_file_path = "C:/Documents/my_mesh_with_UDIMs.fbx",
	mesh_map_file_paths = maps,
	settings = project_settings)
```





<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.create">
substance_painter.project.create(<em class="sig-param">mesh_file_path: str</em>, <em class="sig-param">mesh_map_file_paths: List[str] | None = None</em>, <em class="sig-param">template_file_path: str | None = None</em>, <em class="sig-param">settings: <a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings">Settings</a> = Settings(default_save_path=None, normal_map_format=None, tangent_space_mode=None, project_workflow=None, export_path=None, default_texture_resolution=None, import_cameras=None, mesh_unit_scale=None, usd_settings=None)</em>)<a class="headerlink" href="#substance_painter.project.create" title="Link to this definition"> </a></dt>
<dd><p class>Create a new project.
If an <code class="docutils literal notranslate">OCIO</code> environment variable is set, pointing to a .ocio configuration file,
the project is setup to use the OCIO color management mode defined by that file.
If the configuration defined by that file is invalid, a <code class="docutils literal notranslate">ProjectError</code> is raised and
no project is created.
Similary, if a <code class="docutils literal notranslate">PAINTER_ACE_CONFIG</code> environment variable is set, pointing to a .json
preset file, the project is setup to use the ACE color management mode defined by that file.
If the preset defined in that file is invalid, a <code class="docutils literal notranslate">ProjectError</code> is raised and no project
is created.
If both environment variables are set, <code class="docutils literal notranslate">OCIO</code> will be used.
If there is not such environment variable, the project uses the Legacy color management mode.</p>
<div class="admonition note">
<p class>Note</p>
<p class>Project settings override the template parameters.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>mesh_file_path</strong> (<em>string</em>) – File path of the mesh to edit.
Supported file formats: fbx, obj, dae, ply, usd.</p></li>
<li><p class><strong>mesh_map_file_paths</strong> (<em>list</em><em> of </em><em>string</em>) – Paths to the additional mesh maps.</p></li>
<li><p class><strong>template_file_path</strong> (<em>string</em>) – Template file path to use to create the project.</p></li>
<li><p class><strong>settings</strong> (<a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings"><em>Settings</em></a>) – Configuration options of the new project.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot create the project.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If there is already an opened project.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If an <code class="docutils literal notranslate">OCIO</code> environment variable is set to an invalid configuration.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If an <code class="docutils literal notranslate">PAINTER_ACE_CONFIG</code> environment variable is set to an invalid preset.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>TypeError</strong> – If <code class="docutils literal notranslate">settings</code> is not an instance of Settings.</p></li>
<li><p class><strong>ValueError</strong> – If the file format of <code class="docutils literal notranslate">mesh_file_path</code> is not supported.</p></li>
<li><p class><strong>ValueError</strong> – If the mesh file <code class="docutils literal notranslate">mesh_file_path</code> does not exist.</p></li>
<li><p class><strong>ValueError</strong> – If any of the mesh map files in <code class="docutils literal notranslate">mesh_map_file_paths</code> do not exist.</p></li>
<li><p class><strong>ValueError</strong> – If the template file <code class="docutils literal notranslate">template_file_path</code> doesn’t exist.</p></li>
<li><p class><strong>ValueError</strong> – If the template file <code class="docutils literal notranslate">template_file_path</code> is invalid.</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">settings</code> are not valid project settings (see documentation
    of <a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings"><code class="xref py py-class docutils literal notranslate">Settings</code></a>).</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">settings.default_texture_resolution</code> is not a valid resolution.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings"><code class="xref py py-class docutils literal notranslate">Settings</code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-creation">Project creation documentation</a>.</p>
</div>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.Settings">
<em class="property">class </em>substance_painter.project.Settings(<em class="sig-param">default_save_path: str | None = None</em>, <em class="sig-param">normal_map_format: <a class="reference internal" href="#substance_painter.project.NormalMapFormat" title="substance_painter.project.NormalMapFormat">NormalMapFormat</a> | None = None</em>, <em class="sig-param">tangent_space_mode: <a class="reference internal" href="#substance_painter.project.TangentSpace" title="substance_painter.project.TangentSpace">TangentSpace</a> | None = None</em>, <em class="sig-param">project_workflow: <a class="reference internal" href="#substance_painter.project.ProjectWorkflow" title="substance_painter.project.ProjectWorkflow">ProjectWorkflow</a> | None = None</em>, <em class="sig-param">export_path: str | None = None</em>, <em class="sig-param">default_texture_resolution: int | None = None</em>, <em class="sig-param">import_cameras: bool | None = None</em>, <em class="sig-param">mesh_unit_scale: float | None = None</em>, <em class="sig-param">usd_settings: <a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings">UsdSettings</a> | None = None</em>)<a class="headerlink" href="#substance_painter.project.Settings" title="Link to this definition"> </a></dt>
<dd><p class>Project configuration options. All options can be set to <code class="docutils literal notranslate">None</code> to use the default values.</p>
<p class>This corresponds to the options that are available in the “New project” dialog.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.NormalMapFormat" title="substance_painter.project.NormalMapFormat"><code class="xref py py-class docutils literal notranslate">NormalMapFormat</code></a>,
<a class="reference internal" href="#substance_painter.project.TangentSpace" title="substance_painter.project.TangentSpace"><code class="xref py py-class docutils literal notranslate">TangentSpace</code></a>,
<a class="reference internal" href="#substance_painter.project.ProjectWorkflow" title="substance_painter.project.ProjectWorkflow"><code class="xref py py-class docutils literal notranslate">ProjectWorkflow</code></a>,
<a class="reference internal" href="#substance_painter.project.create" title="substance_painter.project.create"><code class="xref py py-func docutils literal notranslate">create()</code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-configuration">Project configuration documentation</a>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.default_save_path">
default_save_path<em class="property">: str</em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.default_save_path" title="Link to this definition"> </a></dt>
<dd><p class>The default save path.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.default_texture_resolution">
default_texture_resolution<em class="property">: int</em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.default_texture_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Default resolution for all the Texture Sets.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.export_path">
export_path<em class="property">: str</em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.export_path" title="Link to this definition"> </a></dt>
<dd><p class>Use this path as the default map export path.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.import_cameras">
import_cameras<em class="property">: bool</em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.import_cameras" title="Link to this definition"> </a></dt>
<dd><p class>Import cameras from the mesh file.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.mesh_unit_scale">
mesh_unit_scale<em class="property">: float</em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.mesh_unit_scale" title="Link to this definition"> </a></dt>
<dd><p class>Use custom unit scale for input mesh. Painter unit is centimeters.
If set to 0 or None, use mesh file internal unit scale.
This setting is necessary for .obj meshes that use units other than centimeters.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.normal_map_format">
normal_map_format<em class="property">: <a class="reference internal" href="#substance_painter.project.NormalMapFormat" title="substance_painter.project.NormalMapFormat">NormalMapFormat</a></em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.normal_map_format" title="Link to this definition"> </a></dt>
<dd><p class>Normal map system coordinates. OpenGL or DirectX format.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.project_workflow">
project_workflow<em class="property">: <a class="reference internal" href="#substance_painter.project.ProjectWorkflow" title="substance_painter.project.ProjectWorkflow">ProjectWorkflow</a></em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.project_workflow" title="Link to this definition"> </a></dt>
<dd><p class>Project workflow, selected at project creation time.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.tangent_space_mode">
tangent_space_mode<em class="property">: <a class="reference internal" href="#substance_painter.project.TangentSpace" title="substance_painter.project.TangentSpace">TangentSpace</a></em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.tangent_space_mode" title="Link to this definition"> </a></dt>
<dd><p class>Per vertex or per fragment tangent space.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.usd_settings">
usd_settings<em class="property">: <a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings">UsdSettings</a></em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.Settings.usd_settings" title="Link to this definition"> </a></dt>
<dd><p class>Specific settings for USD files.</p>
</dd></dl>
</dd></dl>

<dt class="sig sig-object py" id="substance_painter.project.UsdSettings">
<em class="property">class </em>substance_painter.project.UsdSettings(<em class="sig-param">scope_name: str = '/'</em>, <em class="sig-param">variants: dict | None = None</em>, <em class="sig-param">subdivision_level: int = 1</em>, <em class="sig-param">frame: int = 0</em>)<a class="headerlink" href="#substance_painter.project.UsdSettings" title="Link to this definition"> </a></dt>
<p class>Specific settings for USD files.</p>
<p class>This corresponds to the options that are available in the File type-specific settings section
in the “New project” and “Project configuration” dialogs.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.frame">
frame<em class="property">: int</em><em class="property"> = 0</em><a class="headerlink" href="#substance_painter.project.UsdSettings.frame" title="Link to this definition"> </a></dt>
<dd><p class>The frame to import.
Only available for animated USD files.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.scope_name">
scope_name<em class="property">: str</em><em class="property"> = '/'</em><a class="headerlink" href="#substance_painter.project.UsdSettings.scope_name" title="Link to this definition"> </a></dt>
<dd><p class>Scope name of the primitive to load in the hierarchy. The path must be absolute.
Expected syntax: <code class="docutils literal notranslate">"/my/path/name"</code></p>
<p class>If not specified, default scope name is the root <code class="docutils literal notranslate">"/"</code>. Only available for USD files.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.subdivision_level">
subdivision_level<em class="property">: int</em><em class="property"> = 1</em><a class="headerlink" href="#substance_painter.project.UsdSettings.subdivision_level" title="Link to this definition"> </a></dt>
<dd><p class>The subdivision level is applied only on geometry built with subdivision.
Only available for USD files.</p>
</dd></dl>

<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.variants">
variants<em class="property">: dict</em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.UsdSettings.variants" title="Link to this definition"> </a></dt>
<p class>Define which variant to use for each primitive path. Values are expected in JSON format.</p>



```python
[
	{
		"primPath": "/my/path/name",
		"selectionName: "variantName",
		"setName": "variantSetName"
	}
]
```




<p class>Only available for USD files.</p>


<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.NormalMapFormat">
<em class="property">class </em>substance_painter.project.NormalMapFormat(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.project.NormalMapFormat" title="Link to this definition"> </a></dt>
<dd><p class>The normal map formats that can be used by a <cite>Substance 3D Painter</cite> project.
A project can have either left handed / OpenGL or right handed / DirectX
normal maps.</p>
<p class>This corresponds to the menu “Normal Map Format” in the “New project”
dialog.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">OpenGL</code></p></td>
<td><p class>OpenGL tangent space (right handed).</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">DirectX</code></p></td>
<td><p class>DirectX tangent space (left handed).</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.TangentSpace">
<em class="property">class </em>substance_painter.project.TangentSpace(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.project.TangentSpace" title="Link to this definition"> </a></dt>
<dd><p class>The options for computing tangent space in a project. Tangent space can
be evaluated at each vertex, or at each fragment.</p>
<p class>This corresponds to the “Compute Tangent Space Per Fragment” checkbox in
the “New project” dialog.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">PerVertex</code></p></td>
<td><p class>Tangent space computed per vertex.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">PerFragment</code></p></td>
<td><p class>Tangent space computed per fragment.</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.ProjectWorkflow">
<em class="property">class </em>substance_painter.project.ProjectWorkflow(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.project.ProjectWorkflow" title="Link to this definition"> </a></dt>
<dd><p class>The workflow used by a <cite>Substance 3D Painter</cite> project.</p>
<p class>By enabling the UV Tiles Workflow for each Texture Set, tiles within the
same Texture Set share a layer stack and can be painted across. By creating
a Texture Set per UV Tile, each tile is placed  in a Texture Set of its own.
This is the legacy workflow and does not allow for painting accross tiles.</p>
<p class>This corresponds to the section “UV Tiles (UDIMs)” in the “New project”
dialog.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Default</code></p></td>
<td><p class>Default workflow (no udim).</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">TextureSetPerUVTile</code></p></td>
<td><p class>Udim workflow with one Texture Set per UV Tile (legacy).</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">UVTile</code></p></td>
<td><p class>Udim workflow with one Texture Set per material containing
multiple UV Tiles.</p></td>
</tr>
</tbody>
</table>
</dd></dl>


<h2>Opening and closing a project<a class="headerlink" href="#opening-and-closing-a-project" title="Link to this heading"> </a></h2>

<dt>Example:</dt>

```python
import substance_painter.project

# Check if a project is already opened:
if substance_painter.project.is_open():
	print("A project is already opened!")
else:
	# Open an existing project:
	substance_painter.project.open("c:/Documents/project.spp")

if substance_painter.project.is_open():
	# Close the project currently opened:
	substance_painter.project.close()
```





<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.is_open">
substance_painter.project.is_open() → bool<a class="headerlink" href="#substance_painter.project.is_open" title="Link to this definition"> </a></dt>
<dd><p class>Check if a project is already opened.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if a project is opened, <code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.open">
substance_painter.project.open(<em class="sig-param">project_file_path: str</em>) → None<a class="headerlink" href="#substance_painter.project.open" title="Link to this definition"> </a></dt>
<dd><p class>Open the project located at <code class="docutils literal notranslate">project_file_path</code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>project_file_path</strong> (<em>str</em>) – The path to the project file (with the extension <code class="docutils literal notranslate">.spp</code>).</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot open the file <code class="docutils literal notranslate">project_file_path</code>.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If there is already an opened project.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.close">
substance_painter.project.close() → None<a class="headerlink" href="#substance_painter.project.close" title="Link to this definition"> </a></dt>
<dd><p class>Close the current project.</p>
<div class="admonition warning">
<p class>Warning</p>
<p class>Any unsaved data will be lost.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
</dl>
</dd></dl>


<h2>Saving a project<a class="headerlink" href="#saving-a-project" title="Link to this heading"> </a></h2>
<p class>Saving a project is disabled when Substance 3D Painter is busy and will throw
a <a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><code class="xref py py-class docutils literal notranslate">substance_painter.exception.ProjectError</code></a>.</p>

<dt>Example:</dt>

```python
import substance_painter.project

# Check if a project is already opened:
if not substance_painter.project.is_open():
	print("No project is opened!")

# Check if the project needs to be saved at all:
if not substance_painter.project.needs_saving():
	print("There is nothing to save!")

# Save the project under the name "project1":
substance_painter.project.save_as("c:/Documents/project1.spp",
								  substance_painter.project.ProjectSaveMode.Full)
# This should print "c:/Documents/project1.spp":
print(substance_painter.project.file_path())

# Change the name of the project to "project2":
substance_painter.project.save_as("c:/Documents/project2.spp")
# This should now print "c:/Documents/project2.spp":
print(substance_painter.project.file_path())

# Create a backup copy of the project:
substance_painter.project.save_as_copy("c:/Documents/project2-backup.spp")
# This should still print "c:/Documents/project2.spp":
print(substance_painter.project.file_path())

# Save the project incrementally
#(writing to project2.spp, and not project2-backup.spp):
substance_painter.project.save(substance_painter.project.ProjectSaveMode.Incremental)

# Create a template from the project:
substance_painter.project.save_as_template(
	"c:/Documents/Adobe/Substance 3D Painter/assets/templates/template.spt",
	"DefaultMaterial")
```





<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.needs_saving">
substance_painter.project.needs_saving() → bool<a class="headerlink" href="#substance_painter.project.needs_saving" title="Link to this definition"> </a></dt>
<dd><p class>Check if the current project needs to be saved.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class><code class="docutils literal notranslate">True</code> if the project has modifications and needs to be saved,
<code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save">
substance_painter.project.save(<em class="sig-param">mode: <a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode">ProjectSaveMode</a> = ProjectSaveMode.Incremental</em>) → None<a class="headerlink" href="#substance_painter.project.save" title="Link to this definition"> </a></dt>
<dd><p class>Save the current project by overwriting the previous save.</p>
<div class="admonition note">
<p class>Note</p>
<p class>Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>mode</strong> (<a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><em>ProjectSaveMode</em></a>) – The save mode (Incremental or Full).</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the project.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><code class="xref py py-class docutils literal notranslate">ProjectSaveMode</code></a>,
<a class="reference internal" href="#substance_painter.project.save_as" title="substance_painter.project.save_as"><code class="xref py py-func docutils literal notranslate">save_as()</code></a>,
<a class="reference internal" href="#substance_painter.project.save_as_copy" title="substance_painter.project.save_as_copy"><code class="xref py py-func docutils literal notranslate">save_as_copy()</code></a>.
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate">is_busy()</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save_as">
substance_painter.project.save_as(<em class="sig-param">project_file_path: str</em>, <em class="sig-param">mode: <a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode">ProjectSaveMode</a> = ProjectSaveMode.Incremental</em>) → None<a class="headerlink" href="#substance_painter.project.save_as" title="Link to this definition"> </a></dt>
<dd><p class>Save the current project by writing it to the file path <code class="docutils literal notranslate">project_file_path</code>.</p>
<div class="admonition note">
<p class>Note</p>
<p class>If the path <code class="docutils literal notranslate">project_file_path</code> doesn’t exist yet, new folders will be
created as needed.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>project_file_path</strong> (<em>string</em>) – The file path to save the project to.</p></li>
<li><p class><strong>mode</strong> (<a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><em>ProjectSaveMode</em></a>) – The save mode (Incremental or Full).</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the project.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><code class="xref py py-class docutils literal notranslate">ProjectSaveMode</code></a>,
<a class="reference internal" href="#substance_painter.project.save" title="substance_painter.project.save"><code class="xref py py-func docutils literal notranslate">save()</code></a>,
<a class="reference internal" href="#substance_painter.project.save_as_copy" title="substance_painter.project.save_as_copy"><code class="xref py py-func docutils literal notranslate">save_as_copy()</code></a>.
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate">is_busy()</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save_as_copy">
substance_painter.project.save_as_copy(<em class="sig-param">backup_file_path: str</em>, <em class="sig-param">mode: <a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode">ProjectSaveMode</a> = ProjectSaveMode.Incremental</em>) → None<a class="headerlink" href="#substance_painter.project.save_as_copy" title="Link to this definition"> </a></dt>
<dd><p class>Save a copy of the current project by writing it to the file path
<code class="docutils literal notranslate">backup_file_path</code>. This can be used to save backups of the opened project
without modifying the original file.</p>
<p class>After <cite>save_as_copy</cite> the project is still considered to be located at the
location it was previously saved to. If the project was not saved, it is
still considered to not have a saved location.</p>
<div class="admonition note">
<p class>Note</p>
<p class>If the path <code class="docutils literal notranslate">backup_file_path</code> doesn’t exist yet, new folders will be
created as needed.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>backup_file_path</strong> (<em>string</em>) – The path to write the copy of the project to.</p></li>
<li><p class><strong>mode</strong> (<a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><em>ProjectSaveMode</em></a>) – The save mode (Incremental or Full).</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the copy.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><code class="xref py py-class docutils literal notranslate">ProjectSaveMode</code></a>,
<a class="reference internal" href="#substance_painter.project.save" title="substance_painter.project.save"><code class="xref py py-func docutils literal notranslate">save()</code></a>,
<a class="reference internal" href="#substance_painter.project.save_as" title="substance_painter.project.save_as"><code class="xref py py-func docutils literal notranslate">save_as()</code></a>.
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate">is_busy()</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save_as_template">
substance_painter.project.save_as_template(<em class="sig-param">template_file_path: str</em>, <em class="sig-param">texture_set_name: str</em>) → <a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode">ProjectSaveMode</a><a class="headerlink" href="#substance_painter.project.save_as_template" title="Link to this definition"> </a></dt>
<dd><p class>Save a template based of the current Texture Set or the one specified.</p>
<div class="admonition note">
<p class>Note</p>
<p class>New folders will be created if they are missing.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<div class="admonition warning">
<p class>Warning</p>
<p class>If the file already exists, it will be overwritten.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>template_file_path</strong> (<em>string</em>) – The save path.</p></li>
<li><p class><strong>texture_set_name</strong> (<em>string</em>) – Name of the Texture Set used as a template.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the template.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate">is_busy()</code></a>.</p>
</div>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.ProjectSaveMode">
<em class="property">class </em>substance_painter.project.ProjectSaveMode(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.project.ProjectSaveMode" title="Link to this definition"> </a></dt>
<dd><p class>Save strategy enumeration.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Full</code></p></td>
<td><p class>Save everything in a new file. Slow but creates the smallest possible file.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">Incremental</code></p></td>
<td><p class>Save only new or modified data. Fast but the file size is not optimal.</p></td>
</tr>
</tbody>
</table>
</dd></dl>


<h2>Reloading a mesh<a class="headerlink" href="#reloading-a-mesh" title="Link to this heading"> </a></h2>

<dt>Example:</dt>

```python
import substance_painter.project

# Declare the settings for the new mesh loading:
mesh_reloading_settings = substance_painter.project.MeshReloadingSettings(
	import_cameras=True,
	preserve_strokes=True)

# Function that will be called when reloading is finished:
def on_mesh_reload(status: substance_painter.project.ReloadMeshStatus):
	import substance_painter.project
	if status == substance_painter.project.ReloadMeshStatus.SUCCESS:
		print("The mesh was reloaded successfully.")
	else:
		print("The mesh couldn't be reloaded.")

# Reload the current mesh:
substance_painter.project.reload_mesh(
	'c:/Documents/my_mesh.fbx',
	mesh_reloading_settings,
	on_mesh_reload)
```





<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.reload_mesh">
substance_painter.project.reload_mesh(<em class="sig-param">mesh_file_path: str</em>, <em class="sig-param">settings: <a class="reference internal" href="#substance_painter.project.MeshReloadingSettings" title="substance_painter.project.MeshReloadingSettings">MeshReloadingSettings</a></em>, <em class="sig-param">loading_status_cb: Callable[[<a class="reference internal" href="#substance_painter.project.ReloadMeshStatus" title="substance_painter.project.ReloadMeshStatus">ReloadMeshStatus</a>], Any]</em>)<a class="headerlink" href="#substance_painter.project.reload_mesh" title="Link to this definition"> </a></dt>
<dd><p class>Import a new mesh to the current project, using the given settings.
Uses the automatic UV unwrapping settings defined at the project level.</p>
<p class>The loading is asynchronous: this function returns immediately; when
the loading attempt is finished <code class="docutils literal notranslate">loading_status_cb</code> is called with
an argument indicating if loading was successful.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>mesh_file_path</strong> (<em>string</em>) – File path of the mesh to edit.
Supported file formats: fbx, obj, dae, ply, usd.</p></li>
<li><p class><strong>settings</strong> (<a class="reference internal" href="#substance_painter.project.MeshReloadingSettings" title="substance_painter.project.MeshReloadingSettings"><em>MeshReloadingSettings</em></a>) – Configuration options for the mesh loading.</p></li>
<li><p class><strong>loading_status_cb</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.project.ReloadMeshStatus" title="substance_painter.project.ReloadMeshStatus"><em>ReloadMeshStatus</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – Loading status notification callback.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened or Substance 3D Painter is busy.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.ReloadMeshStatus" title="substance_painter.project.ReloadMeshStatus"><code class="xref py py-class docutils literal notranslate">ReloadMeshStatus</code></a>,
<a class="reference internal" href="#substance_painter.project.MeshReloadingSettings" title="substance_painter.project.MeshReloadingSettings"><code class="xref py py-class docutils literal notranslate">MeshReloadingSettings</code></a>,
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate">is_busy()</code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-creation">Project creation documentation</a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.last_imported_mesh_path">
substance_painter.project.last_imported_mesh_path() → str<a class="headerlink" href="#substance_painter.project.last_imported_mesh_path" title="Link to this definition"> </a></dt>
<dd><p class>Return the path to the last imported mesh.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The file path of the mesh that was last imported to the project.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings">
<em class="property">class </em>substance_painter.project.MeshReloadingSettings(<em class="sig-param">import_cameras: bool = True</em>, <em class="sig-param">preserve_strokes: bool = True</em>, <em class="sig-param">usd_settings: <a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings">UsdSettings</a> | None = None</em>)<a class="headerlink" href="#substance_painter.project.MeshReloadingSettings" title="Link to this definition"> </a></dt>
<dd><p class>Settings used when reloading a mesh.</p>
<p class>This corresponds to the mesh related options that are available in the
“Project configuration” dialog.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.reload_mesh" title="substance_painter.project.reload_mesh"><code class="xref py py-func docutils literal notranslate">reload_mesh()</code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-configuration">Project configuration documentation</a>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings.import_cameras">
import_cameras<em class="property">: bool</em><em class="property"> = True</em><a class="headerlink" href="#substance_painter.project.MeshReloadingSettings.import_cameras" title="Link to this definition"> </a></dt>
<dd><p class>Import cameras from the mesh file.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings.preserve_strokes">
preserve_strokes<em class="property">: bool</em><em class="property"> = True</em><a class="headerlink" href="#substance_painter.project.MeshReloadingSettings.preserve_strokes" title="Link to this definition"> </a></dt>
<dd><p class>Preserve strokes positions on mesh.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings.usd_settings">
usd_settings<em class="property">: <a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings">UsdSettings</a></em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.project.MeshReloadingSettings.usd_settings" title="Link to this definition"> </a></dt>
<dd><p class>Specific settings for USD files.</p>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.ReloadMeshStatus">
<em class="property">class </em>substance_painter.project.ReloadMeshStatus(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.project.ReloadMeshStatus" title="Link to this definition"> </a></dt>
<dd><p class>Reload mesh status, used in mesh reload asynchronous callback.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.project.reload_mesh" title="substance_painter.project.reload_mesh"><code class="xref py py-func docutils literal notranslate">reload_mesh()</code></a>,</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.ReloadMeshStatus.ERROR">
ERROR<em class="property"> = 2</em><a class="headerlink" href="#substance_painter.project.ReloadMeshStatus.ERROR" title="Link to this definition"> </a></dt>
<dd><p class>Mesh reload failed, see application log for details.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.ReloadMeshStatus.SUCCESS">
SUCCESS<em class="property"> = 0</em><a class="headerlink" href="#substance_painter.project.ReloadMeshStatus.SUCCESS" title="Link to this definition"> </a></dt>
<dd><p class>Mesh reload was successful.</p>
</dd></dl>
</dd></dl>


<h2>Project metadata<a class="headerlink" href="#project-metadata" title="Link to this heading"> </a></h2>


<dt class="sig sig-object py" id="substance_painter.project.Metadata">
<em class="property">class </em>substance_painter.project.Metadata(<em class="sig-param">context: str</em>)<a class="headerlink" href="#substance_painter.project.Metadata" title="Link to this definition"> </a></dt>
<p class>Project metadata are arbitrary data that can be attached to a <cite>Substance
Painter</cite> project. When the project is saved, the metadata are saved with it,
so it is still available the next time the project is loaded.</p>
<p class>Metadata can only be accessed when a project is opened. If no project is
opened, the methods will raise an exception.</p>
<p class>The constructor of the class <code class="docutils literal notranslate">Metadata</code> takes a context name as an
argument. This context name can be for example the name of your plugin. It
should be unique, to avoid conflict with other plugins.</p>
<p class>Example</p>


```python
import substance_painter

# Instantiate the Metadata utility, for the plugin "MyPlugin".
metadata = substance_painter.project.Metadata("MyPlugin")

# Store a version number under the key "version".
plugin_version = { "major": 1, "minor": 0 }
metadata.set("version", plugin_version)

# List the project's metadata keys. The key "version" is now present.
keys = metadata.list()
print(keys)

# Retrieve the metadata "version".
plugin_version = metadata.get("version")
print("Version: " + str(plugin_version))
```



<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.project.Metadata.list">
list() → list<a class="headerlink" href="#substance_painter.project.Metadata.list" title="Link to this definition"> </a></dt>
<dd><p class>Return the list of project metadata keys.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.project.Metadata.get">
get(<em class="sig-param">key: str</em>)<a class="headerlink" href="#substance_painter.project.Metadata.get" title="Link to this definition"> </a></dt>
<dd><p class>Retrieve the project metadata under the given key.</p>
<dl class="simple">
<dt>The supported data types are:</dt><dd><ul class="simple">
<li><p class>Primitive types: <cite>bool</cite>, <cite>int</cite>, <cite>float</cite>, <cite>str</cite>.</p></li>
<li><dl class="simple">
<dt><cite>list</cite></dt><dd><ul>
<li><p class>Items can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><cite>dict</cite></dt><dd><ul>
<li><p class>Keys must be of type <cite>str</cite>.</p></li>
<li><p class>Values can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>
</dd>
</dl>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>key</strong> (<em>str</em>) – The key identifying the metadata to retrieve.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>RuntimeError</strong> – If the metadata under <code class="docutils literal notranslate">key</code> use a type that is not supported.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.project.Metadata.set">
set(<em class="sig-param">key: str</em>, <em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.project.Metadata.set" title="Link to this definition"> </a></dt>
<dd><p class>Store project metadata under the given key.</p>
<dl class="simple">
<dt>The supported data types are:</dt><dd><ul class="simple">
<li><p class>Primitive types: <cite>bool</cite>, <cite>int</cite>, <cite>float</cite>, <cite>str</cite>.</p></li>
<li><dl class="simple">
<dt><cite>list</cite></dt><dd><ul>
<li><p class>Items can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><cite>dict</cite></dt><dd><ul>
<li><p class>Keys must be of type <cite>str</cite>.</p></li>
<li><p class>Values can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>
</dd>
</dl>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>key</strong> (<em>str</em>) – The key identifying the metadata to store.</p></li>
<li><p class><strong>value</strong> – The metadata to store.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>RuntimeError</strong> – If <code class="docutils literal notranslate">value</code> uses a type that is not supported.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>




<h2>Events<a class="headerlink" href="#events" title="Link to this heading"> </a></h2>
<p class>Project related operations, whether they are initiated through the Python API
or in the UI, can trigger the following events.
See <a class="reference internal" href="event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate">substance_painter.event</code></a> for more details.</p>
<div class="admonition note">
<p class>Note</p>
<p class>Project loading is done asynchronously. When the event <code class="docutils literal notranslate">ProjectOpened</code> or
<code class="docutils literal notranslate">ProjectCreated</code> is triggered, the project may still be loading. The event
<code class="docutils literal notranslate">ProjectEditionEntered</code> is triggered when the project is ready to work with.</p>
</div>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ProjectOpened</dt>
<dd><p class>Event triggered when an existing project has been opened.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ProjectCreated</dt>
<dd><p class>Event triggered when a new project has been created.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ProjectAboutToClose</dt>
<dd><p class>Event triggered just before closing the current project.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ProjectAboutToSave(<em class="sig-param">file_path: str</em>)</dt>
<dd><p class>Event triggered just before saving the current project.</p>
<dl class="py attribute">
<dt class="sig sig-object py">
file_path<em class="property">: str</em></dt>
<dd><p class>The destination file.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ProjectSaved</dt>
<dd><p class>Event triggered once the current project is saved.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ProjectEditionEntered</dt>
<dd><p class>Event triggered when the project is fully loaded and ready to work with.</p>
<p class>When edition is entered, it is for example possible to query/edit the project
properties, to bake textures or do project export.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ProjectEditionLeft</dt>
<dd><p class>Event triggered when the current project can non longer be edited.</p>
</dd></dl>











