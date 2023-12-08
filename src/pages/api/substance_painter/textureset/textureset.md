---
title: textureset - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>TextureSet class<a class="headerlink" href="#textureset-class" title="Link to this heading"> </a></h1>

<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet">
<em class="property">class </em>substance_painter.textureset.TextureSet(<em class="sig-param">material_id: int</em>)<a class="headerlink" href="#substance_painter.textureset.TextureSet" title="Link to this definition"> </a></dt>
<p class>A <cite>Substance 3D Painter</cite> Texture Set. A Texture Set has a resolution and a
number of stacks, and can be layered or not.
It optionally also has a number of UV Tiles.</p>
<p class>It uses a set of baked Mesh map textures. Each Mesh map has a defined MeshMapUsage.</p>
<p class>If the corresponding material is not layered, the Texture Set has just one
stack, which is transparent to the user. If the material is layered, the
Texture Set has several stacks.</p>
<p class>Example</p>


```python
import substance_painter.textureset

# Get the Texture Set "TextureSetName":
my_texture_set = substance_painter.textureset.TextureSet.from_name("TextureSetName")

# Show the resolution of the Texture Set:
resolution = my_texture_set.get_resolution()
print("The resolution is {0}x{1}".format(resolution.width, resolution.height))

# Change the resolution of the Texture Set:
my_texture_set.set_resolution(substance_painter.textureset.Resolution(512, 512))

# Show information about layering:
if my_texture_set.is_layered_material():
	print("{0} is a layered material".format(my_texture_set.name()))

	# Get the stack called "Mask1" from the Texture Set:
	mask_stack = my_texture_set.get_stack("Mask1")

	# Print "TextureSetName/Mask1":
	print(mask_stack)

else:
	print("{0} is not a layered material".format(my_texture_set.name()))

# Show information about UV Tiles:
if my_texture_set.has_uv_tiles():
	print("{0} has UV Tiles:".format(my_texture_set.name()))
	for tile in my_texture_set.all_uv_tiles():
		print("Tile {0} {1}".format(tile.u, tile.v))

# List all the stacks of the Texture Set "TextureSetName":
for stack in my_texture_set.all_stacks():
	print(stack)

# Query ambiant occlusion Mesh map of the Texture Set "TextureSetName":
usage = substance_painter.textureset.MeshMapUsage.AO
meshMapResource = my_texture_set.get_mesh_map_resource(usage)

if meshMapResource is None :
	print("{0} does not have a Mesh map defined for usage {1}"
		.format(my_texture_set.name(), usage))
else:
	print("{0} uses {1} Mesh map for usage {2}"
		.format(my_texture_set.name(), meshMapResource, usage))

# Unset ambiant occlusion Mesh map of the Texture Set "TextureSetName":
my_texture_set.set_mesh_map_resource(usage, None)
```



<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack"><code class="xref py py-class docutils literal notranslate">Stack</code></a>,
<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate">UVTile</code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><code class="xref py py-class docutils literal notranslate">MeshMapUsage</code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-texture-set">Texture Set documentation</a>.</p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.from_name">
<em class="property">static </em>from_name(<em class="sig-param">texture_set_name: str</em>)<a class="headerlink" href="#substance_painter.textureset.TextureSet.from_name" title="Link to this definition"> </a></dt>
<dd><p class>Get the Texture Set from its name.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>texture_set_name</strong> (<em>str</em>) – The name of the Texture Set.</p>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>The Texture Set name is case sensitive.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>TypeError</strong> – If <code class="docutils literal notranslate">texture_set_name</code> is missing or not a string.</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">texture_set_name</code> is empty.</p></li>
<li><p class><strong>ValueError</strong> – If there is no Texture Set with the name <code class="docutils literal notranslate">texture_set_name</code>.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.name">
name() → str<a class="headerlink" href="#substance_painter.textureset.TextureSet.name" title="Link to this definition"> </a></dt>
<dd><p class>Get the Texture Set name.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The name of the Texture Set.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.is_layered_material">
is_layered_material() → bool<a class="headerlink" href="#substance_painter.textureset.TextureSet.is_layered_material" title="Link to this definition"> </a></dt>
<dd><p class>Query if this Texture Set uses material layering.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if the Texture Set uses material layering, <code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.all_stacks">
all_stacks() → List[<a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack">Stack</a>]<a class="headerlink" href="#substance_painter.textureset.TextureSet.all_stacks" title="Link to this definition"> </a></dt>
<dd><p class>List all the stacks from this Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>All the stacks of this Texture Set.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>list[<a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack">Stack</a>]</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.TextureSet.get_stack" title="substance_painter.textureset.TextureSet.get_stack"><code class="xref py py-meth docutils literal notranslate">TextureSet.get_stack()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_stack">
get_stack(<em class="sig-param">stack_name: str = ''</em>) → <a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack">Stack</a><a class="headerlink" href="#substance_painter.textureset.TextureSet.get_stack" title="Link to this definition"> </a></dt>
<dd><p class>Get a stack of this Texture Set from its name.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>stack_name</strong> (<em>str</em>) – The stack name.
Leave empty if the Texture Set does not use material layering.</p>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>The stack name is case sensitive.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The stack.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack">Stack</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.TextureSet.all_stacks" title="substance_painter.textureset.TextureSet.all_stacks"><code class="xref py py-meth docutils literal notranslate">TextureSet.all_stacks()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_resolution">
get_resolution() → <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a><a class="headerlink" href="#substance_painter.textureset.TextureSet.get_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Get the Texture Set resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The resolution of this Texture Set in pixels.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.TextureSet.set_resolution" title="substance_painter.textureset.TextureSet.set_resolution"><code class="xref py py-meth docutils literal notranslate">TextureSet.set_resolution()</code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.set_resolutions" title="substance_painter.textureset.set_resolutions"><code class="xref py py-meth docutils literal notranslate">set_resolutions()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.set_resolution">
set_resolution(<em class="sig-param">new_resolution: <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a></em>)<a class="headerlink" href="#substance_painter.textureset.TextureSet.set_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Set the resolution of the Texture Set.</p>
<p class>See resolution restrictions: <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><code class="xref py py-class docutils literal notranslate">Resolution</code></a>.</p>
<div class="admonition note">
<p class>Note</p>
<p class>For any Texture Set, you can find its accepted resolutions in the
“Texture Set Settings” window, in the “Size” menu.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>new_resolution</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><em>Resolution</em></a>) – The new resolution for this Texture Set.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">new_resolution</code> is not a valid resolution.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.TextureSet.get_resolution" title="substance_painter.textureset.TextureSet.get_resolution"><code class="xref py py-meth docutils literal notranslate">TextureSet.get_resolution()</code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.set_resolutions" title="substance_painter.textureset.set_resolutions"><code class="xref py py-meth docutils literal notranslate">set_resolutions()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.has_uv_tiles">
has_uv_tiles() → bool<a class="headerlink" href="#substance_painter.textureset.TextureSet.has_uv_tiles" title="Link to this definition"> </a></dt>
<dd><p class>Check if the Texture Set uses the UV Tiles workflow.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if the Texture Set uses the UV Tiles workflow, <code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.TextureSet.all_uv_tiles" title="substance_painter.textureset.TextureSet.all_uv_tiles"><code class="xref py py-meth docutils literal notranslate">all_uv_tiles()</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.uv_tile">
uv_tile(<em class="sig-param">u_coord: int</em>, <em class="sig-param">v_coord: int</em>) → <a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a><a class="headerlink" href="#substance_painter.textureset.TextureSet.uv_tile" title="Link to this definition"> </a></dt>
<dd><p class>Get the Texture Set UV Tile at (u, v) coordinates.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>u_coord</strong> (<em>int</em>) – The u coordinate of the UV Tile.</p></li>
<li><p class><strong>v_coord</strong> (<em>int</em>) – The v coordinate of the UV Tile.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The Texture Set UV Tile at (u, v) coordinate.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.all_uv_tiles">
all_uv_tiles() → List[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>]<a class="headerlink" href="#substance_painter.textureset.TextureSet.all_uv_tiles" title="Link to this definition"> </a></dt>
<dd><p class>Get the list of the Texture Set UV Tiles, ordered by U then V coordinates.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>List of the Texture Set UV Tiles, ordered by U then V coordinates.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><em>List</em>[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>]</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.TextureSet.has_uv_tiles" title="substance_painter.textureset.TextureSet.has_uv_tiles"><code class="xref py py-meth docutils literal notranslate">has_uv_tiles()</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_uvtiles_resolution">
get_uvtiles_resolution() → Dict[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>, <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a>]<a class="headerlink" href="#substance_painter.textureset.TextureSet.get_uvtiles_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Get all UV Tiles that have a different resolution from the Texture Set, associated
to their effective resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The dictionary of uvtiles and their                associated resolution.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><em>Dict</em>[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>, <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a>]</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.get_resolution" title="substance_painter.textureset.UVTile.get_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.get_resolution()</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.set_uvtiles_resolution">
set_uvtiles_resolution(<em class="sig-param">resolutions: Dict[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>, <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a>]</em>)<a class="headerlink" href="#substance_painter.textureset.TextureSet.set_uvtiles_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Set the resolution of the given UV Tiles to the associated resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>resolutions</strong> (<em>Dict</em><em>[</em><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><em>UVTile</em></a><em>, </em><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><em>Resolution</em></a><em>]</em>) – The dictionary of UV Tiles
and their associated resolution.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.set_resolution" title="substance_painter.textureset.UVTile.set_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.set_resolution()</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.reset_uvtiles_resolution">
reset_uvtiles_resolution(<em class="sig-param">uvtiles: List[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>]</em>)<a class="headerlink" href="#substance_painter.textureset.TextureSet.reset_uvtiles_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Reset the resolution of the given UV Tiles to the parent Texture Set’s resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>uvtiles</strong> (<em>List</em><em>[</em><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><em>UVTile</em></a><em>]</em>) – The list of UV Tiles to be reset.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.reset_resolution" title="substance_painter.textureset.UVTile.reset_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.reset_resolution()</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.all_mesh_names">
all_mesh_names() → List[str]<a class="headerlink" href="#substance_painter.textureset.TextureSet.all_mesh_names" title="Link to this definition"> </a></dt>
<dd><p class>Get the list of meshes of the Texture Set.
When using UV Tiles, the result is the union of the mesh names of every UV Tiles.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.all_mesh_names" title="substance_painter.textureset.UVTile.all_mesh_names"><code class="xref py py-meth docutils literal notranslate">UVTile.all_mesh_names()</code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_mesh_map_resource">
get_mesh_map_resource(<em class="sig-param">usage: <a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage">MeshMapUsage</a></em>) → <a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a> | None<a class="headerlink" href="#substance_painter.textureset.TextureSet.get_mesh_map_resource" title="Link to this definition"> </a></dt>
<dd><p class>Query the Mesh map for the given usage of the Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>usage</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – Which Mesh map usage is queried.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The Mesh map resource or None.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.set_mesh_map_resource">
set_mesh_map_resource(<em class="sig-param">usage: <a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage">MeshMapUsage</a></em>, <em class="sig-param">new_mesh_map: <a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a> | None</em>) → None<a class="headerlink" href="#substance_painter.textureset.TextureSet.set_mesh_map_resource" title="Link to this definition"> </a></dt>
<dd><p class>Replace the Mesh map for the given usage of the Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>usage</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – Which Mesh map usage to replace.</p></li>
<li><p class><strong>new_mesh_map</strong> (<a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a><em>, </em><em>optional</em>) – The new Mesh map or None to unset.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><strong>ResourceNotFoundError</strong></a> – If the resource <code class="docutils literal notranslate">new_mesh_map</code> is not found or is not of type
    IMAGE.</p></li>
<li><p class><strong>ValueError</strong> – If the resource is already used for another Mesh map usage for the
    Texture Set.</p></li>
</ul>
</dd>
</dl>
</dd></dl>











