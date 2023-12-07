---
title: exception - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






exception module — Substance 3D Painter Python API 0.2.11 documentation
















exception module
================


This module declares Substance 3D Painter specific exceptions.





------


*class* substance_painter.exception.ProjectError(*value*)
Raised when an operation or function is incompatible with the current
project, or when the current state of the project is invalid.


Trying to save a project when there is no project opened would raise a
[`ProjectError`](#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError").






------


*class* substance_painter.exception.ResourceNotFoundError(*value*)
Raised when a Substance 3D Painter resource could not be found.


Providing an invalid resource ID would raise a [`ResourceNotFoundError`](#substance_painter.exception.ResourceNotFoundError "substance_painter.exception.ResourceNotFoundError").






------


*class* substance_painter.exception.ServiceNotFoundError(*value*)
Raised when an operation or function relies on a service which could not
be found. It could mean that the service has not been started yet.


Trying to execute a command while Substance 3D Painter is starting could
raise [`ServiceNotFoundError`](#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError").











