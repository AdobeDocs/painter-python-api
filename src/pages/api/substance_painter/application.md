---
title: application - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>application module<a class="headerlink" href="#module-substance_painter.application" title="Link to this heading"> </a></h1>
<p class>This module contains application wide functionnalities.</p>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.version_info">
substance_painter.application.version_info() → Tuple[int, int, int]<a class="headerlink" href="#substance_painter.application.version_info" title="Link to this definition"> </a></dt>
<dd><p class>Get the version_info of Substance 3D Painter. Ie a tuple containing major, minor, patch.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The major, minor and patch version of Substance 3D Painter.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>Tuple[int, int, int]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.version">
substance_painter.application.version() → str<a class="headerlink" href="#substance_painter.application.version" title="Link to this definition"> </a></dt>
<dd><p class>Get the version of Substance 3D Painter. Do not extract version information out of it,
rather use <a class="reference internal" href="#substance_painter.application.version_info" title="substance_painter.application.version_info"><code class="xref py py-func docutils literal notranslate">version_info()</code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>Version of Substance 3D Painter.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.engine_computations_status">
substance_painter.application.engine_computations_status() → bool<a class="headerlink" href="#substance_painter.application.engine_computations_status" title="Link to this definition"> </a></dt>
<dd><p class>Check whether engine computations are enabled.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>Whether engine computations are enabled.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.enable_engine_computations">
substance_painter.application.enable_engine_computations(<em class="sig-param">enable: bool</em>)<a class="headerlink" href="#substance_painter.application.enable_engine_computations" title="Link to this definition"> </a></dt>
<dd><p class>Enable or disable engine computations.</p>
</dd></dl>

<dt class="sig sig-object py" id="substance_painter.application.disable_engine_computations">
substance_painter.application.disable_engine_computations()<a class="headerlink" href="#substance_painter.application.disable_engine_computations" title="Link to this definition"> </a></dt>
<p class>Context manager to disable engine computations.
Allows to regroup computation intensive tasks without triggerring the engine so that textures
are not computed or updated in the layer stack or the viewport.
This is equivalent to disabling and then reenabling the engine by calling
<a class="reference internal" href="#substance_painter.application.enable_engine_computations" title="substance_painter.application.enable_engine_computations"><code class="xref py py-func docutils literal notranslate">enable_engine_computations()</code></a>.</p>
<p class>Example:</p>


```python
import substance_painter.application as mapplication

with mapplication.disable_engine_computations():
	# Do some computation intensive tasks
	pass
```




<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.application.close">
substance_painter.application.close()<a class="headerlink" href="#substance_painter.application.close" title="Link to this definition"> </a></dt>
<dd><p class>Close Susbtance 3D Painter.</p>
<div class="admonition warning">
<p class>Warning</p>
<p class>Any unsaved data will be lost.</p>
</div>
</dd></dl>










