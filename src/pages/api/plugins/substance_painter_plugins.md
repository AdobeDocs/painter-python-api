---
title: substance_painter_plugins - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>substance_painter_plugins module<a class="headerlink" href="#module-substance_painter_plugins" title="Link to this heading"> </a></h1>
<p class>This module allows to manage the <cite>Substance 3D Painter</cite> Plugins: listing existing
Plugins, loading or unloading a given Plugin, etc.</p>
<p class>A <cite>Substance 3D Painter</cite> Plugin is a standard Python module, placed in a path added
to <a class="reference internal" href="#substance_painter_plugins.path" title="substance_painter_plugins.path"><code class="xref py py-obj docutils literal notranslate">substance_painter_plugins.path</code></a>, which can use the <cite>Substance 3D Painter</cite>
Python API to do certain tasks.</p>
<p class>Example</p>


```python
import importlib
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
```



<dl class="py data">
<dt class="sig sig-object py" id="substance_painter_plugins.path">
substance_painter_plugins.path<em class="property"> = []</em><a class="headerlink" href="#substance_painter_plugins.path" title="Link to this definition"> </a></dt>
<dd><p class>A list of strings that specifies the search path for plugins.
Initialized from <code class="docutils literal notranslate">SUBSTANCE_PAINTER_PLUGINS_PATH</code> environment variable, <cite>Substance 3D Painter</cite>
installation directory and <cite>Substance 3D Painter</cite> user resources directory.</p>
<p class>You need to call explicitly <a class="reference internal" href="#substance_painter_plugins.update_sys_path" title="substance_painter_plugins.update_sys_path"><code class="xref py py-obj docutils literal notranslate">substance_painter_plugins.update_sys_path</code></a> after updating this
variable.</p>
<p class>A plugins directory is expected to contain three subdirectories, automatically added to
<code class="docutils literal notranslate">sys.path</code>:</p>
<blockquote>
<div><ul class="simple">
<li><p class><strong>plugins</strong> : Modules that are loaded as optional components.</p></li>
<li><p class><strong>startup</strong> : Modules that are always loaded at application startup.</p></li>
<li><p class><strong>modules</strong> : Utility modules, shared across plugins.</p></li>
</ul>
</div></blockquote>
<p class>Modules in <code class="docutils literal notranslate">plugins/</code> and <code class="docutils literal notranslate">startup/</code> directories are expected to have a <code class="docutils literal notranslate">start_plugin()</code> and
a <code class="docutils literal notranslate">close_plugin()</code> methods, respectively called after loading the module and before unloading it.
Modules added in <code class="docutils literal notranslate">plugins/</code> directory take precedence over modules added in <code class="docutils literal notranslate">startup/</code>
directory.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>list</p>
</dd>
</dl>
</dd></dl>
<dl class="py data">
<dt class="sig sig-object py" id="substance_painter_plugins.plugins">
substance_painter_plugins.plugins<em class="property"> = {}</em><a class="headerlink" href="#substance_painter_plugins.plugins" title="Link to this definition"> </a></dt>
<dd><p class>Currently started plugins.</p>
<dl class="field-list simple">
<dt class="field-odd">Type:</dt>
<dd class="field-odd"><p class>dict</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.start_plugin">
substance_painter_plugins.start_plugin(<em class="sig-param">module</em>)<a class="headerlink" href="#substance_painter_plugins.start_plugin" title="Link to this definition"> </a></dt>
<dd><p class>Start the given <cite>Substance 3D Painter</cite> plugin.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>module</strong> – A Python module that is expected to have a <code class="docutils literal notranslate">start_plugin</code> method.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.close_plugin">
substance_painter_plugins.close_plugin(<em class="sig-param">module</em>, <em class="sig-param">gc_collect=True</em>)<a class="headerlink" href="#substance_painter_plugins.close_plugin" title="Link to this definition"> </a></dt>
<dd><p class>Close the given <cite>Substance 3D Painter</cite> plugin.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>module</strong> – A Python module that is expected to have a <code class="docutils literal notranslate">close_plugin</code> method.</p></li>
<li><p class><strong>gc_collect</strong> – Run a full garbage collection if set to True.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.is_plugin_started">
substance_painter_plugins.is_plugin_started(<em class="sig-param">module</em>)<a class="headerlink" href="#substance_painter_plugins.is_plugin_started" title="Link to this definition"> </a></dt>
<dd><p class>Check if the given plugin is currently started.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>module</strong> – A Python module.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class><code class="docutils literal notranslate">True</code> if the given module is currently started, <code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.reload_plugin">
substance_painter_plugins.reload_plugin(<em class="sig-param">module</em>)<a class="headerlink" href="#substance_painter_plugins.reload_plugin" title="Link to this definition"> </a></dt>
<dd><p class>Reload a plugin and start it.</p>
<p class>Read <a class="reference external" href="https://docs.python.org/3/library/importlib.html#importlib.reload">importlib.reload(module) documentation</a> for possible caveats. See <a class="reference internal" href="#substance_painter_plugins.start_plugin" title="substance_painter_plugins.start_plugin"><code class="xref py py-func docutils literal notranslate">start_plugin()</code></a>
and <a class="reference internal" href="#substance_painter_plugins.close_plugin" title="substance_painter_plugins.close_plugin"><code class="xref py py-func docutils literal notranslate">close_plugin()</code></a> for details about starting and closing a plugin. If the plugin has
a <code class="docutils literal notranslate">reload_plugin</code> method, it will be executed after closing and before restarting the plugin.
The purpose of <code class="docutils literal notranslate">reload_plugin</code> method is to reload manually all sub-modules the plugin
depends on (in case the plugin is a Python package for example).</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>module</strong> – A Python module.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The reloaded plugin module.</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter_plugins.start_plugin" title="substance_painter_plugins.start_plugin"><code class="xref py py-func docutils literal notranslate">start_plugin()</code></a>, <a class="reference internal" href="#substance_painter_plugins.close_plugin" title="substance_painter_plugins.close_plugin"><code class="xref py py-func docutils literal notranslate">close_plugin()</code></a>, <a class="reference external" href="https://docs.python.org/3/library/importlib.html#importlib.reload">importlib.reload(module) documentation</a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.startup_module_names">
substance_painter_plugins.startup_module_names()<a class="headerlink" href="#substance_painter_plugins.startup_module_names" title="Link to this definition"> </a></dt>
<dd><p class>List the names of the available <em>startup</em> modules.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The names of all the available <em>startup</em> modules.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>list[str]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.plugin_module_names">
substance_painter_plugins.plugin_module_names()<a class="headerlink" href="#substance_painter_plugins.plugin_module_names" title="Link to this definition"> </a></dt>
<dd><p class>List the names of the available <em>plugins</em> modules.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The names of all the available <em>plugins</em> modules.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>list[str]</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.load_startup_modules">
substance_painter_plugins.load_startup_modules()<a class="headerlink" href="#substance_painter_plugins.load_startup_modules" title="Link to this definition"> </a></dt>
<dd><p class>Load all startup modules.</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.close_all_plugins">
substance_painter_plugins.close_all_plugins()<a class="headerlink" href="#substance_painter_plugins.close_all_plugins" title="Link to this definition"> </a></dt>
<dd><p class>Close all started plugins.</p>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter_plugins.update_sys_path">
substance_painter_plugins.update_sys_path()<a class="headerlink" href="#substance_painter_plugins.update_sys_path" title="Link to this definition"> </a></dt>
<dd><p class>Update <code class="docutils literal notranslate">sys.path</code> according to <a class="reference internal" href="#substance_painter_plugins.path" title="substance_painter_plugins.path"><code class="xref py py-obj docutils literal notranslate">substance_painter_plugins.path</code></a> and
<code class="docutils literal notranslate">SUBSTANCE_PAINTER_PLUGINS_PATH</code> environment variable.</p>
</dd></dl>










