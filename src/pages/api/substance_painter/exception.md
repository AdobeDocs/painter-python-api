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

<h1>exception module<a class="headerlink" href="#module-substance_painter.exception" title="Link to this heading"> </a></h1>
<p class>This module declares <cite>Substance 3D Painter</cite> specific exceptions.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.exception.ProjectError">
<em class="property">class </em>substance_painter.exception.ProjectError(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.exception.ProjectError" title="Link to this definition"> </a></dt>
<dd><p class>Raised when an operation or function is incompatible with the current
project, or when the current state of the project is invalid.</p>
<p class>Trying to save a project when there is no project opened would raise a
<a class="reference internal" href="#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><code class="xref py py-class docutils literal notranslate">ProjectError</code></a>.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.exception.ResourceNotFoundError">
<em class="property">class </em>substance_painter.exception.ResourceNotFoundError(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.exception.ResourceNotFoundError" title="Link to this definition"> </a></dt>
<dd><p class>Raised when a Substance 3D Painter resource could not be found.</p>
<p class>Providing an invalid resource ID would raise a <a class="reference internal" href="#substance_painter.exception.ResourceNotFoundError" title="substance_painter.exception.ResourceNotFoundError"><code class="xref py py-class docutils literal notranslate">ResourceNotFoundError</code></a>.</p>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.exception.ServiceNotFoundError">
<em class="property">class </em>substance_painter.exception.ServiceNotFoundError(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.exception.ServiceNotFoundError" title="Link to this definition"> </a></dt>
<dd><p class>Raised when an operation or function relies on a service which could not
be found. It could mean that the service has not been started yet.</p>
<p class>Trying to execute a command while Substance 3D Painter is starting could
raise <a class="reference internal" href="#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><code class="xref py py-class docutils literal notranslate">ServiceNotFoundError</code></a>.</p>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


