"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[770],{17891:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var r=t(87462),o=t(63366),a=(t(15007),t(64983)),s=t(91515),i=["components"],d={},p={_frontmatter:d},c=s.Z;function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.mdx)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"randomize-all-seeds-in-a-project"},"Randomize all seeds in a project"),(0,a.mdx)("p",null,"This example adds an action in the Edit menu to randomize all the random seed properties from the Substance present in the current project."),(0,a.mdx)("hr",null),(0,a.mdx)("p",null,"To use this example:"),(0,a.mdx)("blockquote",null,(0,a.mdx)("ol",{parentName:"blockquote"},(0,a.mdx)("li",{parentName:"ol"},"Go to your Python plugin folder (see ",(0,a.mdx)("a",{parentName:"li",href:"/painter-python-api/guides/creating-python-plugin/"},"this page")," to know where)"),(0,a.mdx)("li",{parentName:"ol"},"Create a folder named ",(0,a.mdx)("strong",{parentName:"li"},"blending_mode")),(0,a.mdx)("li",{parentName:"ol"},"Create a file named ",(0,a.mdx)("strong",{parentName:"li"},(0,a.mdx)("strong",{parentName:"strong"},"init"),".py")),(0,a.mdx)("li",{parentName:"ol"},"Copy the code below inside the file."))),(0,a.mdx)("hr",null),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'import os\nimport re\nimport sys\nimport math\nimport json\nimport random\nfrom datetime import datetime\n\nfrom PySide2 import QtGui\nfrom PySide2 import QtCore\nfrom PySide2 import QtWidgets\nimport substance_painter as sp\nimport substance_painter_plugins as spp\n\nWIDGETS = []\n\nValidNodeTypes = (\n    sp.layerstack.NodeType.FillLayer,\n    sp.layerstack.NodeType.FillEffect,\n    sp.layerstack.NodeType.FilterEffect,\n    sp.layerstack.NodeType.GeneratorEffect\n)\n\ndef GetSourceMode( Source ) :\n    try:\n        return Source.source_mode\n    except:\n        return None\n\ndef CheckForRandomseed( CurrentSource, Sources ) :\n    if type( CurrentSource ) == sp.source.SourceSubstance :\n        Parameters = CurrentSource.get_parameters()\n\n        # Check if the Substance has a random seed\n        if "$randomseed" in Parameters :\n            Sources.append( CurrentSource )\n\n        # Check if any of the inputs of the Substance has another\n        # Substance with a random seed too\n        for Name in CurrentSource.image_inputs :\n            InputSource = CurrentSource.get_source( Name )\n            CheckForRandomseed( InputSource, Sources )\n\ndef FindSources( Node, Sources ) :\n    if Node.get_type() in ValidNodeTypes :\n        Source = []\n        Mode = GetSourceMode( Node )\n\n        if Mode == sp.source.SourceMode.Material :\n            Source.append( Node.get_material_source() )\n\n        elif Mode == sp.source.SourceMode.Split :\n            for Channel in Node.active_channels :\n                Source.append( Node.get_source( Channel ) )\n\n        else :\n            Source.append( Node.get_source() )\n\n        for CurrentSource in Source :\n            CheckForRandomseed( CurrentSource, Sources )\n\ndef IterateLayer( Parent, Sources ) :\n    if Parent.get_type() == sp.layerstack.NodeType.FillLayer :\n        FindSources( Parent, Sources )\n\n    if Parent.get_type() == sp.layerstack.NodeType.FillLayer \\\n    or Parent.get_type() == sp.layerstack.NodeType.GroupLayer \\\n    or Parent.get_type() == sp.layerstack.NodeType.PaintLayer :\n        for Effect in Parent.content_effects() :\n            FindSources( Effect, Sources )\n\n        for Effect in Parent.mask_effects() :\n            FindSources( Effect, Sources )\n\n    if Parent.get_type() == sp.layerstack.NodeType.GroupLayer :\n        for Layer in Parent.sub_layers() :\n            IterateLayer( Layer, Sources )\n\ndef RandomizeSeed() :\n    if not sp.project.is_open():\n        sp.logging.warning( "No project open" )\n        return\n\n    # Sources list\n    Sources = []\n\n    # List all stacks and gather their resources\n    for TextureSet in sp.textureset.all_texture_sets() :\n        for Stack in TextureSet.all_stacks() :\n            for Layer in sp.layerstack.get_root_layer_nodes( Stack ) :\n                IterateLayer( Layer, Sources )\n\n    # Setup parameters\n    Parameters = { "$randomseed" : random.getrandbits(16) }\n\n    # Batch\n    with sp.layerstack.ScopedModification( "Randomize all the seeds" ) :\n        for Source in Sources :\n            Source.set_parameters( Parameters )\n\ndef start_plugin():\n    Action = QtWidgets.QAction(\n        "Randomize all seeds",\n        triggered=RandomizeSeed\n    )\n\n    sp.ui.add_action(\n        sp.ui.ApplicationMenu.Edit,\n        Action\n    )\n\n    WIDGETS.append( Action )\n\ndef close_plugin():\n    for Widget in WIDGETS :\n        sp.ui.delete_ui_element( Widget )\n\nif __name__ == "__main__":\n    start_plugin()\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-examples-random-seed-md-0cfea91e9a0cc32359fb.js.map