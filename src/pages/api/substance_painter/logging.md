---
title: logging - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>logging module<a class="headerlink" href="#module-substance_painter.logging" title="Link to this heading"> </a></h1>
<p class>This module exposes several functions to output messages to the <cite>Substance
Painter</cite> logger. Depending on the severity of the message, use <a class="reference internal" href="#substance_painter.logging.info" title="substance_painter.logging.info"><code class="xref py py-func docutils literal notranslate">info()</code></a>,
<a class="reference internal" href="#substance_painter.logging.warning" title="substance_painter.logging.warning"><code class="xref py py-func docutils literal notranslate">warning()</code></a> or <a class="reference internal" href="#substance_painter.logging.error" title="substance_painter.logging.error"><code class="xref py py-func docutils literal notranslate">error()</code></a>.</p>
<p class>For a finer control over the logging parameters, namely severity and channel,
use <a class="reference internal" href="#substance_painter.logging.log" title="substance_painter.logging.log"><code class="xref py py-func docutils literal notranslate">log()</code></a>. The functions <a class="reference internal" href="#substance_painter.logging.info" title="substance_painter.logging.info"><code class="xref py py-func docutils literal notranslate">info()</code></a>, <a class="reference internal" href="#substance_painter.logging.warning" title="substance_painter.logging.warning"><code class="xref py py-func docutils literal notranslate">warning()</code></a> and
<a class="reference internal" href="#substance_painter.logging.error" title="substance_painter.logging.error"><code class="xref py py-func docutils literal notranslate">error()</code></a> will output to the <cite>‘Python’</cite> log channel, while <a class="reference internal" href="#substance_painter.logging.log" title="substance_painter.logging.log"><code class="xref py py-func docutils literal notranslate">log()</code></a>
allows to specify a different channel.</p>
<p class>Messages with severity levels <code class="docutils literal notranslate">INFO</code>, <code class="docutils literal notranslate">WARNING</code> and <code class="docutils literal notranslate">ERROR</code> are meant for
the end user, and will appear in the log window of <cite>Substance 3D Painter</cite>. Messages
with severity levels <code class="docutils literal notranslate">DBG_INFO</code>, <code class="docutils literal notranslate">DBG_WARNING</code> and <code class="docutils literal notranslate">DBG_ERROR</code> are meant
for the developer, and will appear in the log file.</p>
<p class>Example</p>


```python
import substance_painter.logging

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
```



<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.error">
substance_painter.logging.error(<em class="sig-param">message: str</em>)<a class="headerlink" href="#substance_painter.logging.error" title="Link to this definition"> </a></dt>
<dd><p class>Logs a message with level <code class="docutils literal notranslate">ERROR</code> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>message</strong> (<em>str</em>) – The error message to log.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.info">
substance_painter.logging.info(<em class="sig-param">message: str</em>)<a class="headerlink" href="#substance_painter.logging.info" title="Link to this definition"> </a></dt>
<dd><p class>Logs a message with level <code class="docutils literal notranslate">INFO</code> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>message</strong> (<em>str</em>) – The message to log.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.log">
substance_painter.logging.log(<em class="sig-param">severity</em>, <em class="sig-param">channel: str</em>, <em class="sig-param">message: str</em>)<a class="headerlink" href="#substance_painter.logging.log" title="Link to this definition"> </a></dt>
<dd><p class>Logs a message with level <cite>severity</cite> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>severity</strong> – the severity level, can be <code class="docutils literal notranslate">INFO</code>, <code class="docutils literal notranslate">WARNING</code> or <code class="docutils literal notranslate">ERROR</code> for
messages relevant to the end user, or <code class="docutils literal notranslate">DBG_INFO</code>, <code class="docutils literal notranslate">DBG_WARNING</code> or
<code class="docutils literal notranslate">DBG_ERROR</code> for messages relevant to the developer.</p></li>
<li><p class><strong>channel</strong> (<em>str</em>) – the channel to log into.  This can be any name allowing to
identify the origin of the message, for example the name of
your plugin.</p></li>
<li><p class><strong>message</strong> (<em>str</em>) – the message to log.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.logging.warning">
substance_painter.logging.warning(<em class="sig-param">message: str</em>)<a class="headerlink" href="#substance_painter.logging.warning" title="Link to this definition"> </a></dt>
<dd><p class>Logs a message with level <code class="docutils literal notranslate">WARNING</code> on the Substance 3D Painter logger.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>message</strong> (<em>str</em>) – The warning message to log.</p>
</dd>
</dl>
</dd></dl>










