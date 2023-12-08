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

<h1>async_utils module<a class="headerlink" href="#module-substance_painter.async_utils" title="Link to this heading"> </a></h1>
<p class>The <code class="docutils literal notranslate">async_utils</code> module provide primitives used in async computations.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.async_utils.StopSource">
<em class="property">class </em>substance_painter.async_utils.StopSource(<em class="sig-param">stop_source: _substance_painter.async_utils.StopSource</em>)<a class="headerlink" href="#substance_painter.async_utils.StopSource" title="Link to this definition"> </a></dt>
<dd><p class>An object that can be used to cancel an asynchronous computation.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.async_utils.StopSource.request_stop">
request_stop() → bool<a class="headerlink" href="#substance_painter.async_utils.StopSource.request_stop" title="Link to this definition"> </a></dt>
<dd><p class>Makes a top request.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>True if the stop request was possible.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.async_utils.StopSource.stop_requested">
stop_requested() → bool<a class="headerlink" href="#substance_painter.async_utils.StopSource.stop_requested" title="Link to this definition"> </a></dt>
<dd><p class>Check if a stop request as been made.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>True if a stop request has been made.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
</dl>
</dd></dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


