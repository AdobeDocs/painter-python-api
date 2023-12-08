---
title: textureset - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






<div class="wy-grid-for-nav">


<div class="wy-nav-content">
<div class="rst-content style-external-links">

<div class="document" itemscope="itemscope" itemtype="http://schema.org/Article" role="main">
<div itemprop="articleBody">

<h1>TextureSet class<a class="headerlink" href="#textureset-class" title="Link to this heading"> </a></h1>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.textureset.</span></span><span class="sig-name descname"><span class="pre">TextureSet</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">material_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.TextureSet" title="Link to this definition"> </a></dt>
<dd><p>A <cite>Substance 3D Painter</cite> Texture Set. A Texture Set has a resolution and a
number of stacks, and can be layered or not.
It optionally also has a number of UV Tiles.</p>
<p>It uses a set of baked Mesh map textures. Each Mesh map has a defined MeshMapUsage.</p>
<p>If the corresponding material is not layered, the Texture Set has just one
stack, which is transparent to the user. If the material is layered, the
Texture Set has several stacks.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.textureset

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
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack"><code class="xref py py-class docutils literal notranslate"><span class="pre">Stack</span></code></a>,
<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">UVTile</span></code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><code class="xref py py-class docutils literal notranslate"><span class="pre">MeshMapUsage</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-texture-set">Texture Set documentation</a>.</p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.from_name">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">from_name</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">texture_set_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.TextureSet.from_name" title="Link to this definition"> </a></dt>
<dd><p>Get the Texture Set from its name.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>texture_set_name</strong> (<em>str</em>) – The name of the Texture Set.</p>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The Texture Set name is case sensitive.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>TypeError</strong> – If <code class="docutils literal notranslate"><span class="pre">texture_set_name</span></code> is missing or not a string.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">texture_set_name</span></code> is empty.</p></li>
<li><p><strong>ValueError</strong> – If there is no Texture Set with the name <code class="docutils literal notranslate"><span class="pre">texture_set_name</span></code>.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.name">
<span class="sig-name descname"><span class="pre">name</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.name" title="Link to this definition"> </a></dt>
<dd><p>Get the Texture Set name.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The name of the Texture Set.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.is_layered_material">
<span class="sig-name descname"><span class="pre">is_layered_material</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.is_layered_material" title="Link to this definition"> </a></dt>
<dd><p>Query if this Texture Set uses material layering.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the Texture Set uses material layering, <code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.all_stacks">
<span class="sig-name descname"><span class="pre">all_stacks</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack"><span class="pre">Stack</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.all_stacks" title="Link to this definition"> </a></dt>
<dd><p>List all the stacks from this Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>All the stacks of this Texture Set.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>list[<a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack">Stack</a>]</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.TextureSet.get_stack" title="substance_painter.textureset.TextureSet.get_stack"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.get_stack()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_stack">
<span class="sig-name descname"><span class="pre">get_stack</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">stack_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">''</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack"><span class="pre">Stack</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.get_stack" title="Link to this definition"> </a></dt>
<dd><p>Get a stack of this Texture Set from its name.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>stack_name</strong> (<em>str</em>) – The stack name.
Leave empty if the Texture Set does not use material layering.</p>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The stack name is case sensitive.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The stack.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="stack.html#substance_painter.textureset.Stack" title="substance_painter.textureset.Stack">Stack</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.TextureSet.all_stacks" title="substance_painter.textureset.TextureSet.all_stacks"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.all_stacks()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_resolution">
<span class="sig-name descname"><span class="pre">get_resolution</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><span class="pre">Resolution</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.get_resolution" title="Link to this definition"> </a></dt>
<dd><p>Get the Texture Set resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The resolution of this Texture Set in pixels.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.TextureSet.set_resolution" title="substance_painter.textureset.TextureSet.set_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.set_resolution()</span></code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.set_resolutions" title="substance_painter.textureset.set_resolutions"><code class="xref py py-meth docutils literal notranslate"><span class="pre">set_resolutions()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.set_resolution">
<span class="sig-name descname"><span class="pre">set_resolution</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">new_resolution</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><span class="pre">Resolution</span></a></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.TextureSet.set_resolution" title="Link to this definition"> </a></dt>
<dd><p>Set the resolution of the Texture Set.</p>
<p>See resolution restrictions: <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><code class="xref py py-class docutils literal notranslate"><span class="pre">Resolution</span></code></a>.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>For any Texture Set, you can find its accepted resolutions in the
“Texture Set Settings” window, in the “Size” menu.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>new_resolution</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><em>Resolution</em></a>) – The new resolution for this Texture Set.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">new_resolution</span></code> is not a valid resolution.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.TextureSet.get_resolution" title="substance_painter.textureset.TextureSet.get_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.get_resolution()</span></code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.set_resolutions" title="substance_painter.textureset.set_resolutions"><code class="xref py py-meth docutils literal notranslate"><span class="pre">set_resolutions()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.has_uv_tiles">
<span class="sig-name descname"><span class="pre">has_uv_tiles</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.has_uv_tiles" title="Link to this definition"> </a></dt>
<dd><p>Check if the Texture Set uses the UV Tiles workflow.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the Texture Set uses the UV Tiles workflow, <code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.TextureSet.all_uv_tiles" title="substance_painter.textureset.TextureSet.all_uv_tiles"><code class="xref py py-meth docutils literal notranslate"><span class="pre">all_uv_tiles()</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.uv_tile">
<span class="sig-name descname"><span class="pre">uv_tile</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">u_coord</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">v_coord</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.uv_tile" title="Link to this definition"> </a></dt>
<dd><p>Get the Texture Set UV Tile at (u, v) coordinates.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>u_coord</strong> (<em>int</em>) – The u coordinate of the UV Tile.</p></li>
<li><p><strong>v_coord</strong> (<em>int</em>) – The v coordinate of the UV Tile.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The Texture Set UV Tile at (u, v) coordinate.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.all_uv_tiles">
<span class="sig-name descname"><span class="pre">all_uv_tiles</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.all_uv_tiles" title="Link to this definition"> </a></dt>
<dd><p>Get the list of the Texture Set UV Tiles, ordered by U then V coordinates.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>List of the Texture Set UV Tiles, ordered by U then V coordinates.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><em>List</em>[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>]</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.TextureSet.has_uv_tiles" title="substance_painter.textureset.TextureSet.has_uv_tiles"><code class="xref py py-meth docutils literal notranslate"><span class="pre">has_uv_tiles()</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_uvtiles_resolution">
<span class="sig-name descname"><span class="pre">get_uvtiles_resolution</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a><span class="p"><span class="pre">,</span></span><span class="w"> </span><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><span class="pre">Resolution</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.get_uvtiles_resolution" title="Link to this definition"> </a></dt>
<dd><p>Get all UV Tiles that have a different resolution from the Texture Set, associated
to their effective resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The dictionary of uvtiles and their                associated resolution.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><em>Dict</em>[<a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>, <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a>]</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.get_resolution" title="substance_painter.textureset.UVTile.get_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.get_resolution()</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.set_uvtiles_resolution">
<span class="sig-name descname"><span class="pre">set_uvtiles_resolution</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">resolutions</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a><span class="p"><span class="pre">,</span></span><span class="w"> </span><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><span class="pre">Resolution</span></a><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.TextureSet.set_uvtiles_resolution" title="Link to this definition"> </a></dt>
<dd><p>Set the resolution of the given UV Tiles to the associated resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>resolutions</strong> (<em>Dict</em><em>[</em><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><em>UVTile</em></a><em>, </em><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><em>Resolution</em></a><em>]</em>) – The dictionary of UV Tiles
and their associated resolution.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.set_resolution" title="substance_painter.textureset.UVTile.set_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.set_resolution()</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.reset_uvtiles_resolution">
<span class="sig-name descname"><span class="pre">reset_uvtiles_resolution</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">uvtiles</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.TextureSet.reset_uvtiles_resolution" title="Link to this definition"> </a></dt>
<dd><p>Reset the resolution of the given UV Tiles to the parent Texture Set’s resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>uvtiles</strong> (<em>List</em><em>[</em><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><em>UVTile</em></a><em>]</em>) – The list of UV Tiles to be reset.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.reset_resolution" title="substance_painter.textureset.UVTile.reset_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.reset_resolution()</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.all_mesh_names">
<span class="sig-name descname"><span class="pre">all_mesh_names</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.all_mesh_names" title="Link to this definition"> </a></dt>
<dd><p>Get the list of meshes of the Texture Set.
When using UV Tiles, the result is the union of the mesh names of every UV Tiles.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="uvtile.html#substance_painter.textureset.UVTile.all_mesh_names" title="substance_painter.textureset.UVTile.all_mesh_names"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.all_mesh_names()</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.get_mesh_map_resource">
<span class="sig-name descname"><span class="pre">get_mesh_map_resource</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><span class="pre">ResourceID</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.get_mesh_map_resource" title="Link to this definition"> </a></dt>
<dd><p>Query the Mesh map for the given usage of the Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>usage</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – Which Mesh map usage is queried.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The Mesh map resource or None.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID">ResourceID</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.TextureSet.set_mesh_map_resource">
<span class="sig-name descname"><span class="pre">set_mesh_map_resource</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">new_mesh_map</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><span class="pre">ResourceID</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.textureset.TextureSet.set_mesh_map_resource" title="Link to this definition"> </a></dt>
<dd><p>Replace the Mesh map for the given usage of the Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>usage</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – Which Mesh map usage to replace.</p></li>
<li><p><strong>new_mesh_map</strong> (<a class="reference internal" href="../resource.html#substance_painter.resource.ResourceID" title="substance_painter.resource.ResourceID"><em>ResourceID</em></a><em>, </em><em>optional</em>) – The new Mesh map or None to unset.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><strong>ResourceNotFoundError</strong></a> – If the resource <code class="docutils literal notranslate"><span class="pre">new_mesh_map</span></code> is not found or is not of type
    IMAGE.</p></li>
<li><p><strong>ValueError</strong> – If the resource is already used for another Mesh map usage for the
    Texture Set.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


