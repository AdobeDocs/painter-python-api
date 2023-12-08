---
title: exception - Painter Python API
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

<span id="exception-module"></span><h1>exception module<a class="headerlink" href="#module-substance_painter.exception" title="Link to this heading"> </a></h1>
<p>This module declares <cite>Substance 3D Painter</cite> specific exceptions.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.exception.ProjectError">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.exception.</span></span><span class="sig-name descname"><span class="pre">ProjectError</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.exception.ProjectError" title="Link to this definition"> </a></dt>
<dd><p>Raised when an operation or function is incompatible with the current
project, or when the current state of the project is invalid.</p>
<p>Trying to save a project when there is no project opened would raise a
<a class="reference internal" href="#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><code class="xref py py-class docutils literal notranslate"><span class="pre">ProjectError</span></code></a>.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.exception.ResourceNotFoundError">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.exception.</span></span><span class="sig-name descname"><span class="pre">ResourceNotFoundError</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.exception.ResourceNotFoundError" title="Link to this definition"> </a></dt>
<dd><p>Raised when a Substance 3D Painter resource could not be found.</p>
<p>Providing an invalid resource ID would raise a <a class="reference internal" href="#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><code class="xref py py-class docutils literal notranslate"><span class="pre">ResourceNotFoundError</span></code></a>.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.exception.ServiceNotFoundError">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.exception.</span></span><span class="sig-name descname"><span class="pre">ServiceNotFoundError</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.exception.ServiceNotFoundError" title="Link to this definition"> </a></dt>
<dd><p>Raised when an operation or function relies on a service which could not
be found. It could mean that the service has not been started yet.</p>
<p>Trying to execute a command while Substance 3D Painter is starting could
raise <a class="reference internal" href="#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><code class="xref py py-class docutils literal notranslate"><span class="pre">ServiceNotFoundError</span></code></a>.</p>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


