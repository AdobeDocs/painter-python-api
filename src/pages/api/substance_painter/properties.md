---
title: properties - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






properties module — Substance 3D Painter Python API 0.2.11 documentation
















properties module
=================


The `properties` module introduces the description of dynamic attributes.





------


*class* substance_painter.properties.Property(*handle: _substance_painter.data_tweak.PythonTweak*)
Read only access to a property data.




value() → bool | int | Tuple[int, int] | Tuple[int, int, int] | Tuple[int, int, int, int] | float | Tuple[float, float] | Tuple[float, float, float] | Tuple[float, float, float, float] | str
Get the current porperty value.



Returns:
the current value.



Return type:
PropertyValue







name() → str
Get the porperty name.



Returns:
The property name.



Return type:
str







short_name() → str
Get the shortened property name.



Returns:
The property short name.



Return type:
str







label() → str
Get the property label.



Returns:
The property label.



Return type:
str







widget_type() → str
Get the widget type that should be used to edit the property.



Returns:
One of: ‘Slider’, ‘Angle’, ‘Color’, ‘Togglebutton’,
‘Combobox’, ‘RandomSeed’, ‘File’, ‘FileList’, ‘LineEdit’,
‘Resource’, ‘TextEdit’.



Return type:
str







enum_values() → Dict[str, int]
The possible enum values with corresponding text for ‘Combobox’
widget type.



Returns:
Enum label to enum value dictionary.



Return type:
*Dict*[str, int]







enum_value(*enum_label: str*) → int
Get the enum value for the given enum label for ‘Combobox’
widget type.



Parameters:
**enum_label** (*str*) – A valid enum label.



Returns:
The enum value for the corresponding label.



Return type:
*Dict*[str, int]







properties() → Dict[str, Any]
Get a json object that describes all available meta properties of this
property. For example: value range, editor step, possible values, tooltip, etc.



Returns:
A json object.



Return type:
*Dict*[str, *Any*]














