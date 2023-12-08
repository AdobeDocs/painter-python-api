---
title: stack - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---















<h1>Stack class<a class="headerlink" href="#stack-class" title="Link to this heading"> </a></h1>


<dt class="sig sig-object py" id="substance_painter.textureset.Stack">
<em class="property">class </em>substance_painter.textureset.Stack(<em class="sig-param">stack_id: int | None = None</em>)<a class="headerlink" href="#substance_painter.textureset.Stack" title="Link to this definition"> </a></dt>
<p class>A <cite>Substance 3D Painter</cite> paintable stack.</p>
<p class>A stack can contain a number of channels (BaseColor, Specular, Roughness,
etc.), that correspond to the material. The stack belongs to a Texture Set,
which may contain one or more stacks.</p>
<p class>Typically, only one stack is used and that stack is transparent to the user.
Selecting the Texture Set will select its stack. However, a Texture Set can
use layered materials with custom shaders, in which case a specific stack
needs to be selected.</p>
<p class>If the Texture Set doesn’t use material layering, you can retrieve its stack
as follows:</p>


```python
import substance_painter.textureset

# Get the unnamed stack of "TextureSetName":
paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName")

# Alternatively, get the stack from a Texture Set instance:
my_texture_set = substance_painter.textureset.TextureSet.from_name("TextureSetName")
paintable_stack = my_texture_set.get_stack()
```



<p class>If the Texture Set <cite>does</cite> use material layering, you can retrieve its stacks
as follows:</p>


```python
import substance_painter.textureset

# Get the stack called "Mask1" from the Texture Set "TextureSetName":
paintable_stack = substance_painter.textureset.Stack.from_name("TextureSetName",
															   "Mask1")

# Alternatively, get the stack from a Texture Set instance:
my_texture_set = substance_painter.textureset.TextureSet.from_name("TextureSetName")
paintable_stack = my_texture_set.get_stack("Mask1")

# Show the name of the stack:
print(paintable_stack.name())
```



<p class>It is possible to query, add, remove or edit the channels of a stack:</p>


```python
import substance_painter.textureset

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
```



<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate">TextureSet</code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-texture-set">Texture Set documentation</a>.</p>
</div>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.from_name">
<em class="property">static </em>from_name(<em class="sig-param">texture_set_name: str</em>, <em class="sig-param">stack_name: str = ''</em>)<a class="headerlink" href="#substance_painter.textureset.Stack.from_name" title="Link to this definition"> </a></dt>
<dd><p class>Get a stack from its name.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>texture_set_name</strong> (<em>str</em>) – Texture Set name.</p></li>
<li><p class><strong>stack_name</strong> (<em>str</em>) – Stack name.
Leave empty if the Texture Set does not use material layering.</p></li>
</ul>
</dd>
</dl>
<div class="admonition note">
<p class>Note</p>
<p class>The Texture Set and stack names are case sensitive.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If <code class="docutils literal notranslate">texture_set_name</code> is not string.</p></li>
<li><p class><strong>ValueError</strong> – If there is no Texture Set with the name <code class="docutils literal notranslate">texture_set_name</code>.</p></li>
<li><p class><strong>ValueError</strong> – If there is no stack with the name <code class="docutils literal notranslate">stack_name</code>.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.all_stacks" title="substance_painter.textureset.TextureSet.all_stacks"><code class="xref py py-meth docutils literal notranslate">TextureSet.all_stacks()</code></a>,
<a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet.get_stack" title="substance_painter.textureset.TextureSet.get_stack"><code class="xref py py-meth docutils literal notranslate">TextureSet.get_stack()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.name">
name() → str<a class="headerlink" href="#substance_painter.textureset.Stack.name" title="Link to this definition"> </a></dt>
<dd><p class>Get the stack name.
A stack name is empty if the Texture Set it belongs to uses material layering.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The stack name.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>str</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.material">
material()<a class="headerlink" href="#substance_painter.textureset.Stack.material" title="Link to this definition"> </a></dt>
<dd><p class>Get the Texture Set this stack belongs to.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>The Texture Set this stack belongs to.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet">TextureSet</a></p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="textureset.html#substance_painter.textureset.TextureSet" title="substance_painter.textureset.TextureSet"><code class="xref py py-class docutils literal notranslate">TextureSet</code></a>,
<a class="reference internal" href="index.html#substance_painter.textureset.all_texture_sets" title="substance_painter.textureset.all_texture_sets"><code class="xref py py-func docutils literal notranslate">all_texture_sets()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.all_channels">
all_channels() → Dict[<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a>, <a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a>]<a class="headerlink" href="#substance_painter.textureset.Stack.all_channels" title="Link to this definition"> </a></dt>
<dd><p class>List all the channels of a stack.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns:</dt>
<dd class="field-odd"><p class>Map of all the channels of the stack.</p>
</dd>
<dt class="field-even">Return type:</dt>
<dd class="field-even"><p class>dict[<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a>, <a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a>]</p>
</dd>
<dt class="field-odd">Raises:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate">Stack.add_channel()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate">Stack.remove_channel()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.add_channel">
add_channel(<em class="sig-param">channel_type: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></em>, <em class="sig-param">channel_format: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat">ChannelFormat</a></em>, <em class="sig-param">label: str | None = None</em>) → <a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a><a class="headerlink" href="#substance_painter.textureset.Stack.add_channel" title="Link to this definition"> </a></dt>
<dd><p class>Add a new channel to a stack.</p>
<div class="admonition note">
<p class>Note</p>
<p class><cite>add_channel</cite> is not available with material layering.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p></li>
<li><p class><strong>channel_format</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><em>ChannelFormat</em></a>) – The texture format of the new channel.</p></li>
<li><p class><strong>label</strong> (<em>str</em><em>, </em><em>optional</em>) – The label of the channel in case of User channel as type.</p></li>
</ul>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The created channel.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>ValueError</strong> – If a channel of type <code class="docutils literal notranslate">channel_type</code> already exists in this Texture Set.</p></li>
<li><p class><strong>ValueError</strong> – If a label was provided but <code class="docutils literal notranslate">channel_type</code> is not a user type.
    Standard channel types have fixed labels.</p></li>
<li><p class><strong>ValueError</strong> – If the stack is invalid.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set uses material layering.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Stack.all_channels" title="substance_painter.textureset.Stack.all_channels"><code class="xref py py-meth docutils literal notranslate">Stack.all_channels()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate">Stack.remove_channel()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.edit_channel" title="substance_painter.textureset.Stack.edit_channel"><code class="xref py py-meth docutils literal notranslate">Stack.edit_channel()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.remove_channel">
remove_channel(<em class="sig-param">channel_type: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></em>) → None<a class="headerlink" href="#substance_painter.textureset.Stack.remove_channel" title="Link to this definition"> </a></dt>
<dd><p class>Remove a channel from a stack.</p>
<div class="admonition note">
<p class>Note</p>
<p class><cite>remove_channel</cite> is not available with material layering.</p>
</div>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>ValueError</strong> – If there is no channel of type <code class="docutils literal notranslate">channel_type</code> in this Texture Set.</p></li>
<li><p class><strong>ValueError</strong> – If the stack is invalid.</p></li>
<li><p class><strong>ValueError</strong> – If the Texture Set uses material layering.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Stack.all_channels" title="substance_painter.textureset.Stack.all_channels"><code class="xref py py-meth docutils literal notranslate">Stack.all_channels()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate">Stack.add_channel()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.edit_channel" title="substance_painter.textureset.Stack.edit_channel"><code class="xref py py-meth docutils literal notranslate">Stack.edit_channel()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.edit_channel">
edit_channel(<em class="sig-param">channel_type: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></em>, <em class="sig-param">channel_format: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat">ChannelFormat</a></em>, <em class="sig-param">label: str | None = None</em>) → None<a class="headerlink" href="#substance_painter.textureset.Stack.edit_channel" title="Link to this definition"> </a></dt>
<dd><p class>Change the texture format and label of a channel.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><ul class="simple">
<li><p class><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p></li>
<li><p class><strong>channel_format</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelFormat" title="substance_painter.textureset.ChannelFormat"><em>ChannelFormat</em></a>) – The new texture format of the channel.</p></li>
<li><p class><strong>label</strong> (<em>str</em><em>, </em><em>optional</em>) – The label of the channel in case of User channel as type.</p></li>
</ul>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>ValueError</strong> – If there is no stack labeled <code class="docutils literal notranslate">stack_id</code> in this Texture Set.</p></li>
<li><p class><strong>ValueError</strong> – If there is no channel of type <code class="docutils literal notranslate">channel_type</code> in this Texture Set.</p></li>
<li><p class><strong>ValueError</strong> – If a label was provided but <code class="docutils literal notranslate">channel_type</code> is not a user type.
    Standard channel types have fixed labels.</p></li>
<li><p class><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate">Stack.add_channel()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate">Stack.remove_channel()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.has_channel">
has_channel(<em class="sig-param">channel_type: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></em>) → bool<a class="headerlink" href="#substance_painter.textureset.Stack.has_channel" title="Link to this definition"> </a></dt>
<dd><p class>Check if a channel exists in a stack.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>channel_type</strong> (<a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType"><em>ChannelType</em></a>) – The channel type.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class><code class="docutils literal notranslate">True</code> if the stack has a channel of the given type, <code class="docutils literal notranslate">False</code> otherwise.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class>bool</p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><strong>ValueError</strong> – If the stack is invalid.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate">Stack.add_channel()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate">Stack.remove_channel()</code></a>.</p>
</div>
</dd></dl>
<dl class="py method">
<dt class="sig sig-object py" id="substance_painter.textureset.Stack.get_channel">
get_channel(<em class="sig-param">channel_type: <a class="reference internal" href="index.html#substance_painter.textureset.ChannelType" title="substance_painter.textureset.ChannelType">ChannelType</a></em>) → <a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a><a class="headerlink" href="#substance_painter.textureset.Stack.get_channel" title="Link to this definition"> </a></dt>
<dd><p class>Get an existing channel from its type.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters:</dt>
<dd class="field-odd"><p class><strong>channel_type</strong> (<a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel"><em>Channel</em></a>) – The channel type.</p>
</dd>
<dt class="field-even">Returns:</dt>
<dd class="field-even"><p class>The channel.</p>
</dd>
<dt class="field-odd">Return type:</dt>
<dd class="field-odd"><p class><a class="reference internal" href="channel.html#substance_painter.textureset.Channel" title="substance_painter.textureset.Channel">Channel</a></p>
</dd>
<dt class="field-even">Raises:</dt>
<dd class="field-even"><ul class="simple">
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p class><a class="reference internal" href="../exception.html#substance_painter.exception.ServiceNotFoundError" title="substance_painter.exception.ServiceNotFoundError"><strong>ServiceNotFoundError</strong></a> – If Substance 3D Painter has not started all its services yet.</p></li>
<li><p class><strong>ValueError</strong> – If the channel doesn’t exists.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class>See also</p>
<p class><a class="reference internal" href="#substance_painter.textureset.Stack.has_channel" title="substance_painter.textureset.Stack.has_channel"><code class="xref py py-meth docutils literal notranslate">Stack.has_channel()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.add_channel" title="substance_painter.textureset.Stack.add_channel"><code class="xref py py-meth docutils literal notranslate">Stack.add_channel()</code></a>,
<a class="reference internal" href="#substance_painter.textureset.Stack.remove_channel" title="substance_painter.textureset.Stack.remove_channel"><code class="xref py py-meth docutils literal notranslate">Stack.remove_channel()</code></a>.</p>
</div>
</dd></dl>












