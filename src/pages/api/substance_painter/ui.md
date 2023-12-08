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

<h1>ui module<a class="headerlink" href="#module-substance_painter.ui" title="Link to this heading"> </a></h1>
<p class>Entry points to customize <cite>Substance 3D Painter</cite> UI.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.ui.UIMode">
<em class="property">class </em>substance_painter.ui.UIMode(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.ui.UIMode" title="Link to this definition"> </a></dt>
<dd><p class>UI configurations enumeration.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Value</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Edition</code></p></td>
<td><p class><code class="docutils literal notranslate">1</code></p></td>
<td><p class>Project edition mode</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">Visualisation</code></p></td>
<td><p class><code class="docutils literal notranslate">2</code></p></td>
<td><p class>(Iray) mode</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Baking</code></p></td>
<td><p class><code class="docutils literal notranslate">4</code></p></td>
<td><p class>Baking mode</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.ui.ApplicationMenu">
<em class="property">class </em>substance_painter.ui.ApplicationMenu(<em class="sig-param">value</em>)<a class="headerlink" href="#substance_painter.ui.ApplicationMenu" title="Link to this definition"> </a></dt>
<dd><p class>Standard application menus enumeration.</p>
<p class>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p class>Name</p></th>
<th class="head"><p class>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">File</code></p></td>
<td><p class>File menu</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">Edit</code></p></td>
<td><p class>Edit menu</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Mode</code></p></td>
<td><p class>Mode menu</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">Window</code></p></td>
<td><p class>Window menu</p></td>
</tr>
<tr class="row-even"><td><p class><code class="docutils literal notranslate">Viewport</code></p></td>
<td><p class>Viewport menu</p></td>
</tr>
<tr class="row-odd"><td><p class><code class="docutils literal notranslate">Help</code></p></td>
<td><p class>Help menu</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.show_main_window">
substance_painter.ui.show_main_window()<a class="headerlink" href="#substance_painter.ui.show_main_window" title="Link to this definition"> </a></dt>
<dd><p class>Show Substance 3D Painter main window in the windowing system and give it the focus.</p>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_main_window">
substance_painter.ui.get_main_window() → PySide2.QtWidgets.QMainWindow<a class="headerlink" href="#substance_painter.ui.get_main_window" title="Link to this definition"> </a></dt>
<dd><p class>Get access to Substance 3D Painter main window.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The application main window.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>PySide2.QtWidgets.QMainWindow</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_layout">
substance_painter.ui.get_layout(<em class="sig-param">mode: <a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></em>) → bytes<a class="headerlink" href="#substance_painter.ui.get_layout" title="Link to this definition"> </a></dt>
<dd><p class>Get Substance 3D Painter layout state for the given UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>mode</strong> (<a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><em>UIMode</em></a>) – Selected UI mode.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The layout state.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>bytes</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_layout_mode">
substance_painter.ui.get_layout_mode(<em class="sig-param">layout: bytes</em>) → <a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a><a class="headerlink" href="#substance_painter.ui.get_layout_mode" title="Link to this definition"> </a></dt>
<dd><p class>Get the Substance 3D Painter UI layout mode of a given state.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>layout</strong> (<em>bytes</em>) – The layout state, obtained with <a class="reference internal" href="#substance_painter.ui.get_layout" title="substance_painter.ui.get_layout"><code class="xref py py-func docutils literal notranslate">get_layout()</code></a>.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The state associated UI mode.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>RuntimeError</strong> – In case of incorrect layout data.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.set_layout">
substance_painter.ui.set_layout(<em class="sig-param">layout: bytes</em>) → <a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a><a class="headerlink" href="#substance_painter.ui.set_layout" title="Link to this definition"> </a></dt>
<dd><p class>Restore a Substance 3D Painter layout state optained with <a class="reference internal" href="#substance_painter.ui.get_layout" title="substance_painter.ui.get_layout"><code class="xref py py-func docutils literal notranslate">get_layout()</code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>layout</strong> (<em>bytes</em>) – The layout state to be restored.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The restored UI mode.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><strong>RuntimeError</strong> – In case of incorrect layout data.</p></li>
<li><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.reset_layout">
substance_painter.ui.reset_layout(<em class="sig-param">mode: <a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></em>)<a class="headerlink" href="#substance_painter.ui.reset_layout" title="Link to this definition"> </a></dt>
<dd><p class>Reset Substance 3D Painter layout to default for a selected UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>mode</strong> (<a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><em>UIMode</em></a>) – Selected UI mode.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_dock_widget">
substance_painter.ui.add_dock_widget(<em class="sig-param">widget: PySide2.QtWidgets.QWidget</em>, <em class="sig-param">ui_modes: int = UIMode.Edition</em>) → PySide2.QtWidgets.QDockWidget<a class="headerlink" href="#substance_painter.ui.add_dock_widget" title="Link to this definition"> </a></dt>
<dd><p class>Add a widget as a QDockWidget to the main window.</p>
<p class>If the widget has a <code class="docutils literal notranslate">windowIcon</code>, it will be used as a quick button to easily
reopen the QDockWidget when closed. If the widget has a unique <code class="docutils literal notranslate">objectName</code> it
will be used to properly save and restore the dock widget location and geometry.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>widget</strong> (<em>PySide2.QtWidgets.QWidget</em>) – The widget to be added as a dock widget.</p></li>
<li><p class><strong>ui_modes</strong> (<em>int</em><em>, </em><em>optional</em>) – A combination of <cite>UIMode</cite> flags.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The corresponding dock widget.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>PySide2.QtWidgets.QDockWidget</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_plugins_toolbar_widget">
substance_painter.ui.add_plugins_toolbar_widget(<em class="sig-param">widget: PySide2.QtWidgets.QWidget</em>)<a class="headerlink" href="#substance_painter.ui.add_plugins_toolbar_widget" title="Link to this definition"> </a></dt>
<dd><p class>Add a widget to the plugins toolbar.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>widget</strong> (<em>PySide2.QtWidgets.QWidget</em>) – The widget to be added.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_menu">
substance_painter.ui.add_menu(<em class="sig-param">menu: PySide2.QtWidgets.QMenu</em>)<a class="headerlink" href="#substance_painter.ui.add_menu" title="Link to this definition"> </a></dt>
<dd><p class>Add the given menu to the application main window.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>menu</strong> (<em>PySide2.QtWidgets.QMenu</em>) – The menu to be added.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_toolbar">
substance_painter.ui.add_toolbar(<em class="sig-param">title: str</em>, <em class="sig-param">object_name: str</em>, <em class="sig-param">ui_modes: int = UIMode.Edition</em>) → PySide2.QtWidgets.QToolBar<a class="headerlink" href="#substance_painter.ui.add_toolbar" title="Link to this definition"> </a></dt>
<dd><p class>Create and add a toolbar to the application main window.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>title</strong> (<em>str</em>) – The title of the toolbar.</p></li>
<li><p class><strong>object_name</strong> (<em>str</em>) – The toolbar object name. A unique object name is mandatory for proper
save and restore of the UI layout.</p></li>
<li><p class><strong>ui_modes</strong> (<em>int</em>) – A combination of <cite>UIMode</cite> flags.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The newly created toolbar.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>PySide2.QtWidgets.QToolBar</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.add_action">
substance_painter.ui.add_action(<em class="sig-param">menu: <a class="reference internal" href="#substance_painter.ui.ApplicationMenu" title="substance_painter.ui.ApplicationMenu">ApplicationMenu</a></em>, <em class="sig-param">action: PySide2.QtWidgets.QAction</em>)<a class="headerlink" href="#substance_painter.ui.add_action" title="Link to this definition"> </a></dt>
<dd><p class>Add the given action to the given application menu.</p>
<p class>This will clear the action tooltip.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>menu</strong> (<a class="reference internal" href="#substance_painter.ui.ApplicationMenu" title="substance_painter.ui.ApplicationMenu"><em>ApplicationMenu</em></a>) – One of the predefined <cite>ApplicationMenu</cite>.</p></li>
<li><p class><strong>action</strong> (<em>PySide2.QtWidgets.QAction</em>) – The action to be added.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.delete_ui_element">
substance_painter.ui.delete_ui_element(<em class="sig-param">element: PySide2.QtWidgets.QWidget</em>)<a class="headerlink" href="#substance_painter.ui.delete_ui_element" title="Link to this definition"> </a></dt>
<dd><p class>Delete a UI element.</p>
<p class>The element passed as parameter is deleted. After that, any attempt to call a
method on <code class="docutils literal notranslate">element</code> will throw an exception.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>element</strong> – The UI element to delete.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.get_current_mode">
substance_painter.ui.get_current_mode() → <a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a><a class="headerlink" href="#substance_painter.ui.get_current_mode" title="Link to this definition"> </a></dt>
<dd><p class>Get the current UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The current UI mode.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.ui.switch_to_mode">
substance_painter.ui.switch_to_mode(<em class="sig-param">mode: <a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode">UIMode</a></em>) → None<a class="headerlink" href="#substance_painter.ui.switch_to_mode" title="Link to this definition"> </a></dt>
<dd><p class>Switch to some UI mode.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>mode</strong> (<a class="reference internal" href="#substance_painter.ui.UIMode" title="substance_painter.ui.UIMode"><em>UIMode</em></a>) – UI mode to switch to.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><p class><a class="reference internal" href="exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started its UI service.</p>
</dd>
</dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


