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

<h1>properties module<a class="headerlink" href="#module-substance_painter.properties" title="Link to this heading"> </a></h1>
<p class>The <code class="docutils literal notranslate">properties</code> module introduces the description of dynamic attributes.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.properties.Property">
<em class="property">class </em>substance_painter.properties.Property(<em class="sig-param">handle: _substance_painter.data_tweak.PythonTweak</em>)<a class="headerlink" href="#substance_painter.properties.Property" title="Link to this definition"> </a></dt>
<dd><p class>Read only access to a property data.</p>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.value">
value() → bool | int | Tuple[int, int] | Tuple[int, int, int] | Tuple[int, int, int, int] | float | Tuple[float, float] | Tuple[float, float, float] | Tuple[float, float, float, float] | str<a class="headerlink" href="#substance_painter.properties.Property.value" title="Link to this definition"> </a></dt>
<dd><p class>Get the current porperty value.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>the current value.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>PropertyValue</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.name">
name() → str<a class="headerlink" href="#substance_painter.properties.Property.name" title="Link to this definition"> </a></dt>
<dd><p class>Get the porperty name.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The property name.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.short_name">
short_name() → str<a class="headerlink" href="#substance_painter.properties.Property.short_name" title="Link to this definition"> </a></dt>
<dd><p class>Get the shortened property name.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The property short name.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.label">
label() → str<a class="headerlink" href="#substance_painter.properties.Property.label" title="Link to this definition"> </a></dt>
<dd><p class>Get the property label.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The property label.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.widget_type">
widget_type() → str<a class="headerlink" href="#substance_painter.properties.Property.widget_type" title="Link to this definition"> </a></dt>
<dd><p class>Get the widget type that should be used to edit the property.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>One of: ‘Slider’, ‘Angle’, ‘Color’, ‘Togglebutton’,
‘Combobox’, ‘RandomSeed’, ‘File’, ‘FileList’, ‘LineEdit’,
‘Resource’, ‘TextEdit’.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.enum_values">
enum_values() → Dict[str, int]<a class="headerlink" href="#substance_painter.properties.Property.enum_values" title="Link to this definition"> </a></dt>
<dd><p class>The possible enum values with corresponding text for ‘Combobox’
widget type.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>Enum label to enum value dictionary.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><em>Dict</em>[str, int]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.enum_value">
enum_value(<em class="sig-param">enum_label: str</em>) → int<a class="headerlink" href="#substance_painter.properties.Property.enum_value" title="Link to this definition"> </a></dt>
<dd><p class>Get the enum value for the given enum label for ‘Combobox’
widget type.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>enum_label</strong> (<em>str</em>) – A valid enum label.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The enum value for the corresponding label.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><em>Dict</em>[str, int]</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.properties.Property.properties">
properties() → Dict[str, Any]<a class="headerlink" href="#substance_painter.properties.Property.properties" title="Link to this definition"> </a></dt>
<dd><p class>Get a json object that describes all available meta properties of this
property. For example: value range, editor step, possible values, tooltip, etc.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>A json object.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><em>Dict</em>[str, <em>Any</em>]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>

</div>
</div>

</div>
</div>

</div>


