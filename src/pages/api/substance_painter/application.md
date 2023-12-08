---
title: application - Painter Python API
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

<span id="application-module"></span><h1>application module<a class="headerlink" href="#module-substance_painter.application" title="Link to this heading"> </a></h1>
<p>This module contains application wide functionnalities.</p>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.version_info">
<span class="sig-prename descclassname"><span class="pre">substance_painter.application.</span></span><span class="sig-name descname"><span class="pre">version_info</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.application.version_info" title="Link to this definition"> </a></dt>
<dd><p>Get the version_info of Substance 3D Painter. Ie a tuple containing major, minor, patch.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The major, minor and patch version of Substance 3D Painter.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>Tuple[int, int, int]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.version">
<span class="sig-prename descclassname"><span class="pre">substance_painter.application.</span></span><span class="sig-name descname"><span class="pre">version</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.application.version" title="Link to this definition"> </a></dt>
<dd><p>Get the version of Substance 3D Painter. Do not extract version information out of it,
rather use <a class="reference internal" href="#substance_painter.application.version_info" title="substance_painter.application.version_info"><code class="xref py py-func docutils literal notranslate"><span class="pre">version_info()</span></code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>Version of Substance 3D Painter.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.engine_computations_status">
<span class="sig-prename descclassname"><span class="pre">substance_painter.application.</span></span><span class="sig-name descname"><span class="pre">engine_computations_status</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.application.engine_computations_status" title="Link to this definition"> </a></dt>
<dd><p>Check whether engine computations are enabled.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>Whether engine computations are enabled.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.enable_engine_computations">
<span class="sig-prename descclassname"><span class="pre">substance_painter.application.</span></span><span class="sig-name descname"><span class="pre">enable_engine_computations</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">enable</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bool</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.application.enable_engine_computations" title="Link to this definition"> </a></dt>
<dd><p>Enable or disable engine computations.</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.disable_engine_computations">
<span class="sig-prename descclassname"><span class="pre">substance_painter.application.</span></span><span class="sig-name descname"><span class="pre">disable_engine_computations</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.application.disable_engine_computations" title="Link to this definition"> </a></dt>
<dd><p>Context manager to disable engine computations.
Allows to regroup computation intensive tasks without triggerring the engine so that textures
are not computed or updated in the layer stack or the viewport.
This is equivalent to disabling and then reenabling the engine by calling
<a class="reference internal" href="#substance_painter.application.enable_engine_computations" title="substance_painter.application.enable_engine_computations"><code class="xref py py-func docutils literal notranslate"><span class="pre">enable_engine_computations()</span></code></a>.</p>
<p>Example:</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.application as mapplication

with mapplication.disable_engine_computations():
	# Do some computation intensive tasks
	pass
</pre></div>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.close">
<span class="sig-prename descclassname"><span class="pre">substance_painter.application.</span></span><span class="sig-name descname"><span class="pre">close</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.application.close" title="Link to this definition"> </a></dt>
<dd><p>Close Susbtance 3D Painter.</p>
<div class="admonition warning">
<p class="admonition-title">Warning</p>
<p>Any unsaved data will be lost.</p>
</div>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


