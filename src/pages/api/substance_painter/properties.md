---
title: properties - Painter Python API
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

<span id="properties-module"></span><h1>properties module<a class="headerlink" href="#module-substance_painter.properties" title="Link to this heading"> </a></h1>
<p>The <code class="docutils literal notranslate"><span class="pre">properties</span></code> module introduces the description of dynamic attributes.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.properties.Property">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.properties.</span></span><span class="sig-name descname"><span class="pre">Property</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">handle</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">_substance_painter.data_tweak.PythonTweak</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.properties.Property" title="Link to this definition"> </a></dt>
<dd><p>Read only access to a property data.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.value">
<span class="sig-name descname"><span class="pre">value</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">int</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">float</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">float</span><span class="p"><span class="pre">]</span></span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.properties.Property.value" title="Link to this definition"> </a></dt>
<dd><p>Get the current porperty value.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>the current value.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>PropertyValue</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.name">
<span class="sig-name descname"><span class="pre">name</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.properties.Property.name" title="Link to this definition"> </a></dt>
<dd><p>Get the porperty name.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The property name.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.short_name">
<span class="sig-name descname"><span class="pre">short_name</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.properties.Property.short_name" title="Link to this definition"> </a></dt>
<dd><p>Get the shortened property name.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The property short name.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.label">
<span class="sig-name descname"><span class="pre">label</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.properties.Property.label" title="Link to this definition"> </a></dt>
<dd><p>Get the property label.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The property label.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.widget_type">
<span class="sig-name descname"><span class="pre">widget_type</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.properties.Property.widget_type" title="Link to this definition"> </a></dt>
<dd><p>Get the widget type that should be used to edit the property.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>One of: ‘Slider’, ‘Angle’, ‘Color’, ‘Togglebutton’,
‘Combobox’, ‘RandomSeed’, ‘File’, ‘FileList’, ‘LineEdit’,
‘Resource’, ‘TextEdit’.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.enum_values">
<span class="sig-name descname"><span class="pre">enum_values</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">int</span><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.properties.Property.enum_values" title="Link to this definition"> </a></dt>
<dd><p>The possible enum values with corresponding text for ‘Combobox’
widget type.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>Enum label to enum value dictionary.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><em>Dict</em>[str, int]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.enum_value">
<span class="sig-name descname"><span class="pre">enum_value</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">enum_label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">int</span></span></span><a class="headerlink" href="#substance_painter.properties.Property.enum_value" title="Link to this definition"> </a></dt>
<dd><p>Get the enum value for the given enum label for ‘Combobox’
widget type.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>enum_label</strong> (<em>str</em>) – A valid enum label.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The enum value for the corresponding label.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><em>Dict</em>[str, int]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.properties">
<span class="sig-name descname"><span class="pre">properties</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">Any</span><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.properties.Property.properties" title="Link to this definition"> </a></dt>
<dd><p>Get a json object that describes all available meta properties of this
property. For example: value range, editor step, possible values, tooltip, etc.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>A json object.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><em>Dict</em>[str, <em>Any</em>]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


