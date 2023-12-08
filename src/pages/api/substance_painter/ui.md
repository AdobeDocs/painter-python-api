---
title: ui - Painter Python API
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

<span id="ui-module"></span><h1>ui module<a class="headerlink" href="#module-substance_painter.ui" title="Link to this heading"> </a></h1>
<p>Entry points to customize <cite>Substance 3D Painter</cite> UI.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.ui.UIMode">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">UIMode</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.UIMode" title="Link to this definition"> </a></dt>
<dd><p>UI configurations enumeration.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Value</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Edition</span></code></p></td>
<td><p><code class="docutils literal notranslate"><span class="pre">1</span></code></p></td>
<td><p>Project edition mode</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Visualisation</span></code></p></td>
<td><p><code class="docutils literal notranslate"><span class="pre">2</span></code></p></td>
<td><p>(Iray) mode</p></td>
</tr>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Baking</span></code></p></td>
<td><p><code class="docutils literal notranslate"><span class="pre">4</span></code></p></td>
<td><p>Baking mode</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.ui.ApplicationMenu">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">ApplicationMenu</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.ApplicationMenu" title="Link to this definition"> </a></dt>
<dd><p>Standard application menus enumeration.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">File</span></code></p></td>
<td><p>File menu</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Edit</span></code></p></td>
<td><p>Edit menu</p></td>
</tr>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Mode</span></code></p></td>
<td><p>Mode menu</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Window</span></code></p></td>
<td><p>Window menu</p></td>
</tr>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Viewport</span></code></p></td>
<td><p>Viewport menu</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Help</span></code></p></td>
<td><p>Help menu</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.show_main_window">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">show_main_window</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.show_main_window" title="Link to this definition"> </a></dt>
<dd><p>Show Substance 3D Painter main window in the windowing system and give it the focus.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_main_window">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">get_main_window</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">PySide2.QtWidgets.QMainWindow</span></span></span><a class="headerlink" href="#substance_painter.ui.get_main_window" title="Link to this definition"> </a></dt>
<dd><p>Get access to Substance 3D Painter main window.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The application main window.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>PySide2.QtWidgets.QMainWindow</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_layout">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">get_layout</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">mode</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><span class="pre">UIMode</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bytes</span></span></span><a class="headerlink" href="#substance_painter.ui.get_layout" title="Link to this definition"> </a></dt>
<dd><p>Get Substance 3D Painter layout state for the given UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>mode</strong> (<a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><em>UIMode</em></a>) – Selected UI mode.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The layout state.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>bytes</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_layout_mode">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">get_layout_mode</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">layout</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bytes</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><span class="pre">UIMode</span></a></span></span><a class="headerlink" href="#substance_painter.ui.get_layout_mode" title="Link to this definition"> </a></dt>
<dd><p>Get the Substance 3D Painter UI layout mode of a given state.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>layout</strong> (<em>bytes</em>) – The layout state, obtained with <a class="reference internal" href="#substance_painter.ui.get_layout" title="substance_painter.ui.get_layout"><code class="xref py py-func docutils literal notranslate"><span class="pre">get_layout()</span></code></a>.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The state associated UI mode.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><strong>RuntimeError</strong> – In case of incorrect layout data.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.set_layout">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">set_layout</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">layout</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">bytes</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><span class="pre">UIMode</span></a></span></span><a class="headerlink" href="#substance_painter.ui.set_layout" title="Link to this definition"> </a></dt>
<dd><p>Restore a Substance 3D Painter layout state optained with <a class="reference internal" href="#substance_painter.ui.get_layout" title="substance_painter.ui.get_layout"><code class="xref py py-func docutils literal notranslate"><span class="pre">get_layout()</span></code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>layout</strong> (<em>bytes</em>) – The layout state to be restored.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The restored UI mode.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><strong>RuntimeError</strong> – In case of incorrect layout data.</p></li>
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.reset_layout">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">reset_layout</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">mode</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><span class="pre">UIMode</span></a></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.reset_layout" title="Link to this definition"> </a></dt>
<dd><p>Reset Substance 3D Painter layout to default for a selected UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>mode</strong> (<a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><em>UIMode</em></a>) – Selected UI mode.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_dock_widget">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">add_dock_widget</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">widget</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">PySide2.QtWidgets.QWidget</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">ui_modes</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">UIMode.Edition</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">PySide2.QtWidgets.QDockWidget</span></span></span><a class="headerlink" href="#substance_painter.ui.add_dock_widget" title="Link to this definition"> </a></dt>
<dd><p>Add a widget as a QDockWidget to the main window.</p>
<p>If the widget has a <code class="docutils literal notranslate"><span class="pre">windowIcon</span></code>, it will be used as a quick button to easily
reopen the QDockWidget when closed. If the widget has a unique <code class="docutils literal notranslate"><span class="pre">objectName</span></code> it
will be used to properly save and restore the dock widget location and geometry.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>widget</strong> (<em>PySide2.QtWidgets.QWidget</em>) – The widget to be added as a dock widget.</p></li>
<li><p><strong>ui_modes</strong> (<em>int</em><em>, </em><em>optional</em>) – A combination of <cite>UIMode</cite> flags.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The corresponding dock widget.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>PySide2.QtWidgets.QDockWidget</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_plugins_toolbar_widget">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">add_plugins_toolbar_widget</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">widget</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">PySide2.QtWidgets.QWidget</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.add_plugins_toolbar_widget" title="Link to this definition"> </a></dt>
<dd><p>Add a widget to the plugins toolbar.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>widget</strong> (<em>PySide2.QtWidgets.QWidget</em>) – The widget to be added.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_menu">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">add_menu</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">menu</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">PySide2.QtWidgets.QMenu</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.add_menu" title="Link to this definition"> </a></dt>
<dd><p>Add the given menu to the application main window.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>menu</strong> (<em>PySide2.QtWidgets.QMenu</em>) – The menu to be added.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_toolbar">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">add_toolbar</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">title</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">object_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">ui_modes</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">UIMode.Edition</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">PySide2.QtWidgets.QToolBar</span></span></span><a class="headerlink" href="#substance_painter.ui.add_toolbar" title="Link to this definition"> </a></dt>
<dd><p>Create and add a toolbar to the application main window.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>title</strong> (<em>str</em>) – The title of the toolbar.</p></li>
<li><p><strong>object_name</strong> (<em>str</em>) – The toolbar object name. A unique object name is mandatory for proper
save and restore of the UI layout.</p></li>
<li><p><strong>ui_modes</strong> (<em>int</em>) – A combination of <cite>UIMode</cite> flags.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The newly created toolbar.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>PySide2.QtWidgets.QToolBar</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_action">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">add_action</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">menu</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.ui.ApplicationMenu" title="substance_painter.ui.ApplicationMenu"><span class="pre">ApplicationMenu</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">action</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">PySide2.QtWidgets.QAction</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.add_action" title="Link to this definition"> </a></dt>
<dd><p>Add the given action to the given application menu.</p>
<p>This will clear the action tooltip.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>menu</strong> (<a class="reference internal" href="#substance_painter.ui.ApplicationMenu" title="substance_painter.ui.ApplicationMenu"><em>ApplicationMenu</em></a>) – One of the predefined <cite>ApplicationMenu</cite>.</p></li>
<li><p><strong>action</strong> (<em>PySide2.QtWidgets.QAction</em>) – The action to be added.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.delete_ui_element">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">delete_ui_element</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">element</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">PySide2.QtWidgets.QWidget</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.ui.delete_ui_element" title="Link to this definition"> </a></dt>
<dd><p>Delete a UI element.</p>
<p>The element passed as parameter is deleted. After that, any attempt to call a
method on <code class="docutils literal notranslate"><span class="pre">element</span></code> will throw an exception.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>element</strong> – The UI element to delete.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_current_mode">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">get_current_mode</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><span class="pre">UIMode</span></a></span></span><a class="headerlink" href="#substance_painter.ui.get_current_mode" title="Link to this definition"> </a></dt>
<dd><p>Get the current UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The current UI mode.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.switch_to_mode">
<span class="sig-prename descclassname"><span class="pre">substance_painter.ui.</span></span><span class="sig-name descname"><span class="pre">switch_to_mode</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">mode</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><span class="pre">UIMode</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.ui.switch_to_mode" title="Link to this definition"> </a></dt>
<dd><p>Switch to some UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>mode</strong> (<a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><em>UIMode</em></a>) – UI mode to switch to.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


