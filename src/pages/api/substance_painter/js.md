---
title: js - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>js module<a class="headerlink" href="#module-substance_painter.js" title="Link to this heading"> </a></h1>
<p class>This module allows to evaluate JavaScript code against the legacy embedded
JavaScript engine. This allows to use all the exposed JavaScript API through
Python scripting. The JavaScript API is described in dedicated help accessible
via the <code class="docutils literal notranslate">Help &gt; Scripting documentation &gt; JavaScript API</code> menu found in
<cite>Substance 3D Painter</cite> application.</p>
<p class>Example</p>


```python
import substance_painter.js

# Get the baking parameters
js_code = 'alg.baking.textureSetBakingParameters("some_texture_set")'
baking_parameters = substance_painter.js.evaluate(js_code)

# substance_painter.js.evaluate returns JSON, so the result is easy to retrieve and use
material_parameters = baking_parameters['materialParameters']
apply_diffusion = material_parameters['commonParameters']['Apply_Diffusion']
```



<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.js.evaluate">
substance_painter.js.evaluate(<em class="sig-param">js_code: str</em>) → str<a class="headerlink" href="#substance_painter.js.evaluate" title="Link to this definition"> </a></dt>
<dd><p class>Evaluate a JavaScript expression.
The JavaScript API is described in dedicated help accessible via the
<code class="docutils literal notranslate">Help &gt; Scripting documentation &gt; JavaScript API</code> menu found in
<cite>Substance 3D Painter</cite> application.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>js_code</strong> (<em>str</em>) – The block of JavaScript code to be evaluated.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The JSON formated result of the evaluation.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>str</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><strong>RuntimeError</strong> – If the JavaScript exception evaluation returns an error.</p>
</dd>
</dl>
</dd></dl>










