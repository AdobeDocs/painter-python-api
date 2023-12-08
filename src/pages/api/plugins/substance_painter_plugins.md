---
title: substance_painter_plugins - Painter Python API
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

<span id="substance-painter-plugins-module"></span><h1>substance_painter_plugins module<a class="headerlink" href="#module-substance_painter_plugins" title="Link to this heading"> </a></h1>
<p>This module allows to manage the <cite>Substance 3D Painter</cite> Plugins: listing existing
Plugins, loading or unloading a given Plugin, etc.</p>
<p>A <cite>Substance 3D Painter</cite> Plugin is a standard Python module, placed in a path added
to <a class="reference internal" href="#substance_painter_plugins.path" title="substance_painter_plugins.path"><code class="xref py py-obj docutils literal notranslate"><span class="pre">substance_painter_plugins.path</span></code></a>, which can use the <cite>Substance 3D Painter</cite>
Python API to do certain tasks.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import importlib
import substance_painter_plugins

# Get the list of available Plugin names:
all_plugins_names = substance_painter_plugins.plugin_module_names()
for name in all_plugins_names:
	print(name)

# Load the "hello world" Plugin:
plugin = importlib.import_module("hello_plugin")

# Start the Plugin if it wasn't already:
if not substance_painter_plugins.is_plugin_started(plugin):
	substance_painter_plugins.start_plugin(plugin)
</pre></div>
</div>
<dl class="py data">
<dt class="sig sig-object py" id="substance_painter_plugins.path">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">path</span></span><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">[]</span></em><a class="headerlink" href="#substance_painter_plugins.path" title="Link to this definition"> </a></dt>
<dd><p>A list of strings that specifies the search path for plugins.
Initialized from <code class="docutils literal notranslate"><span class="pre">SUBSTANCE_PAINTER_PLUGINS_PATH</span></code> environment variable, <cite>Substance 3D Painter</cite>
installation directory and <cite>Substance 3D Painter</cite> user resources directory.</p>
<p>You need to call explicitly <a class="reference internal" href="#substance_painter_plugins.update_sys_path" title="substance_painter_plugins.update_sys_path"><code class="xref py py-obj docutils literal notranslate"><span class="pre">substance_painter_plugins.update_sys_path</span></code></a> after updating this
variable.</p>
<p>A plugins directory is expected to contain three subdirectories, automatically added to
<code class="docutils literal notranslate"><span class="pre">sys.path</span></code>:</p>
<blockquote>
<div><ul class="simple">
<li><p><strong>plugins</strong> : Modules that are loaded as optional components.</p></li>
<li><p><strong>startup</strong> : Modules that are always loaded at application startup.</p></li>
<li><p><strong>modules</strong> : Utility modules, shared across plugins.</p></li>
</ul>
</div></blockquote>
<p>Modules in <code class="docutils literal notranslate"><span class="pre">plugins/</span></code> and <code class="docutils literal notranslate"><span class="pre">startup/</span></code> directories are expected to have a <code class="docutils literal notranslate"><span class="pre">start_plugin()</span></code> and
a <code class="docutils literal notranslate"><span class="pre">close_plugin()</span></code> methods, respectively called after loading the module and before unloading it.
Modules added in <code class="docutils literal notranslate"><span class="pre">plugins/</span></code> directory take precedence over modules added in <code class="docutils literal notranslate"><span class="pre">startup/</span></code>
directory.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>list</p>
</dd>
</dl>
</dd></dl>
<dl class="py data">
<dt class="sig sig-object py" id="substance_painter_plugins.plugins">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">plugins</span></span><em class="property"><span class="w"> </span><span class="p"><span class="pre">=</span></span><span class="w"> </span><span class="pre">{}</span></em><a class="headerlink" href="#substance_painter_plugins.plugins" title="Link to this definition"> </a></dt>
<dd><p>Currently started plugins.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>dict</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.start_plugin">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">start_plugin</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">module</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.start_plugin" title="Link to this definition"> </a></dt>
<dd><p>Start the given <cite>Substance 3D Painter</cite> plugin.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>module</strong> – A Python module that is expected to have a <code class="docutils literal notranslate"><span class="pre">start_plugin</span></code> method.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.close_plugin">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">close_plugin</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">module</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">gc_collect</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">True</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.close_plugin" title="Link to this definition"> </a></dt>
<dd><p>Close the given <cite>Substance 3D Painter</cite> plugin.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>module</strong> – A Python module that is expected to have a <code class="docutils literal notranslate"><span class="pre">close_plugin</span></code> method.</p></li>
<li><p><strong>gc_collect</strong> – Run a full garbage collection if set to True.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.is_plugin_started">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">is_plugin_started</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">module</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.is_plugin_started" title="Link to this definition"> </a></dt>
<dd><p>Check if the given plugin is currently started.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>module</strong> – A Python module.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the given module is currently started, <code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.reload_plugin">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">reload_plugin</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">module</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.reload_plugin" title="Link to this definition"> </a></dt>
<dd><p>Reload a plugin and start it.</p>
<p>Read <a class="reference external" href="https://docs.python.org/3/library/importlib.html#importlib.reload">importlib.reload(module) documentation</a> for possible caveats. See <a class="reference internal" href="#substance_painter_plugins.start_plugin" title="substance_painter_plugins.start_plugin"><code class="xref py py-func docutils literal notranslate"><span class="pre">start_plugin()</span></code></a>
and <a class="reference internal" href="#substance_painter_plugins.close_plugin" title="substance_painter_plugins.close_plugin"><code class="xref py py-func docutils literal notranslate"><span class="pre">close_plugin()</span></code></a> for details about starting and closing a plugin. If the plugin has
a <code class="docutils literal notranslate"><span class="pre">reload_plugin</span></code> method, it will be executed after closing and before restarting the plugin.
The purpose of <code class="docutils literal notranslate"><span class="pre">reload_plugin</span></code> method is to reload manually all sub-modules the plugin
depends on (in case the plugin is a Python package for example).</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>module</strong> – A Python module.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The reloaded plugin module.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter_plugins.start_plugin" title="substance_painter_plugins.start_plugin"><code class="xref py py-func docutils literal notranslate"><span class="pre">start_plugin()</span></code></a>, <a class="reference internal" href="#substance_painter_plugins.close_plugin" title="substance_painter_plugins.close_plugin"><code class="xref py py-func docutils literal notranslate"><span class="pre">close_plugin()</span></code></a>, <a class="reference external" href="https://docs.python.org/3/library/importlib.html#importlib.reload">importlib.reload(module) documentation</a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.startup_module_names">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">startup_module_names</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.startup_module_names" title="Link to this definition"> </a></dt>
<dd><p>List the names of the available <em>startup</em> modules.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The names of all the available <em>startup</em> modules.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>list[str]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.plugin_module_names">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">plugin_module_names</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.plugin_module_names" title="Link to this definition"> </a></dt>
<dd><p>List the names of the available <em>plugins</em> modules.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The names of all the available <em>plugins</em> modules.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>list[str]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.load_startup_modules">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">load_startup_modules</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.load_startup_modules" title="Link to this definition"> </a></dt>
<dd><p>Load all startup modules.</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.close_all_plugins">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">close_all_plugins</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.close_all_plugins" title="Link to this definition"> </a></dt>
<dd><p>Close all started plugins.</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.update_sys_path">
<span class="sig-prename descclassname"><span class="pre">substance_painter_plugins.</span></span><span class="sig-name descname"><span class="pre">update_sys_path</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter_plugins.update_sys_path" title="Link to this definition"> </a></dt>
<dd><p>Update <code class="docutils literal notranslate"><span class="pre">sys.path</span></code> according to <a class="reference internal" href="#substance_painter_plugins.path" title="substance_painter_plugins.path"><code class="xref py py-obj docutils literal notranslate"><span class="pre">substance_painter_plugins.path</span></code></a> and
<code class="docutils literal notranslate"><span class="pre">SUBSTANCE_PAINTER_PLUGINS_PATH</span></code> environment variable.</p>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


