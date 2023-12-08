---
title: channel - Painter Python API
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

<h1>Channel class<a class="headerlink" href="#channel-class" title="Link to this heading"> </a></h1>
<blockquote>
<div><dl class="py class">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.textureset.</span></span><span class="sig-name descname"><span class="pre">Channel</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">channel_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.Channel" title="Link to this definition"> </a></dt>
<dd><p>A <cite>Substance 3D Painter</cite> channel.</p>
<p>A channel can be one of the predefined types (<cite>BaseColor</cite>, <cite>Specular</cite>, <cite>Roughness</cite>,
etc.) or a user defined type (<cite>User0</cite> to <cite>User7</cite>), corresponding to the material.
The channel belongs to a stack. The stack can have one or more of them, but it
can have only one channel of each <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><code class="xref py py-class docutils literal notranslate"><span class="pre">ChannelType</span></code></a>.</p>
<p class="rubric">Example</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.textureset

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
</pre></div>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.format">
<span class="sig-name descname"><span class="pre">format</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><span class="pre">ChannelFormat</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.Channel.format" title="Link to this definition"> </a></dt>
<dd><p>Get the channel format. The format indicates both if the channel is color
or grayscale, its dynamic range, its bits per component, and if the storage
is linear or sRGB.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>This channel format.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat">ChannelFormat</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.label">
<span class="sig-name descname"><span class="pre">label</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.textureset.Channel.label" title="Link to this definition"> </a></dt>
<dd><p>Get the user label for User channels (<cite>User0</cite> to <cite>User7</cite>).</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>This channel user label. This is the empty string for non User channels.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Channel.type" title="substance_painter.textureset.Channel.type"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Channel.type()</span></code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><code class="xref py py-class docutils literal notranslate"><span class="pre">ChannelType</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.is_color">
<span class="sig-name descname"><span class="pre">is_color</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.textureset.Channel.is_color" title="Link to this definition"> </a></dt>
<dd><p>Check if the channel is in color or grayscale format.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the channel format is a color format.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.is_floating">
<span class="sig-name descname"><span class="pre">is_floating</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.textureset.Channel.is_floating" title="Link to this definition"> </a></dt>
<dd><p>Check if the channel is in floating point or normalized fixed point format.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the channel format is a floating point format.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.bit_depth">
<span class="sig-name descname"><span class="pre">bit_depth</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">int</span></span></span><a class="headerlink" href="#substance_painter.textureset.Channel.bit_depth" title="Link to this definition"> </a></dt>
<dd><p>Get the number of bits per component.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The channel bit depth per component.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>int</p>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.type">
<span class="sig-name descname"><span class="pre">type</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.Channel.type" title="Link to this definition"> </a></dt>
<dd><p>Get the channel type.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>This channel type.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></p>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Channel.label" title="substance_painter.textureset.Channel.label"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Channel.label()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Channel.edit">
<span class="sig-name descname"><span class="pre">edit</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">channel_format</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><span class="pre">ChannelFormat</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.textureset.Channel.edit" title="Link to this definition"> </a></dt>
<dd><p>Change the channel format and label.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>channel_format</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><em>ChannelFormat</em></a>) – The new texture format of the channel.</p></li>
<li><p><strong>label</strong> (<em>str</em><em>, </em><em>optional</em>) – Label of the channel in case of User channel as type.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If there is no stack labeled <code class="docutils literal notranslate"><span class="pre">stack_id</span></code> in this Texture Set.</p></li>
<li><p><strong>ValueError</strong> – If there is no channel of type <code class="docutils literal notranslate"><span class="pre">channel_type</span></code> in this Texture Set.</p></li>
<li><p><strong>ValueError</strong> – If a label was provided but <code class="docutils literal notranslate"><span class="pre">channel_type</span></code> is not a user type.
    Standard channel types have fixed labels.</p></li>
<li><p><strong>ValueError</strong> – If the channel is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
</dd></dl>
</div></blockquote>

</div>
</div>

</div>
</div>

</div>


