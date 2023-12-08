---
title: resource - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>resource module<a class="headerlink" href="#module-substance_painter.resource" title="Link to this heading"> </a></h1>
<p class>This module allows to manipulate <cite>Substance 3D Painter</cite> resources and shelves.</p>
<p class><cite>Substance 3D Painter</cite> treats textures, materials, brushes, etc. as resources,
and uses URLs to identify them. Resources can be in the shelf, or can be
embedded directly in a project (like a baked ambient occlusion texture for
example).</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.resource.Type">
<em class="property">class </em>substance_painter.resource.Type(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.resource.Type" title="Link to this definition"> </a></dt>
<dd><p class>Enumeration describing the type of a given resource.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Usage</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SCRIPT</code></p></td>
<td><p class>A particle emitter script.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">PRESET</code></p></td>
<td><p class>A resource preset.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SMART_MASK</code></p></td>
<td><p class>A smart mask.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">IMAGE</code></p></td>
<td><p class>An image.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SUBSTANCE</code></p></td>
<td><p class>A substance.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">SHADER</code></p></td>
<td><p class>A shader.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">EXPORT</code></p></td>
<td><p class>An export preset.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">SMART_MATERIAL</code></p></td>
<td><p class>A smart material.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">BRUSH</code></p></td>
<td><p class>A brush.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">RESOURCE</code></p></td>
<td><p class>A resource.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SUBSTANCE_PACKAGE</code></p></td>
<td><p class>A substance package.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">ABR_PACKAGE</code></p></td>
<td><p class>A photoshop brushes package.</p></td>
</tr>
</tbody>
</table>
</dd></dl>

<h2>Overview<a class="headerlink" href="#overview" title="Link to this heading"> </a></h2>

<h3>Manipulating resources<a class="headerlink" href="#manipulating-resources" title="Link to this heading"> </a></h3>
<p class>The resource module exposes the class <a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource"><code class="xref py py-class docutils literal notranslate">Resource</code></a>, which represents a
resource currently available in <cite>Substance 3D Painter</cite> (either in the current
project, current session, or in a shelf).</p>
<p class>Listing all the resources of a shelf can be done with <a class="reference internal" href="#substance_painter.resource.Shelf.resources" title="substance_painter.resource.Shelf.resources"><code class="xref py py-meth docutils literal notranslate">Shelf.resources()</code></a>,
while <a class="reference internal" href="#substance_painter.resource.search" title="substance_painter.resource.search"><code class="xref py py-func docutils literal notranslate">search()</code></a> allows to search for specific resources. Specific resources
can be shown with a filter directly in the Assets window with
<a class="reference internal" href="#substance_painter.resource.Resource.show_in_ui" title="substance_painter.resource.Resource.show_in_ui"><code class="xref py py-func docutils literal notranslate">Resource.show_in_ui()</code></a> and <a class="reference internal" href="#substance_painter.resource.show_resources_in_ui" title="substance_painter.resource.show_resources_in_ui"><code class="xref py py-func docutils literal notranslate">show_resources_in_ui()</code></a>.</p>



```python
import substance_painter.resource

# Get all the resources of a shelf:
my_shelf = substance_painter.resource.Shelf("myshelf")
all_shelf_resources = my_shelf.resources()

for resource in all_shelf_resources:
	print(resource.identifier().name)

# Find all resources that match a name:
aluminium_resources = substance_painter.resource.search("aluminium")

for resource in aluminium_resources:
	print(resource.identifier().name)

# Show a single resource in the shelf:
aluminium_resources[0].show_in_ui()

# Show the list of resources found in the shelf:
substance_painter.resource.show_resources_in_ui(aluminium_resources)
```




<p class>Internally, resources are identified with a URL; <a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><code class="xref py py-class docutils literal notranslate">ResourceID</code></a> contains
that URL. It can be manipulated directly, with no guaranty that the URL is
referring to an actual resource.</p>



```python
import substance_painter.resource

# Display the URL of a resource:
envmap_resources = substance_painter.resource.search("bonifacio")
for envmap in envmap_resources:
	envmap_id = envmap.identifier()
	print("The URL of the resource `{0}` is {1}"
		.format(envmap_id.name, envmap_id.url()))
	print("The location of the resource `{0}` is {1}"
		.format(envmap_id.name, envmap_id.location()))

# It is possible to create a ResourceID from a URL. If there is no
# resource corresponding to the URL, the ResourceID is still valid
# but refers to a resource that doesn't exist.
envmap2_id = substance_painter.resource.ResourceID.from_url(
	"resource://starter_assets/Bonifacio Street");

# It is possible to create a ResourceID from a context, a name and
# a version (optional). This is equivalent to the above, with the
# same caveat.
envmap3_id = substance_painter.resource.ResourceID(
	context="starter_assets", name="Bonifacio Street")
envmap4_id = substance_painter.resource.ResourceID(
	context="starter_assets", name="Bonifacio Street",
	version="d30facd8d860fc212f864065641cdca4e8006510.image");

# It is possible to get the ResourceID of a resource embedded in the
# current project. This time it refers to an actual resource.
envmap5_id = substance_painter.resource.ResourceID.from_project(
	name="Bonifacio Street");

# Finally, it is possible to get the ResourceID of a resource that
# was imported in the current session:
envmap6_id = substance_painter.resource.ResourceID.from_session(
	name="Bonifacio Street");
```




<p class>If the resource exists, it can be retrieved from its identifier with
<a class="reference internal" href="#substance_painter.resource.Resource.retrieve" title="substance_painter.resource.Resource.retrieve"><code class="xref py py-meth docutils literal notranslate">Resource.retrieve()</code></a>. When there are several versions of the same resource,
<a class="reference internal" href="#substance_painter.resource.Resource.retrieve" title="substance_painter.resource.Resource.retrieve"><code class="xref py py-meth docutils literal notranslate">Resource.retrieve()</code></a> will return the entire list, starting with the most
recent one. On the contrary, if the resource doesn’t exist or was deleted,
<a class="reference internal" href="#substance_painter.resource.Resource.retrieve" title="substance_painter.resource.Resource.retrieve"><code class="xref py py-meth docutils literal notranslate">Resource.retrieve()</code></a> will return an empty list.</p>



```python
import substance_painter.resource

# Create a ResourceID:
envmap_id = substance_painter.resource.ResourceID(context="starter_assets",
												  name="Bonifacio Street")

# Get the resources corresponding to the ResourceID. There can be 0 if there
# is no such resource, or more than 1 if there are multiple versions of the
# resource.
envmap_resources = substance_painter.resource.Resource.retrieve(envmap_id)
print("{} resource(s) with that ID".format(len(envmap_resources)))
```






<h3>Importing resources<a class="headerlink" href="#importing-resources" title="Link to this heading"> </a></h3>
<p class>New resources can be imported, either
to the current project with <a class="reference internal" href="#substance_painter.resource.import_project_resource" title="substance_painter.resource.import_project_resource"><code class="xref py py-func docutils literal notranslate">import_project_resource()</code></a>,
to the current session with <a class="reference internal" href="#substance_painter.resource.import_session_resource" title="substance_painter.resource.import_session_resource"><code class="xref py py-func docutils literal notranslate">import_session_resource()</code></a>,
or to a shelf with <a class="reference internal" href="#substance_painter.resource.Shelf.import_resource" title="substance_painter.resource.Shelf.import_resource"><code class="xref py py-func docutils literal notranslate">Shelf.import_resource()</code></a>.
All three functions take a path to the resource to be imported, a <a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><code class="xref py py-class docutils literal notranslate">Usage</code></a>
indicating the type of that resource, and optionally a name and a group.
This feature corresponds to the “Import resources” window.</p>
<p class>Resources can be imported into a shelf, as long as it is not a read-only shelf.
The Substance shelf, installed along the application, is read-only.
A shelf is also read-only if its path on the file system is read-only.
This can be checked with <a class="reference internal" href="#substance_painter.resource.Shelf.can_import_resources" title="substance_painter.resource.Shelf.can_import_resources"><code class="xref py py-func docutils literal notranslate">Shelf.can_import_resources()</code></a>.</p>

<dt>Example:</dt>

```python
import substance_painter.resource

# Open a project we want to import into (see substance_painter.project
# for details). This step is not necessary if there is already a project
# opened in Substance 3D Painter.
import substance_painter.project
substance_painter.project.open("C:/projects/MeetMat.spp")

# Import a normal map to the project:
new_resource = substance_painter.resource.import_project_resource(
	"C:/textures/MyBakedNormalMap.png",
	substance_painter.resource.Usage.TEXTURE)

# Import a color LUT to the session:
new_color_lut = substance_painter.resource.import_session_resource(
	"C:/textures/sepia.exr",
	substance_painter.resource.Usage.COLOR_LUT)

# Set that color LUT (see substance_painter.display for details).
# This step is unrelated to import, and just meant to show how the
# imported resource can be used.
import substance_painter.display
substance_painter.display.set_color_lut_resource(new_color_lut.identifier())

# Import an environment map to the shelf.
my_shelf = substance_painter.resource.Shelf("myshelf")
if my_shelf.can_import_resources():
	new_resource = my_shelf.import_resource(
		"C:/textures/Bonifacio Street.exr",
		substance_painter.resource.Usage.ENVIRONMENT)
else:
	print("The shelf is read-only.")
```




<dt>See also:</dt><dd><p class><a class="reference external" href="https://www.adobe.com/go/painter-adding-content-import-window">Adding content via the import window</a>.</p>
</dd>



<h3>Resources used by a project<a class="headerlink" href="#resources-used-by-a-project" title="Link to this heading"> </a></h3>
<p class>It is possible to list the resources used by the layer stacks and mesh maps of
a project with <a class="reference internal" href="#substance_painter.resource.list_layer_stack_resources" title="substance_painter.resource.list_layer_stack_resources"><code class="xref py py-func docutils literal notranslate">list_layer_stack_resources()</code></a>, and to update them with
<a class="reference internal" href="#substance_painter.resource.update_layer_stack_resource" title="substance_painter.resource.update_layer_stack_resource"><code class="xref py py-func docutils literal notranslate">update_layer_stack_resource()</code></a>.</p>
<p class>There may be other resources referenced by a project outside of the layer
stack and mesh maps: see the <a class="reference internal" href="display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate">substance_painter.display</code></a> module to
query and modify them.</p>

<dt>Example:</dt>

```python
import substance_painter.resource

# Open a project we want to manipulate resources from (see
# substance_painter.project for details). This step is not necessary
# if there is already a project opened in Substance Painter.
import substance_painter.project
substance_painter.project.open("C:/projects/MeetMat.spp")

# List all the resources referenced by all the layer stacks and
# mesh maps:
used_resources_ids = substance_painter.resource.list_layer_stack_resources()
for resource_id in used_resources_ids:
	print(resource_id.name)

# Import a normal map to the project:
new_resource = substance_painter.resource.import_project_resource(
	"C:/textures/MyBakedNormalMap.png",
	substance_painter.resource.Usage.TEXTURE)

# Replace one of the resources with the new imported resource:
substance_painter.resource.update_layer_stack_resource(used_resources_ids[0], new_resource)
```







<h3>Custom preview<a class="headerlink" href="#custom-preview" title="Link to this heading"> </a></h3>
<p class>When a resource is imported, a thumbnail is automatically generated for it.
It is possible to replace that thumbnail with a custom preview by using
<a class="reference internal" href="#substance_painter.resource.Resource.set_custom_preview" title="substance_painter.resource.Resource.set_custom_preview"><code class="xref py py-meth docutils literal notranslate">Resource.set_custom_preview()</code></a>, or reset the preview with
<a class="reference internal" href="#substance_painter.resource.Resource.reset_preview" title="substance_painter.resource.Resource.reset_preview"><code class="xref py py-meth docutils literal notranslate">Resource.reset_preview()</code></a>.</p>

<dt>Example:</dt>

```python
import substance_painter.resource

aluminium_resources = substance_painter.resource.search("aluminium")
resource = aluminium_resources[0]

# Set the custom preview:
resource.set_custom_preview("C:/textures/MyCustomPreview.png")

# Remove the custom preview:
resource.reset_preview()
```







<h3>Resource crawling<a class="headerlink" href="#resource-crawling" title="Link to this heading"> </a></h3>
<p class>When <cite>Substance 3D Painter</cite> is opened, it will browse the different shelves
to discover and index resources, and display their thumbnail. When it regains
focus after switching to another application, it will do so again, in case
the user added a new asset to their shelf folder. This process is referred
to as <strong>resource crawling</strong>.</p>
<p class>When a shelf starts crawling, an event
<a class="reference internal" href="event.html#substance_painter.event.ShelfCrawlingStarted" title="substance_painter.event.ShelfCrawlingStarted"><code class="xref py py-class docutils literal notranslate">substance_painter.event.ShelfCrawlingStarted</code></a> is emitted for that
shelf. When crawling is finished, an event
<a class="reference internal" href="event.html#substance_painter.event.ShelfCrawlingEnded" title="substance_painter.event.ShelfCrawlingEnded"><code class="xref py py-class docutils literal notranslate">substance_painter.event.ShelfCrawlingEnded</code></a> is emitted for that
shelf. At any time, <a class="reference internal" href="#substance_painter.resource.Shelf.is_crawling" title="substance_painter.resource.Shelf.is_crawling"><code class="xref py py-func docutils literal notranslate">Shelf.is_crawling()</code></a> will tell if a shelf is
crawling or not.</p>
<p class>It is possible from a Python script to explicitly trigger a new resource
crawling with <a class="reference internal" href="#substance_painter.resource.Shelves.refresh_all" title="substance_painter.resource.Shelves.refresh_all"><code class="xref py py-func docutils literal notranslate">Shelves.refresh_all()</code></a>.</p>

<dt>Example:</dt>

```python
import substance_painter.resource
import substance_painter.event

# Two event handlers to show when crawling starts and ends:
def on_start_crawl(e):
	print("Shelf `{}` started crawling.".format(e.shelf_name))

def on_end_crawl(e):
	print("Shelf `{}` finished crawling.".format(e.shelf_name))

# Use the event handler to listen to ShelfCrawlingStarted and
# ShelfCrawlingEnded:
substance_painter.event.DISPATCHER.connect(
	substance_painter.event.ShelfCrawlingStarted,
	on_start_crawl)

substance_painter.event.DISPATCHER.connect(
	substance_painter.event.ShelfCrawlingEnded,
	on_end_crawl)

# At this point, the event handlers may or may not print something,
# depending on what the shelves are doing. It is possible to trigger
# a crawling by switching to another application, and coming back
# to Substance 3D Painter.

# It is also possible to trigger a crawling with this call:
substance_painter.resource.Shelves.refresh_all()

my_shelf = substance_painter.resource.Shelf("myshelf")

# Running this bloc at different moments will give different
# results:
if my_shelf.is_crawling():
	print("The shelf is crawling...")
else:
	print("The shelf is idle.")
```








<h2>Resources<a class="headerlink" href="#resources" title="Link to this heading"> </a></h2>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.resource.Resource">
<em class="property">class </em>substance_painter.resource.Resource(<em class="sig-param">handle: _substance_painter.resource.ResourceHandle</em>)<a class="headerlink" href="#substance_painter.resource.Resource" title="Link to this definition"> </a></dt>
<dd><p class>A <cite>Substance 3D Painter</cite> resource.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.identifier">
identifier() → <a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a><a class="headerlink" href="#substance_painter.resource.Resource.identifier" title="Link to this definition"> </a></dt>
<dd><p class>Get this resource identifier.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The resource identifier.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><code class="xref py py-class docutils literal notranslate">ResourceID</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.location">
location() → <a class="reference internal" href="#substance_painter.resource.ResourceLocation" title="substance_painter.resource.ResourceLocation">ResourceLocation</a><a class="headerlink" href="#substance_painter.resource.Resource.location" title="Link to this definition"> </a></dt>
<dd><p class>Get the location of this <cite>Resource</cite>.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The location of this resource.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="#substance_painter.resource.ResourceLocation" title="substance_painter.resource.ResourceLocation">ResourceLocation</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.retrieve">
<em class="property">static </em>retrieve(<em class="sig-param">identifier: <a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></em>)<a class="headerlink" href="#substance_painter.resource.Resource.retrieve" title="Link to this definition"> </a></dt>
<dd><p class>Retrieve a list of resources matching the given identifier.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>identifier</strong> (<a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a>) – A resource identifier.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>ValueError</strong> – If the name of the identifier is empty
    or if the context of the identifier doesn’t exists.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The list of resources matching the given identifier.
If the identifier has a valid version, this method will return only one or
zero resources, otherwise the list may contain several resources. In case
of several resources are returned, the most up to date resource will be at
the begining of the list.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><em>List</em>[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.set_custom_preview">
set_custom_preview(<em class="sig-param">preview_image: str</em>) → None<a class="headerlink" href="#substance_painter.resource.Resource.set_custom_preview" title="Link to this definition"> </a></dt>
<dd><p class>Replace the current preview of this resource with a custom image.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>preview_image</strong> (<em>str</em>) – File path to an image on the disk to use as the new
preview.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>ValueError</strong> – If the resource metadata cannot be modified.</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">preview_image</code> is not a valid path to a valid image.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>The preview image can be a JPEG, a PNG or an XPM.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.category">
category() → str<a class="headerlink" href="#substance_painter.resource.Resource.category" title="Link to this definition"> </a></dt>
<dd><p class>Get the category of this resource, ex: “wood” for a material.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>the category of this resource</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.usages">
usages() → List[<a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage">Usage</a>]<a class="headerlink" href="#substance_painter.resource.Resource.usages" title="Link to this definition"> </a></dt>
<dd><p class>Get the usages of this resource.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>the usages of this resource</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><em>List</em>[<a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage">Usage</a>]</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><code class="xref py py-class docutils literal notranslate">Usage</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.gui_name">
gui_name() → str<a class="headerlink" href="#substance_painter.resource.Resource.gui_name" title="Link to this definition"> </a></dt>
<dd><p class>Get the GUI name of this resource.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>the GUI name of this resource</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.type">
type() → <a class="reference internal" href="#substance_painter.resource.Type" title="substance_painter.resource.Type">Type</a><a class="headerlink" href="#substance_painter.resource.Resource.type" title="Link to this definition"> </a></dt>
<dd><p class>Get the type of this resource.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>the type of this resource</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.Type" title="substance_painter.resource.Type">Type</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.Type" title="substance_painter.resource.Type"><code class="xref py py-class docutils literal notranslate">Type</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.tags">
tags() → List[str]<a class="headerlink" href="#substance_painter.resource.Resource.tags" title="Link to this definition"> </a></dt>
<dd><p class>Get the tags of this resource.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>the tags of this resource</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><em>List</em>[str]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.internal_properties">
internal_properties() → dict<a class="headerlink" href="#substance_painter.resource.Resource.internal_properties" title="Link to this definition"> </a></dt>
<dd><p class>Get a dictionnary of the resource internal properties.
The current implementation only extracts metadata on Substance resources.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>a dictionnary containing internal properties about this resource</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>dict</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.children">
children() → List[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]<a class="headerlink" href="#substance_painter.resource.Resource.children" title="Link to this definition"> </a></dt>
<dd><p class>Get child resources.
For example substance graphs of a substance package.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>Resources contained in this resource.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><em>List</em>[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.parent">
parent() → <a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a> | None<a class="headerlink" href="#substance_painter.resource.Resource.parent" title="Link to this definition"> </a></dt>
<dd><p class>Get parent resource.
For example the substance package a substance graph is originating from.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><strong>RuntimeError</strong> – If the resource is invalid.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The parent resource that owns this resource.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><em>Optional</em>[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.reset_preview">
reset_preview() → None<a class="headerlink" href="#substance_painter.resource.Resource.reset_preview" title="Link to this definition"> </a></dt>
<dd><p class>Remove any custom preview for this resource and resets to the default one.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>ValueError</strong> – If the resource metadata cannot be modified.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Resource.show_in_ui">
show_in_ui() → None<a class="headerlink" href="#substance_painter.resource.Resource.show_in_ui" title="Link to this definition"> </a></dt>
<dd><p class>Highlight this resource in the application shelf UI (Assets window).</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.show_resources_in_ui" title="substance_painter.resource.show_resources_in_ui"><code class="xref py py-func docutils literal notranslate">show_resources_in_ui()</code></a>.</p>
</div>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID">
<em class="property">class </em>substance_painter.resource.ResourceID(<em class="sig-param">context: str</em>, <em class="sig-param">name: str</em>, <em class="sig-param">version: str | None = None</em>)<a class="headerlink" href="#substance_painter.resource.ResourceID" title="Link to this definition"> </a></dt>
<dd><p class>A <cite>Substance 3D Painter</cite> resource identifier.</p>
<p class>The resource is identified by a context, a name, and a version. The context
and the name are mandatory while the version is optional. The version is a
string that looks like a hash, and may also contain an extension.</p>
<div class="admonition note">
<p class>Note</p>
<p class>A ResourceID object is only an identifier. It provides no guarantees that
the resource actually exists.</p>
</div>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate">substance_painter.display</code></a>.</p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.from_project">
<em class="property">classmethod </em>from_project(<em class="sig-param">name: str</em>, <em class="sig-param">version: str | None = None</em>)<a class="headerlink" href="#substance_painter.resource.ResourceID.from_project" title="Link to this definition"> </a></dt>
<dd><p class>Create a <cite>ResourceID</cite> object for a resource located in the current project.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>name</strong> (<em>str</em>) – The resource name.</p></li>
<li><p class><strong>version</strong> (<em>str</em><em>, </em><em>optional</em>) – The resource version (hash-like string).</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The resource corresponding to the given name.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.from_session">
<em class="property">classmethod </em>from_session(<em class="sig-param">name: str</em>, <em class="sig-param">version: str | None = None</em>)<a class="headerlink" href="#substance_painter.resource.ResourceID.from_session" title="Link to this definition"> </a></dt>
<dd><p class>Create a <cite>ResourceID</cite> object for a resource located in the current session.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>name</strong> (<em>str</em>) – The resource name.</p></li>
<li><p class><strong>version</strong> (<em>str</em><em>, </em><em>optional</em>) – The resource version (hash-like string).</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The resource corresponding to the given name.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.from_url">
<em class="property">classmethod </em>from_url(<em class="sig-param">url: str</em>)<a class="headerlink" href="#substance_painter.resource.ResourceID.from_url" title="Link to this definition"> </a></dt>
<dd><p class>Create a <cite>ResourceID</cite> object from its URL.
URLs must have <code class="docutils literal notranslate">resource://</code> as a scheme. The version is encoded as a query
string, that looks like a hash.</p>
<p class>A resource URL looks like this:</p>
<p class><code class="docutils literal notranslate">resource://context/name?version=0123456789abcdef0123456789abcdef01234567.image</code></p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>url</strong> (<em>str</em>) – The resource URL.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The resource corresponding to the given URL.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">url</code> is not a valid URL.</p></li>
<li><p class><strong>ValueError</strong> – If the URL scheme is not <code class="docutils literal notranslate">resource://</code>.</p></li>
<li><p class><strong>ValueError</strong> – If the resource name is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.location">
location() → <a class="reference internal" href="#substance_painter.resource.ResourceLocation" title="substance_painter.resource.ResourceLocation">ResourceLocation</a><a class="headerlink" href="#substance_painter.resource.ResourceID.location" title="Link to this definition"> </a></dt>
<dd><p class>Get the location of this <cite>ResourceID</cite>.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The location of this resource.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="#substance_painter.resource.ResourceLocation" title="substance_painter.resource.ResourceLocation">ResourceLocation</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.url">
url() → str<a class="headerlink" href="#substance_painter.resource.ResourceID.url" title="Link to this definition"> </a></dt>
<dd><p class>Get the URL form of this <cite>ResourceID</cite>.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The URL of the resource.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>ValueError</strong> – If the <cite>ResourceID</cite> doesn’t have a context.</p></li>
<li><p class><strong>ValueError</strong> – If the <cite>ResourceID</cite> doesn’t have a name.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.context">
context<em class="property">: str</em><a class="headerlink" href="#substance_painter.resource.ResourceID.context" title="Link to this definition"> </a></dt>
<dd><p class>Context of the resource.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.name">
name<em class="property">: str</em><a class="headerlink" href="#substance_painter.resource.ResourceID.name" title="Link to this definition"> </a></dt>
<dd><p class>Name of the resource.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.resource.ResourceID.version">
version<em class="property">: str</em><em class="property"> = None</em><a class="headerlink" href="#substance_painter.resource.ResourceID.version" title="Link to this definition"> </a></dt>
<dd><p class>Hash identifying the version of the resource.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>

<dt class="sig sig-object py" id="substance_painter.resource.ResourceLocation">
<em class="property">class </em>substance_painter.resource.ResourceLocation(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.resource.ResourceLocation" title="Link to this definition"> </a></dt>
<p class>Each resource has a location determined by where its data lives.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Data location</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SESSION</code></p></td>
<td><p class>Current session; those ressources will be lost after a restart of the application.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">PROJECT</code></p></td>
<td><p class>A Substance 3D Painter project; those resources are embedded in the spp file.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SHELF</code></p></td>
<td><p class>One of the Substance 3D Painter Shelves.</p></td>
</tr>
</tbody>
</table>
<p class>Example</p>


```python
import substance_painter.resource

# For a resource from the default shelf
aluminium = substance_painter.resource.ResourceID(
	context="starter_assets", name="Aluminium Insulator");

# This will print:
# ResourceLocation.SHELF
print(aluminium.location())

# For an embedded resource, like a baked map
aomap = substance_painter.resource.ResourceID.from_project(
	name="ambient_occlusion");

# This will print:
# ResourceLocation.PROJECT
print(aomap.location())

# Finally, for a temporary resource
test_envmap = substance_painter.resource.ResourceID.from_session(
	name="Test Envmap");

# This will print:
# ResourceLocation.SESSION
print(test_envmap.location())
```




<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.resource.StandardQuery">
<em class="property">class </em>substance_painter.resource.StandardQuery<a class="headerlink" href="#substance_painter.resource.StandardQuery" title="Link to this definition"> </a></dt>
<dd><p class>Standard resource queries.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Query</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">ALL_RESOURCES</code></p></td>
<td><p class>All resources.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">PROJECT_RESOURCES</code></p></td>
<td><p class>Resources that belongs to the current project.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SESSION_RESOURCES</code></p></td>
<td><p class>Resources that belongs to the current session.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">SHELVES_RESOURCES</code></p></td>
<td><p class>All shelves resources.</p></td>
</tr>
</tbody>
</table>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.search" title="substance_painter.resource.search"><code class="xref py py-func docutils literal notranslate">search()</code></a>.</p>
</div>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.resource.Usage">
<em class="property">class </em>substance_painter.resource.Usage(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.resource.Usage" title="Link to this definition"> </a></dt>
<dd><p class>Enumeration describing how a given resource is meant to be used.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Usage</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">BASE_MATERIAL</code></p></td>
<td><p class>A material.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">ENVIRONMENT</code></p></td>
<td><p class>An environment map.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">ALPHA</code></p></td>
<td><p class>A brush alpha.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">TEXTURE</code></p></td>
<td><p class>A UV space map like bakes.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">FILTER</code></p></td>
<td><p class>A layer stack filter.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">EMITTER</code></p></td>
<td><p class>A particle emitter script.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">RECEIVER</code></p></td>
<td><p class>A particle receiver script.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">PROCEDURAL</code></p></td>
<td><p class>A procedural substance, like a noise.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">BRUSH</code></p></td>
<td><p class>A brush definition.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">PARTICLE</code></p></td>
<td><p class>A particles effect.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">TOOL</code></p></td>
<td><p class>A painting tool preset.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">SHADER</code></p></td>
<td><p class>A shader.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">EXPORT</code></p></td>
<td><p class>An export preset.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">GENERATOR</code></p></td>
<td><p class>A mask generator.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">SMART_MATERIAL</code></p></td>
<td><p class>A smart material.</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">SMART_MASK</code></p></td>
<td><p class>A smart mask.</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">COLOR_LUT</code></p></td>
<td><p class>A color look-up table.</p></td>
</tr>
</tbody>
</table>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.import_project_resource" title="substance_painter.resource.import_project_resource"><code class="xref py py-func docutils literal notranslate">import_project_resource()</code></a>,
<a class="reference internal" href="#substance_painter.resource.import_session_resource" title="substance_painter.resource.import_session_resource"><code class="xref py py-func docutils literal notranslate">import_session_resource()</code></a>,
<a class="reference internal" href="#substance_painter.resource.Shelf.import_resource" title="substance_painter.resource.Shelf.import_resource"><code class="xref py py-meth docutils literal notranslate">Shelf.import_resource()</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.resource.search">
substance_painter.resource.search(<em class="sig-param">query: str</em>) → List[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]<a class="headerlink" href="#substance_painter.resource.search" title="Link to this definition"> </a></dt>
<dd><p class>List Substance 3D Painter resources that match the given query.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>query</strong> (<em>str</em>) – A resource query string. See <a class="reference external" href="https://www.adobe.com/go/painter-filtering-shelf-content">text query documentation</a>.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The list of resources that match the given query.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>List[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.StandardQuery" title="substance_painter.resource.StandardQuery"><code class="xref py py-class docutils literal notranslate">StandardQuery</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.resource.list_layer_stack_resources">
substance_painter.resource.list_layer_stack_resources() → List[<a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a>]<a class="headerlink" href="#substance_painter.resource.list_layer_stack_resources" title="Link to this definition"> </a></dt>
<dd><p class>List the resources referenced by the layer stacks and mesh maps of the current
project.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The list of resource identifiers referenced.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>List[<a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a>]</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.update_layer_stack_resource" title="substance_painter.resource.update_layer_stack_resource"><code class="xref py py-func docutils literal notranslate">update_layer_stack_resource()</code></a>,
<a class="reference internal" href="display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate">substance_painter.display</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.resource.update_layer_stack_resource">
substance_painter.resource.update_layer_stack_resource(<em class="sig-param">old_resource_id: <a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></em>, <em class="sig-param">new_resource: <a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a></em>) → List[<a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a>]<a class="headerlink" href="#substance_painter.resource.update_layer_stack_resource" title="Link to this definition"> </a></dt>
<dd><p class>Replace resources from the layer stacks and mesh maps in the current project.</p>
<p class>Given a resource identifier, replace any resource having the same identifier
with the new resource. The new resource must be compatible with the ones it
replaces (see note); otherwise, an error is thrown.</p>
<div class="admonition note">
<p class>Note</p>
<p class>The new resource must be of the same type as the resources it replaces.
For example a base material resource cannot be updated with a smart
material resource.</p>
<p class>Moreover:</p>
<ul class="simple">
<li><p class>If the resource is a Substance material, it must have the same number
and names of outputs.</p></li>
<li><p class>If the resource is a Substance filter, it must have the same number
and names of inputs and outputs.</p></li>
</ul>
</div>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The list of identifiers of all the resources that have
been replaced.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>List[<a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a>]</p>
</dd>
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>old_resource_id</strong> (<a class="reference internal" href="#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a>) – The identifier of the resource(s) to update.</p></li>
<li><p class><strong>new_resource</strong> (<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource"><em>Resource</em></a>) – The new resource to use instead.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>TypeError</strong> – If <code class="docutils literal notranslate">old_resource_id</code> is not a ResourceID.</p></li>
<li><p class><strong>TypeError</strong> – If <code class="docutils literal notranslate">new_resource</code> is not a Resource.</p></li>
<li><p class><strong>RuntimeError</strong> – If <code class="docutils literal notranslate">new_resource</code> is not a valid resource.</p></li>
<li><p class><strong>RuntimeError</strong> – If <code class="docutils literal notranslate">new_resource</code> cannot be used in place of
    <code class="docutils literal notranslate">old_resource_id</code>.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.list_layer_stack_resources" title="substance_painter.resource.list_layer_stack_resources"><code class="xref py py-func docutils literal notranslate">list_layer_stack_resources()</code></a>,
<a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><code class="xref py py-class docutils literal notranslate">Usage</code></a>,
<a class="reference internal" href="display.html#module-substance_painter.display" title="substance_painter.display"><code class="xref py py-mod docutils literal notranslate">substance_painter.display</code></a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.resource.import_project_resource">
substance_painter.resource.import_project_resource(<em class="sig-param">file_path: str</em>, <em class="sig-param">resource_usage: <a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage">Usage</a></em>, <em class="sig-param">name: str | None = None</em>, <em class="sig-param">group: str | None = None</em>) → <a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a><a class="headerlink" href="#substance_painter.resource.import_project_resource" title="Link to this definition"> </a></dt>
<dd><p class>Import a resource into the current opened project.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>file_path</strong> (<em>str</em>) – The file path to the resource to be imported.</p></li>
<li><p class><strong>resource_usage</strong> (<a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><em>Usage</em></a>) – The resource usage.</p></li>
<li><p class><strong>name</strong> (<em>str</em><em>, </em><em>optional</em>) – The name of the resource if different from the
file name.</p></li>
<li><p class><strong>group</strong> (<em>str</em><em>, </em><em>opional</em>) – An optional group name, can be used in resource
queries.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The imported resource object.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>ValueError</strong> – If parameters validation failed.</p></li>
<li><p class><strong>RuntimeError</strong> – If import failed.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.resource.import_session_resource">
substance_painter.resource.import_session_resource(<em class="sig-param">file_path: str</em>, <em class="sig-param">resource_usage: <a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage">Usage</a></em>, <em class="sig-param">name: str | None = None</em>, <em class="sig-param">group: str | None = None</em>) → <a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a><a class="headerlink" href="#substance_painter.resource.import_session_resource" title="Link to this definition"> </a></dt>
<dd><p class>Import a resource into the current session.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>file_path</strong> (<em>str</em>) – The file path to the resource to be imported.</p></li>
<li><p class><strong>resource_usage</strong> (<a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><em>Usage</em></a>) – The resource usage.</p></li>
<li><p class><strong>name</strong> (<em>str</em><em>, </em><em>optional</em>) – The name of the resource if different from the
file name.</p></li>
<li><p class><strong>group</strong> (<em>str</em><em>, </em><em>opional</em>) – An optional group name, can be used in resource
queries.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The imported resource object.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>ValueError</strong> – If parameters validation failed.</p></li>
<li><p class><strong>RuntimeError</strong> – If import failed.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.resource.show_resources_in_ui">
substance_painter.resource.show_resources_in_ui(<em class="sig-param">resources: List[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]</em>) → None<a class="headerlink" href="#substance_painter.resource.show_resources_in_ui" title="Link to this definition"> </a></dt>
<dd><p class>Highlight a list of resources in the application shelf UI (Assets window).</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>resources</strong> (<em>List</em><em>[</em><a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource"><em>Resource</em></a><em>]</em>) – Resources to highlight</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.Resource.show_in_ui" title="substance_painter.resource.Resource.show_in_ui"><code class="xref py py-func docutils literal notranslate">Resource.show_in_ui()</code></a>.</p>
</div>
</dd></dl>


<h2>Shelves<a class="headerlink" href="#shelves" title="Link to this heading"> </a></h2>
<dl class="simple">
<dt>See also:</dt><dd><p class><a class="reference external" href="https://www.adobe.com/go/painter-shelf-configuration">Shelf configuration</a>.</p>
</dd>
</dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf">
<em class="property">class </em>substance_painter.resource.Shelf(<em class="sig-param">_name: str</em>)<a class="headerlink" href="#substance_painter.resource.Shelf" title="Link to this definition"> </a></dt>
<dd><p class>Class providing information on a given <cite>Substance 3D Painter</cite> shelf. A shelf
is identified by a unique <cite>name</cite>.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf.can_import_resources">
can_import_resources() → bool<a class="headerlink" href="#substance_painter.resource.Shelf.can_import_resources" title="Link to this definition"> </a></dt>
<dd><p class>Check if resources can be imported into this shelf.
Resources can be imported into a shelf, as long as it is not a read-only shelf.
The Substance shelf, installed along the application, is read-only. A shelf is
also read-only if its path on the file system is read-only.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if resources can be imported.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="event.html#substance_painter.event.ShelfCrawlingEnded" title="substance_painter.event.ShelfCrawlingEnded"><code class="xref py py-class docutils literal notranslate">substance_painter.event.ShelfCrawlingEnded</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf.import_resource">
import_resource(<em class="sig-param">file_path: str</em>, <em class="sig-param">resource_usage: <a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage">Usage</a></em>, <em class="sig-param">name: str | None = None</em>, <em class="sig-param">group: str | None = None</em>, <em class="sig-param">uuid: str | None = None</em>) → <a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a><a class="headerlink" href="#substance_painter.resource.Shelf.import_resource" title="Link to this definition"> </a></dt>
<dd><p class>Import a resource into this shelf.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>file_path</strong> (<em>str</em>) – The file path to the resource to be imported.</p></li>
<li><p class><strong>resource_usage</strong> (<a class="reference internal" href="#substance_painter.resource.Usage" title="substance_painter.resource.Usage"><em>Usage</em></a>) – The resource usage.</p></li>
<li><p class><strong>name</strong> (<em>str</em><em>, </em><em>optional</em>) – The name of the resource if different from the
file name.</p></li>
<li><p class><strong>group</strong> (<em>str</em><em>, </em><em>opional</em>) – An optional group name, can be used in resource
queries.</p></li>
<li><p class><strong>uuid</strong> (<em>str</em><em>, </em><em>opional</em>) – An optional uuid. If a resource already exists with
the same uuid, it will be replaced.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The imported resource object.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>ValueError</strong> – If parameters validation failed.</p></li>
<li><p class><strong>RuntimeError</strong> – If import failed.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf.is_crawling">
is_crawling() → bool<a class="headerlink" href="#substance_painter.resource.Shelf.is_crawling" title="Link to this definition"> </a></dt>
<dd><p class>Check if this shelf is currently discovering resources in folders.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if this shelf is discovering resources, <code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="event.html#substance_painter.event.ShelfCrawlingEnded" title="substance_painter.event.ShelfCrawlingEnded"><code class="xref py py-class docutils literal notranslate">substance_painter.event.ShelfCrawlingEnded</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf.name">
name() → str<a class="headerlink" href="#substance_painter.resource.Shelf.name" title="Link to this definition"> </a></dt>
<dd><dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The shelf name.
Each shelf is identified by a unique <cite>name</cite>.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf.path">
path() → str<a class="headerlink" href="#substance_painter.resource.Shelf.path" title="Link to this definition"> </a></dt>
<dd><dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The associated path</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>ValueError</strong> – If the shelf doesn’t exist anymore.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelf.resources">
resources(<em class="sig-param">query: str = ''</em>) → List[<a class="reference internal" href="#substance_painter.resource.Resource" title="substance_painter.resource.Resource">Resource</a>]<a class="headerlink" href="#substance_painter.resource.Shelf.resources" title="Link to this definition"> </a></dt>
<dd><p class>Get resources contained in this shelf. An optional query string can be given
to narrow the results.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>query</strong> (<em>str</em><em>, </em><em>optional</em>) – A resource query string.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>This shelf’s list of resources.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.search" title="substance_painter.resource.search"><code class="xref py py-func docutils literal notranslate">search()</code></a>.</p>
</div>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves">
<em class="property">class </em>substance_painter.resource.Shelves<a class="headerlink" href="#substance_painter.resource.Shelves" title="Link to this definition"> </a></dt>
<dd><p class>Collection of static methods to manipulate shelves.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves.add">
<em class="property">static </em>add(<em class="sig-param">name: str</em>, <em class="sig-param">path: str</em>) → <a class="reference internal" href="#substance_painter.resource.Shelf" title="substance_painter.resource.Shelf">Shelf</a><a class="headerlink" href="#substance_painter.resource.Shelves.add" title="Link to this definition"> </a></dt>
<dd><p class>Add a new shelf. This shelf will only be valid during the application session.
The shelf will not be visible from application general settings menu.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>name</strong> (<em>str</em>) – Name of the new shelf. This name must be unique and must only
contain lowercase letters, numbers, underscores or hyphens.
Use <a class="reference internal" href="#substance_painter.resource.Shelves.exists" title="substance_painter.resource.Shelves.exists"><code class="xref py py-func docutils literal notranslate">Shelves.exists()</code></a> to check if name is already used.</p></li>
<li><p class><strong>path</strong> (<em>str</em>) – Folder path to monitor.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>Newly added shelf.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.resource.Shelf" title="substance_painter.resource.Shelf">Shelf</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">name</code> or <code class="docutils literal notranslate">str</code> are invalid. See logs for details.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.Shelves.exists" title="substance_painter.resource.Shelves.exists"><code class="xref py py-meth docutils literal notranslate">Shelves.exists()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves.all">
<em class="property">static </em>all() → List[<a class="reference internal" href="#substance_painter.resource.Shelf" title="substance_painter.resource.Shelf">Shelf</a>]<a class="headerlink" href="#substance_painter.resource.Shelves.all" title="Link to this definition"> </a></dt>
<dd><p class>List all shelves.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>List of existing shelves.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><em>List</em>[<a class="reference internal" href="#substance_painter.resource.Shelf" title="substance_painter.resource.Shelf">Shelf</a>]</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves.application_shelf">
<em class="property">static </em>application_shelf() → <a class="reference internal" href="#substance_painter.resource.Shelf" title="substance_painter.resource.Shelf">Shelf</a><a class="headerlink" href="#substance_painter.resource.Shelves.application_shelf" title="Link to this definition"> </a></dt>
<dd><p class>This is the shelf containing the default content shipped with the application.</p>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves.exists">
<em class="property">static </em>exists(<em class="sig-param">name: str</em>) → bool<a class="headerlink" href="#substance_painter.resource.Shelves.exists" title="Link to this definition"> </a></dt>
<dd><p class>Tell whether a shelf with the given name exists.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>name</strong> (<em>str</em>) – Shelf name to searh for.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class><code class="docutils literal notranslate">True</code> if a shelf with the given name exists.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>bool</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves.refresh_all">
<em class="property">static </em>refresh_all()<a class="headerlink" href="#substance_painter.resource.Shelves.refresh_all" title="Link to this definition"> </a></dt>
<dd><p class>Forces discovering of resources in all shelves folders.
Discovering is also done automatically when the application window gets focus.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves.remove">
<em class="property">static </em>remove(<em class="sig-param">name: str</em>)<a class="headerlink" href="#substance_painter.resource.Shelves.remove" title="Link to this definition"> </a></dt>
<dd><p class>Removes a shelf.
No project must be opened.
Deleting a shelf which was not created by the Python API is not possible and
will raise an exception.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>name</strong> (<em>str</em>) – Name of the shelf to delete.
Use <a class="reference internal" href="#substance_painter.resource.Shelves.exists" title="substance_painter.resource.Shelves.exists"><code class="xref py py-meth docutils literal notranslate">Shelves.exists()</code></a> to check if a shelf exists.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If a project is opened.</p></li>
<li><p class><strong>ValueError</strong> – If the shelf doesn’t exist.</p></li>
<li><p class><strong>ValueError</strong> – If the shelf was not created with the Python API.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.resource.Shelves.exists" title="substance_painter.resource.Shelves.exists"><code class="xref py py-meth docutils literal notranslate">Shelves.exists()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.resource.Shelves.user_shelf">
<em class="property">static </em>user_shelf() → <a class="reference internal" href="#substance_painter.resource.Shelf" title="substance_painter.resource.Shelf">Shelf</a><a class="headerlink" href="#substance_painter.resource.Shelves.user_shelf" title="Link to this definition"> </a></dt>
<dd><p class>This is the shelf located in the user Documents folder where new resources
are created by default. The user can select a different default shelf in the
settings, and this will be reflected when using this function.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its
    services yet.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference external" href="https://docs.substance3d.com/spdoc/shelf-configuration-124059665.html">Default shelf documentation</a>.</p>
</div>
</dd></dl>
</dd></dl>


<h2>Events<a class="headerlink" href="#events" title="Link to this heading"> </a></h2>
<p class>Project related operations, whether they are initiated through the Python API
or in the UI, can trigger the following events.
See <a class="reference internal" href="event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate">substance_painter.event</code></a> for more details.</p>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ShelfCrawlingStarted(<em class="sig-param">shelf_name: str</em>)</dt>
<dd><p class>Event triggered when a shelf starts reading the file system to discover
new resources.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><code class="xref py py-meth docutils literal notranslate">Shelf.is_crawling()</code>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py">
shelf_name<em class="property">: str</em></dt>
<dd><p class>Name of the shelf discovering resources.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property">class </em>substance_painter.event.ShelfCrawlingEnded(<em class="sig-param">shelf_name: str</em>)</dt>
<dd><p class>Event triggered when a shelf has finished discovering new resources and
loading their thumbnails.</p>
<div class="admonition seealso">
<p class>See also</p>
<p class><code class="xref py py-meth docutils literal notranslate">Shelf.is_crawling()</code>.</p>
</div>
<dl class="py attribute">
<dt class="sig sig-object py">
shelf_name<em class="property">: str</em></dt>
<dd><p class>Name of the shelf that has finished discovering resources.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>











