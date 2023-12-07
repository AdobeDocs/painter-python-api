---
title: display - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






display module — Substance 3D Painter Python API 0.2.11 documentation
















display module
==============


This module exposes functions that change how the model of a project is presented
in the viewports. They correspond to settings available in the “Display
Settings” window.


The Environment Map used to light the scene can be retrieved with
[`get_environment_resource()`](#substance_painter.display.get_environment_resource "substance_painter.display.get_environment_resource"), or set with [`set_environment_resource()`](#substance_painter.display.set_environment_resource "substance_painter.display.set_environment_resource").
The look up table (LUT) used as a Color Profile can be retrieved with
[`get_color_lut_resource()`](#substance_painter.display.get_color_lut_resource "substance_painter.display.get_color_lut_resource"), or set with [`set_color_lut_resource()`](#substance_painter.display.set_color_lut_resource "substance_painter.display.set_color_lut_resource").


Example



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



See also


[`substance_painter.resource`](resource.html#module-substance_painter.resource "substance_painter.resource"),
[Color Profile documentation](https://www.adobe.com/go/painter-color-profile),
[Environment Settings documentation](https://www.adobe.com/go/painter-environment-settings),
[Camera Settings documentation](https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html).






------


*class* substance_painter.display.ToneMappingFunction(*value*)
Tone mapping function used in display.


This corresponds to the “Tone mapping” list in the “Camera settings” section
of the “Display settings” view.


Members:




| Name | Description |
| --- | --- |
| `Linear` | Transformation from linear to sRGB without any color remapping.
Color values above 1 are clamped. |
| `ACES` | Use the standard color remapping from the Academy Color Encoding
System (ACES). |





substance_painter.display.get_environment_resource() → [ResourceID](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID") | None
Get the environment map resource of the active project.



Returns:
The environment map resource or None.



Return type:
[ResourceID](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







substance_painter.display.set_environment_resource(*new_env_map: [ResourceID](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")*) → None
Set the environment map resource of the active project.



Parameters:
**new_env_map** ([*ResourceID*](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")) – The new environment map resource.



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* **TypeError** – If `new_env_map` is not a ResourceID.
* [**ResourceNotFoundError**](exception.html#substance_painter.exception.ResourceNotFoundError "substance_painter.exception.ResourceNotFoundError") – If the environment map `new_env_map` is not found.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







substance_painter.display.get_color_lut_resource() → [ResourceID](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID") | None
Get the color profile LUT resource of the active project.



Returns:
The color profile LUT resource or None.



Return type:
[ResourceID](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







substance_painter.display.set_color_lut_resource(*new_color_lut: [ResourceID](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")*) → None
Set the color profile LUT resource of the active project.



Parameters:
**new_color_lut** ([*ResourceID*](resource.html#substance_painter.resource.ResourceID "substance_painter.resource.ResourceID")) – The new color profile LUT.



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* **TypeError** – If `new_color_lut` is not a ResourceID.
* [**ResourceNotFoundError**](exception.html#substance_painter.exception.ResourceNotFoundError "substance_painter.exception.ResourceNotFoundError") – If the color profile `new_color_lut` is not found.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







substance_painter.display.get_tone_mapping() → [ToneMappingFunction](#substance_painter.display.ToneMappingFunction "substance_painter.display.ToneMappingFunction")
Get the tone mapping operator used to display the current project.



Note


The tone mapping function is disabled when color management is enabled.
In that case trying to call get_tone_mapping will throw a RuntimeError.




Returns:

The tone mapping function currently used bythe project.








Return type:
[ToneMappingFunction](#substance_painter.display.ToneMappingFunction "substance_painter.display.ToneMappingFunction")



Raises:
* **RuntimeError** – If the project is color managed.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.







substance_painter.display.set_tone_mapping(*new_tone_mapping: [ToneMappingFunction](#substance_painter.display.ToneMappingFunction "substance_painter.display.ToneMappingFunction")*) → None
Set the tone mapping operator to display the current project.



Note


The tone mapping function is disabled when color management is enabled.
In that case trying to call set_tone_mapping will throw a RuntimeError.




Parameters:
**new_tone_mapping** ([*ToneMappingFunction*](#substance_painter.display.ToneMappingFunction "substance_painter.display.ToneMappingFunction")) – The new tone mapping function
to use in the project.



Raises:
* **TypeError** – If `new_tone_mapping` is not a ToneMappingFunction.
* **RuntimeError** – If the project is color managed.
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* [**ServiceNotFoundError**](exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance 3D Painter has not started all its
 services yet.








------


*class* substance_painter.display.CameraProjectionType(*value*)
Camera projection type.


Members:




| Name | Description |
| --- | --- |
| `Perspective` | Objects appear smaller when they are far from the camera. |
| `Orthographic` | Preserves relative size of objects regardless its distance from the camera. |






------


*class* substance_painter.display.Camera(*_camera_id: int*)
Allows the manipulation of the properties of an existing Camera.
Coordinates of the camera are defined in the scene space.


Example



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



See also


[Camera Settings documentation](https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html).
[`substance_painter.project.get_scene_bounding_box()`](project.html#substance_painter.project.get_scene_bounding_box "substance_painter.project.get_scene_bounding_box")





*static* get_default_camera() → [Camera](#substance_painter.display.Camera "substance_painter.display.Camera")
Get the default camera.



Returns:
The default (main) camera.



Return type:
[Camera](#substance_painter.display.Camera "substance_painter.display.Camera")



Raises:
* [**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
* **RuntimeError** – If no camera has been found.







*property* position*: List[float]*
The position (x,y,z) of the camera.



Getter:
Returns the position of the camera.



Setter:
Sets the position of the camera.



Type:
List[float]



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







*property* rotation*: List[float]*
The rotation (x,y,z) of the camera as Euler angles in degrees.



Getter:
Returns the rotation of the camera.



Setter:
Sets the rotation of the camera.



Type:
List[float]



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







*property* field_of_view*: float*
The field of view of the camera in degrees.
This value is only used if the `CameraProjectionType` is `Perspective`.



Getter:
Returns the field of view of the camera.



Setter:
Sets the field of view of the camera. Value is clamped between 3 and 179.



Type:
float





Note


Modifing the field of view will change the focal length.




Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







*property* focal_length*: float*
The focal length of the camera in mm.
This value is only used if the `CameraProjectionType` is `Perspective`.



Getter:
Returns the focal length of the camera.



Setter:
Sets the focal length of the camera. Value is clamped between 1 and 500.



Type:
float





Note


Modifing the focal length will change the field of view.




Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







*property* focus_distance*: float*
The focus distance of the camera.
Defines the distance at which the focus point is located.



Getter:
Returns the focus distance of the camera.



Setter:
Sets the focus distance of the camera.
Value is clamped between 0 and 10 * scene radius.



Type:
float



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







*property* aperture*: float*
The aperture of the camera. Defines how wide the Depth of Field will be.



Getter:
Returns the lens radius.



Setter:
Sets the lens radius. Value is clamped between 0 and 1 * scene radius.



Type:
float



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







*property* orthographic_height*: float*
The orthographic height of the camera.
This value is only used if the `CameraProjectionType` is `Orthographic`.



Getter:
Returns the orthographic height of the camera.



Setter:
Sets the orthographic height of the camera.



Type:
float



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.







*property* projection_type*: [CameraProjectionType](#substance_painter.display.CameraProjectionType "substance_painter.display.CameraProjectionType")*
The projection type (perspective or orthographic) of the camera.



Getter:
Returns the projection type of the camera.



Setter:
Sets the projection type of the camera.



Type:
[CameraProjectionType](#substance_painter.display.CameraProjectionType "substance_painter.display.CameraProjectionType")



Raises:
[**ProjectError**](exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.














