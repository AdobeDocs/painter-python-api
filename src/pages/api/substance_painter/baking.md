---
title: baking - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






baking module — Substance 3D Painter Python API 0.2.11 documentation
















baking module
=============


The `baking` module allows to set baking parameters and launch baking
of mesh maps.


Example



```python
import substance_painter.baking as baking
import substance_painter.textureset as textureset
from substance_painter.baking import BakingParameters, MeshMapUsage, CurvatureMethod

# set baking parameters
baking_params = BakingParameters.from_texture_set_name("Name for ts")
texture_set = baking_params.texture_set()
common_params = baking_params.common()
ao_params = baking_params.baker(MeshMapUsage.AO)
BakingParameters.set({
	common_params['OutputSize'] : (10,10),
	ao_params['Distribution'] : ao_params['Distribution'].enum_value('Cosine')})

# check if common parameters are shared between Texture Sets (True at project creation)
common_params_are_shared = bool(baking.get_link_group_common_parameters())

# unlink common parameters. The common parameters for all Texture Sets become independent
baking.unlink_all_common_parameters()

# recheck whether common parameters are shared between Texture Sets (now False)
common_params_are_linked = bool(baking.get_link_group_common_parameters())

ts1 = textureset.TextureSet.from_name("Name for ts1")
ts2 = textureset.TextureSet.from_name("Name for ts2")

# get the list of Texture Sets which are linked for AO with ts1
# it's not yet linked, so returns only [ts1]
linked_with_ts1 = baking.get_linked_texture_sets(ts1, MeshMapUsage.AO)

# link AO baking parameters for ts1 and ts2 together into a group,
# keeping ts1 parameters for both
baking.set_linked_group([ts1,ts2], ts1, MeshMapUsage.AO)

# get the new list of Texture Sets which are linked with ts1
# now they are linked, so it returns [ts1, ts2]
linked_with_ts1 = baking.get_linked_texture_sets(ts1, MeshMapUsage.AO)

# finally unlink AO baking parameters
baking.unlink_all(MeshMapUsage.AO)

# get curvature method
curvature_method = baking_params.get_curvature_method()

# set curvature method
baking_params.set_curvature_method(CurvatureMethod.FromMesh)

# check whether the baking is enabled on the Texture Set level and enable it
baking_params.is_textureset_enabled()
baking_params.set_textureset_enabled(True)

# check if AO usage is enabled for baking and enable it
baking_params.is_baker_enabled(MeshMapUsage.AO)
baking_params.set_baker_enabled(MeshMapUsage.AO, True)

# get all usages enabled for baking
baking_params.get_enabled_bakers()

# set usages enabled for baking
baking_params.set_enabled_bakers([MeshMapUsage.AO, MeshMapUsage.Normal])

# check if one UV Tile is enabled for baking, disable it
baking_params.is_uv_tile_enabled(texture_set.uv_tile(0,0))
baking_params.set_uv_tile_enabled(texture_set.uv_tile(0,0), False)

# get all UV Tiles enabled for baking
baking_params.get_enabled_uv_tiles()
# set UV Tiles enabled for baking
baking_params.set_enabled_uv_tiles([texture_set.uv_tile(0,0), texture_set.uv_tile(0,1)])

```



See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
[`substance_painter.textureset.MeshMapUsage`](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")
[`substance_painter.textureset.UVTile`](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")






------


*class* substance_painter.baking.BakingStatus(*value*)
Status code of the baking process.


Members:




| Name | Description |
| --- | --- |
| `Success` | The baking was successful. |
| `Cancel` | The baking was cancelled by the user. |
| `Fail` | The baking could not complete; the cause is detailed in the log. |






------


*class* substance_painter.baking.CurvatureMethod(*value*)
Members:


`FromMesh`, `FromNormalMap`






------


*class* substance_painter.baking.BakingParameters(*material_id: int*)
Baking parameters for a given texture set.



See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
[`substance_painter.textureset.MeshMapUsage`](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")





*static* from_texture_set(*texture_set: [TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*) → [BakingParameters](#substance_painter.baking.BakingParameters "substance_painter.baking.BakingParameters")
Get the baking parameters for the given texture set object.



Parameters:
**texture_set** ([*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")) – The texture set.



Returns:
The baking parameters for the given texure set.



Return type:
[BakingParameters](#substance_painter.baking.BakingParameters "substance_painter.baking.BakingParameters")





See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")






*static* from_texture_set_name(*texture_set_name: str*) → [BakingParameters](#substance_painter.baking.BakingParameters "substance_painter.baking.BakingParameters")
Get the baking parameters for the given texture set name.



Parameters:
**texture_set_name** (*str*) – The texture set name.



Returns:
The baking parameters for the given texure set.



Return type:
[BakingParameters](#substance_painter.baking.BakingParameters "substance_painter.baking.BakingParameters")





See also


[`substance_painter.properties.Property`](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")






texture_set() → [TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")
Get the associated texture set.



Returns:
The texture set associated with this BakingParameters instance.



Return type:
[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")





See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")






common() → Dict[str, [Property](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")]
Get the parameters common to all bakers, like baking resolution.



Returns:
The common parameters.



Return type:
Dict[str, [Property](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")]





See also


[`substance_painter.properties.Property`](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")






baker(*baked_map: [MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*) → Dict[str, [Property](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")]
Get the parameters specific to a given baked map.



Parameters:
**baked_map** ([*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")) – The baked map usage.



Returns:
The corresponding baked map parameters.



Return type:
Dict[str, [Property](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")]





See also


[`substance_painter.textureset.MeshMapUsage`](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage"),
[`substance_painter.properties.Property`](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")






*static* set(*property_values: Dict[[Property](properties.html#substance_painter.properties.Property "substance_painter.properties.Property"), bool | int | Tuple[int, int] | Tuple[int, int, int] | Tuple[int, int, int, int] | float | Tuple[float, float] | Tuple[float, float, float] | Tuple[float, float, float, float] | str]*) → None
Set property values in batch.



Parameters:
* **property_values** (*Dict**[*[*Property*](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")*,* *PropertyValue**]*) – A dict of properties
* **values.** (*to be set with their corresponding new*) –





See also


[`substance_painter.properties.Property`](properties.html#substance_painter.properties.Property "substance_painter.properties.Property")






get_curvature_method() → [CurvatureMethod](#substance_painter.baking.CurvatureMethod "substance_painter.baking.CurvatureMethod")
Get the curvature method used for baking



Returns:
The curvature method used for baking



Return type:
[CurvatureMethod](#substance_painter.baking.CurvatureMethod "substance_painter.baking.CurvatureMethod")





See also


set_curvature_method






set_curvature_method(*method: [CurvatureMethod](#substance_painter.baking.CurvatureMethod "substance_painter.baking.CurvatureMethod")*)
Set the curvature method to use for baking



Parameters:
**method** ([*CurvatureMethod*](#substance_painter.baking.CurvatureMethod "substance_painter.baking.CurvatureMethod")) – The new method to use for baking





See also


get_curvature_method






is_baker_enabled(*usage: [MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*) → bool
Whether some usage is enabled for baking.



Parameters:
**usage** ([*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")) – The baked map usage.



Returns:
True if the corresponding usage is enabled for baking.



Return type:
bool







set_baker_enabled(*usage: [MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*, *enable: bool*) → None
Enable or disable a usage for baking.



Parameters:
* **usage** ([*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")) – The baked map usage.
* **enable** (*bool*) – Enable or disable.







get_enabled_bakers() → List[[MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")]
Get all usages enabled for baking.



Returns:
Enabled usages.



Return type:
List[[MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")]







set_enabled_bakers(*enabled_usages: List[[MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")]*) → None
Set usages enabled for baking. Usages not in this list will be disabled.



Parameters:
**enabled_usages** (*List**[*[*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*]*) – Enabled usages.







is_textureset_enabled() → bool
Whether this Texture Set is enabled for baking.



Returns:
True if this Texture Set is enabled for baking.



Return type:
bool







set_textureset_enabled(*enable: bool*) → None
Enable or disable this Texture Set for baking.



Parameters:
**enable** (*bool*) – Enable or disable.







is_uv_tile_enabled(*uv_tile: [UVTile](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")*) → bool
Whether a UV Tile is enabled for baking.



Parameters:
**tile** ([*UVTile*](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")) – The UV Tile.



Returns:
True if the UV Tile is enabled for baking.



Return type:
bool





See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
[`substance_painter.textureset.UVTile`](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")






set_uv_tile_enabled(*uv_tile: [UVTile](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")*, *enable: bool*) → None
Enable or disable an UV Tile for baking.



Parameters:
* **uv_tile** ([*UVTile*](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")) – The UV Tile.
* **enable** (*bool*) – Enable or disable.





See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
[`substance_painter.textureset.UVTile`](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")






get_enabled_uv_tiles() → List[[UVTile](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")]
Get all UV Tiles enabled for baking.



Returns:
Enabled UV Tiles.



Return type:
List[[UVTile](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")]





See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
[`substance_painter.textureset.UVTile`](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")






set_enabled_uv_tiles(*enabled_uv_tiles: List[[UVTile](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")]*) → None
Set UV Tiles enabled for baking. All other tiles will be disabled.



Parameters:
**enabled_uv_tiles** (*List**[*[*UVTile*](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")*]*) – Enabled UV Tiles.





See also


[`substance_painter.textureset.TextureSet`](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet"),
[`substance_painter.textureset.UVTile`](textureset/uvtile.html#substance_painter.textureset.UVTile "substance_painter.textureset.UVTile")







substance_painter.baking.set_linked_group(*group: List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]*, *reference: [TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*, *usage: [MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*) → None
Make a group of Texture Sets share the same baking parameters for the given ‘usage’. After that,
editing the ‘usage’ parameters of one of the group’s Texture Set will impact the whole group.



Parameters:
* **group** (*List**[*[*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*]*) – Texture Sets to be included in the new group.
* **reference** ([*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")) – Texture Set which parameters are applied to the whole group.
* **usage** ([*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")) – Usage of the group.







substance_painter.baking.set_linked_group_common_parameters(*group: List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]*, *reference: [TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*) → None
Make a group of Texture Sets share the same baking common parameters. After that, editing a
common parameter of one of the group’s Texture Set will impact the whole group.



Parameters:
* **group** (*List**[*[*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*]*) – Texture Sets to be included in the new group.
* **reference** ([*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")) – Texture Set which parameters are applied to the whole group.







substance_painter.baking.unlink_all(*usage: [MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*) → None
Unlink all Texture Sets for a given usage. That is, remove the group if it exists, so that all
Texture Sets have their own copy of the parameters.



Parameters:
**usage** ([*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")) – Usage to unlink.







substance_painter.baking.unlink_all_common_parameters() → None
Unlink all Texture Sets for common parameters. That is, remove the group if exists, so that all
Texture Sets have their own copy of the parameters.





substance_painter.baking.get_link_group(*usage: [MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*) → List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]
Get the list of Texture Sets that share baking parameters for a given usage.



Parameters:
**usage** ([*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")) – Usage to query.



Returns:
All linked Texture Sets for the usage. Empty list if no Texture Set are
linked.



Return type:
List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]







substance_painter.baking.get_link_group_common_parameters() → List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]
Get the list of Texture Sets that share common baking parameters.



Returns:
All linked Texture Sets for common parameters. Empty list if no Texture
Set are linked.



Return type:
List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]







substance_painter.baking.get_linked_texture_sets(*texture_set: [TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*, *usage: [MeshMapUsage](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")*) → List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]
Get the list of Texture Sets that share the same parameters as some Texture Set, for a given
usage.



Parameters:
* **texture_set** ([*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")) – The Texture Set to query
* **usage** ([*MeshMapUsage*](textureset/index.html#substance_painter.textureset.MeshMapUsage "substance_painter.textureset.MeshMapUsage")) – The usage to query



Returns:
The list of Texture Sets sharing parameters with the input Texture Set.
Contains at least the input Texture Set if no group exists for the usage.



Return type:
List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]







substance_painter.baking.get_linked_texture_sets_common_parameters(*texture_set: [TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*) → List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]
Get the list of Texture Sets that share the same parameters as some Texture Set, for common
parameters.



Parameters:
**texture_set** ([*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")) – The Texture Set to query



Returns:
The list of Texture Sets sharing common parameters with the input Texture
Set. Contains at least the input Texture Set if no group exists for common parameters.



Return type:
List[[TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")]







substance_painter.baking.bake_async(*texture_set: [TextureSet](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")*) → [StopSource](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")
Launch the baking process for a Texture Set, using the current baking configuration.
The configuration is set by setting baking parameters, enabling Texture Set, selecting UV Tiles
for baking, setting curvature method etc.
This function is asynchronous. When the baking process is finished, the
[`substance_painter.event.BakingProcessEnded`](event.html#substance_painter.event.BakingProcessEnded "substance_painter.event.BakingProcessEnded") event is sent.



Parameters:
**texture_set** ([*TextureSet*](textureset/textureset.html#substance_painter.textureset.TextureSet "substance_painter.textureset.TextureSet")) – The Texture Set to bake.



Returns:
Can be used to cancel the asynchronous computation.



Return type:
[StopSource](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")





See also


[`BakingParameters`](#substance_painter.baking.BakingParameters "substance_painter.baking.BakingParameters")
[`substance_painter.event.BakingProcessAboutToStart`](event.html#substance_painter.event.BakingProcessAboutToStart "substance_painter.event.BakingProcessAboutToStart")
[`substance_painter.event.BakingProcessProgress`](event.html#substance_painter.event.BakingProcessProgress "substance_painter.event.BakingProcessProgress")
[`substance_painter.event.BakingProcessEnded`](event.html#substance_painter.event.BakingProcessEnded "substance_painter.event.BakingProcessEnded")
[`substance_painter.async_utils.StopSource`](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")






substance_painter.baking.bake_selected_textures_async() → [StopSource](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")
Launch the baking process, using the current baking configuration.
The configuration is set by setting baking parameters, enabling Texture Set, selecting UV Tiles
for baking, setting curvature method etc.
This function is asynchronous. When the baking process is finished, the
[`substance_painter.event.BakingProcessEnded`](event.html#substance_painter.event.BakingProcessEnded "substance_painter.event.BakingProcessEnded") event is sent.



Returns:
Can be used to cancel the asynchronous computation.



Return type:
[StopSource](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")





See also


[`BakingParameters`](#substance_painter.baking.BakingParameters "substance_painter.baking.BakingParameters")
[`substance_painter.event.BakingProcessAboutToStart`](event.html#substance_painter.event.BakingProcessAboutToStart "substance_painter.event.BakingProcessAboutToStart")
[`substance_painter.event.BakingProcessProgress`](event.html#substance_painter.event.BakingProcessProgress "substance_painter.event.BakingProcessProgress")
[`substance_painter.event.BakingProcessEnded`](event.html#substance_painter.event.BakingProcessEnded "substance_painter.event.BakingProcessEnded")
[`substance_painter.async_utils.StopSource`](async_utils.html#substance_painter.async_utils.StopSource "substance_painter.async_utils.StopSource")












