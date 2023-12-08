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
<em class="property">class </em>substance_painter.textureset.UVTile(<em class="sig-param">u: int</em>, <em class="sig-param">v: int</em>, <em class="sig-param">_material_id: int</em>)<a class="headerlink" href="#substance_painter.textureset.UVTile" title="Link to this definition"> </a></dt>
<dd><p class>A UV Tile coordinates.</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.u">
u<a class="headerlink" href="#substance_painter.textureset.UVTile.u" title="Link to this definition"> </a></dt>
<dd><p class>The U coordinate of the UV Tile.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.v">
v<a class="headerlink" href="#substance_painter.textureset.UVTile.v" title="Link to this definition"> </a></dt>
<dd><p class>The V coordinate of the UV Tile.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>int</p>
</dd>
</dl>
</dd></dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.all_uv_tiles" title="substance_painter.textureset.TextureSet.all_uv_tiles"><code class="xref py py-meth docutils literal notranslate">TextureSet.all_uv_tiles()</code></a></p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.get_resolution">
get_resolution() → <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a><a class="headerlink" href="#substance_painter.textureset.UVTile.get_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Get the UV Tile resolution.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The resolution of this UV Tile in pixels.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>The time complexity of this function is linear in the number of UV Tiles in the parent
Texture Set. If you need to process multiple UV Tiles, please see
<code class="docutils literal notranslate">TextureSet.get_uvtiles_resolution</code>.</p>
</div>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.UVTile.set_resolution" title="substance_painter.textureset.UVTile.set_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.set_resolution()</code></a>
<a class="reference internal" href="#substance_painter.textureset.UVTile.reset_resolution" title="substance_painter.textureset.UVTile.reset_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.reset_resolution()</code></a>
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.get_uvtiles_resolution" title="substance_painter.textureset.TextureSet.get_uvtiles_resolution"><code class="xref py py-meth docutils literal notranslate">TextureSet.get_uvtiles_resolution()</code></a>,</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.set_resolution">
set_resolution(<em class="sig-param">new_resolution: <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution">Resolution</a></em>)<a class="headerlink" href="#substance_painter.textureset.UVTile.set_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Set the resolution of the UV Tile.</p>
<p class>See resolution restrictions: <a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><code class="xref py py-class docutils literal notranslate">Resolution</code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>new_resolution</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.Resolution" title="substance_painter.textureset.Resolution"><em>Resolution</em></a>) – The new resolution for this UV Tile.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">new_resolution</code> is not square.</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">new_resolution</code> is not a valid resolution.</p></li>
<li><p class><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>The time complexity of this function is linear in the number of UVTiles in the parent
Texture Set. If you need to process multiple UVTiles, please see
<code class="docutils literal notranslate">TextureSet.set_uvtiles_resolution</code>.</p>
</div>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.UVTile.get_resolution" title="substance_painter.textureset.UVTile.get_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.get_resolution()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.UVTile.reset_resolution" title="substance_painter.textureset.UVTile.reset_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.reset_resolution()</code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.set_resolution" title="substance_painter.textureset.TextureSet.set_resolution"><code class="xref py py-meth docutils literal notranslate">TextureSet.set_resolution()</code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.set_uvtiles_resolution" title="substance_painter.textureset.TextureSet.set_uvtiles_resolution"><code class="xref py py-meth docutils literal notranslate">TextureSet.set_uvtiles_resolution()</code></a>,</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.reset_resolution">
reset_resolution()<a class="headerlink" href="#substance_painter.textureset.UVTile.reset_resolution" title="Link to this definition"> </a></dt>
<dd><p class>Reset the resolution of the UV Tile to match the parent Texture Set.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>The time complexity of this function is linear in the number of UVTiles in the parent
Texture Set. If you need to process multiple UVTiles, please see
<code class="docutils literal notranslate">TextureSet.reset_uvtiles_resolution</code>.</p>
</div>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.UVTile.get_resolution" title="substance_painter.textureset.UVTile.get_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.get_resolution()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.UVTile.set_resolution" title="substance_painter.textureset.UVTile.set_resolution"><code class="xref py py-meth docutils literal notranslate">UVTile.set_resolution()</code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.reset_uvtiles_resolution" title="substance_painter.textureset.TextureSet.reset_uvtiles_resolution"><code class="xref py py-meth docutils literal notranslate">TextureSet.reset_uvtiles_resolution()</code></a>,</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.UVTile.all_mesh_names">
all_mesh_names() → List[str]<a class="headerlink" href="#substance_painter.textureset.UVTile.all_mesh_names" title="Link to this definition"> </a></dt>
<dd><p class>Get the list of meshes of the UV Tile.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the UV Tile is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.all_mesh_names" title="substance_painter.textureset.TextureSet.all_mesh_names"><code class="xref py py-meth docutils literal notranslate">TextureSet.all_mesh_names()</code></a></p>
</div>
</dd></dl>
</dd></dl>
</div></blockquote>

</div>
</div>

</div>
</div>

</div>


