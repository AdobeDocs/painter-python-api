---
title: js - Painter Python API
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

<span id="js-module"></span><h1>js module<a class="headerlink" href="#module-substance_painter.js" title="Link to this heading"> </a></h1>
<p>This module allows to evaluate JavaScript code against the legacy embedded
JavaScript engine. This allows to use all the exposed JavaScript API through
Python scripting. The JavaScript API is described in dedicated help accessible
via the <code class="docutils literal notranslate"><span class="pre">Help</span> <span class="pre">&gt;</span> <span class="pre">Scripting</span> <span class="pre">documentation</span> <span class="pre">&gt;</span> <span class="pre">JavaScript</span> <span class="pre">API</span></code> menu found in
<cite>Substance 3D Painter</cite> application.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">substance_painter.js</span>

<span class="c1"># Get the baking parameters</span>
<span class="n">js_code</span> <span class="o">=</span> <span class="s1">'alg.baking.textureSetBakingParameters("some_texture_set")'</span>
<span class="n">baking_parameters</span> <span class="o">=</span> <span class="n">substance_painter</span><span class="o">.</span><span class="n">js</span><span class="o">.</span><span class="n">evaluate</span><span class="p">(</span><span class="n">js_code</span><span class="p">)</span>

<span class="c1"># substance_painter.js.evaluate returns JSON, so the result is easy to retrieve and use</span>
<span class="n">material_parameters</span> <span class="o">=</span> <span class="n">baking_parameters</span><span class="p">[</span><span class="s1">'materialParameters'</span><span class="p">]</span>
<span class="n">apply_diffusion</span> <span class="o">=</span> <span class="n">material_parameters</span><span class="p">[</span><span class="s1">'commonParameters'</span><span class="p">][</span><span class="s1">'Apply_Diffusion'</span><span class="p">]</span>
</pre></div>
</div>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.js.evaluate">
<span class="sig-prename descclassname"><span class="pre">substance_painter.js.</span></span><span class="sig-name descname"><span class="pre">evaluate</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">js_code</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.js.evaluate" title="Link to this definition"> </a></dt>
<dd><p>Evaluate a JavaScript expression.
The JavaScript API is described in dedicated help accessible via the
<code class="docutils literal notranslate"><span class="pre">Help</span> <span class="pre">&gt;</span> <span class="pre">Scripting</span> <span class="pre">documentation</span> <span class="pre">&gt;</span> <span class="pre">JavaScript</span> <span class="pre">API</span></code> menu found in
<cite>Substance 3D Painter</cite> application.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>js_code</strong> (<em>str</em>) – The block of JavaScript code to be evaluated.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The JSON formated result of the evaluation.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><strong>RuntimeError</strong> – If the JavaScript exception evaluation returns an error.</p>
</dd>
</dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


