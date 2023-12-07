---
title: project - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






project module — Substance 3D Painter Python API 0.2.11 documentation
















project module
==============


This module allows to open, create, save and close projects, and change some of
their properties.


First, here is a complete example showing how to use this module:



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





------


*class* substance_painter.project.BoundingBox(*dimensions: List[float]*, *center: List[float]*, *radius: float*)
Axis-aligned bounding box (AABB).




dimensions
The dimensions (x,y,z) of the bounding box.



Type:
List[float]







center
The center (x,y,z) of the bounding box..



Type:
List[float]







radius
The radius of the bounding box.



Type:
float





See also:
[`get_scene_bounding_box()`](#substance_painter.project.get_scene_bounding_box "substance_painter.project.get_scene_bounding_box"),





substance_painter.project.execute_when_not_busy(*callback: Callable[[], None]*) → None
Execute the given callback when Substance 3D Painter is not busy.



Parameters:
**callback** (*Callable**[**[**]**,* *None**]*) – The callback to be executed.





See also


[`is_busy()`](#substance_painter.project.is_busy "substance_painter.project.is_busy"),
[`substance_painter.event.BusyStatusChanged`](event.html#substance_painter.event.BusyStatusChanged "substance_painter.event.BusyStatusChanged").






substance_painter.project.file_path() → str | None
Return the file path of the current project. This is the path where the
project will be written to when it is saved.



Returns:
The file path of the current project, or `None` if the project
hasn’t been saved yet.



Return type:
str



Raises:
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.





See also


[`save()`](#substance_painter.project.save "substance_painter.project.save"),
[`save_as()`](#substance_painter.project.save_as "substance_painter.project.save_as").






substance_painter.project.get_scene_bounding_box() → [BoundingBox](#substance_painter.project.BoundingBox "substance_painter.project.BoundingBox")
Return the bounding box of the scene.



Returns:
The bounding box of the scene.



Return type:
[BoundingBox](#substance_painter.project.BoundingBox "substance_painter.project.BoundingBox")



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







substance_painter.project.get_uuid() → UUID
Return the UUID of the current project.



Returns:
The UUID of the current project.



Return type:
uuid.UUID



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







substance_painter.project.is_busy() → bool
Check if Substance 3D Painter is currently busy.
If busy, the project cannot be saved at the moment.
The application may be busy because no project is in edition state,
or a long process such as baking/export/unwrap process is ongoing.
The corresponding BusyStatusChanged event is fired when the busy state changes.



Returns:
`True` if the project is ready to be saved,
`False` otherwise.



Return type:
bool





See also


[`execute_when_not_busy()`](#substance_painter.project.execute_when_not_busy "substance_painter.project.execute_when_not_busy"),
[`substance_painter.event.BusyStatusChanged`](event.html#substance_painter.event.BusyStatusChanged "substance_painter.event.BusyStatusChanged").






substance_painter.project.is_in_edition_state() → bool
Check if the current project is ready to work with.



Raises:
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.



Returns:
`True` if the project is ready to work with,
`False` otherwise.



Return type:
bool





See also


[`substance_painter.event.ProjectEditionEntered`](event.html#substance_painter.event.ProjectEditionEntered "substance_painter.event.ProjectEditionEntered"),
[`substance_painter.event.ProjectEditionLeft`](event.html#substance_painter.event.ProjectEditionLeft "substance_painter.event.ProjectEditionLeft").






substance_painter.project.last_saved_substance_painter_version() → Tuple[int, int, int] | None
Return the version of Substance 3D Painter used to last save the project, or None
if the project is unsaved or was saved with version <= 8.2.0.



Returns:
The concerned version of Substance 3D Painter, as a major/minor/patch
tuple.



Return type:
Tuple(int, int, int)



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.







substance_painter.project.name() → str | None
Return the name of the current project.



Returns:
The name of the current project, or `None` if the project hasn’t
been saved yet.



Return type:
str



Raises:
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.






Creating a project
------------------



Example:
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






substance_painter.project.create(*mesh_file_path: str*, *mesh_map_file_paths: List[str] | None = None*, *template_file_path: str | None = None*, *settings: [Settings](#substance_painter.project.Settings "substance_painter.project.Settings") = Settings(default_save_path=None, normal_map_format=None, tangent_space_mode=None, project_workflow=None, export_path=None, default_texture_resolution=None, import_cameras=None, mesh_unit_scale=None, usd_settings=None)*)
Create a new project.
If an `OCIO` environment variable is set, pointing to a .ocio configuration file,
the project is setup to use the OCIO color management mode defined by that file.
If the configuration defined by that file is invalid, a `ProjectError` is raised and
no project is created.
Similary, if a `PAINTER_ACE_CONFIG` environment variable is set, pointing to a .json
preset file, the project is setup to use the ACE color management mode defined by that file.
If the preset defined in that file is invalid, a `ProjectError` is raised and no project
is created.
If both environment variables are set, `OCIO` will be used.
If there is not such environment variable, the project uses the Legacy color management mode.



Note


Project settings override the template parameters.




Parameters:
* **mesh_file_path** (*string*) – File path of the mesh to edit.
Supported file formats: fbx, obj, dae, ply, usd.
* **mesh_map_file_paths** (*list* *of* *string*) – Paths to the additional mesh maps.
* **template_file_path** (*string*) – Template file path to use to create the project.
* **settings** ([*Settings*](#substance_painter.project.Settings "substance_painter.project.Settings")) – Configuration options of the new project.



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If Substance 3D Painter cannot create the project.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If there is already an opened project.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If an `OCIO` environment variable is set to an invalid configuration.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If an `PAINTER_ACE_CONFIG` environment variable is set to an invalid preset.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
* **TypeError** – If `settings` is not an instance of Settings.
* **ValueError** – If the file format of `mesh_file_path` is not supported.
* **ValueError** – If the mesh file `mesh_file_path` does not exist.
* **ValueError** – If any of the mesh map files in `mesh_map_file_paths` do not exist.
* **ValueError** – If the template file `template_file_path` doesn’t exist.
* **ValueError** – If the template file `template_file_path` is invalid.
* **ValueError** – If `settings` are not valid project settings (see documentation
 of [`Settings`](#substance_painter.project.Settings "substance_painter.project.Settings")).
* **ValueError** – If `settings.default_texture_resolution` is not a valid resolution.





See also


[`Settings`](#substance_painter.project.Settings "substance_painter.project.Settings"),
[Project creation documentation](https://www.adobe.com/go/painter-project-creation).







------


*class* substance_painter.project.Settings(*default_save_path: str | None = None*, *normal_map_format: [NormalMapFormat](#substance_painter.project.NormalMapFormat "substance_painter.project.NormalMapFormat") | None = None*, *tangent_space_mode: [TangentSpace](#substance_painter.project.TangentSpace "substance_painter.project.TangentSpace") | None = None*, *project_workflow: [ProjectWorkflow](#substance_painter.project.ProjectWorkflow "substance_painter.project.ProjectWorkflow") | None = None*, *export_path: str | None = None*, *default_texture_resolution: int | None = None*, *import_cameras: bool | None = None*, *mesh_unit_scale: float | None = None*, *usd_settings: [UsdSettings](#substance_painter.project.UsdSettings "substance_painter.project.UsdSettings") | None = None*)
Project configuration options. All options can be set to `None` to use the default values.


This corresponds to the options that are available in the “New project” dialog.



See also


[`NormalMapFormat`](#substance_painter.project.NormalMapFormat "substance_painter.project.NormalMapFormat"),
[`TangentSpace`](#substance_painter.project.TangentSpace "substance_painter.project.TangentSpace"),
[`ProjectWorkflow`](#substance_painter.project.ProjectWorkflow "substance_painter.project.ProjectWorkflow"),
[`create()`](#substance_painter.project.create "substance_painter.project.create"),
[Project configuration documentation](https://www.adobe.com/go/painter-project-configuration).





default_save_path*: str* *= None*
The default save path.





default_texture_resolution*: int* *= None*
Default resolution for all the Texture Sets.





export_path*: str* *= None*
Use this path as the default map export path.





import_cameras*: bool* *= None*
Import cameras from the mesh file.





mesh_unit_scale*: float* *= None*
Use custom unit scale for input mesh. Painter unit is centimeters.
If set to 0 or None, use mesh file internal unit scale.
This setting is necessary for .obj meshes that use units other than centimeters.





normal_map_format*: [NormalMapFormat](#substance_painter.project.NormalMapFormat "substance_painter.project.NormalMapFormat")* *= None*
Normal map system coordinates. OpenGL or DirectX format.





project_workflow*: [ProjectWorkflow](#substance_painter.project.ProjectWorkflow "substance_painter.project.ProjectWorkflow")* *= None*
Project workflow, selected at project creation time.





tangent_space_mode*: [TangentSpace](#substance_painter.project.TangentSpace "substance_painter.project.TangentSpace")* *= None*
Per vertex or per fragment tangent space.





usd_settings*: [UsdSettings](#substance_painter.project.UsdSettings "substance_painter.project.UsdSettings")* *= None*
Specific settings for USD files.







------


*class* substance_painter.project.UsdSettings(*scope_name: str = '/'*, *variants: dict | None = None*, *subdivision_level: int = 1*, *frame: int = 0*)
Specific settings for USD files.


This corresponds to the options that are available in the File type-specific settings section
in the “New project” and “Project configuration” dialogs.




frame*: int* *= 0*
The frame to import.
Only available for animated USD files.





scope_name*: str* *= '/'*
Scope name of the primitive to load in the hierarchy. The path must be absolute.
Expected syntax: `"/my/path/name"`


If not specified, default scope name is the root `"/"`. Only available for USD files.





subdivision_level*: int* *= 1*
The subdivision level is applied only on geometry built with subdivision.
Only available for USD files.





variants*: dict* *= None*
Define which variant to use for each primitive path. Values are expected in JSON format.



> 
> 
> ```python
> [
> 	{
> 		"primPath": "/my/path/name",
> 		"selectionName: "variantName",
> 		"setName": "variantSetName"
> 	}
> ]
> 
> ```
> 
> 
> 


Only available for USD files.







------


*class* substance_painter.project.NormalMapFormat(*value*)
The normal map formats that can be used by a Substance 3D Painter project.
A project can have either left handed / OpenGL or right handed / DirectX
normal maps.


This corresponds to the menu “Normal Map Format” in the “New project”
dialog.


Members:




| Name | Description |
| --- | --- |
| `OpenGL` | OpenGL tangent space (right handed). |
| `DirectX` | DirectX tangent space (left handed). |






------


*class* substance_painter.project.TangentSpace(*value*)
The options for computing tangent space in a project. Tangent space can
be evaluated at each vertex, or at each fragment.


This corresponds to the “Compute Tangent Space Per Fragment” checkbox in
the “New project” dialog.


Members:




| Name | Description |
| --- | --- |
| `PerVertex` | Tangent space computed per vertex. |
| `PerFragment` | Tangent space computed per fragment. |






------


*class* substance_painter.project.ProjectWorkflow(*value*)
The workflow used by a Substance 3D Painter project.


By enabling the UV Tiles Workflow for each Texture Set, tiles within the
same Texture Set share a layer stack and can be painted across. By creating
a Texture Set per UV Tile, each tile is placed in a Texture Set of its own.
This is the legacy workflow and does not allow for painting accross tiles.


This corresponds to the section “UV Tiles (UDIMs)” in the “New project”
dialog.


Members:




| Name | Description |
| --- | --- |
| `Default` | Default workflow (no udim). |
| `TextureSetPerUVTile` | Udim workflow with one Texture Set per UV Tile (legacy). |
| `UVTile` | Udim workflow with one Texture Set per material containing
multiple UV Tiles. |





Opening and closing a project
-----------------------------



Example:
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






substance_painter.project.is_open() → bool
Check if a project is already opened.



Returns:
`True` if a project is opened, `False` otherwise.



Return type:
bool



Raises:
[**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.







substance_painter.project.open(*project_file_path: str*) → None
Open the project located at `project_file_path`.



Parameters:
**project_file_path** (*str*) – The path to the project file (with the extension `.spp`).



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If Substance 3D Painter cannot open the file `project_file_path`.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If there is already an opened project.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.







substance_painter.project.close() → None
Close the current project.



Warning


Any unsaved data will be lost.




Raises:
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







Saving a project
----------------


Saving a project is disabled when Substance 3D Painter is busy and will throw
a [`substance_painter.exception.ProjectError`](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError").



Example:
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






substance_painter.project.needs_saving() → bool
Check if the current project needs to be saved.



Raises:
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.



Returns:
`True` if the project has modifications and needs to be saved,
`False` otherwise.



Return type:
bool







substance_painter.project.save(*mode: [ProjectSaveMode](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode") = ProjectSaveMode.Incremental*) → None
Save the current project by overwriting the previous save.



Note


Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.




Parameters:
**mode** ([*ProjectSaveMode*](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode")) – The save mode (Incremental or Full).



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If Substance 3D Painter cannot save the project.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.





See also


[`ProjectSaveMode`](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode"),
[`save_as()`](#substance_painter.project.save_as "substance_painter.project.save_as"),
[`save_as_copy()`](#substance_painter.project.save_as_copy "substance_painter.project.save_as_copy").
[`is_busy()`](#substance_painter.project.is_busy "substance_painter.project.is_busy").






substance_painter.project.save_as(*project_file_path: str*, *mode: [ProjectSaveMode](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode") = ProjectSaveMode.Incremental*) → None
Save the current project by writing it to the file path `project_file_path`.



Note


If the path `project_file_path` doesn’t exist yet, new folders will be
created as needed.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.




Parameters:
* **project_file_path** (*string*) – The file path to save the project to.
* **mode** ([*ProjectSaveMode*](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode")) – The save mode (Incremental or Full).



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If Substance 3D Painter cannot save the project.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.





See also


[`ProjectSaveMode`](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode"),
[`save()`](#substance_painter.project.save "substance_painter.project.save"),
[`save_as_copy()`](#substance_painter.project.save_as_copy "substance_painter.project.save_as_copy").
[`is_busy()`](#substance_painter.project.is_busy "substance_painter.project.is_busy").






substance_painter.project.save_as_copy(*backup_file_path: str*, *mode: [ProjectSaveMode](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode") = ProjectSaveMode.Incremental*) → None
Save a copy of the current project by writing it to the file path
`backup_file_path`. This can be used to save backups of the opened project
without modifying the original file.


After save_as_copy the project is still considered to be located at the
location it was previously saved to. If the project was not saved, it is
still considered to not have a saved location.



Note


If the path `backup_file_path` doesn’t exist yet, new folders will be
created as needed.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.




Parameters:
* **backup_file_path** (*string*) – The path to write the copy of the project to.
* **mode** ([*ProjectSaveMode*](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode")) – The save mode (Incremental or Full).



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If Substance 3D Painter cannot save the copy.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.





See also


[`ProjectSaveMode`](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode"),
[`save()`](#substance_painter.project.save "substance_painter.project.save"),
[`save_as()`](#substance_painter.project.save_as "substance_painter.project.save_as").
[`is_busy()`](#substance_painter.project.is_busy "substance_painter.project.is_busy").






substance_painter.project.save_as_template(*template_file_path: str*, *texture_set_name: str*) → [ProjectSaveMode](#substance_painter.project.ProjectSaveMode "substance_painter.project.ProjectSaveMode")
Save a template based of the current Texture Set or the one specified.



Note


New folders will be created if they are missing.
Save is disabled when Substance 3D Painter is busy and will throw a ProjectError.




Warning


If the file already exists, it will be overwritten.




Parameters:
* **template_file_path** (*string*) – The save path.
* **texture_set_name** (*string*) – Name of the Texture Set used as a template.



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If Substance 3D Painter cannot save the template.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.





See also


[`is_busy()`](#substance_painter.project.is_busy "substance_painter.project.is_busy").







------


*class* substance_painter.project.ProjectSaveMode(*value*)
Save strategy enumeration.


Members:




| Name | Description |
| --- | --- |
| `Full` | Save everything in a new file. Slow but creates the smallest possible file. |
| `Incremental` | Save only new or modified data. Fast but the file size is not optimal. |





Reloading a mesh
----------------



Example:
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






substance_painter.project.reload_mesh(*mesh_file_path: str*, *settings: [MeshReloadingSettings](#substance_painter.project.MeshReloadingSettings "substance_painter.project.MeshReloadingSettings")*, *loading_status_cb: Callable[[[ReloadMeshStatus](#substance_painter.project.ReloadMeshStatus "substance_painter.project.ReloadMeshStatus")], Any]*)
Import a new mesh to the current project, using the given settings.
Uses the automatic UV unwrapping settings defined at the project level.


The loading is asynchronous: this function returns immediately; when
the loading attempt is finished `loading_status_cb` is called with
an argument indicating if loading was successful.



Parameters:
* **mesh_file_path** (*string*) – File path of the mesh to edit.
Supported file formats: fbx, obj, dae, ply, usd.
* **settings** ([*MeshReloadingSettings*](#substance_painter.project.MeshReloadingSettings "substance_painter.project.MeshReloadingSettings")) – Configuration options for the mesh loading.
* **loading_status_cb** (*Callable**[**[*[*ReloadMeshStatus*](#substance_painter.project.ReloadMeshStatus "substance_painter.project.ReloadMeshStatus")*]**,* *Any**]*) – Loading status notification callback.



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened or Substance 3D Painter is busy.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.





See also


[`ReloadMeshStatus`](#substance_painter.project.ReloadMeshStatus "substance_painter.project.ReloadMeshStatus"),
[`MeshReloadingSettings`](#substance_painter.project.MeshReloadingSettings "substance_painter.project.MeshReloadingSettings"),
[`is_busy()`](#substance_painter.project.is_busy "substance_painter.project.is_busy"),
[Project creation documentation](https://www.adobe.com/go/painter-project-creation).






substance_painter.project.last_imported_mesh_path() → str
Return the path to the last imported mesh.



Returns:
The file path of the mesh that was last imported to the project.



Return type:
str



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.








------


*class* substance_painter.project.MeshReloadingSettings(*import_cameras: bool = True*, *preserve_strokes: bool = True*, *usd_settings: [UsdSettings](#substance_painter.project.UsdSettings "substance_painter.project.UsdSettings") | None = None*)
Settings used when reloading a mesh.


This corresponds to the mesh related options that are available in the
“Project configuration” dialog.



See also


[`reload_mesh()`](#substance_painter.project.reload_mesh "substance_painter.project.reload_mesh"),
[Project configuration documentation](https://www.adobe.com/go/painter-project-configuration).





import_cameras*: bool* *= True*
Import cameras from the mesh file.





preserve_strokes*: bool* *= True*
Preserve strokes positions on mesh.





usd_settings*: [UsdSettings](#substance_painter.project.UsdSettings "substance_painter.project.UsdSettings")* *= None*
Specific settings for USD files.







------


*class* substance_painter.project.ReloadMeshStatus(*value*)
Reload mesh status, used in mesh reload asynchronous callback.



See also


[`reload_mesh()`](#substance_painter.project.reload_mesh "substance_painter.project.reload_mesh"),





ERROR *= 2*
Mesh reload failed, see application log for details.





SUCCESS *= 0*
Mesh reload was successful.






Project metadata
----------------



> 
> 


------

> 
> *class* substance_painter.project.Metadata(*context: str*)
> Project metadata are arbitrary data that can be attached to a Substance
> Painter project. When the project is saved, the metadata are saved with it,
> so it is still available the next time the project is loaded.
> 
> 
> Metadata can only be accessed when a project is opened. If no project is
> opened, the methods will raise an exception.
> 
> 
> The constructor of the class `Metadata` takes a context name as an
> argument. This context name can be for example the name of your plugin. It
> should be unique, to avoid conflict with other plugins.
> 
> 
> Example
> 
> 
> 
> ```python
> import substance_painter
> 
> # Instantiate the Metadata utility, for the plugin "MyPlugin".
> metadata = substance_painter.project.Metadata("MyPlugin")
> 
> # Store a version number under the key "version".
> plugin_version = { "major": 1, "minor": 0 }
> metadata.set("version", plugin_version)
> 
> # List the project's metadata keys. The key "version" is now present.
> keys = metadata.list()
> print(keys)
> 
> # Retrieve the metadata "version".
> plugin_version = metadata.get("version")
> print("Version: " + str(plugin_version))
> 
> ```
> 
> 
> 
> 
> list() → list
> Return the list of project metadata keys.
> 
> 
> 
> Raises:
> * [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> 
> 
> 
> 
> 
> 
> 
> get(*key: str*)
> Retrieve the project metadata under the given key.
> 
> 
> 
> The supported data types are:* Primitive types: bool, int, float, str.
> * list
> 	+ Items can be any of the supported data types.
> * dict
> 	+ Keys must be of type str.
> 	+ Values can be any of the supported data types.
> 
> 
> 
> 
> 
> Parameters:
> **key** (*str*) – The key identifying the metadata to retrieve.
> 
> 
> 
> Raises:
> * [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * **RuntimeError** – If the metadata under `key` use a type that is not supported.
> * [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> 
> 
> 
> 
> 
> 
> 
> set(*key: str*, *value*)
> Store project metadata under the given key.
> 
> 
> 
> The supported data types are:* Primitive types: bool, int, float, str.
> * list
> 	+ Items can be any of the supported data types.
> * dict
> 	+ Keys must be of type str.
> 	+ Values can be any of the supported data types.
> 
> 
> 
> 
> 
> Parameters:
> * **key** (*str*) – The key identifying the metadata to store.
> * **value** – The metadata to store.
> 
> 
> 
> Raises:
> * [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * **RuntimeError** – If `value` uses a type that is not supported.
> * [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its services yet.
> 
> 
> 
> 
> 
> 
> 




Events
------


Project related operations, whether they are initiated through the Python API
or in the UI, can trigger the following events.
See [`substance_painter.event`](event.html#module-substance_painter.event "substance_painter.event") for more details.



Note


Project loading is done asynchronously. When the event `ProjectOpened` or
`ProjectCreated` is triggered, the project may still be loading. The event
`ProjectEditionEntered` is triggered when the project is ready to work with.






------


*class* substance_painter.event.ProjectOpened
Event triggered when an existing project has been opened.






------


*class* substance_painter.event.ProjectCreated
Event triggered when a new project has been created.






------


*class* substance_painter.event.ProjectAboutToClose
Event triggered just before closing the current project.






------


*class* substance_painter.event.ProjectAboutToSave(*file_path: str*)
Event triggered just before saving the current project.




file_path*: str*
The destination file.



Type:
str









------


*class* substance_painter.event.ProjectSaved
Event triggered once the current project is saved.






------


*class* substance_painter.event.ProjectEditionEntered
Event triggered when the project is fully loaded and ready to work with.


When edition is entered, it is for example possible to query/edit the project
properties, to bake textures or do project export.






------


*class* substance_painter.event.ProjectEditionLeft
Event triggered when the current project can non longer be edited.












