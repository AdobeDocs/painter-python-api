---
title: Loading external plugins - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---

# Using external plugins

This page explains how to use an environment variable to define an additional location to load Python plugins.

By default Painter's python plugins must be located inside the user's documents folder. It is however possible to specify a custom location to provide access to more plugins. This helps in providing plugins that are managed on a network share or under a versioning system for example.

## Folder structure

When providing a new location to load plugins, the application expect a specific folder structure with three sub-folders. Python script located outside of those folders or under different names will be ignored.

The three following folder are required:

- **plugins**: Modules that are loaded as optional components
- **startup**: Modules that are always loaded at application startup
- **modules**: Utility modules, shared across plugins

## Specifying the new location

There are two ways to specify a new location. From outside or from inside the application.

- **From outside**: simply use the **SUBSTANCE_PAINTER_PLUGINS_PATH** environment variable to specify the new folder. The folder path should point to the root location where are the three previously mentioned folders.
- **From inside**: use the **substance_painter_plugins** module to specify a new path and then update it.