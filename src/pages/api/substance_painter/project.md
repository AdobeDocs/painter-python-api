---
title: project - Painter Python API
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

<span id="project-module"></span><h1>project module<a class="headerlink" href="#module-substance_painter.project" title="Link to this heading"> </a></h1>
<p>This module allows to open, create, save and close projects, and change some of
their properties.</p>
<p>First, here is a complete example showing how to use this module:</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.project

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
</pre></div>
</div>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">BoundingBox</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">dimensions</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">center</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">radius</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">float</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.BoundingBox" title="Link to this definition"> </a></dt>
<dd><p>Axis-aligned bounding box (AABB).</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox.dimensions">
<span class="sig-name descname"><span class="pre">dimensions</span></span><a class="headerlink" href="#substance_painter.project.BoundingBox.dimensions" title="Link to this definition"> </a></dt>
<dd><p>The dimensions (x,y,z) of the bounding box.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>List[float]</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox.center">
<span class="sig-name descname"><span class="pre">center</span></span><a class="headerlink" href="#substance_painter.project.BoundingBox.center" title="Link to this definition"> </a></dt>
<dd><p>The center (x,y,z) of the bounding box..</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>List[float]</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.BoundingBox.radius">
<span class="sig-name descname"><span class="pre">radius</span></span><a class="headerlink" href="#substance_painter.project.BoundingBox.radius" title="Link to this definition"> </a></dt>
<dd><p>The radius of the bounding box.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>float</p>
</dd>
</dl>
</dd></dl>
<p>See also:
<a class="reference internal" href="#substance_painter.project.get_scene_bounding_box" title="substance_painter.project.get_scene_bounding_box"><code class="xref py py-func docutils literal notranslate"><span class="pre">get_scene_bounding_box()</span></code></a>,</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.execute_when_not_busy">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">execute_when_not_busy</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">callback</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Callable</span><span class="p"><span class="pre">[</span></span><span class="p"><span class="pre">[</span></span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">None</span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.execute_when_not_busy" title="Link to this definition"> </a></dt>
<dd><p>Execute the given callback when Substance 3D Painter is not busy.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>callback</strong> (<em>Callable</em><em>[</em><em>[</em><em>]</em><em>, </em><em>None</em><em>]</em>) – The callback to be executed.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">is_busy()</span></code></a>,
<a class="reference internal" href="event.html#substance_painter.event.BusyStatusChanged" title="substance_painter.event.BusyStatusChanged"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BusyStatusChanged</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.file_path">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">file_path</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.file_path" title="Link to this definition"> </a></dt>
<dd><p>Return the file path of the current project. This is the path where the
project will be written to when it is saved.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The file path of the current project, or <code class="docutils literal notranslate"><span class="pre">None</span></code> if the project
hasn’t been saved yet.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.save" title="substance_painter.project.save"><code class="xref py py-func docutils literal notranslate"><span class="pre">save()</span></code></a>,
<a class="reference internal" href="#substance_painter.project.save_as" title="substance_painter.project.save_as"><code class="xref py py-func docutils literal notranslate"><span class="pre">save_as()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.get_scene_bounding_box">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">get_scene_bounding_box</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.project.BoundingBox" title="substance_painter.project.BoundingBox"><span class="pre">BoundingBox</span></a></span></span><a class="headerlink" href="#substance_painter.project.get_scene_bounding_box" title="Link to this definition"> </a></dt>
<dd><p>Return the bounding box of the scene.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The bounding box of the scene.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="#substance_painter.project.BoundingBox" title="substance_painter.project.BoundingBox">BoundingBox</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.get_uuid">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">get_uuid</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">UUID</span></span></span><a class="headerlink" href="#substance_painter.project.get_uuid" title="Link to this definition"> </a></dt>
<dd><p>Return the UUID of the current project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The UUID of the current project.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>uuid.UUID</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.is_busy">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">is_busy</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.project.is_busy" title="Link to this definition"> </a></dt>
<dd><p>Check if Substance 3D Painter is currently busy.
If busy, the project cannot be saved at the moment.
The application may be busy because no project is in edition state,
or a long process such as baking/export/unwrap process is ongoing.
The corresponding BusyStatusChanged event is fired when the busy state changes.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the project is ready to be saved,
<code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.execute_when_not_busy" title="substance_painter.project.execute_when_not_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">execute_when_not_busy()</span></code></a>,
<a class="reference internal" href="event.html#substance_painter.event.BusyStatusChanged" title="substance_painter.event.BusyStatusChanged"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BusyStatusChanged</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.is_in_edition_state">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">is_in_edition_state</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.project.is_in_edition_state" title="Link to this definition"> </a></dt>
<dd><p>Check if the current project is ready to work with.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the project is ready to work with,
<code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>bool</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="event.html#substance_painter.event.ProjectEditionEntered" title="substance_painter.event.ProjectEditionEntered"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ProjectEditionEntered</span></code></a>,
<a class="reference internal" href="event.html#substance_painter.event.ProjectEditionLeft" title="substance_painter.event.ProjectEditionLeft"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ProjectEditionLeft</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.last_saved_substance_painter_version">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">last_saved_substance_painter_version</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.last_saved_substance_painter_version" title="Link to this definition"> </a></dt>
<dd><p>Return the version of Substance 3D Painter used to last save the project, or None
if the project is unsaved or was saved with version &lt;= 8.2.0.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The concerned version of Substance 3D Painter, as a major/minor/patch
tuple.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>Tuple(int, int, int)</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.name">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">name</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.name" title="Link to this definition"> </a></dt>
<dd><p>Return the name of the current project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The name of the current project, or <code class="docutils literal notranslate"><span class="pre">None</span></code> if the project hasn’t
been saved yet.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
</dl>
</dd></dl>

<h2>Creating a project<a class="headerlink" href="#creating-a-project" title="Link to this heading"> </a></h2>
<dl>
<dt>Example:</dt><dd><div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.project

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
</pre></div>
</div>
</dd>
</dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.create">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">create</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">mesh_file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">mesh_map_file_paths</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">template_file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">settings</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings"><span class="pre">Settings</span></a></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">Settings(default_save_path=None,</span> <span class="pre">normal_map_format=None,</span> <span class="pre">tangent_space_mode=None,</span> <span class="pre">project_workflow=None,</span> <span class="pre">export_path=None,</span> <span class="pre">default_texture_resolution=None,</span> <span class="pre">import_cameras=None,</span> <span class="pre">mesh_unit_scale=None,</span> <span class="pre">usd_settings=None)</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.create" title="Link to this definition"> </a></dt>
<dd><p>Create a new project.
If an <code class="docutils literal notranslate"><span class="pre">OCIO</span></code> environment variable is set, pointing to a .ocio configuration file,
the project is setup to use the OCIO color management mode defined by that file.
If the configuration defined by that file is invalid, a <code class="docutils literal notranslate"><span class="pre">ProjectError</span></code> is raised and
no project is created.
Similary, if a <code class="docutils literal notranslate"><span class="pre">PAINTER_ACE_CONFIG</span></code> environment variable is set, pointing to a .json
preset file, the project is setup to use the ACE color management mode defined by that file.
If the preset defined in that file is invalid, a <code class="docutils literal notranslate"><span class="pre">ProjectError</span></code> is raised and no project
is created.
If both environment variables are set, <code class="docutils literal notranslate"><span class="pre">OCIO</span></code> will be used.
If there is not such environment variable, the project uses the Legacy color management mode.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Project settings override the template parameters.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>mesh_file_path</strong> (<em>string</em>) – File path of the mesh to edit.
Supported file formats: fbx, obj, dae, ply, usd.</p></li>
<li><p><strong>mesh_map_file_paths</strong> (<em>list</em><em> of </em><em>string</em>) – Paths to the additional mesh maps.</p></li>
<li><p><strong>template_file_path</strong> (<em>string</em>) – Template file path to use to create the project.</p></li>
<li><p><strong>settings</strong> (<a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings"><em>Settings</em></a>) – Configuration options of the new project.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot create the project.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If there is already an opened project.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If an <code class="docutils literal notranslate"><span class="pre">OCIO</span></code> environment variable is set to an invalid configuration.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If an <code class="docutils literal notranslate"><span class="pre">PAINTER_ACE_CONFIG</span></code> environment variable is set to an invalid preset.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>TypeError</strong> – If <code class="docutils literal notranslate"><span class="pre">settings</span></code> is not an instance of Settings.</p></li>
<li><p><strong>ValueError</strong> – If the file format of <code class="docutils literal notranslate"><span class="pre">mesh_file_path</span></code> is not supported.</p></li>
<li><p><strong>ValueError</strong> – If the mesh file <code class="docutils literal notranslate"><span class="pre">mesh_file_path</span></code> does not exist.</p></li>
<li><p><strong>ValueError</strong> – If any of the mesh map files in <code class="docutils literal notranslate"><span class="pre">mesh_map_file_paths</span></code> do not exist.</p></li>
<li><p><strong>ValueError</strong> – If the template file <code class="docutils literal notranslate"><span class="pre">template_file_path</span></code> doesn’t exist.</p></li>
<li><p><strong>ValueError</strong> – If the template file <code class="docutils literal notranslate"><span class="pre">template_file_path</span></code> is invalid.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">settings</span></code> are not valid project settings (see documentation
    of <a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings"><code class="xref py py-class docutils literal notranslate"><span class="pre">Settings</span></code></a>).</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">settings.default_texture_resolution</span></code> is not a valid resolution.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.Settings" title="substance_painter.project.Settings"><code class="xref py py-class docutils literal notranslate"><span class="pre">Settings</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-creation">Project creation documentation</a>.</p>
</div>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.Settings">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">Settings</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">default_save_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">normal_map_format</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.NormalMapFormat" title="substance_painter.project.NormalMapFormat"><span class="pre">NormalMapFormat</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">tangent_space_mode</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.TangentSpace" title="substance_painter.project.TangentSpace"><span class="pre">TangentSpace</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">project_workflow</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.ProjectWorkflow" title="substance_painter.project.ProjectWorkflow"><span class="pre">ProjectWorkflow</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">export_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">default_texture_resolution</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">import_cameras</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">mesh_unit_scale</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">float</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">usd_settings</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings"><span class="pre">UsdSettings</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.Settings" title="Link to this definition"> </a></dt>
<dd><p>Project configuration options. All options can be set to <code class="docutils literal notranslate"><span class="pre">None</span></code> to use the default values.</p>
<p>This corresponds to the options that are available in the “New project” dialog.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.NormalMapFormat" title="substance_painter.project.NormalMapFormat"><code class="xref py py-class docutils literal notranslate"><span class="pre">NormalMapFormat</span></code></a>,
<a class="reference internal" href="#substance_painter.project.TangentSpace" title="substance_painter.project.TangentSpace"><code class="xref py py-class docutils literal notranslate"><span class="pre">TangentSpace</span></code></a>,
<a class="reference internal" href="#substance_painter.project.ProjectWorkflow" title="substance_painter.project.ProjectWorkflow"><code class="xref py py-class docutils literal notranslate"><span class="pre">ProjectWorkflow</span></code></a>,
<a class="reference internal" href="#substance_painter.project.create" title="substance_painter.project.create"><code class="xref py py-func docutils literal notranslate"><span class="pre">create()</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-configuration">Project configuration documentation</a>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.default_save_path">
<span class="sig-name descname"><span class="pre">default_save_path</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.default_save_path" title="Link to this definition"> </a></dt>
<dd><p>The default save path.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.default_texture_resolution">
<span class="sig-name descname"><span class="pre">default_texture_resolution</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">int</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.default_texture_resolution" title="Link to this definition"> </a></dt>
<dd><p>Default resolution for all the Texture Sets.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.export_path">
<span class="sig-name descname"><span class="pre">export_path</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.export_path" title="Link to this definition"> </a></dt>
<dd><p>Use this path as the default map export path.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.import_cameras">
<span class="sig-name descname"><span class="pre">import_cameras</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">bool</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.import_cameras" title="Link to this definition"> </a></dt>
<dd><p>Import cameras from the mesh file.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.mesh_unit_scale">
<span class="sig-name descname"><span class="pre">mesh_unit_scale</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">float</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.mesh_unit_scale" title="Link to this definition"> </a></dt>
<dd><p>Use custom unit scale for input mesh. Painter unit is centimeters.
If set to 0 or None, use mesh file internal unit scale.
This setting is necessary for .obj meshes that use units other than centimeters.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.normal_map_format">
<span class="sig-name descname"><span class="pre">normal_map_format</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.project.NormalMapFormat" title="substance_painter.project.NormalMapFormat"><span class="pre">NormalMapFormat</span></a></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.normal_map_format" title="Link to this definition"> </a></dt>
<dd><p>Normal map system coordinates. OpenGL or DirectX format.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.project_workflow">
<span class="sig-name descname"><span class="pre">project_workflow</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.project.ProjectWorkflow" title="substance_painter.project.ProjectWorkflow"><span class="pre">ProjectWorkflow</span></a></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.project_workflow" title="Link to this definition"> </a></dt>
<dd><p>Project workflow, selected at project creation time.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.tangent_space_mode">
<span class="sig-name descname"><span class="pre">tangent_space_mode</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.project.TangentSpace" title="substance_painter.project.TangentSpace"><span class="pre">TangentSpace</span></a></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.tangent_space_mode" title="Link to this definition"> </a></dt>
<dd><p>Per vertex or per fragment tangent space.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.Settings.usd_settings">
<span class="sig-name descname"><span class="pre">usd_settings</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings"><span class="pre">UsdSettings</span></a></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.Settings.usd_settings" title="Link to this definition"> </a></dt>
<dd><p>Specific settings for USD files.</p>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">UsdSettings</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">scope_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">'/'</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">variants</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">dict</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">subdivision_level</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">1</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">frame</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">0</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.UsdSettings" title="Link to this definition"> </a></dt>
<dd><p>Specific settings for USD files.</p>
<p>This corresponds to the options that are available in the File type-specific settings section
in the “New project” and “Project configuration” dialogs.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.frame">
<span class="sig-name descname"><span class="pre">frame</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">int</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">0</span></em><a class="headerlink" href="#substance_painter.project.UsdSettings.frame" title="Link to this definition"> </a></dt>
<dd><p>The frame to import.
Only available for animated USD files.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.scope_name">
<span class="sig-name descname"><span class="pre">scope_name</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">'/'</span></em><a class="headerlink" href="#substance_painter.project.UsdSettings.scope_name" title="Link to this definition"> </a></dt>
<dd><p>Scope name of the primitive to load in the hierarchy. The path must be absolute.
Expected syntax: <code class="docutils literal notranslate"><span class="pre">"/my/path/name"</span></code></p>
<p>If not specified, default scope name is the root <code class="docutils literal notranslate"><span class="pre">"/"</span></code>. Only available for USD files.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.subdivision_level">
<span class="sig-name descname"><span class="pre">subdivision_level</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">int</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">1</span></em><a class="headerlink" href="#substance_painter.project.UsdSettings.subdivision_level" title="Link to this definition"> </a></dt>
<dd><p>The subdivision level is applied only on geometry built with subdivision.
Only available for USD files.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.UsdSettings.variants">
<span class="sig-name descname"><span class="pre">variants</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">dict</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.UsdSettings.variants" title="Link to this definition"> </a></dt>
<dd><p>Define which variant to use for each primitive path. Values are expected in JSON format.</p>
<blockquote>
<div><div class="highlight-default notranslate"><div class="highlight"><pre>[
	{
		"primPath": "/my/path/name",
		"selectionName: "variantName",
		"setName": "variantSetName"
	}
]
</pre></div>
</div>
</div></blockquote>
<p>Only available for USD files.</p>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.NormalMapFormat">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">NormalMapFormat</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.NormalMapFormat" title="Link to this definition"> </a></dt>
<dd><p>The normal map formats that can be used by a <cite>Substance 3D Painter</cite> project.
A project can have either left handed / OpenGL or right handed / DirectX
normal maps.</p>
<p>This corresponds to the menu “Normal Map Format” in the “New project”
dialog.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">OpenGL</span></code></p></td>
<td><p>OpenGL tangent space (right handed).</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">DirectX</span></code></p></td>
<td><p>DirectX tangent space (left handed).</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.TangentSpace">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">TangentSpace</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.TangentSpace" title="Link to this definition"> </a></dt>
<dd><p>The options for computing tangent space in a project. Tangent space can
be evaluated at each vertex, or at each fragment.</p>
<p>This corresponds to the “Compute Tangent Space Per Fragment” checkbox in
the “New project” dialog.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">PerVertex</span></code></p></td>
<td><p>Tangent space computed per vertex.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">PerFragment</span></code></p></td>
<td><p>Tangent space computed per fragment.</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.ProjectWorkflow">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">ProjectWorkflow</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.ProjectWorkflow" title="Link to this definition"> </a></dt>
<dd><p>The workflow used by a <cite>Substance 3D Painter</cite> project.</p>
<p>By enabling the UV Tiles Workflow for each Texture Set, tiles within the
same Texture Set share a layer stack and can be painted across. By creating
a Texture Set per UV Tile, each tile is placed  in a Texture Set of its own.
This is the legacy workflow and does not allow for painting accross tiles.</p>
<p>This corresponds to the section “UV Tiles (UDIMs)” in the “New project”
dialog.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Default</span></code></p></td>
<td><p>Default workflow (no udim).</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">TextureSetPerUVTile</span></code></p></td>
<td><p>Udim workflow with one Texture Set per UV Tile (legacy).</p></td>
</tr>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">UVTile</span></code></p></td>
<td><p>Udim workflow with one Texture Set per material containing
multiple UV Tiles.</p></td>
</tr>
</tbody>
</table>
</dd></dl>


<h2>Opening and closing a project<a class="headerlink" href="#opening-and-closing-a-project" title="Link to this heading"> </a></h2>
<dl>
<dt>Example:</dt><dd><div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.project

# Check if a project is already opened:
if substance_painter.project.is_open():
	print("A project is already opened!")
else:
	# Open an existing project:
	substance_painter.project.open("c:/Documents/project.spp")

if substance_painter.project.is_open():
	# Close the project currently opened:
	substance_painter.project.close()
</pre></div>
</div>
</dd>
</dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.is_open">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">is_open</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.project.is_open" title="Link to this definition"> </a></dt>
<dd><p>Check if a project is already opened.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if a project is opened, <code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.open">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">open</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">project_file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.open" title="Link to this definition"> </a></dt>
<dd><p>Open the project located at <code class="docutils literal notranslate"><span class="pre">project_file_path</span></code>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>project_file_path</strong> (<em>str</em>) – The path to the project file (with the extension <code class="docutils literal notranslate"><span class="pre">.spp</span></code>).</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot open the file <code class="docutils literal notranslate"><span class="pre">project_file_path</span></code>.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If there is already an opened project.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.close">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">close</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.close" title="Link to this definition"> </a></dt>
<dd><p>Close the current project.</p>
<div class="admonition warning">
<p class="admonition-title">Warning</p>
<p>Any unsaved data will be lost.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
</dl>
</dd></dl>


<h2>Saving a project<a class="headerlink" href="#saving-a-project" title="Link to this heading"> </a></h2>
<p>Saving a project is disabled when Substance 3D Painter is busy and will throw
a <a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.exception.ProjectError</span></code></a>.</p>
<dl>
<dt>Example:</dt><dd><div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.project

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
</pre></div>
</div>
</dd>
</dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.needs_saving">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">needs_saving</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.project.needs_saving" title="Link to this definition"> </a></dt>
<dd><p>Check if the current project needs to be saved.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the project has modifications and needs to be saved,
<code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">save</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">mode</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><span class="pre">ProjectSaveMode</span></a></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">ProjectSaveMode.Incremental</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.save" title="Link to this definition"> </a></dt>
<dd><p>Save the current project by overwriting the previous save.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>mode</strong> (<a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><em>ProjectSaveMode</em></a>) – The save mode (Incremental or Full).</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the project.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><code class="xref py py-class docutils literal notranslate"><span class="pre">ProjectSaveMode</span></code></a>,
<a class="reference internal" href="#substance_painter.project.save_as" title="substance_painter.project.save_as"><code class="xref py py-func docutils literal notranslate"><span class="pre">save_as()</span></code></a>,
<a class="reference internal" href="#substance_painter.project.save_as_copy" title="substance_painter.project.save_as_copy"><code class="xref py py-func docutils literal notranslate"><span class="pre">save_as_copy()</span></code></a>.
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">is_busy()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save_as">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">save_as</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">project_file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">mode</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><span class="pre">ProjectSaveMode</span></a></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">ProjectSaveMode.Incremental</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.save_as" title="Link to this definition"> </a></dt>
<dd><p>Save the current project by writing it to the file path <code class="docutils literal notranslate"><span class="pre">project_file_path</span></code>.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If the path <code class="docutils literal notranslate"><span class="pre">project_file_path</span></code> doesn’t exist yet, new folders will be
created as needed.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>project_file_path</strong> (<em>string</em>) – The file path to save the project to.</p></li>
<li><p><strong>mode</strong> (<a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><em>ProjectSaveMode</em></a>) – The save mode (Incremental or Full).</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the project.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><code class="xref py py-class docutils literal notranslate"><span class="pre">ProjectSaveMode</span></code></a>,
<a class="reference internal" href="#substance_painter.project.save" title="substance_painter.project.save"><code class="xref py py-func docutils literal notranslate"><span class="pre">save()</span></code></a>,
<a class="reference internal" href="#substance_painter.project.save_as_copy" title="substance_painter.project.save_as_copy"><code class="xref py py-func docutils literal notranslate"><span class="pre">save_as_copy()</span></code></a>.
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">is_busy()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save_as_copy">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">save_as_copy</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">backup_file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">mode</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><span class="pre">ProjectSaveMode</span></a></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">ProjectSaveMode.Incremental</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.project.save_as_copy" title="Link to this definition"> </a></dt>
<dd><p>Save a copy of the current project by writing it to the file path
<code class="docutils literal notranslate"><span class="pre">backup_file_path</span></code>. This can be used to save backups of the opened project
without modifying the original file.</p>
<p>After <cite>save_as_copy</cite> the project is still considered to be located at the
location it was previously saved to. If the project was not saved, it is
still considered to not have a saved location.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>If the path <code class="docutils literal notranslate"><span class="pre">backup_file_path</span></code> doesn’t exist yet, new folders will be
created as needed.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>backup_file_path</strong> (<em>string</em>) – The path to write the copy of the project to.</p></li>
<li><p><strong>mode</strong> (<a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><em>ProjectSaveMode</em></a>) – The save mode (Incremental or Full).</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the copy.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><code class="xref py py-class docutils literal notranslate"><span class="pre">ProjectSaveMode</span></code></a>,
<a class="reference internal" href="#substance_painter.project.save" title="substance_painter.project.save"><code class="xref py py-func docutils literal notranslate"><span class="pre">save()</span></code></a>,
<a class="reference internal" href="#substance_painter.project.save_as" title="substance_painter.project.save_as"><code class="xref py py-func docutils literal notranslate"><span class="pre">save_as()</span></code></a>.
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">is_busy()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.save_as_template">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">save_as_template</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">template_file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">texture_set_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.project.ProjectSaveMode" title="substance_painter.project.ProjectSaveMode"><span class="pre">ProjectSaveMode</span></a></span></span><a class="headerlink" href="#substance_painter.project.save_as_template" title="Link to this definition"> </a></dt>
<dd><p>Save a template based of the current Texture Set or the one specified.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>New folders will be created if they are missing.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.</p>
</div>
<div class="admonition warning">
<p class="admonition-title">Warning</p>
<p>If the file already exists, it will be overwritten.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>template_file_path</strong> (<em>string</em>) – The save path.</p></li>
<li><p><strong>texture_set_name</strong> (<em>string</em>) – Name of the Texture Set used as a template.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If Substance 3D Painter cannot save the template.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">is_busy()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.ProjectSaveMode">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">ProjectSaveMode</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.ProjectSaveMode" title="Link to this definition"> </a></dt>
<dd><p>Save strategy enumeration.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Full</span></code></p></td>
<td><p>Save everything in a new file. Slow but creates the smallest possible file.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Incremental</span></code></p></td>
<td><p>Save only new or modified data. Fast but the file size is not optimal.</p></td>
</tr>
</tbody>
</table>
</dd></dl>


<h2>Reloading a mesh<a class="headerlink" href="#reloading-a-mesh" title="Link to this heading"> </a></h2>
<dl>
<dt>Example:</dt><dd><div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.project

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
</pre></div>
</div>
</dd>
</dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.reload_mesh">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">reload_mesh</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">mesh_file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">settings</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.MeshReloadingSettings" title="substance_painter.project.MeshReloadingSettings"><span class="pre">MeshReloadingSettings</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">loading_status_cb</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Callable</span><span class="p"><span class="pre">[</span></span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="#substance_painter.project.ReloadMeshStatus" title="substance_painter.project.ReloadMeshStatus"><span class="pre">ReloadMeshStatus</span></a><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">Any</span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.reload_mesh" title="Link to this definition"> </a></dt>
<dd><p>Import a new mesh to the current project, using the given settings.
Uses the automatic UV unwrapping settings defined at the project level.</p>
<p>The loading is asynchronous: this function returns immediately; when
the loading attempt is finished <code class="docutils literal notranslate"><span class="pre">loading_status_cb</span></code> is called with
an argument indicating if loading was successful.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>mesh_file_path</strong> (<em>string</em>) – File path of the mesh to edit.
Supported file formats: fbx, obj, dae, ply, usd.</p></li>
<li><p><strong>settings</strong> (<a class="reference internal" href="#substance_painter.project.MeshReloadingSettings" title="substance_painter.project.MeshReloadingSettings"><em>MeshReloadingSettings</em></a>) – Configuration options for the mesh loading.</p></li>
<li><p><strong>loading_status_cb</strong> (<em>Callable</em><em>[</em><em>[</em><a class="reference internal" href="#substance_painter.project.ReloadMeshStatus" title="substance_painter.project.ReloadMeshStatus"><em>ReloadMeshStatus</em></a><em>]</em><em>, </em><em>Any</em><em>]</em>) – Loading status notification callback.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened or Substance 3D Painter is busy.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.ReloadMeshStatus" title="substance_painter.project.ReloadMeshStatus"><code class="xref py py-class docutils literal notranslate"><span class="pre">ReloadMeshStatus</span></code></a>,
<a class="reference internal" href="#substance_painter.project.MeshReloadingSettings" title="substance_painter.project.MeshReloadingSettings"><code class="xref py py-class docutils literal notranslate"><span class="pre">MeshReloadingSettings</span></code></a>,
<a class="reference internal" href="#substance_painter.project.is_busy" title="substance_painter.project.is_busy"><code class="xref py py-func docutils literal notranslate"><span class="pre">is_busy()</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-creation">Project creation documentation</a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.project.last_imported_mesh_path">
<span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">last_imported_mesh_path</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.project.last_imported_mesh_path" title="Link to this definition"> </a></dt>
<dd><p>Return the path to the last imported mesh.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The file path of the mesh that was last imported to the project.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">MeshReloadingSettings</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">import_cameras</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">True</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">preserve_strokes</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">True</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">usd_settings</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings"><span class="pre">UsdSettings</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.MeshReloadingSettings" title="Link to this definition"> </a></dt>
<dd><p>Settings used when reloading a mesh.</p>
<p>This corresponds to the mesh related options that are available in the
“Project configuration” dialog.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.reload_mesh" title="substance_painter.project.reload_mesh"><code class="xref py py-func docutils literal notranslate"><span class="pre">reload_mesh()</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-project-configuration">Project configuration documentation</a>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings.import_cameras">
<span class="sig-name descname"><span class="pre">import_cameras</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">bool</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">True</span></em><a class="headerlink" href="#substance_painter.project.MeshReloadingSettings.import_cameras" title="Link to this definition"> </a></dt>
<dd><p>Import cameras from the mesh file.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings.preserve_strokes">
<span class="sig-name descname"><span class="pre">preserve_strokes</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">bool</span></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">True</span></em><a class="headerlink" href="#substance_painter.project.MeshReloadingSettings.preserve_strokes" title="Link to this definition"> </a></dt>
<dd><p>Preserve strokes positions on mesh.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.MeshReloadingSettings.usd_settings">
<span class="sig-name descname"><span class="pre">usd_settings</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.project.UsdSettings" title="substance_painter.project.UsdSettings"><span class="pre">UsdSettings</span></a></em><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">None</span></em><a class="headerlink" href="#substance_painter.project.MeshReloadingSettings.usd_settings" title="Link to this definition"> </a></dt>
<dd><p>Specific settings for USD files.</p>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.ReloadMeshStatus">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">ReloadMeshStatus</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.ReloadMeshStatus" title="Link to this definition"> </a></dt>
<dd><p>Reload mesh status, used in mesh reload asynchronous callback.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.project.reload_mesh" title="substance_painter.project.reload_mesh"><code class="xref py py-func docutils literal notranslate"><span class="pre">reload_mesh()</span></code></a>,</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.ReloadMeshStatus.ERROR">
<span class="sig-name descname"><span class="pre">ERROR</span></span><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">2</span></em><a class="headerlink" href="#substance_painter.project.ReloadMeshStatus.ERROR" title="Link to this definition"> </a></dt>
<dd><p>Mesh reload failed, see application log for details.</p>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.project.ReloadMeshStatus.SUCCESS">
<span class="sig-name descname"><span class="pre">SUCCESS</span></span><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">0</span></em><a class="headerlink" href="#substance_painter.project.ReloadMeshStatus.SUCCESS" title="Link to this definition"> </a></dt>
<dd><p>Mesh reload was successful.</p>
</dd></dl>
</dd></dl>


<h2>Project metadata<a class="headerlink" href="#project-metadata" title="Link to this heading"> </a></h2>
<blockquote>
<div><dl class="py class">
<dt class="sig sig-object py" id="substance_painter.project.Metadata">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.project.</span></span><span class="sig-name descname"><span class="pre">Metadata</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">context</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.Metadata" title="Link to this definition"> </a></dt>
<dd><p>Project metadata are arbitrary data that can be attached to a <cite>Substance
Painter</cite> project. When the project is saved, the metadata are saved with it,
so it is still available the next time the project is loaded.</p>
<p>Metadata can only be accessed when a project is opened. If no project is
opened, the methods will raise an exception.</p>
<p>The constructor of the class <code class="docutils literal notranslate"><span class="pre">Metadata</span></code> takes a context name as an
argument. This context name can be for example the name of your plugin. It
should be unique, to avoid conflict with other plugins.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">substance_painter</span>

<span class="c1"># Instantiate the Metadata utility, for the plugin "MyPlugin".</span>
<span class="n">metadata</span> <span class="o">=</span> <span class="n">substance_painter</span><span class="o">.</span><span class="n">project</span><span class="o">.</span><span class="n">Metadata</span><span class="p">(</span><span class="s2">"MyPlugin"</span><span class="p">)</span>

<span class="c1"># Store a version number under the key "version".</span>
<span class="n">plugin_version</span> <span class="o">=</span> <span class="p">{</span> <span class="s2">"major"</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span> <span class="s2">"minor"</span><span class="p">:</span> <span class="mi">0</span> <span class="p">}</span>
<span class="n">metadata</span><span class="o">.</span><span class="n">set</span><span class="p">(</span><span class="s2">"version"</span><span class="p">,</span> <span class="n">plugin_version</span><span class="p">)</span>

<span class="c1"># List the project's metadata keys. The key "version" is now present.</span>
<span class="n">keys</span> <span class="o">=</span> <span class="n">metadata</span><span class="o">.</span><span class="n">list</span><span class="p">()</span>
<span class="nb">print</span><span class="p">(</span><span class="n">keys</span><span class="p">)</span>

<span class="c1"># Retrieve the metadata "version".</span>
<span class="n">plugin_version</span> <span class="o">=</span> <span class="n">metadata</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s2">"version"</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">"Version: "</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">plugin_version</span><span class="p">))</span>
</pre></div>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.project.Metadata.list">
<span class="sig-name descname"><span class="pre">list</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">list</span></span></span><a class="headerlink" href="#substance_painter.project.Metadata.list" title="Link to this definition"> </a></dt>
<dd><p>Return the list of project metadata keys.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.project.Metadata.get">
<span class="sig-name descname"><span class="pre">get</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">key</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.Metadata.get" title="Link to this definition"> </a></dt>
<dd><p>Retrieve the project metadata under the given key.</p>
<dl class="simple">
<dt>The supported data types are:</dt><dd><ul class="simple">
<li><p>Primitive types: <cite>bool</cite>, <cite>int</cite>, <cite>float</cite>, <cite>str</cite>.</p></li>
<li><dl class="simple">
<dt><cite>list</cite></dt><dd><ul>
<li><p>Items can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><cite>dict</cite></dt><dd><ul>
<li><p>Keys must be of type <cite>str</cite>.</p></li>
<li><p>Values can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>
</dd>
</dl>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>key</strong> (<em>str</em>) – The key identifying the metadata to retrieve.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>RuntimeError</strong> – If the metadata under <code class="docutils literal notranslate"><span class="pre">key</span></code> use a type that is not supported.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.project.Metadata.set">
<span class="sig-name descname"><span class="pre">set</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">key</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.project.Metadata.set" title="Link to this definition"> </a></dt>
<dd><p>Store project metadata under the given key.</p>
<dl class="simple">
<dt>The supported data types are:</dt><dd><ul class="simple">
<li><p>Primitive types: <cite>bool</cite>, <cite>int</cite>, <cite>float</cite>, <cite>str</cite>.</p></li>
<li><dl class="simple">
<dt><cite>list</cite></dt><dd><ul>
<li><p>Items can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
<li><dl class="simple">
<dt><cite>dict</cite></dt><dd><ul>
<li><p>Keys must be of type <cite>str</cite>.</p></li>
<li><p>Values can be any of the supported data types.</p></li>
</ul>
</dd>
</dl>
</li>
</ul>
</dd>
</dl>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>key</strong> (<em>str</em>) – The key identifying the metadata to store.</p></li>
<li><p><strong>value</strong> – The metadata to store.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>RuntimeError</strong> – If <code class="docutils literal notranslate"><span class="pre">value</span></code> uses a type that is not supported.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
</dd></dl>
</div></blockquote>


<h2>Events<a class="headerlink" href="#events" title="Link to this heading"> </a></h2>
<p>Project related operations, whether they are initiated through the Python API
or in the UI, can trigger the following events.
See <a class="reference internal" href="event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a> for more details.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Project loading is done asynchronously. When the event <code class="docutils literal notranslate"><span class="pre">ProjectOpened</span></code> or
<code class="docutils literal notranslate"><span class="pre">ProjectCreated</span></code> is triggered, the project may still be loading. The event
<code class="docutils literal notranslate"><span class="pre">ProjectEditionEntered</span></code> is triggered when the project is ready to work with.</p>
</div>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectOpened</span></span></dt>
<dd><p>Event triggered when an existing project has been opened.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectCreated</span></span></dt>
<dd><p>Event triggered when a new project has been created.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectAboutToClose</span></span></dt>
<dd><p>Event triggered just before closing the current project.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectAboutToSave</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Event triggered just before saving the current project.</p>
<dl class="py attribute">
<dt class="sig sig-object py">
<span class="sig-name descname"><span class="pre">file_path</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em></dt>
<dd><p>The destination file.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectSaved</span></span></dt>
<dd><p>Event triggered once the current project is saved.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectEditionEntered</span></span></dt>
<dd><p>Event triggered when the project is fully loaded and ready to work with.</p>
<p>When edition is entered, it is for example possible to query/edit the project
properties, to bake textures or do project export.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ProjectEditionLeft</span></span></dt>
<dd><p>Event triggered when the current project can non longer be edited.</p>
</dd></dl>


</div>
</div>

</div>
</div>

</div>


