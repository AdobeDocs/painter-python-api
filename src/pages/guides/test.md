---
title: Qt6 Migration - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

# Qt6 Migration

Painter version 10.1 moved from Qt5 to Qt6, which introduces breaking changes in Python plugins. The most notable change in the PySide module going from version 2 to 6.

---

# Export module

<div style="background-color:#BCBCBC;padding:8px;border-radius:4px">

class **substance_painter.export.ExportStatus**(value)

Status code of the export process.

Members:

| Name | Description |
|---|---|
| Sucess | The export was successful. |
| Cancelled | The export was cancelled by the user. |
| Warning | The export completed with warnings. |
| Error | The export could not complete; the cause is detailed in the log. |

<InlineAlert variant="info" slots="text" />

The name used to define members is available as a string via the _.name_ attribute (see [python enum.Enum](https://docs.python.org/3/library/enum.html#enum.Enum)).

<br/>
</div>

# Export Textures

<div style="background-color:#BCBCBC;padding:8px;border-radius:4px">

**substance_painter.export.list_project_textures**(json_config: dict) → Dict[Tuple[str, str], List[str]]

Get list of textures that would be exported according to the given JSON configuration.

- **Parameters**:
  - **json_config** (dict) – JSON object representing the export configuration to be used. See JSON configuration.
- **Returns**: List of texture files that would be exported, grouped by stack (Texture Set name, stack name).
- **Return type**: Dict[Tuple[str, str], List[str]]
- **Raises**:
  - **ProjectError** – If no project is opened.
  - **ValueError** – If json_config is ill-formed, or is invalid in the context of the current project. Contains a human readable message.

<InlineAlert variant="info" slots="text" />

export_project_textures().
 
<br/>
</div>
