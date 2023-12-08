---
title: logging - Painter Python API
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

<span id="logging-module"></span><h1>logging module<a class="headerlink" href="#module-substance_painter.logging" title="Link to this heading"> </a></h1>
<p>This module exposes several functions to output messages to the <cite>Substance
Painter</cite> logger. Depending on the severity of the message, use <a class="reference internal" href="#substance_painter.logging.info" title="substance_painter.logging.info"><code class="xref py py-func docutils literal notranslate"><span class="pre">info()</span></code></a>,
<a class="reference internal" href="#substance_painter.logging.warning" title="substance_painter.logging.warning"><code class="xref py py-func docutils literal notranslate"><span class="pre">warning()</span></code></a> or <a class="reference internal" href="#substance_painter.logging.error" title="substance_painter.logging.error"><code class="xref py py-func docutils literal notranslate"><span class="pre">error()</span></code></a>.</p>
<p>For a finer control over the logging parameters, namely severity and channel,
use <a class="reference internal" href="#substance_painter.logging.log" title="substance_painter.logging.log"><code class="xref py py-func docutils literal notranslate"><span class="pre">log()</span></code></a>. The functions <a class="reference internal" href="#substance_painter.logging.info" title="substance_painter.logging.info"><code class="xref py py-func docutils literal notranslate"><span class="pre">info()</span></code></a>, <a class="reference internal" href="#substance_painter.logging.warning" title="substance_painter.logging.warning"><code class="xref py py-func docutils literal notranslate"><span class="pre">warning()</span></code></a> and
<a class="reference internal" href="#substance_painter.logging.error" title="substance_painter.logging.error"><code class="xref py py-func docutils literal notranslate"><span class="pre">error()</span></code></a> will output to the <cite>‘Python’</cite> log channel, while <a class="reference internal" href="#substance_painter.logging.log" title="substance_painter.logging.log"><code class="xref py py-func docutils literal notranslate"><span class="pre">log()</span></code></a>
allows to specify a different channel.</p>
<p>Messages with severity levels <code class="docutils literal notranslate"><span class="pre">INFO</span></code>, <code class="docutils literal notranslate"><span class="pre">WARNING</span></code> and <code class="docutils literal notranslate"><span class="pre">ERROR</span></code> are meant for
the end user, and will appear in the log window of <cite>Substance 3D Painter</cite>. Messages
with severity levels <code class="docutils literal notranslate"><span class="pre">DBG_INFO</span></code>, <code class="docutils literal notranslate"><span class="pre">DBG_WARNING</span></code> and <code class="docutils literal notranslate"><span class="pre">DBG_ERROR</span></code> are meant
for the developer, and will appear in the log file.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.logging

# Simple log functions:
substance_painter.logging.info("Everyone knows that 2 + 2 is {0}.".format(2+2))
substance_painter.logging.warning("Maybe the user should look at this.")
substance_painter.logging.error("Letting the user know that something went wrong.")

# Log function with more options:
substance_painter.logging.log(
	substance_painter.logging.INFO,
	"Python",
	"An informative log message to the 'Python' channel.")

substance_painter.logging.log(
	substance_painter.logging.ERROR,
	"MyPlugin",
	"An error log message to the 'MyPlugin' channel.")
</pre></div>
</div>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.error">
<span class="sig-prename descclassname"><span class="pre">substance_painter.logging.</span></span><span class="sig-name descname"><span class="pre">error</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.logging.error" title="Link to this definition"> </a></dt>
<dd><p>Logs a message with level <code class="docutils literal notranslate"><span class="pre">ERROR</span></code> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>message</strong> (<em>str</em>) – The error message to log.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.info">
<span class="sig-prename descclassname"><span class="pre">substance_painter.logging.</span></span><span class="sig-name descname"><span class="pre">info</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.logging.info" title="Link to this definition"> </a></dt>
<dd><p>Logs a message with level <code class="docutils literal notranslate"><span class="pre">INFO</span></code> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>message</strong> (<em>str</em>) – The message to log.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.log">
<span class="sig-prename descclassname"><span class="pre">substance_painter.logging.</span></span><span class="sig-name descname"><span class="pre">log</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">severity</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">channel</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.logging.log" title="Link to this definition"> </a></dt>
<dd><p>Logs a message with level <cite>severity</cite> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>severity</strong> – the severity level, can be <code class="docutils literal notranslate"><span class="pre">INFO</span></code>, <code class="docutils literal notranslate"><span class="pre">WARNING</span></code> or <code class="docutils literal notranslate"><span class="pre">ERROR</span></code> for
messages relevant to the end user, or <code class="docutils literal notranslate"><span class="pre">DBG_INFO</span></code>, <code class="docutils literal notranslate"><span class="pre">DBG_WARNING</span></code> or
<code class="docutils literal notranslate"><span class="pre">DBG_ERROR</span></code> for messages relevant to the developer.</p></li>
<li><p><strong>channel</strong> (<em>str</em>) – the channel to log into.  This can be any name allowing to
identify the origin of the message, for example the name of
your plugin.</p></li>
<li><p><strong>message</strong> (<em>str</em>) – the message to log.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.warning">
<span class="sig-prename descclassname"><span class="pre">substance_painter.logging.</span></span><span class="sig-name descname"><span class="pre">warning</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.logging.warning" title="Link to this definition"> </a></dt>
<dd><p>Logs a message with level <code class="docutils literal notranslate"><span class="pre">WARNING</span></code> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>message</strong> (<em>str</em>) – The warning message to log.</p>
</dd>
</dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


