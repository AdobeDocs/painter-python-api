---
title: baking - Painter Python API
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

<span id="baking-module"></span><h1>baking module<a class="headerlink" href="#module-substance_painter.baking" title="Link to this heading"> </a></h1>
<p>The <code class="docutils literal notranslate"><span class="pre">baking</span></code> module allows to set baking parameters and launch baking
of mesh maps.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.baking as baking
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
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a>,
<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.MeshMapUsage</span></code></a>
<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile</span></code></a></p>
</div>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.baking.BakingStatus">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">BakingStatus</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.baking.BakingStatus" title="Link to this definition"> </a></dt>
<dd><p>Status code of the baking process.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Success</span></code></p></td>
<td><p>The baking was successful.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Cancel</span></code></p></td>
<td><p>The baking was cancelled by the user.</p></td>
</tr>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Fail</span></code></p></td>
<td><p>The baking could not complete; the cause is detailed in the log.</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.baking.CurvatureMethod">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">CurvatureMethod</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.baking.CurvatureMethod" title="Link to this definition"> </a></dt>
<dd><p>Members:</p>
<p><code class="docutils literal notranslate"><span class="pre">FromMesh</span></code>, <code class="docutils literal notranslate"><span class="pre">FromNormalMap</span></code></p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">BakingParameters</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">material_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.baking.BakingParameters" title="Link to this definition"> </a></dt>
<dd><p>Baking parameters for a given texture set.</p>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a>,
<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.MeshMapUsage</span></code></a></p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.from_texture_set">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">from_texture_set</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">texture_set</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.baking.BakingParameters" title="substance_painter.baking.BakingParameters"><span class="pre">BakingParameters</span></a></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.from_texture_set" title="Link to this definition"> </a></dt>
<dd><p>Get the baking parameters for the given texture set object.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>texture_set</strong> (<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a>) – The texture set.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The baking parameters for the given texure set.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.baking.BakingParameters" title="substance_painter.baking.BakingParameters">BakingParameters</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.from_texture_set_name">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">from_texture_set_name</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">texture_set_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.baking.BakingParameters" title="substance_painter.baking.BakingParameters"><span class="pre">BakingParameters</span></a></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.from_texture_set_name" title="Link to this definition"> </a></dt>
<dd><p>Get the baking parameters for the given texture set name.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>texture_set_name</strong> (<em>str</em>) – The texture set name.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The baking parameters for the given texure set.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.baking.BakingParameters" title="substance_painter.baking.BakingParameters">BakingParameters</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.properties.Property</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.texture_set">
<span class="sig-name descname"><span class="pre">texture_set</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.texture_set" title="Link to this definition"> </a></dt>
<dd><p>Get the associated texture set.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The texture set associated with this BakingParameters instance.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet">TextureSet</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.common">
<span class="sig-name descname"><span class="pre">common</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><span class="pre">Property</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.common" title="Link to this definition"> </a></dt>
<dd><p>Get the parameters common to all bakers, like baking resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The common parameters.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>Dict[str, <a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property">Property</a>]</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.properties.Property</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.baker">
<span class="sig-name descname"><span class="pre">baker</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">baked_map</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><span class="pre">Property</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.baker" title="Link to this definition"> </a></dt>
<dd><p>Get the parameters specific to a given baked map.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>baked_map</strong> (<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – The baked map usage.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The corresponding baked map parameters.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>Dict[str, <a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property">Property</a>]</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.MeshMapUsage</span></code></a>,
<a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.properties.Property</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.set">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">set</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">property_values</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><span class="pre">Property</span></a><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">bool</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">int</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">float</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.set" title="Link to this definition"> </a></dt>
<dd><p>Set property values in batch.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>property_values</strong> (<em>Dict</em><em>[</em><a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><em>Property</em></a><em>, </em><em>PropertyValue</em><em>]</em>) – A dict of properties</p></li>
<li><p><strong>values.</strong> (<em>to be set with their corresponding new</em>) – </p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="properties.html#substance_painter.properties.Property" title="substance_painter.properties.Property"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.properties.Property</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.get_curvature_method">
<span class="sig-name descname"><span class="pre">get_curvature_method</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.baking.CurvatureMethod" title="substance_painter.baking.CurvatureMethod"><span class="pre">CurvatureMethod</span></a></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.get_curvature_method" title="Link to this definition"> </a></dt>
<dd><p>Get the curvature method used for baking</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The curvature method used for baking</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="#substance_painter.baking.CurvatureMethod" title="substance_painter.baking.CurvatureMethod">CurvatureMethod</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><cite>set_curvature_method</cite></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.set_curvature_method">
<span class="sig-name descname"><span class="pre">set_curvature_method</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">method</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.baking.CurvatureMethod" title="substance_painter.baking.CurvatureMethod"><span class="pre">CurvatureMethod</span></a></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.baking.BakingParameters.set_curvature_method" title="Link to this definition"> </a></dt>
<dd><p>Set the curvature method to use for baking</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>method</strong> (<a class="reference internal" href="#substance_painter.baking.CurvatureMethod" title="substance_painter.baking.CurvatureMethod"><em>CurvatureMethod</em></a>) – The new method to use for baking</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><cite>get_curvature_method</cite></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.is_baker_enabled">
<span class="sig-name descname"><span class="pre">is_baker_enabled</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.is_baker_enabled" title="Link to this definition"> </a></dt>
<dd><p>Whether some usage is enabled for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>usage</strong> (<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – The baked map usage.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>True if the corresponding usage is enabled for baking.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.set_baker_enabled">
<span class="sig-name descname"><span class="pre">set_baker_enabled</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">enable</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.set_baker_enabled" title="Link to this definition"> </a></dt>
<dd><p>Enable or disable a usage for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>usage</strong> (<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – The baked map usage.</p></li>
<li><p><strong>enable</strong> (<em>bool</em>) – Enable or disable.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.get_enabled_bakers">
<span class="sig-name descname"><span class="pre">get_enabled_bakers</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.get_enabled_bakers" title="Link to this definition"> </a></dt>
<dd><p>Get all usages enabled for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>Enabled usages.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>List[<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage">MeshMapUsage</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.set_enabled_bakers">
<span class="sig-name descname"><span class="pre">set_enabled_bakers</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">enabled_usages</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.set_enabled_bakers" title="Link to this definition"> </a></dt>
<dd><p>Set usages enabled for baking. Usages not in this list will be disabled.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>enabled_usages</strong> (<em>List</em><em>[</em><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a><em>]</em>) – Enabled usages.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.is_textureset_enabled">
<span class="sig-name descname"><span class="pre">is_textureset_enabled</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.is_textureset_enabled" title="Link to this definition"> </a></dt>
<dd><p>Whether this Texture Set is enabled for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>True if this Texture Set is enabled for baking.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.set_textureset_enabled">
<span class="sig-name descname"><span class="pre">set_textureset_enabled</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">enable</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.set_textureset_enabled" title="Link to this definition"> </a></dt>
<dd><p>Enable or disable this Texture Set for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>enable</strong> (<em>bool</em>) – Enable or disable.</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.is_uv_tile_enabled">
<span class="sig-name descname"><span class="pre">is_uv_tile_enabled</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">uv_tile</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.is_uv_tile_enabled" title="Link to this definition"> </a></dt>
<dd><p>Whether a UV Tile is enabled for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>tile</strong> (<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><em>UVTile</em></a>) – The UV Tile.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>True if the UV Tile is enabled for baking.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>bool</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a>,
<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.set_uv_tile_enabled">
<span class="sig-name descname"><span class="pre">set_uv_tile_enabled</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">uv_tile</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">enable</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.set_uv_tile_enabled" title="Link to this definition"> </a></dt>
<dd><p>Enable or disable an UV Tile for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>uv_tile</strong> (<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><em>UVTile</em></a>) – The UV Tile.</p></li>
<li><p><strong>enable</strong> (<em>bool</em>) – Enable or disable.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a>,
<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.get_enabled_uv_tiles">
<span class="sig-name descname"><span class="pre">get_enabled_uv_tiles</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.get_enabled_uv_tiles" title="Link to this definition"> </a></dt>
<dd><p>Get all UV Tiles enabled for baking.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>Enabled UV Tiles.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>List[<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile">UVTile</a>]</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a>,
<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile</span></code></a></p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.baking.BakingParameters.set_enabled_uv_tiles">
<span class="sig-name descname"><span class="pre">set_enabled_uv_tiles</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">enabled_uv_tiles</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><span class="pre">UVTile</span></a><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.BakingParameters.set_enabled_uv_tiles" title="Link to this definition"> </a></dt>
<dd><p>Set UV Tiles enabled for baking. All other tiles will be disabled.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>enabled_uv_tiles</strong> (<em>List</em><em>[</em><a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><em>UVTile</em></a><em>]</em>) – Enabled UV Tiles.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.TextureSet</span></code></a>,
<a class="reference internal" href="textureset/uvtile.html#substance_painter.textureset.UVTile" title="substance_painter.textureset.UVTile"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.textureset.UVTile</span></code></a></p>
</div>
</dd></dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.set_linked_group">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">set_linked_group</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">group</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">reference</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.set_linked_group" title="Link to this definition"> </a></dt>
<dd><p>Make a group of Texture Sets share the same baking parameters for the given ‘usage’. After that,
editing the ‘usage’ parameters of one of the group’s Texture Set will impact the whole group.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>group</strong> (<em>List</em><em>[</em><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a><em>]</em>) – Texture Sets to be included in the new group.</p></li>
<li><p><strong>reference</strong> (<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a>) – Texture Set which parameters are applied to the whole group.</p></li>
<li><p><strong>usage</strong> (<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – Usage of the group.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.set_linked_group_common_parameters">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">set_linked_group_common_parameters</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">group</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">reference</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.set_linked_group_common_parameters" title="Link to this definition"> </a></dt>
<dd><p>Make a group of Texture Sets share the same baking common parameters. After that, editing a
common parameter of one of the group’s Texture Set will impact the whole group.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>group</strong> (<em>List</em><em>[</em><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a><em>]</em>) – Texture Sets to be included in the new group.</p></li>
<li><p><strong>reference</strong> (<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a>) – Texture Set which parameters are applied to the whole group.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.unlink_all">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">unlink_all</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.unlink_all" title="Link to this definition"> </a></dt>
<dd><p>Unlink all Texture Sets for a given usage. That is, remove the group if it exists, so that all
Texture Sets have their own copy of the parameters.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>usage</strong> (<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – Usage to unlink.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.unlink_all_common_parameters">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">unlink_all_common_parameters</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.baking.unlink_all_common_parameters" title="Link to this definition"> </a></dt>
<dd><p>Unlink all Texture Sets for common parameters. That is, remove the group if exists, so that all
Texture Sets have their own copy of the parameters.</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.get_link_group">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">get_link_group</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.get_link_group" title="Link to this definition"> </a></dt>
<dd><p>Get the list of Texture Sets that share baking parameters for a given usage.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>usage</strong> (<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – Usage to query.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>All linked Texture Sets for the usage. Empty list if no Texture Set are
linked.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>List[<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet">TextureSet</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.get_link_group_common_parameters">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">get_link_group_common_parameters</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.get_link_group_common_parameters" title="Link to this definition"> </a></dt>
<dd><p>Get the list of Texture Sets that share common baking parameters.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>All linked Texture Sets for common parameters. Empty list if no Texture
Set are linked.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>List[<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet">TextureSet</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.get_linked_texture_sets">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">get_linked_texture_sets</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">texture_set</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">usage</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><span class="pre">MeshMapUsage</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.get_linked_texture_sets" title="Link to this definition"> </a></dt>
<dd><p>Get the list of Texture Sets that share the same parameters as some Texture Set, for a given
usage.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>texture_set</strong> (<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a>) – The Texture Set to query</p></li>
<li><p><strong>usage</strong> (<a class="reference internal" href="textureset/index.html#substance_painter.textureset.MeshMapUsage" title="substance_painter.textureset.MeshMapUsage"><em>MeshMapUsage</em></a>) – The usage to query</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The list of Texture Sets sharing parameters with the input Texture Set.
Contains at least the input Texture Set if no group exists for the usage.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>List[<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet">TextureSet</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.get_linked_texture_sets_common_parameters">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">get_linked_texture_sets_common_parameters</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">texture_set</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.baking.get_linked_texture_sets_common_parameters" title="Link to this definition"> </a></dt>
<dd><p>Get the list of Texture Sets that share the same parameters as some Texture Set, for common
parameters.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>texture_set</strong> (<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a>) – The Texture Set to query</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The list of Texture Sets sharing common parameters with the input Texture
Set. Contains at least the input Texture Set if no group exists for common parameters.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>List[<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet">TextureSet</a>]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.bake_async">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">bake_async</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">texture_set</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><span class="pre">TextureSet</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource"><span class="pre">StopSource</span></a></span></span><a class="headerlink" href="#substance_painter.baking.bake_async" title="Link to this definition"> </a></dt>
<dd><p>Launch the baking process for a Texture Set, using the current baking configuration.
The configuration is set by setting baking parameters, enabling Texture Set, selecting UV Tiles
for baking, setting curvature method etc.
This function is asynchronous. When the baking process is finished, the
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessEnded" title="substance_painter.event.BakingProcessEnded"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessEnded</span></code></a> event is sent.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>texture_set</strong> (<a class="reference internal" href="textureset/textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><em>TextureSet</em></a>) – The Texture Set to bake.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>Can be used to cancel the asynchronous computation.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource">StopSource</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.baking.BakingParameters" title="substance_painter.baking.BakingParameters"><code class="xref py py-class docutils literal notranslate"><span class="pre">BakingParameters</span></code></a>
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessAboutToStart" title="substance_painter.event.BakingProcessAboutToStart"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessAboutToStart</span></code></a>
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessProgress" title="substance_painter.event.BakingProcessProgress"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessProgress</span></code></a>
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessEnded" title="substance_painter.event.BakingProcessEnded"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessEnded</span></code></a>
<a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.async_utils.StopSource</span></code></a></p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.baking.bake_selected_textures_async">
<span class="sig-prename descclassname"><span class="pre">substance_painter.baking.</span></span><span class="sig-name descname"><span class="pre">bake_selected_textures_async</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource"><span class="pre">StopSource</span></a></span></span><a class="headerlink" href="#substance_painter.baking.bake_selected_textures_async" title="Link to this definition"> </a></dt>
<dd><p>Launch the baking process, using the current baking configuration.
The configuration is set by setting baking parameters, enabling Texture Set, selecting UV Tiles
for baking, setting curvature method etc.
This function is asynchronous. When the baking process is finished, the
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessEnded" title="substance_painter.event.BakingProcessEnded"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessEnded</span></code></a> event is sent.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>Can be used to cancel the asynchronous computation.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource">StopSource</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.baking.BakingParameters" title="substance_painter.baking.BakingParameters"><code class="xref py py-class docutils literal notranslate"><span class="pre">BakingParameters</span></code></a>
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessAboutToStart" title="substance_painter.event.BakingProcessAboutToStart"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessAboutToStart</span></code></a>
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessProgress" title="substance_painter.event.BakingProcessProgress"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessProgress</span></code></a>
<a class="reference internal" href="event.html#substance_painter.event.BakingProcessEnded" title="substance_painter.event.BakingProcessEnded"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.BakingProcessEnded</span></code></a>
<a class="reference internal" href="async_utils.html#substance_painter.async_utils.StopSource" title="substance_painter.async_utils.StopSource"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.async_utils.StopSource</span></code></a></p>
</div>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


