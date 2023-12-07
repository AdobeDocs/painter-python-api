---
title: async_utils - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






async_utils module — Substance 3D Painter Python API 0.2.11 documentation
















async_utils module
==================


The `async_utils` module provide primitives used in async computations.





------


*class* substance_painter.async_utils.StopSource(*stop_source: _substance_painter.async_utils.StopSource*)
An object that can be used to cancel an asynchronous computation.




request_stop() → bool
Makes a top request.



Returns:
True if the stop request was possible.



Return type:
bool







stop_requested() → bool
Check if a stop request as been made.



Returns:
True if a stop request has been made.



Return type:
bool














