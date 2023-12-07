---
title: uvtile - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






UVTile class — Substance 3D Painter Python API 0.2.11 documentation
















UVTile class
============



> 
> 


------

> 
> *class* substance_painter.textureset.UVTile(*u: int*, *v: int*, *_material_id: int*)
> A UV Tile coordinates.
> 
> 
> 
> 
> u
> The U coordinate of the UV Tile.
> 
> 
> 
> Type:
> int
> 
> 
> 
> 
> 
> 
> 
> v
> The V coordinate of the UV Tile.
> 
> 
> 
> Type:
> int
> 
> 
> 
> 
> 
> 
> See also
> 
> 
> [`TextureSet.all_uv_tiles()`](textureset.html#substance_painter.textureset.TextureSet.all_uv_tiles "substance_painter.textureset.TextureSet.all_uv_tiles")
> 
> 
> 
> 
> 
> get_resolution() → [Resolution](index.html#substance_painter.textureset.Resolution "substance_painter.textureset.Resolution")
> Get the UV Tile resolution.
> 
> 
> 
> Returns:
> The resolution of this UV Tile in pixels.
> 
> 
> 
> Return type:
> [Resolution](index.html#substance_painter.textureset.Resolution "substance_painter.textureset.Resolution")
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance Painter has not started all its services yet.
> * **ValueError** – If the UV Tile is invalid.
> 
> 
> 
> 
> 
> Note
> 
> 
> The time complexity of this function is linear in the number of UV Tiles in the parent
> Texture Set. If you need to process multiple UV Tiles, please see
> `TextureSet.get_uvtiles_resolution`.
> 
> 
> 
> 
> See also
> 
> 
> [`UVTile.set_resolution()`](#substance_painter.textureset.UVTile.set_resolution "substance_painter.textureset.UVTile.set_resolution")
> [`UVTile.reset_resolution()`](#substance_painter.textureset.UVTile.reset_resolution "substance_painter.textureset.UVTile.reset_resolution")
> [`TextureSet.get_uvtiles_resolution()`](textureset.html#substance_painter.textureset.TextureSet.get_uvtiles_resolution "substance_painter.textureset.TextureSet.get_uvtiles_resolution"),
> 
> 
> 
> 
> 
> 
> set_resolution(*new_resolution: [Resolution](index.html#substance_painter.textureset.Resolution "substance_painter.textureset.Resolution")*)
> Set the resolution of the UV Tile.
> 
> 
> See resolution restrictions: [`Resolution`](index.html#substance_painter.textureset.Resolution "substance_painter.textureset.Resolution").
> 
> 
> 
> Parameters:
> **new_resolution** ([*Resolution*](index.html#substance_painter.textureset.Resolution "substance_painter.textureset.Resolution")) – The new resolution for this UV Tile.
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance Painter has not started all its services yet.
> * **ValueError** – If `new_resolution` is not square.
> * **ValueError** – If `new_resolution` is not a valid resolution.
> * **ValueError** – If the UV Tile is invalid.
> 
> 
> 
> 
> 
> Note
> 
> 
> The time complexity of this function is linear in the number of UVTiles in the parent
> Texture Set. If you need to process multiple UVTiles, please see
> `TextureSet.set_uvtiles_resolution`.
> 
> 
> 
> 
> See also
> 
> 
> [`UVTile.get_resolution()`](#substance_painter.textureset.UVTile.get_resolution "substance_painter.textureset.UVTile.get_resolution"),
> [`UVTile.reset_resolution()`](#substance_painter.textureset.UVTile.reset_resolution "substance_painter.textureset.UVTile.reset_resolution"),
> [`TextureSet.set_resolution()`](textureset.html#substance_painter.textureset.TextureSet.set_resolution "substance_painter.textureset.TextureSet.set_resolution"),
> [`TextureSet.set_uvtiles_resolution()`](textureset.html#substance_painter.textureset.TextureSet.set_uvtiles_resolution "substance_painter.textureset.TextureSet.set_uvtiles_resolution"),
> 
> 
> 
> 
> 
> 
> reset_resolution()
> Reset the resolution of the UV Tile to match the parent Texture Set.
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance Painter has not started all its services yet.
> * **ValueError** – If the UV Tile is invalid.
> 
> 
> 
> 
> 
> Note
> 
> 
> The time complexity of this function is linear in the number of UVTiles in the parent
> Texture Set. If you need to process multiple UVTiles, please see
> `TextureSet.reset_uvtiles_resolution`.
> 
> 
> 
> 
> See also
> 
> 
> [`UVTile.get_resolution()`](#substance_painter.textureset.UVTile.get_resolution "substance_painter.textureset.UVTile.get_resolution"),
> [`UVTile.set_resolution()`](#substance_painter.textureset.UVTile.set_resolution "substance_painter.textureset.UVTile.set_resolution"),
> [`TextureSet.reset_uvtiles_resolution()`](textureset.html#substance_painter.textureset.TextureSet.reset_uvtiles_resolution "substance_painter.textureset.TextureSet.reset_uvtiles_resolution"),
> 
> 
> 
> 
> 
> 
> all_mesh_names() → List[str]
> Get the list of meshes of the UV Tile.
> 
> 
> 
> Raises:
> * [**ProjectError**](../exception.html#substance_painter.exception.ProjectError "substance_painter.exception.ProjectError") – If no project is opened.
> * [**ServiceNotFoundError**](../exception.html#substance_painter.exception.ServiceNotFoundError "substance_painter.exception.ServiceNotFoundError") – If Substance Painter has not started all its services yet.
> * **ValueError** – If the UV Tile is invalid.
> 
> 
> 
> 
> 
> See also
> 
> 
> [`TextureSet.all_mesh_names()`](textureset.html#substance_painter.textureset.TextureSet.all_mesh_names "substance_painter.textureset.TextureSet.all_mesh_names")
> 
> 
> 
> 
> 
> 










