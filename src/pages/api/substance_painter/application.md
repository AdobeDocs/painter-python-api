---
title: application - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






application module — Substance 3D Painter Python API 0.2.11 documentation
















application module
==================


This module contains application wide functionnalities.




substance_painter.application.version_info() → Tuple[int, int, int]
Get the version_info of Substance 3D Painter. Ie a tuple containing major, minor, patch.



Returns:
The major, minor and patch version of Substance 3D Painter.



Return type:
Tuple[int, int, int]







substance_painter.application.version() → str
Get the version of Substance 3D Painter. Do not extract version information out of it,
rather use [`version_info()`](#substance_painter.application.version_info "substance_painter.application.version_info").



Returns:
Version of Substance 3D Painter.



Return type:
str







substance_painter.application.engine_computations_status() → bool
Check whether engine computations are enabled.



Returns:
Whether engine computations are enabled.



Return type:
bool







substance_painter.application.enable_engine_computations(*enable: bool*)
Enable or disable engine computations.





substance_painter.application.disable_engine_computations()
Context manager to disable engine computations.
Allows to regroup computation intensive tasks without triggerring the engine so that textures
are not computed or updated in the layer stack or the viewport.
This is equivalent to disabling and then reenabling the engine by calling
[`enable_engine_computations()`](#substance_painter.application.enable_engine_computations "substance_painter.application.enable_engine_computations").


Example:



```python
import substance_painter.application as mapplication

with mapplication.disable_engine_computations():
	# Do some computation intensive tasks
	pass

```





substance_painter.application.close()
Close Susbtance 3D Painter.



Warning


Any unsaved data will be lost.












