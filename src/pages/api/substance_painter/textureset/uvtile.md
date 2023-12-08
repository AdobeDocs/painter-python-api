---
title: uvtile - Painter Python API
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

<h1>UVTile class<a class="headerlink" href="#uvtile-class" title="Link to this heading"> </a></h1>
<blockquote>
<div><dl class="py class">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.textureset.</span></span><span class="sig-name descname"><span class="pre">UVTile</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">u</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">v</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">_material_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.UVTile" title="Link to this definition"> </a></dt>
<dd><p>A UV Tile coordinates.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.u">
<span class="sig-name descname"><span class="pre">u</span></span><a class="headerlink" href="#substance_painter.textureset.UVTile.u" title="Link to this definition"> </a></dt>
<dd><p>The U coordinate of the UV Tile.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.v">
<span class="sig-name descname"><span class="pre">v</span></span><a class="headerlink" href="#substance_painter.textureset.UVTile.v" title="Link to this definition"> </a></dt>
<dd><p>The V coordinate of the UV Tile.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>int</p>
</dd>
</dl>
</dd></dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.all_uv_tiles" title="substance_painter.textureset.TextureSet.all_uv_tiles"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.all_uv_tiles()</span></code></a></p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.get_resolution">
<span class="sig-name descname"><span class="pre">get_resolution</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><span class="pre">Resolution</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.UVTile.get_resolution" title="Link to this definition"> </a></dt>
<dd><p>Get the UV Tile resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The resolution of this UV Tile in pixels.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The time complexity of this function is linear in the number of UV Tiles in the parent
Texture Set. If you need to process multiple UV Tiles, please see
<code class="docutils literal notranslate"><span class="pre">TextureSet.get_uvtiles_resolution</span></code>.</p>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.UVTile.set_resolution" title="substance_painter.textureset.UVTile.set_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.set_resolution()</span></code></a>
<a class="reference internal" href="#substance_painter.textureset.UVTile.reset_resolution" title="substance_painter.textureset.UVTile.reset_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.reset_resolution()</span></code></a>
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.get_uvtiles_resolution" title="substance_painter.textureset.TextureSet.get_uvtiles_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.get_uvtiles_resolution()</span></code></a>,</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.set_resolution">
<span class="sig-name descname"><span class="pre">set_resolution</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">new_resolution</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><span class="pre">Resolution</span></a></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.UVTile.set_resolution" title="Link to this definition"> </a></dt>
<dd><p>Set the resolution of the UV Tile.</p>
<p>See resolution restrictions: <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><code class="xref py py-class docutils literal notranslate"><span class="pre">Resolution</span></code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>new_resolution</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><em>Resolution</em></a>) – The new resolution for this UV Tile.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">new_resolution</span></code> is not square.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">new_resolution</span></code> is not a valid resolution.</p></li>
<li><p><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The time complexity of this function is linear in the number of UVTiles in the parent
Texture Set. If you need to process multiple UVTiles, please see
<code class="docutils literal notranslate"><span class="pre">TextureSet.set_uvtiles_resolution</span></code>.</p>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.UVTile.get_resolution" title="substance_painter.textureset.UVTile.get_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.get_resolution()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.UVTile.reset_resolution" title="substance_painter.textureset.UVTile.reset_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.reset_resolution()</span></code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.set_resolution" title="substance_painter.textureset.TextureSet.set_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.set_resolution()</span></code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.set_uvtiles_resolution" title="substance_painter.textureset.TextureSet.set_uvtiles_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.set_uvtiles_resolution()</span></code></a>,</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.reset_resolution">
<span class="sig-name descname"><span class="pre">reset_resolution</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.UVTile.reset_resolution" title="Link to this definition"> </a></dt>
<dd><p>Reset the resolution of the UV Tile to match the parent Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The time complexity of this function is linear in the number of UVTiles in the parent
Texture Set. If you need to process multiple UVTiles, please see
<code class="docutils literal notranslate"><span class="pre">TextureSet.reset_uvtiles_resolution</span></code>.</p>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.UVTile.get_resolution" title="substance_painter.textureset.UVTile.get_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.get_resolution()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.UVTile.set_resolution" title="substance_painter.textureset.UVTile.set_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">UVTile.set_resolution()</span></code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.reset_uvtiles_resolution" title="substance_painter.textureset.TextureSet.reset_uvtiles_resolution"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.reset_uvtiles_resolution()</span></code></a>,</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.all_mesh_names">
<span class="sig-name descname"><span class="pre">all_mesh_names</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.textureset.UVTile.all_mesh_names" title="Link to this definition"> </a></dt>
<dd><p>Get the list of meshes of the UV Tile.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.all_mesh_names" title="substance_painter.textureset.TextureSet.all_mesh_names"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.all_mesh_names()</span></code></a></p>
</div>
</dd></dl>
</dd></dl>
</div></blockquote>

</div>
</div>

</div>
</div>

</div>


