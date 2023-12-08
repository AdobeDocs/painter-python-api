---
title: stack - Painter Python API
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

<h1>Stack class<a class="headerlink" href="#stack-class" title="Link to this heading"> </a></h1>
<blockquote>
<div><dl class="py class">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.textureset.</span></span><span class="sig-name descname"><span class="pre">Stack</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">stack_id</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">int</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.Stack" title="Link to this definition"> </a></dt>
<dd><p>A <cite>Substance 3D Painter</cite> paintable stack.</p>
<p>A stack can contain a number of channels (BaseColor, Specular, Roughness,
etc.), that correspond to the material. The stack belongs to a Texture Set,
which may contain one or more stacks.</p>
<p>Typically, only one stack is used and that stack is transparent to the user.
Selecting the Texture Set will select its stack. However, a Texture Set can
use layered materials with custom shaders, in which case a specific stack
needs to be selected.</p>
<p>If the Texture Set doesn’t use material layering, you can retrieve its stack
as follows:</p>
<div class="highlight-default notranslate"><div class="highlight"><pre><span></span><span class="kn">import</span> <span class="nn">substance_painter.textureset</span>

<span class="c1"># Get the unnamed stack of "TextureSetName":</span>
<span class="n">paintable_stack</span> <span class="o">=</span> <span class="n">substance_painter</span><span class="o">.</span><span class="n">textureset</span><span class="o">.</span><span class="n">Stack</span><span class="o">.</span><span class="n">from_name</span><span class="p">(</span><span class="s2">"TextureSetName"</span><span class="p">)</span>

<span class="c1"># Alternatively, get the stack from a Texture Set instance:</span>
<span class="n">my_texture_set</span> <span class="o">=</span> <span class="n">substance_painter</span><span class="o">.</span><span class="n">textureset</span><span class="o">.</span><span class="n">TextureSet</span><span class="o">.</span><span class="n">from_name</span><span class="p">(</span><span class="s2">"TextureSetName"</span><span class="p">)</span>
<span class="n">paintable_stack</span> <span class="o">=</span> <span class="n">my_texture_set</span><span class="o">.</span><span class="n">get_stack</span><span class="p">()</span>
</pre></div>
</div>
<p>If the Texture Set <cite>does</cite> use material layering, you can retrieve its stacks
as follows:</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.textureset

# Get the stack called "Mask1" from the Texture Set "TextureSetName":
paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName",
															   "Mask1")

# Alternatively, get the stack from a Texture Set instance:
my_texture_set = substance_painter.textureset.TextureSet.from_name("TextureSetName")
paintable_stack = my_texture_set.get_stack("Mask1")

# Show the name of the stack:
print(paintable_stack.name())
</pre></div>
</div>
<p>It is possible to query, add, remove or edit the channels of a stack:</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.textureset

# Get the unnamed stack of "TextureSetName":
paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName")

# List all the channels of the "TextureSetName" Texture Set:
for k,v in paintable_stack.all_channels().items():
	print("{0}: {1}".format(k, str(v.format())))

# Add a scattering channel to the "TextureSetName" Texture Set:
paintable_stack.add_channel(substance_painter.textureset.ChannelType.Scattering,
							substance_painter.textureset.ChannelFormat.L8)

# Query details of the added scattering channel:
if paintable_stack.has_channel(substance_painter.textureset.ChannelType.Scattering):
	channel = paintable_stack.get_channel(
		substance_painter.textureset.ChannelType.Scattering)
	print("The Texture Set now has a scattering channel with {0} bits per pixel."
		.format(channel.bit_depth()))

# Change the scattering channel to 16 bits inside the "TextureSetName" Texture Set:
paintable_stack.edit_channel(
	channel_type = substance_painter.textureset.ChannelType.Scattering,
	channel_format = substance_painter.textureset.ChannelFormat.L16)

# Remove the scattering channel from "TextureSetName":
paintable_stack.remove_channel(substance_painter.textureset.ChannelType.Scattering)
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">TextureSet</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-texture-set">Texture Set documentation</a>.</p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.from_name">
<em class="property"><span class="pre">static</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">from_name</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">texture_set_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">stack_name</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">''</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.Stack.from_name" title="Link to this definition"> </a></dt>
<dd><p>Get a stack from its name.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>texture_set_name</strong> (<em>str</em>) – Texture Set name.</p></li>
<li><p><strong>stack_name</strong> (<em>str</em>) – Stack name.
Leave empty if the Texture Set does not use material layering.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The Texture Set and stack names are case sensitive.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">texture_set_name</span></code> is not string.</p></li>
<li><p><strong>ValueError</strong> – If there is no Texture Set with the name <code class="docutils literal notranslate"><span class="pre">texture_set_name</span></code>.</p></li>
<li><p><strong>ValueError</strong> – If there is no stack with the name <code class="docutils literal notranslate"><span class="pre">stack_name</span></code>.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.all_stacks" title="substance_painter.textureset.TextureSet.all_stacks"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.all_stacks()</span></code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.get_stack" title="substance_painter.textureset.TextureSet.get_stack"><code class="xref py py-meth docutils literal notranslate"><span class="pre">TextureSet.get_stack()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.name">
<span class="sig-name descname"><span class="pre">name</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.textureset.Stack.name" title="Link to this definition"> </a></dt>
<dd><p>Get the stack name.
A stack name is empty if the Texture Set it belongs to uses material layering.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The stack name.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.material">
<span class="sig-name descname"><span class="pre">material</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.textureset.Stack.material" title="Link to this definition"> </a></dt>
<dd><p>Get the Texture Set this stack belongs to.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The Texture Set this stack belongs to.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet">TextureSet</a></p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate"><span class="pre">TextureSet</span></code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.all_texture_sets" title="substance_painter.textureset.all_texture_sets"><code class="xref py py-func docutils literal notranslate"><span class="pre">all_texture_sets()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.all_channels">
<span class="sig-name descname"><span class="pre">all_channels</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a><span class="p"><span class="pre">,</span></span><span class="w"> </span><a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel"><span class="pre">Channel</span></a><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.textureset.Stack.all_channels" title="Link to this definition"> </a></dt>
<dd><p>List all the channels of a stack.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>Map of all the channels of the stack.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>dict[<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a>, <a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a>]</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.add_channel()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.remove_channel()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.add_channel">
<span class="sig-name descname"><span class="pre">add_channel</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">channel_type</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">channel_format</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><span class="pre">ChannelFormat</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel"><span class="pre">Channel</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.Stack.add_channel" title="Link to this definition"> </a></dt>
<dd><p>Add a new channel to a stack.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p><cite>add_channel</cite> is not available with material layering.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p></li>
<li><p><strong>channel_format</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><em>ChannelFormat</em></a>) – The texture format of the new channel.</p></li>
<li><p><strong>label</strong> (<em>str</em><em>, </em><em>optional</em>) – The label of the channel in case of User channel as type.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The created channel.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If a channel of type <code class="docutils literal notranslate"><span class="pre">channel_type</span></code> already exists in this Texture Set.</p></li>
<li><p><strong>ValueError</strong> – If a label was provided but <code class="docutils literal notranslate"><span class="pre">channel_type</span></code> is not a user type.
    Standard channel types have fixed labels.</p></li>
<li><p><strong>ValueError</strong> – If the stack is invalid.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set uses material layering.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Stack.all_channels" title="substance_painter.textureset.Stack.all_channels"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.all_channels()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.remove_channel()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.edit_channel" title="substance_painter.textureset.Stack.edit_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.edit_channel()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.remove_channel">
<span class="sig-name descname"><span class="pre">remove_channel</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">channel_type</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.textureset.Stack.remove_channel" title="Link to this definition"> </a></dt>
<dd><p>Remove a channel from a stack.</p>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p><cite>remove_channel</cite> is not available with material layering.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If there is no channel of type <code class="docutils literal notranslate"><span class="pre">channel_type</span></code> in this Texture Set.</p></li>
<li><p><strong>ValueError</strong> – If the stack is invalid.</p></li>
<li><p><strong>ValueError</strong> – If the Texture Set uses material layering.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Stack.all_channels" title="substance_painter.textureset.Stack.all_channels"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.all_channels()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.add_channel()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.edit_channel" title="substance_painter.textureset.Stack.edit_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.edit_channel()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.edit_channel">
<span class="sig-name descname"><span class="pre">edit_channel</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">channel_type</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">channel_format</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><span class="pre">ChannelFormat</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><span class="pre">None</span></span><span class="w"> </span><span class="o"><span class="pre">=</span></span><span class="w"> </span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">None</span></span></span><a class="headerlink" href="#substance_painter.textureset.Stack.edit_channel" title="Link to this definition"> </a></dt>
<dd><p>Change the texture format and label of a channel.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p></li>
<li><p><strong>channel_format</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><em>ChannelFormat</em></a>) – The new texture format of the channel.</p></li>
<li><p><strong>label</strong> (<em>str</em><em>, </em><em>optional</em>) – The label of the channel in case of User channel as type.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If there is no stack labeled <code class="docutils literal notranslate"><span class="pre">stack_id</span></code> in this Texture Set.</p></li>
<li><p><strong>ValueError</strong> – If there is no channel of type <code class="docutils literal notranslate"><span class="pre">channel_type</span></code> in this Texture Set.</p></li>
<li><p><strong>ValueError</strong> – If a label was provided but <code class="docutils literal notranslate"><span class="pre">channel_type</span></code> is not a user type.
    Standard channel types have fixed labels.</p></li>
<li><p><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.add_channel()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.remove_channel()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.has_channel">
<span class="sig-name descname"><span class="pre">has_channel</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">channel_type</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.textureset.Stack.has_channel" title="Link to this definition"> </a></dt>
<dd><p>Check if a channel exists in a stack.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p><code class="docutils literal notranslate"><span class="pre">True</span></code> if the stack has a channel of the given type, <code class="docutils literal notranslate"><span class="pre">False</span></code> otherwise.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p>bool</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.add_channel()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.remove_channel()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.get_channel">
<span class="sig-name descname"><span class="pre">get_channel</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">channel_type</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><span class="pre">ChannelType</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel"><span class="pre">Channel</span></a></span></span><a class="headerlink" href="#substance_painter.textureset.Stack.get_channel" title="Link to this definition"> </a></dt>
<dd><p>Get an existing channel from its type.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>channel_type</strong> (<a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel"><em>Channel</em></a>) – The channel type.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>The channel.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p><strong>ValueError</strong> – If the channel doesn’t exists.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.textureset.Stack.has_channel" title="substance_painter.textureset.Stack.has_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.has_channel()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.add_channel()</span></code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate"><span class="pre">Stack.remove_channel()</span></code></a>.</p>
</div>
</dd></dl>
</dd></dl>
</div></blockquote>

</div>
</div>

</div>
</div>

</div>


