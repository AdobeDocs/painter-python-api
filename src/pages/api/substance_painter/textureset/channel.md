---
title: channel - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>Channel class<a class="headerlink" href="#channel-class" title="Link to this heading"> </a></h1>


<dt class="sig sig-object py" id="substance_painter.textureset.Channel">
<em class="property">class </em>substance_painter.textureset.Channel(<em class="sig-param">channel_id: int | None = None</em>)<a class="headerlink" href="#substance_painter.textureset.Channel" title="Link to this definition"> </a></dt>
<p class>A <cite>Substance 3D Painter</cite> channel.</p>
<p class>A channel can be one of the predefined types (<cite>BaseColor</cite>, <cite>Specular</cite>, <cite>Roughness</cite>,
etc.) or a user defined type (<cite>User0</cite> to <cite>User7</cite>), corresponding to the material.
The channel belongs to a stack. The stack can have one or more of them, but it
can have only one channel of each <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><code class="xref py py-class docutils literal notranslate">ChannelType</code></a>.</p>
<p class>Example</p>


```python
import substance_painter.textureset

# Get the unnamed stack of "TextureSetName":
paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName")

# Get the channel "BaseColor" of that stack:
base_color_channel = paintable_stack.get_channel(
	substance_painter.textureset.ChannelType.BaseColor)

# Print the color format and bit depth of the base color channel:
print("The channel format uses {0} {1}.".format(
	"RGB" if base_color_channel.is_color() else "L",
	base_color_channel.bit_depth()))

# Change the format and bit depth of the base color channel:
base_color_channel.edit(
	channel_format = substance_painter.textureset.ChannelFormat.RGB16)
```



<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.format">
format() → <a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat">ChannelFormat</a><a class="headerlink" href="#substance_painter.textureset.Channel.format" title="Link to this definition"> </a></dt>
<dd><p class>Get the channel format. The format indicates both if the channel is color
or grayscale, its dynamic range, its bits per component, and if the storage
is linear or sRGB.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>This channel format.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat">ChannelFormat</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.label">
label() → str<a class="headerlink" href="#substance_painter.textureset.Channel.label" title="Link to this definition"> </a></dt>
<dd><p class>Get the user label for User channels (<cite>User0</cite> to <cite>User7</cite>).</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>This channel user label. This is the empty string for non User channels.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Channel.type" title="substance_painter.textureset.Channel.type"><code class="xref py py-meth docutils literal notranslate">Channel.type()</code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><code class="xref py py-class docutils literal notranslate">ChannelType</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.is_color">
is_color() → bool<a class="headerlink" href="#substance_painter.textureset.Channel.is_color" title="Link to this definition"> </a></dt>
<dd><p class>Check if the channel is in color or grayscale format.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if the channel format is a color format.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.is_floating">
is_floating() → bool<a class="headerlink" href="#substance_painter.textureset.Channel.is_floating" title="Link to this definition"> </a></dt>
<dd><p class>Check if the channel is in floating point or normalized fixed point format.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class><code class="docutils literal notranslate">True</code> if the channel format is a floating point format.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.bit_depth">
bit_depth() → int<a class="headerlink" href="#substance_painter.textureset.Channel.bit_depth" title="Link to this definition"> </a></dt>
<dd><p class>Get the number of bits per component.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The channel bit depth per component.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.type">
type() → <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a><a class="headerlink" href="#substance_painter.textureset.Channel.type" title="Link to this definition"> </a></dt>
<dd><p class>Get the channel type.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>This channel type.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Channel.label" title="substance_painter.textureset.Channel.label"><code class="xref py py-meth docutils literal notranslate">Channel.label()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.edit">
edit(<em class="sig-param">channel_format: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat">ChannelFormat</a></em>, <em class="sig-param">label: str | None = None</em>) → None<a class="headerlink" href="#substance_painter.textureset.Channel.edit" title="Link to this definition"> </a></dt>
<dd><p class>Change the channel format and label.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>channel_format</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><em>ChannelFormat</em></a>) – The new texture format of the channel.</p></li>
<li><p class><strong>label</strong> (<em>str</em><em>, </em><em>optional</em>) – Label of the channel in case of User channel as type.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>ValueError</strong> – If there is no stack labeled <code class="docutils literal notranslate">stack_id</code> in this Texture Set.</p></li>
<li><p class><strong>ValueError</strong> – If there is no channel of type <code class="docutils literal notranslate">channel_type</code> in this Texture Set.</p></li>
<li><p class><strong>ValueError</strong> – If a label was provided but <code class="docutils literal notranslate">channel_type</code> is not a user type.
    Standard channel types have fixed labels.</p></li>
<li><p class><strong>ValueError</strong> – If the channel is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>












