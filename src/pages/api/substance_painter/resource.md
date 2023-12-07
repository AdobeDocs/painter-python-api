---
title: resource - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






resource module — Substance 3D Painter Python API 0.2.11 documentation
















resource module
===============


This module allows to manipulate Substance 3D Painter resources and shelves.


Substance 3D Painter treats textures, materials, brushes, etc. as resources,
and uses URLs to identify them. Resources can be in the shelf, or can be
embedded directly in a project (like a baked ambient occlusion texture for
example).





------


*class* substance_painter.resource.Type(*value*)
Enumeration describing the type of a given resource.


Members:




| Name | Usage |
| --- | --- |
| `SCRIPT` | A particle emitter script. |
| `PRESET` | A resource preset. |
| `SMART_MASK` | A smart mask. |
| `IMAGE` | An image. |
| `SUBSTANCE` | A substance. |
| `SHADER` | A shader. |
| `EXPORT` | An export preset. |
| `SMART_MATERIAL` | A smart material. |
| `BRUSH` | A brush. |
| `RESOURCE` | A resource. |
| `SUBSTANCE_PACKAGE` | A substance package. |
| `ABR_PACKAGE` | A photoshop brushes package. |




Overview
--------



### Manipulating resources


The resource module exposes the class [`Resource`](#substance_painter.resource.Resource "substance_painter.resource.Resource"), which represents a
resource currently available in Substance 3D Painter (either in the current
project, current session, or in a shelf).


Listing all the resources of a shelf can be done with [`Shelf.resources()`](#substance_painter.resource.Shelf.resources "substance_painter.resource.Shelf.resources"),
while [`search()`](#substance_painter.resource.search "substance_painter.resource.search") allows to search for specific resources. Specific resources
can be shown with a filter directly in the Assets window with
[`Resource.show_in_ui()`](#substance_painter.resource.Resource.show_in_ui "substance_painter.resource.Resource.show_in_ui") and [`show_resources_in_ui()`](#substance_painter.resource.show_resources_in_ui "substance_painter.resource.show_resources_in_ui").



> 
> 
> ```python
> import substance_painter.resource
> 
> # Get all the resources of a shelf:
> my_shelf = substance_painter.resource.Shelf("myshelf")
> all_shelf_resources = my_shelf.resources()
> 
> for resource in all_shelf_resources:
> 	print(resource.identifier().name)
> 
> # Find all resources that match a name:
> aluminium_resources = substance_painter.resource.search("aluminium")
> 
> for resource in aluminium_resources:
> 	print(resource.identifier().name)
> 
> # Show a single resource in the shelf:
> aluminium_resources[0].show_in_ui()
> 
> # Show the list of resources found in the shelf:
> substance_painter.resource.show_resources_in_ui(aluminium_resources)
> 
> ```
> 
> 
> 


Internally, resources are identified with a URL; [`ResourceID`](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID") contains
that URL. It can be manipulated directly, with no guaranty that the URL is
referring to an actual resource.



> 
> 
> ```python
> import substance_painter.resource
> 
> # Display the URL of a resource:
> envmap_resources = substance_painter.resource.search("bonifacio")
> for envmap in envmap_resources:
> 	envmap_id = envmap.identifier()
> 	print("The URL of the resource `{0}` is {1}"
> 		.format(envmap_id.name, envmap_id.url()))
> 	print("The location of the resource `{0}` is {1}"
> 		.format(envmap_id.name, envmap_id.location()))
> 
> # It is possible to create a ResourceID from a URL. If there is no
> # resource corresponding to the URL, the ResourceID is still valid
> # but refers to a resource that doesn't exist.
> envmap2_id = substance_painter.resource.ResourceID.from_url(
> 	"resource://starter_assets/Bonifacio Street");
> 
> # It is possible to create a ResourceID from a context, a name and
> # a version (optional). This is equivalent to the above, with the
> # same caveat.
> envmap3_id = substance_painter.resource.ResourceID(
> 	context="starter_assets", name="Bonifacio Street")
> envmap4_id = substance_painter.resource.ResourceID(
> 	context="starter_assets", name="Bonifacio Street",
> 	version="d30facd8d860fc212f864065641cdca4e8006510.image");
> 
> # It is possible to get the ResourceID of a resource embedded in the
> # current project. This time it refers to an actual resource.
> envmap5_id = substance_painter.resource.ResourceID.from_project(
> 	name="Bonifacio Street");
> 
> # Finally, it is possible to get the ResourceID of a resource that
> # was imported in the current session:
> envmap6_id = substance_painter.resource.ResourceID.from_session(
> 	name="Bonifacio Street");
> 
> ```
> 
> 
> 


If the resource exists, it can be retrieved from its identifier with
[`Resource.retrieve()`](#substance_painter.resource.Resource.retrieve "substance_painter.resource.Resource.retrieve"). When there are several versions of the same resource,
[`Resource.retrieve()`](#substance_painter.resource.Resource.retrieve "substance_painter.resource.Resource.retrieve") will return the entire list, starting with the most
recent one. On the contrary, if the resource doesn’t exist or was deleted,
[`Resource.retrieve()`](#substance_painter.resource.Resource.retrieve "substance_painter.resource.Resource.retrieve") will return an empty list.



> 
> 
> ```python
> import substance_painter.resource
> 
> # Create a ResourceID:
> envmap_id = substance_painter.resource.ResourceID(context="starter_assets",
> 												  name="Bonifacio Street")
> 
> # Get the resources corresponding to the ResourceID. There can be 0 if there
> # is no such resource, or more than 1 if there are multiple versions of the
> # resource.
> envmap_resources = substance_painter.resource.Resource.retrieve(envmap_id)
> print("{} resource(s) with that ID".format(len(envmap_resources)))
> 
> ```
> 
> 
> 




### Importing resources


New resources can be imported, either
to the current project with [`import_project_resource()`](#substance_painter.resource.import_project_resource "substance_painter.resource.import_project_resource"),
to the current session with [`import_session_resource()`](#substance_painter.resource.import_session_resource "substance_painter.resource.import_session_resource"),
or to a shelf with [`Shelf.import_resource()`](#substance_painter.resource.Shelf.import_resource "substance_painter.resource.Shelf.import_resource").
All three functions take a path to the resource to be imported, a [`Usage`](#substance_painter.resource.Usage "substance_painter.resource.Usage")
indicating the type of that resource, and optionally a name and a group.
This feature corresponds to the “Import resources” window.


Resources can be imported into a shelf, as long as it is not a read-only shelf.
The Substance shelf, installed along the application, is read-only.
A shelf is also read-only if its path on the file system is read-only.
This can be checked with [`Shelf.can_import_resources()`](#substance_painter.resource.Shelf.can_import_resources "substance_painter.resource.Shelf.can_import_resources").



Example:
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



See also:[Adding content via the import window](https://www.adobe.com/go/painter-adding-content-import-window).






### Resources used by a project


It is possible to list the resources used by the layer stacks and mesh maps of
a project with [`list_layer_stack_resources()`](#substance_painter.resource.list_layer_stack_resources "substance_painter.resource.list_layer_stack_resources"), and to update them with
[`update_layer_stack_resource()`](#substance_painter.resource.update_layer_stack_resource "substance_painter.resource.update_layer_stack_resource").


There may be other resources referenced by a project outside of the layer
stack and mesh maps: see the [`substance_painter.display`](display.html#module-substance_painter.display "substance_painter.display") module to
query and modify them.



Example:
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






### Custom preview


When a resource is imported, a thumbnail is automatically generated for it.
It is possible to replace that thumbnail with a custom preview by using
[`Resource.set_custom_preview()`](#substance_painter.resource.Resource.set_custom_preview "substance_painter.resource.Resource.set_custom_preview"), or reset the preview with
[`Resource.reset_preview()`](#substance_painter.resource.Resource.reset_preview "substance_painter.resource.Resource.reset_preview").



Example:
```python
import substance_painter.resource

aluminium_resources = substance_painter.resource.search("aluminium")
resource = aluminium_resources[0]

# Set the custom preview:
resource.set_custom_preview("C:/textures/MyCustomPreview.png")

# Remove the custom preview:
resource.reset_preview()

```






### Resource crawling


When Substance 3D Painter is opened, it will browse the different shelves
to discover and index resources, and display their thumbnail. When it regains
focus after switching to another application, it will do so again, in case
the user added a new asset to their shelf folder. This process is referred
to as **resource crawling**.


When a shelf starts crawling, an event
[`substance_painter.event.ShelfCrawlingStarted`](event.html#substance_painter.event.ShelfCrawlingStarted "substance_painter.event.ShelfCrawlingStarted") is emitted for that
shelf. When crawling is finished, an event
[`substance_painter.event.ShelfCrawlingEnded`](event.html#substance_painter.event.ShelfCrawlingEnded "substance_painter.event.ShelfCrawlingEnded") is emitted for that
shelf. At any time, [`Shelf.is_crawling()`](#substance_painter.resource.Shelf.is_crawling "substance_painter.resource.Shelf.is_crawling") will tell if a shelf is
crawling or not.


It is possible from a Python script to explicitly trigger a new resource
crawling with [`Shelves.refresh_all()`](#substance_painter.resource.Shelves.refresh_all "substance_painter.resource.Shelves.refresh_all").



Example:
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







Resources
---------





------


*class* substance_painter.resource.Resource(*handle: _substance_painter.resource.ResourceHandle*)
A Substance 3D Painter resource.




identifier() → [ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")
Get this resource identifier.



Returns:
The resource identifier.



Return type:
[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")



Raises:
**RuntimeError** – If the resource is invalid.





See also


[`ResourceID`](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID").






location() → [ResourceLocation](#substance_painter.resource.ResourceLocation "substance_painter.resource.ResourceLocation")
Get the location of this Resource.



Returns:
The location of this resource.



Return type:
[ResourceLocation](#substance_painter.resource.ResourceLocation "substance_painter.resource.ResourceLocation")



Raises:
**RuntimeError** – If the resource is invalid.







*static* retrieve(*identifier: [ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")*)
Retrieve a list of resources matching the given identifier.



Parameters:
**identifier** ([*ResourceID*](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")) – A resource identifier.



Raises:
* **ValueError** – If the name of the identifier is empty
 or if the context of the identifier doesn’t exists.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.



Returns:
The list of resources matching the given identifier.
If the identifier has a valid version, this method will return only one or
zero resources, otherwise the list may contain several resources. In case
of several resources are returned, the most up to date resource will be at
the begining of the list.



Return type:
*List*[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]







set_custom_preview(*preview_image: str*) → None
Replace the current preview of this resource with a custom image.



Parameters:
**preview_image** (*str*) – File path to an image on the disk to use as the new
preview.



Raises:
* **ValueError** – If the resource metadata cannot be modified.
* **ValueError** – If `preview_image` is not a valid path to a valid image.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





Note


The preview image can be a JPEG, a PNG or an XPM.






category() → str
Get the category of this resource, ex: “wood” for a material.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
the category of this resource



Return type:
str







usages() → List[[Usage](#substance_painter.resource.Usage "substance_painter.resource.Usage")]
Get the usages of this resource.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
the usages of this resource



Return type:
*List*[[Usage](#substance_painter.resource.Usage "substance_painter.resource.Usage")]





See also


[`Usage`](#substance_painter.resource.Usage "substance_painter.resource.Usage")






gui_name() → str
Get the GUI name of this resource.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
the GUI name of this resource



Return type:
str







type() → [Type](#substance_painter.resource.Type "substance_painter.resource.Type")
Get the type of this resource.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
the type of this resource



Return type:
[Type](#substance_painter.resource.Type "substance_painter.resource.Type")





See also


[`Type`](#substance_painter.resource.Type "substance_painter.resource.Type")






tags() → List[str]
Get the tags of this resource.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
the tags of this resource



Return type:
*List*[str]







internal_properties() → dict
Get a dictionnary of the resource internal properties.
The current implementation only extracts metadata on Substance resources.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
a dictionnary containing internal properties about this resource



Return type:
dict







children() → List[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]
Get child resources.
For example substance graphs of a substance package.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
Resources contained in this resource.



Return type:
*List*[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]







parent() → [Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource") | None
Get parent resource.
For example the substance package a substance graph is originating from.



Raises:
**RuntimeError** – If the resource is invalid.



Returns:
The parent resource that owns this resource.



Return type:
*Optional*[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]







reset_preview() → None
Remove any custom preview for this resource and resets to the default one.



Raises:
* **ValueError** – If the resource metadata cannot be modified.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







show_in_ui() → None
Highlight this resource in the application shelf UI (Assets window).



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`show_resources_in_ui()`](#substance_painter.resource.show_resources_in_ui "substance_painter.resource.show_resources_in_ui").








------


*class* substance_painter.resource.ResourceID(*context: str*, *name: str*, *version: str | None = None*)
A Substance 3D Painter resource identifier.


The resource is identified by a context, a name, and a version. The context
and the name are mandatory while the version is optional. The version is a
string that looks like a hash, and may also contain an extension.



Note


A ResourceID object is only an identifier. It provides no guarantees that
the resource actually exists.




See also


[`substance_painter.display`](display.html#module-substance_painter.display "substance_painter.display").





*classmethod* from_project(*name: str*, *version: str | None = None*)
Create a ResourceID object for a resource located in the current project.



Parameters:
* **name** (*str*) – The resource name.
* **version** (*str**,* *optional*) – The resource version (hash-like string).



Returns:
The resource corresponding to the given name.



Return type:
[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")







*classmethod* from_session(*name: str*, *version: str | None = None*)
Create a ResourceID object for a resource located in the current session.



Parameters:
* **name** (*str*) – The resource name.
* **version** (*str**,* *optional*) – The resource version (hash-like string).



Returns:
The resource corresponding to the given name.



Return type:
[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")







*classmethod* from_url(*url: str*)
Create a ResourceID object from its URL.
URLs must have `resource://` as a scheme. The version is encoded as a query
string, that looks like a hash.


A resource URL looks like this:


`resource://context/name?version=0123456789abcdef0123456789abcdef01234567.image`



Parameters:
**url** (*str*) – The resource URL.



Returns:
The resource corresponding to the given URL.



Return type:
[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")



Raises:
* **ValueError** – If `url` is not a valid URL.
* **ValueError** – If the URL scheme is not `resource://`.
* **ValueError** – If the resource name is invalid.







location() → [ResourceLocation](#substance_painter.resource.ResourceLocation "substance_painter.resource.ResourceLocation")
Get the location of this ResourceID.



Returns:
The location of this resource.



Return type:
[ResourceLocation](#substance_painter.resource.ResourceLocation "substance_painter.resource.ResourceLocation")







url() → str
Get the URL form of this ResourceID.



Returns:
The URL of the resource.



Return type:
str



Raises:
* **ValueError** – If the ResourceID doesn’t have a context.
* **ValueError** – If the ResourceID doesn’t have a name.







context*: str*
Context of the resource.



Type:
str







name*: str*
Name of the resource.



Type:
str







version*: str* *= None*
Hash identifying the version of the resource.



Type:
str









------


*class* substance_painter.resource.ResourceLocation(*value*)
Each resource has a location determined by where its data lives.


Members:




| Name | Data location |
| --- | --- |
| `SESSION` | Current session; those ressources will be lost after a restart of the application. |
| `PROJECT` | A Substance 3D Painter project; those resources are embedded in the spp file. |
| `SHELF` | One of the Substance 3D Painter Shelves. |


Example



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






------


*class* substance_painter.resource.StandardQuery
Standard resource queries.


Members:




| Name | Query |
| --- | --- |
| `ALL_RESOURCES` | All resources. |
| `PROJECT_RESOURCES` | Resources that belongs to the current project. |
| `SESSION_RESOURCES` | Resources that belongs to the current session. |
| `SHELVES_RESOURCES` | All shelves resources. |



See also


[`search()`](#substance_painter.resource.search "substance_painter.resource.search").







------


*class* substance_painter.resource.Usage(*value*)
Enumeration describing how a given resource is meant to be used.


Members:




| Name | Usage |
| --- | --- |
| `BASE_MATERIAL` | A material. |
| `ENVIRONMENT` | An environment map. |
| `ALPHA` | A brush alpha. |
| `TEXTURE` | A UV space map like bakes. |
| `FILTER` | A layer stack filter. |
| `EMITTER` | A particle emitter script. |
| `RECEIVER` | A particle receiver script. |
| `PROCEDURAL` | A procedural substance, like a noise. |
| `BRUSH` | A brush definition. |
| `PARTICLE` | A particles effect. |
| `TOOL` | A painting tool preset. |
| `SHADER` | A shader. |
| `EXPORT` | An export preset. |
| `GENERATOR` | A mask generator. |
| `SMART_MATERIAL` | A smart material. |
| `SMART_MASK` | A smart mask. |
| `COLOR_LUT` | A color look-up table. |



See also


[`import_project_resource()`](#substance_painter.resource.import_project_resource "substance_painter.resource.import_project_resource"),
[`import_session_resource()`](#substance_painter.resource.import_session_resource "substance_painter.resource.import_session_resource"),
[`Shelf.import_resource()`](#substance_painter.resource.Shelf.import_resource "substance_painter.resource.Shelf.import_resource").






substance_painter.resource.search(*query: str*) → List[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]
List Substance 3D Painter resources that match the given query.



Parameters:
**query** (*str*) – A resource query string. See [text query documentation](https://www.adobe.com/go/painter-filtering-shelf-content).



Returns:
The list of resources that match the given query.



Return type:
List[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`StandardQuery`](#substance_painter.resource.StandardQuery "substance_painter.resource.StandardQuery").






substance_painter.resource.list_layer_stack_resources() → List[[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")]
List the resources referenced by the layer stacks and mesh maps of the current
project.



Returns:
The list of resource identifiers referenced.



Return type:
List[[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")]



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`update_layer_stack_resource()`](#substance_painter.resource.update_layer_stack_resource "substance_painter.resource.update_layer_stack_resource"),
[`substance_painter.display`](display.html#module-substance_painter.display "substance_painter.display").






substance_painter.resource.update_layer_stack_resource(*old_resource_id: [ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")*, *new_resource: [Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")*) → List[[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")]
Replace resources from the layer stacks and mesh maps in the current project.


Given a resource identifier, replace any resource having the same identifier
with the new resource. The new resource must be compatible with the ones it
replaces (see note); otherwise, an error is thrown.



Note


The new resource must be of the same type as the resources it replaces.
For example a base material resource cannot be updated with a smart
material resource.


Moreover:


* If the resource is a Substance material, it must have the same number
and names of outputs.
* If the resource is a Substance filter, it must have the same number
and names of inputs and outputs.




Returns:
The list of identifiers of all the resources that have
been replaced.



Return type:
List[[ResourceID](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")]



Parameters:
* **old_resource_id** ([*ResourceID*](#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")) – The identifier of the resource(s) to update.
* **new_resource** ([*Resource*](#substance_painter.resource.Resource "substance_painter.resource.Resource")) – The new resource to use instead.



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* **TypeError** – If `old_resource_id` is not a ResourceID.
* **TypeError** – If `new_resource` is not a Resource.
* **RuntimeError** – If `new_resource` is not a valid resource.
* **RuntimeError** – If `new_resource` cannot be used in place of
 `old_resource_id`.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`list_layer_stack_resources()`](#substance_painter.resource.list_layer_stack_resources "substance_painter.resource.list_layer_stack_resources"),
[`Usage`](#substance_painter.resource.Usage "substance_painter.resource.Usage"),
[`substance_painter.display`](display.html#module-substance_painter.display "substance_painter.display").






substance_painter.resource.import_project_resource(*file_path: str*, *resource_usage: [Usage](#substance_painter.resource.Usage "substance_painter.resource.Usage")*, *name: str | None = None*, *group: str | None = None*) → [Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")
Import a resource into the current opened project.



Parameters:
* **file_path** (*str*) – The file path to the resource to be imported.
* **resource_usage** ([*Usage*](#substance_painter.resource.Usage "substance_painter.resource.Usage")) – The resource usage.
* **name** (*str**,* *optional*) – The name of the resource if different from the
file name.
* **group** (*str**,* *opional*) – An optional group name, can be used in resource
queries.



Returns:
The imported resource object.



Return type:
[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* **ValueError** – If parameters validation failed.
* **RuntimeError** – If import failed.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







substance_painter.resource.import_session_resource(*file_path: str*, *resource_usage: [Usage](#substance_painter.resource.Usage "substance_painter.resource.Usage")*, *name: str | None = None*, *group: str | None = None*) → [Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")
Import a resource into the current session.



Parameters:
* **file_path** (*str*) – The file path to the resource to be imported.
* **resource_usage** ([*Usage*](#substance_painter.resource.Usage "substance_painter.resource.Usage")) – The resource usage.
* **name** (*str**,* *optional*) – The name of the resource if different from the
file name.
* **group** (*str**,* *opional*) – An optional group name, can be used in resource
queries.



Returns:
The imported resource object.



Return type:
[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")



Raises:
* **ValueError** – If parameters validation failed.
* **RuntimeError** – If import failed.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







substance_painter.resource.show_resources_in_ui(*resources: List[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]*) → None
Highlight a list of resources in the application shelf UI (Assets window).



Parameters:
**resources** (*List**[*[*Resource*](#substance_painter.resource.Resource "substance_painter.resource.Resource")*]*) – Resources to highlight



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`Resource.show_in_ui()`](#substance_painter.resource.Resource.show_in_ui "substance_painter.resource.Resource.show_in_ui").






Shelves
-------



See also:[Shelf configuration](https://www.adobe.com/go/painter-shelf-configuration).







------


*class* substance_painter.resource.Shelf(*_name: str*)
Class providing information on a given Substance 3D Painter shelf. A shelf
is identified by a unique name.




can_import_resources() → bool
Check if resources can be imported into this shelf.
Resources can be imported into a shelf, as long as it is not a read-only shelf.
The Substance shelf, installed along the application, is read-only. A shelf is
also read-only if its path on the file system is read-only.



Returns:
`True` if resources can be imported.



Return type:
bool



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`substance_painter.event.ShelfCrawlingEnded`](event.html#substance_painter.event.ShelfCrawlingEnded "substance_painter.event.ShelfCrawlingEnded").






import_resource(*file_path: str*, *resource_usage: [Usage](#substance_painter.resource.Usage "substance_painter.resource.Usage")*, *name: str | None = None*, *group: str | None = None*, *uuid: str | None = None*) → [Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")
Import a resource into this shelf.



Parameters:
* **file_path** (*str*) – The file path to the resource to be imported.
* **resource_usage** ([*Usage*](#substance_painter.resource.Usage "substance_painter.resource.Usage")) – The resource usage.
* **name** (*str**,* *optional*) – The name of the resource if different from the
file name.
* **group** (*str**,* *opional*) – An optional group name, can be used in resource
queries.
* **uuid** (*str**,* *opional*) – An optional uuid. If a resource already exists with
the same uuid, it will be replaced.



Returns:
The imported resource object.



Return type:
[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")



Raises:
* **ValueError** – If parameters validation failed.
* **RuntimeError** – If import failed.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







is_crawling() → bool
Check if this shelf is currently discovering resources in folders.



Returns:
`True` if this shelf is discovering resources, `False` otherwise.



Return type:
bool



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`substance_painter.event.ShelfCrawlingEnded`](event.html#substance_painter.event.ShelfCrawlingEnded "substance_painter.event.ShelfCrawlingEnded").






name() → str

Returns:
The shelf name.
Each shelf is identified by a unique name.







path() → str

Returns:
The associated path



Raises:
* **ValueError** – If the shelf doesn’t exist anymore.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







resources(*query: str = ''*) → List[[Resource](#substance_painter.resource.Resource "substance_painter.resource.Resource")]
Get resources contained in this shelf. An optional query string can be given
to narrow the results.



Parameters:
**query** (*str**,* *optional*) – A resource query string.



Returns:
This shelf’s list of resources.





See also


[`search()`](#substance_painter.resource.search "substance_painter.resource.search").








------


*class* substance_painter.resource.Shelves
Collection of static methods to manipulate shelves.




*static* add(*name: str*, *path: str*) → [Shelf](#substance_painter.resource.Shelf "substance_painter.resource.Shelf")
Add a new shelf. This shelf will only be valid during the application session.
The shelf will not be visible from application general settings menu.



Parameters:
* **name** (*str*) – Name of the new shelf. This name must be unique and must only
contain lowercase letters, numbers, underscores or hyphens.
Use [`Shelves.exists()`](#substance_painter.resource.Shelves.exists "substance_painter.resource.Shelves.exists") to check if name is already used.
* **path** (*str*) – Folder path to monitor.



Returns:
Newly added shelf.



Return type:
[Shelf](#substance_painter.resource.Shelf "substance_painter.resource.Shelf")



Raises:
* **ValueError** – If `name` or `str` are invalid. See logs for details.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`Shelves.exists()`](#substance_painter.resource.Shelves.exists "substance_painter.resource.Shelves.exists").






*static* all() → List[[Shelf](#substance_painter.resource.Shelf "substance_painter.resource.Shelf")]
List all shelves.



Returns:
List of existing shelves.



Return type:
*List*[[Shelf](#substance_painter.resource.Shelf "substance_painter.resource.Shelf")]



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







*static* application_shelf() → [Shelf](#substance_painter.resource.Shelf "substance_painter.resource.Shelf")
This is the shelf containing the default content shipped with the application.





*static* exists(*name: str*) → bool
Tell whether a shelf with the given name exists.



Parameters:
**name** (*str*) – Shelf name to searh for.



Returns:
`True` if a shelf with the given name exists.



Return type:
bool



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







*static* refresh_all()
Forces discovering of resources in all shelves folders.
Discovering is also done automatically when the application window gets focus.



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







*static* remove(*name: str*)
Removes a shelf.
No project must be opened.
Deleting a shelf which was not created by the Python API is not possible and
will raise an exception.



Parameters:
**name** (*str*) – Name of the shelf to delete.
Use [`Shelves.exists()`](#substance_painter.resource.Shelves.exists "substance_painter.resource.Shelves.exists") to check if a shelf exists.



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If a project is opened.
* **ValueError** – If the shelf doesn’t exist.
* **ValueError** – If the shelf was not created with the Python API.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[`Shelves.exists()`](#substance_painter.resource.Shelves.exists "substance_painter.resource.Shelves.exists").






*static* user_shelf() → [Shelf](#substance_painter.resource.Shelf "substance_painter.resource.Shelf")
This is the shelf located in the user Documents folder where new resources
are created by default. The user can select a different default shelf in the
settings, and this will be reflected when using this function.



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.





See also


[Default shelf documentation](https://docs.substance3d.com/spdoc/shelf-configuration-124059665.html).







Events
------


Project related operations, whether they are initiated through the Python API
or in the UI, can trigger the following events.
See [`substance_painter.event`](event.html#module-substance_painter.event "substance_painter.event") for more details.





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















