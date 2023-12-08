---
title: async_utils - Painter Python API
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

<span id="async-utils-module"></span><h1>async_utils module<a class="headerlink" href="#module-substance_painter.async_utils" title="Link to this heading"> </a></h1>
<p>The <code class="docutils literal notranslate"><span class="pre">async_utils</span></code> module provide primitives used in async computations.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.async_utils.StopSource">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.async_utils.</span></span><span class="sig-name descname"><span class="pre">StopSource</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">stop_source</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">_substance_painter.async_utils.StopSource</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.async_utils.StopSource" title="Link to this definition"> </a></dt>
<dd><p>An object that can be used to cancel an asynchronous computation.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.async_utils.StopSource.request_stop">
<span class="sig-name descname"><span class="pre">request_stop</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.async_utils.StopSource.request_stop" title="Link to this definition"> </a></dt>
<dd><p>Makes a top request.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>True if the stop request was possible.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.async_utils.StopSource.stop_requested">
<span class="sig-name descname"><span class="pre">stop_requested</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.async_utils.StopSource.stop_requested" title="Link to this definition"> </a></dt>
<dd><p>Check if a stop request as been made.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>True if a stop request has been made.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
</dl>
</dd></dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


