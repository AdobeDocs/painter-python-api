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

<div style="background-color:#F00">

### class substance_painter.export.ExportStatus(value)

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

</div>
