---
title: export - Painter Python API
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

<span id="export-module"></span><h1>export module<a class="headerlink" href="#module-substance_painter.export" title="Link to this heading"> </a></h1>
<p>This module exposes functions to export assets (textures and meshes) from a project under a variety
of formats. It is the scripting equivalent of the “Export textures” and the “Export mesh” windows.</p>
<p>For the export textures, the export configuration is defined with a JSON file, but can also use
existing export presets.</p>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.export.ExportStatus">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">ExportStatus</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.export.ExportStatus" title="Link to this definition"> </a></dt>
<dd><p>Status code of the export process.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Success</span></code></p></td>
<td><p>The export was successful.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Cancelled</span></code></p></td>
<td><p>The export was cancelled by the user.</p></td>
</tr>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">Warning</span></code></p></td>
<td><p>The export completed with warnings.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">Error</span></code></p></td>
<td><p>The export could not complete; the cause is detailed in the log.</p></td>
</tr>
</tbody>
</table>
</dd></dl>

<h2>Export Textures<a class="headerlink" href="#export-textures" title="Link to this heading"> </a></h2>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.export.list_project_textures">
<span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">list_project_textures</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">json_config</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">dict</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></span><a class="headerlink" href="#substance_painter.export.list_project_textures" title="Link to this definition"> </a></dt>
<dd><p>Get list of textures that would be exported according to the given JSON configuration.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>json_config</strong> (<em>dict</em>) – JSON object representing the export configuration to be used.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>List of texture files
that would be exported, grouped by stack (Texture Set name, stack name).</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><em>Dict</em>[<em>Tuple</em>[str, str], <em>List</em>[str]]</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">json_config</span></code> is ill-formed, or is invalid in the context
    of the current project.
    Contains a human readable message.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="#substance_painter.export.export_project_textures" title="substance_painter.export.export_project_textures"><code class="xref py py-func docutils literal notranslate"><span class="pre">export_project_textures()</span></code></a>.</p>
</div>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.export.TextureExportResult">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">TextureExportResult</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">status</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus"><span class="pre">ExportStatus</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">textures</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.export.TextureExportResult" title="Link to this definition"> </a></dt>
<dd><p>Result of the export textures process</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.export.TextureExportResult.status">
<span class="sig-name descname"><span class="pre">status</span></span><a class="headerlink" href="#substance_painter.export.TextureExportResult.status" title="Link to this definition"> </a></dt>
<dd><p>Status code.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus">ExportStatus</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.export.TextureExportResult.message">
<span class="sig-name descname"><span class="pre">message</span></span><a class="headerlink" href="#substance_painter.export.TextureExportResult.message" title="Link to this definition"> </a></dt>
<dd><p>Human readable status message.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.export.TextureExportResult.textures">
<span class="sig-name descname"><span class="pre">textures</span></span><a class="headerlink" href="#substance_painter.export.TextureExportResult.textures" title="Link to this definition"> </a></dt>
<dd><p>List of texture files
written to disk, grouped by stack (Texture Set name, stack name).</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><em>Dict</em>[<em>Tuple</em>[str, str], <em>List</em>[str]]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.export.export_project_textures">
<span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">export_project_textures</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">json_config</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">dict</span></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.export.TextureExportResult" title="substance_painter.export.TextureExportResult"><span class="pre">TextureExportResult</span></a></span></span><a class="headerlink" href="#substance_painter.export.export_project_textures" title="Link to this definition"> </a></dt>
<dd><p>Export document textures according to the given JSON configuration. The
return value contains the list of texture files written to disk.</p>
<p>The status of the return value can never be <cite>Error</cite>, any error causing the
*export* to fail will raise an exception instead. However if the *export* fails,
the associated event <cite>ExportTextureEnded</cite> will indeed receive <cite>Error</cite> as a
status.
If the export is cancelled by the user, the function return value will have
the status <cite>Cancelled</cite> and contain the list of texture files written to disk
before export was cancelled.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>json_config</strong> (<em>dict</em>) – JSON object representing the export configuration to be used.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>Result of the export process.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.export.TextureExportResult" title="substance_painter.export.TextureExportResult">TextureExportResult</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">json_config</span></code> is ill-formed, or is invalid in the context
    of the current project. Contains a human readable message detailing
    the problem.</p></li>
</ul>
</dd>
</dl>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="event.html#substance_painter.event.ExportTexturesAboutToStart" title="substance_painter.event.ExportTexturesAboutToStart"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ExportTexturesAboutToStart</span></code></a>,
<a class="reference internal" href="event.html#substance_painter.event.ExportTexturesEnded" title="substance_painter.event.ExportTexturesEnded"><code class="xref py py-class docutils literal notranslate"><span class="pre">substance_painter.event.ExportTexturesEnded</span></code></a>.</p>
</div>
<p>Example:</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.export

# Open a project we want to export from (see substance_painter.project
# for details). This step is not necessary if there is already a project
# opened in Substance 3D Painter.
import substance_painter.project
substance_painter.project.open("C:/projects/MeetMat.spp")

# Choose an export preset to use (see substance_painter.resource). This
# step is not mandatory as you can alternatively describe the export
# preset entirely in JSON (see the full example at the bottom of the
# page).
# Note: in this example the preset file format and bit depth are
# overridden below for '03_Base', but otherwise follow the export preset
# configuration.
import substance_painter.resource
export_preset = substance_painter.resource.ResourceID(
	context="starter_assets", name="Arnold (AiStandard)")

# Set the details of the export (a comprehensive example of all the
# configuration options is presented at the bottom of the page):
export_config = {
	"exportShaderParams": False,
	"exportPath": "C:/export",
	"defaultExportPreset" : export_preset.url(),
	"exportList": [
		{
			"rootPath": "01_Head"
		},
		{
			"rootPath": "02_Body"
		},
		{
			"rootPath": "03_Base"
		}],
	"exportParameters": [
		# No filters: those parameters apply to all exported maps
		{
			"parameters": {
				"dithering": True,
				"paddingAlgorithm": "infinite"
			}
		},
		# Force file format and bitDepth for all maps in '03_Base'
		{
			"filter": {"dataPaths": ["03_Base"]},
			"parameters": {
				"fileFormat" : "png",
				"bitDepth" : "8"
			}
		},
		# Force 2K size for all maps in '01_Head'
		{
			"filter": {"dataPaths": ["01_Head"]},
			"parameters": {
				"sizeLog2": 11
			}
		}]
	}

# Display the list of textures that should be exported, according to the
# configuration:
export_list = substance_painter.export.list_project_textures(export_config)
for k,v in export_list.items():
	print("Stack {0}:".format(k))
	for to_export in v:
		print(to_export)

# Actual export operation:
export_result = substance_painter.export.export_project_textures(export_config)

# In case of error, display a human readable message:
if export_result.status != substance_painter.export.ExportStatus.Success:
	print(export_result.message)

# Display the details of what was exported:
for k,v in export_result.textures.items():
	print("Stack {0}:".format(k))
	for exported in v:
		print(exported)
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a>,
<a class="reference internal" href="resource.html#module-substance_painter.resource" title="substance_painter.resource"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.resource</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-export">Export documentation</a>.</p>
</div>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.export.get_default_export_path">
<span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">get_default_export_path</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">str</span></span></span><a class="headerlink" href="#substance_painter.export.get_default_export_path" title="Link to this definition"> </a></dt>
<dd><p>Get the default export path used for exporting textures.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The default export path.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>str</p>
</dd>
</dl>
</dd></dl>


<h2>Full json_config dict possibilities<a class="headerlink" href="#full-json-config-dict-possibilities" title="Link to this heading"> </a></h2>
<div class="highlight-javascript notranslate"><div class="highlight"><pre>{

	// Path to the root folder where texture files will be exported.
	"exportPath" : "C:/export",

	// Whether to export shader instances to a JSON file.
	"exportShaderParams" : true,

	// (optional) Export preset to be used when no export preset is provided in
	// "exportList.exportPreset".
	// The value can be the name of a preset defined in the "exportPresets" part
	// of the configuration JSON:
	"defaultExportPreset" : "preset1",
	// Alternatively the value can be a URL to an existing preset file (see
	// substance_painter.resource) listed in the export dialog:
	// "defaultExportPreset" : substance_painter.resource.ResourceID(
	//	 context="starter_assets",
	//	 name="PBR Metallic Roughness").url(),

	// (optional) List of export presets definitions.
	"exportPresets" : [{

	  // Defines the name of the export preset. This name can be referenced in
	  // "defaultExportPreset" and/or "exportList.exportPreset".
	  "name" : "preset1",

	  // List of maps making up this export preset.
	  "maps" : [{

		// Filename of the texture file written to disk; may contain wildcards
		// resolved at export time.
		// (e.g. "$project_$mesh_$textureSet_$udim_$sceneMaterial_BaseColor")
		//
		//	 $project: Project name.
		//	 $mesh: Filename of the imported mesh.
		//	 $textureSet: Current Texture Set.
		//	 $sceneMaterial: Current material name, as found in the imported
		//	 mesh.
		//	 $udim: Current UV Tile (e.g. 1001).
		"fileName" : "$textureSet_color",

		// List of source/destination defining which channels will make up the
		// texture file.
		"channels" : [{

		  // Channel to write to.
		  //	 L (Luminance), R (Red), G (Green), B (Blue), A (Alpha)
		  //
		  // In addition to alpha channel, either R+G+B must be specified, or
		  // either L only.
		  "destChannel" : "R",

		  // Channel to read from.
		  //	 L, R, G, B, A
		  //
		  // When the source map is color, L will generate a mix of R+G+B.
		  "srcChannel" : "R",

		  // The type of map to read from:
		  //	 documentMap: Maps present in the document (e.g. "baseColor").
		  //	 meshMap: Baked mesh maps (e.g. "normal").
		  //	 virtualMap: Generated map (e.g. "f0").
		  //	 defaultMap: Constant color (e.g. "black").
		  "srcMapType" : "documentMap",

		  // Name of the map of type scrMapType.
		  //
		  // For type documentMap:
		  //	 basecolor, height, specular, opacity, emissive, displacement,
		  //	 glossiness, roughness, anisotropylevel, anisotropyangle,
		  //	 transmissive, scattering, reflection, ior, metallic, normal,
		  //	 ambientOcclusion, diffuse, specularlevel, blendingmask, user0,
		  //	 user1, user2, user3, user4, user5, user6, user7.
		  //
		  // For type meshMap:
		  //	 ambient_occlusion, id, curvature, normal_base,
		  //	 world_space_normals, position, thickness.
		  //
		  // For type virtualMap:
		  //	 Normal_OpenGL, Normal_DirectX, AO_Mixed, Diffuse, Specular,
		  //	 Glossiness, Unity4Diff, Unity4Gloss, reflection, 1/ior,
		  //	 Glossiness2, f0, View_2D.
		  //
		  // For type defaultMap:
		  //	black, white.
		  "srcMapName" : "baseColor"

		}],

		// (optional) Export parameters to be used for this export preset map.
		//
		// When "parameters" is not provided, the existing parameters are used.
		// When "parameters" is provided, it overrides the existing parameters.
		//
		// Each individual parameter is optional and, when defined, overrides
		// previously defined parameters. See in exportList.parameters how the
		// rules are applied.
		//
		// It is important to understand that even though this section is
		// optional, if after evaluating all the rules some parameters remain
		// undefined, the configuration is invalid.
		"parameters" : {

		  // (optional) File format (and file extension) of the generated
		  // texture file.
		  "fileFormat" : "png",

		  // (optional) Bit depth.
		  //
		  // The bit depth must be supported by the file format.
		  "bitDepth" : "16",

		  // (optional) Whether to use dithering.
		  "dithering" : false,

		  // (optional) Size of the texture file in log2.
		  // (i.e. 10 means 2^10 = 1024)
		  //
		  // When "sizeLog2" is not provided, the texture size from the project
		  // is used.
		  //
		  // It can either be a single integer, or an array of two integers.
		  //
		  // If it's a single integer, it represents the biggest of width and
		  // height, and will maintain the aspect ratio.
		  // (i.e. 10 means a 2048x4086 map will be exported as 512x1024)
		  //
		  // If it's an array of two integers, the original aspect ratio will be
		  // ignored.
		  // (i.e. [10, 12] means a 2048x4086 map will be exported as 1024x4096)
		  "sizeLog2" : 10,

		  // (optional) Padding algorithm used to fill holes in rendered
		  // texture.
		  //
		  // The possible values are:
		  //	 passthrough, color, transparent, diffusion, infinite.
		  "paddingAlgorithm" : "diffusion",

		  // (optional) When padding algorithm needs it, distance in pixels used
		  // by the padding algorithm.
		  //
		  // Dilation distance is needed for transparent, color and diffusion
		  // padding algorithms.
		  "dilationDistance" : 16

		}
	  }]
	}],

	// List of subparts of the document to export.
	"exportList" : [{

	  // Root path of the document structure this subpart applies to.
	  //
	  // For Texture Sets without stacks, this is a Texture Set name.
	  // (e.g. "O1_Head")
	  // For Texture Sets with stacks, this is Texture Set name + stack name
	  // separated by /
	  "rootPath" : "02_Body/Mask",

	  // (optional) In the selected rootPath, which maps to export.
	  //
	  // When "filter" is not provided, export everything.
	  "filter" : {

		// Which maps to export, as an array of map names.
		//
		// The map names are to be used as defined in
		// exportPresets.maps.fileName, including wildcards.
		// (e.g. ["$textureSet_color", "$textureSet_normal"])
		"outputMaps" : ["$textureSet_color"],

		// Which UV Tiles to export, as an array of tile coordinates.
		// A tile coordinate is a 2 dimensional array of U and V coordinates.
		// (e.g. [[1, 1], [1, 2]] to export tiles U=1, V=1 and U=1, V=2)
		"uvTiles" : [[1, 1]]

	  },

	  // (optional) Export preset to use. If undefined, fall back to
	  // "defaultExportPreset" value.
	  // The value can be the name of a preset defined in "exportPresets":
	  "exportPreset" : "preset1"
	  // Alternatively the value can be a URL to an existing preset file (see
	  // substance_painter.resource) listed in the export dialog:
	  // "defaultExportPreset" : substance_painter.resource.ResourceID(
	  //	 context="starter_assets",
	  //	 name="PBR Metallic Roughness").url(),

	}],

	// List of rules used to override export parameters of texture files.
	//
	// For each exported texture file, the export process will go through this
	// list, in the order they are provided, to override export parameters.
	// Available export parameters are:
	//	fileFormat, bitDepth, dithering, sizeLog2, paddingAlgorithm and
	//	dilationDistance.
	// (see exportPresets.map.parameters)
	//
	// For each possible export parameter of each texture file:
	// First, the parameter is initialized with the value provided by the
	// exportPreset.maps.parameters, if any.
	// Then, the export process iterates the rules of exportParameters and tries
	// to match the texture file with the filter.
	// If the filter matches, the parameter is overridden by this rule, else it
	// stays untouched.
	//
	// At the end of the process, every parameter of every texture file must be
	// defined for the export process to be able to continue.
	// To achieve this, a good practice may be to define a default value for all
	// the parameters:
	// - For each preset map
	// - With a global exportParameters rule using a filter that always matches
	"exportParameters" : [{

	  // (optional) Select which texture files match the current rule.
	  // (i.e. for which texture files this rule will override parameters)
	  //
	  // When "filter" is not provided, select everything.
	  //
	  // Examples:
	  //	 Filter that matches all:
	  //		 "filter" : {}
	  //
	  //	 Filter that matches some Texture Sets:
	  //		 "filter" : {"dataPaths": ["01_Head", "02_Body"]}
	  //
	  //	 Filter that matches some outputMaps:
	  //		 "filter" : {"outputMaps": ["$textureSet_color"]}
	  //
	  //	 Filter that matches nothing:
	  //		 "filter" : {"dataPaths": []}
	  //
	  //	 Use of a combined filter to match a Texture Set for some
	  //	 outputMaps:
	  //		 "filter" : {"dataPaths": ["01_Head"],
	  //	 "outputMaps" : ["$textureSet_color"]}
	  "filter" : {

		// List of rootPaths to match.
		//
		// This can be a mix of:
		// - Texture Set names only, even for Texture Sets with stacks
		// - Stack names, when stacks are used
		"dataPaths": ["01_Head", "02_Body/Mask"],

		// List of map names to match.
		//
		// The map names are to be used as defined in "exportPresets.maps.fileName",
		// including wildcards.
		"outputMaps": ["$textureSet_color"],

		 // List of UV Tiles to match, as an array of tile coordinates.
		 // A tile coordinate is a 2 dimensional array of U and V coordinates.
		 // (e.g. [[1, 1], [1, 2]] to export tiles U=1, V=1 and U=1, V=2)
		 "uvTiles" : [[1, 1]]

	  },

	  // (optional) Parameters to apply to the matched texture files as per the
	  // current rule.
	  //
	  // When "parameters" is not provided, the existing parameters are used.
	  // When "parameters" is provided, it overrides the existing parameters.
	  //
	  // Each individual parameter is optional and, when defined, overrides
	  // previously defined parameters (coming from the selected preset).
	  //
	  // It is important to understand that even though this section is
	  // optional, if after evaluating all the rules some parameters remain
	  // undefined, the configuration is invalid.
	  //
	  // In this example, we're setting a different texture size for the color
	  // map of both 01_Head and 02_Body/Mask, leaving settings on maps and
	  // other data paths, and leaving the other parameters untouched.
	  "parameters" : {

		"sizeLog2" :  11

	  }
	}]
}
</pre></div>
</div>


<h2>Events<a class="headerlink" href="#events" title="Link to this heading"> </a></h2>
<p>Exporting textures, whether initiated through the Python API or in the UI,
can trigger the following events.
See <a class="reference internal" href="event.html#module-substance_painter.event" title="substance_painter.event"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.event</span></code></a> for more details.</p>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ExportTexturesAboutToStart</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">textures</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Event triggered just before a textures export.</p>
<dl class="py attribute">
<dt class="sig sig-object py">
<span class="sig-name descname"><span class="pre">textures</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></em></dt>
<dd><p>List of texture files
to be written to disk, grouped by stack (Texture Set name, stack name).</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>Dict[Tuple[str, str], List[str]]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.event.</span></span><span class="sig-name descname"><span class="pre">ExportTexturesEnded</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">status</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus"><span class="pre">ExportStatus</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">textures</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></em><span class="sig-paren">)</span></dt>
<dd><p>Event triggered after textures export is finished.</p>
<dl class="py attribute">
<dt class="sig sig-object py">
<span class="sig-name descname"><span class="pre">message</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">str</span></em></dt>
<dd><p>Human readable status message.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py">
<span class="sig-name descname"><span class="pre">status</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><a class="reference internal" href="#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus"><span class="pre">ExportStatus</span></a></em></dt>
<dd><p>Status code.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus">ExportStatus</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py">
<span class="sig-name descname"><span class="pre">textures</span></span><em class="property"><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="pre">Dict</span><span class="p"><span class="pre">[</span></span><span class="pre">Tuple</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">,</span></span><span class="w"> </span><span class="pre">List</span><span class="p"><span class="pre">[</span></span><span class="pre">str</span><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></em></dt>
<dd><p>List of texture files
written to disk, grouped by stack (Texture Set name, stack name).</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>Dict[Tuple[str, str], List[str]]</p>
</dd>
</dl>
</dd></dl>
</dd></dl>


<h2>Export Mesh<a class="headerlink" href="#export-mesh" title="Link to this heading"> </a></h2>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.export.scene_is_triangulated">
<span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">scene_is_triangulated</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.export.scene_is_triangulated" title="Link to this definition"> </a></dt>
<dd><p>Check if the scene has only triangles (polygons with only 3 sides).</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>True if the current scene has only triangles, False otherwise.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.export.scene_has_tessellation">
<span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">scene_has_tessellation</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><span class="pre">bool</span></span></span><a class="headerlink" href="#substance_painter.export.scene_has_tessellation" title="Link to this definition"> </a></dt>
<dd><p>Check if the scene has displacement/tessellation enabled.</p>
<dl class="field-list simple">
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>True if the current scene has displacement/tessellation, False otherwise.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p>bool</p>
</dd>
<dt class="field-odd">Raises<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p>
</dd>
</dl>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.export.MeshExportOption">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">MeshExportOption</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">value</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.export.MeshExportOption" title="Link to this definition"> </a></dt>
<dd><p>Options available for the mesh export.</p>
<p>Members:</p>
<table class="docutils align-default">
<thead>
<tr class="row-odd"><th class="head"><p>Name</p></th>
<th class="head"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">BaseMesh</span></code></p></td>
<td><p>Export without displacement/tesselation.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">TriangulatedMesh</span></code></p></td>
<td><p>Export without displacement/tesselation and apply triangulation.
Triangulation converts all mesh polygons with more than 3 sides
to triangles (but doesn’t change the triangular ones).
Only avaiblable if the mesh contains such polygons.</p></td>
</tr>
<tr class="row-even"><td><p><code class="docutils literal notranslate"><span class="pre">TessellationNormalsBaseMesh</span></code></p></td>
<td><p>Export with displacement/tessellation. Only available if
displacement or tessellation has been used in the shaders.</p></td>
</tr>
<tr class="row-odd"><td><p><code class="docutils literal notranslate"><span class="pre">TessellationRecomputeNormals</span></code></p></td>
<td><p>Export with displacement/tessellation and recompute vertex
normals. Only available if displacement or
tessellation has been used in the shaders.</p></td>
</tr>
</tbody>
</table>
</dd></dl>
<dl class="py class">
<dt class="sig sig-object py" id="substance_painter.export.MeshExportResult">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">MeshExportResult</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">status</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus"><span class="pre">ExportStatus</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">message</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em><span class="sig-paren">)</span><a class="headerlink" href="#substance_painter.export.MeshExportResult" title="Link to this definition"> </a></dt>
<dd><p>Result of the export mesh process</p>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.export.MeshExportResult.status">
<span class="sig-name descname"><span class="pre">status</span></span><a class="headerlink" href="#substance_painter.export.MeshExportResult.status" title="Link to this definition"> </a></dt>
<dd><p>Status code.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.export.ExportStatus" title="substance_painter.export.ExportStatus">ExportStatus</a></p>
</dd>
</dl>
</dd></dl>
<dl class="py attribute">
<dt class="sig sig-object py" id="substance_painter.export.MeshExportResult.message">
<span class="sig-name descname"><span class="pre">message</span></span><a class="headerlink" href="#substance_painter.export.MeshExportResult.message" title="Link to this definition"> </a></dt>
<dd><p>Human readable status message.</p>
<dl class="field-list simple">
<dt class="field-odd">Type<span class="colon">:</span></dt>
<dd class="field-odd"><p>str</p>
</dd>
</dl>
</dd></dl>
</dd></dl>
<dl class="py function">
<dt class="sig sig-object py" id="substance_painter.export.export_mesh">
<span class="sig-prename descclassname"><span class="pre">substance_painter.export.</span></span><span class="sig-name descname"><span class="pre">export_mesh</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">file_path</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><span class="pre">str</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">option</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#substance_painter.export.MeshExportOption" title="substance_painter.export.MeshExportOption"><span class="pre">MeshExportOption</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">→</span> <span class="sig-return-typehint"><a class="reference internal" href="#substance_painter.export.MeshExportResult" title="substance_painter.export.MeshExportResult"><span class="pre">MeshExportResult</span></a></span></span><a class="headerlink" href="#substance_painter.export.export_mesh" title="Link to this definition"> </a></dt>
<dd><p>Export the current mesh to the given file path.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>file_path</strong> (<em>string</em>) – The complete file path where to export the mesh. The file format is
deduced from the extension.
Supported extensions are: <code class="docutils literal notranslate"><span class="pre">.usd</span></code>, <code class="docutils literal notranslate"><span class="pre">.obj</span></code>, <code class="docutils literal notranslate"><span class="pre">.fbx</span></code>, <code class="docutils literal notranslate"><span class="pre">.dae</span></code>, <code class="docutils literal notranslate"><span class="pre">.ply</span></code>, <code class="docutils literal notranslate"><span class="pre">.gltf</span></code>.</p></li>
<li><p><strong>option</strong> (<a class="reference internal" href="#substance_painter.export.MeshExportOption" title="substance_painter.export.MeshExportOption"><em>MeshExportOption</em></a>) – The export option to use.</p></li>
</ul>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>Result of the export process.</p>
</dd>
<dt class="field-odd">Return type<span class="colon">:</span></dt>
<dd class="field-odd"><p><a class="reference internal" href="#substance_painter.export.MeshExportResult" title="substance_painter.export.MeshExportResult">MeshExportResult</a></p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><ul class="simple">
<li><p><a class="reference internal" href="exception.html#substance_painter.exception.ProjectError" title="substance_painter.exception.ProjectError"><strong>ProjectError</strong></a> – If no project is opened.</p></li>
<li><p><strong>ValueError</strong> – If <code class="docutils literal notranslate"><span class="pre">file_path</span></code> or <code class="docutils literal notranslate"><span class="pre">option</span></code> are invalid in the context
    of the current project. Contains a human readable message detailing
    the problem.</p></li>
</ul>
</dd>
</dl>
<p>Example:</p>
<div class="highlight-default notranslate"><div class="highlight"><pre>import substance_painter.export

# Open a project we want to export from (see substance_painter.project
# for details). This step is not necessary if there is already a project
# opened in Substance 3D Painter.
import substance_painter.project
substance_painter.project.open("C:/projects/MeetMat.spp")

# Choose an export option to use
export_option = substance_painter.export.MeshExportOption.BaseMesh
if not substance_painter.export.scene_is_triangulated():
	export_option = substance_painter.export.MeshExportOption.TriangulatedMesh
if substance_painter.export.scene_has_tessellation():
	export_option = substance_painter.export.MeshExportOption.TessellationNormalsBaseMesh

# Actual export mesh operation:
filename = "C:/projects/MeetMat.obj"
export_result = substance_painter.export.export_mesh(filename, export_option)

# In case of error, display a human readable message:
if export_result.status != substance_painter.export.ExportStatus.Success:
	print(export_result.message)
</pre></div>
</div>
<div class="admonition seealso">
<p class="admonition-title">See also</p>
<p><a class="reference internal" href="project.html#module-substance_painter.project" title="substance_painter.project"><code class="xref py py-mod docutils literal notranslate"><span class="pre">substance_painter.project</span></code></a>,
<a class="reference external" href="https://www.adobe.com/go/painter-export">Export documentation</a>.</p>
</div>
</dd></dl>


</div>
</div>

</div>
</div>

</div>


