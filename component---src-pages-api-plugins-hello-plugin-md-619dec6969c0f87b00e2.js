"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9391],{52437:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return _}});var i=t(87462),l=t(63366),o=(t(15007),t(64983)),d=t(91515),a=["components"],r={},s={_frontmatter:r},p=d.Z;function _(e){var n=e.components,t=(0,l.Z)(e,a);return(0,o.mdx)(p,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Hello Plugin — Substance 3D Painter Python API 0.2.11 documentation"),(0,o.mdx)("h1",{id:"hello-plugin"},"Hello Plugin"),(0,o.mdx)("p",null,"hello_plugin.py"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'##########################################################################\n# ADOBE CONFIDENTIAL\n# ___________________\n# Copyright 2010-2020 Adobe\n# All Rights Reserved.\n# NOTICE:  All information contained herein is, and remains\n# the property of Adobe and its suppliers, if any. The intellectual\n# and technical concepts contained herein are proprietary to Adobe\n# and its suppliers and are protected by all applicable intellectual\n# property laws, including trade secret and copyright laws.\n# Dissemination of this information or reproduction of this material\n# is strictly forbidden unless prior written permission is obtained\n# from Adobe.\n##########################################################################\n"""The hello world of python scripting in Substance 3D Painter\n"""\n\nfrom PySide2 import QtWidgets\nimport substance_painter.ui\n\nplugin_widgets = []\n"""Keep track of added ui elements for cleanup"""\n\ndef start_plugin():\n    """This method is called when the plugin is started."""\n    # Create a simple text widget\n    hello_widget = QtWidgets.QTextEdit()\n    hello_widget.setText("Hello from python scripting!")\n    hello_widget.setReadOnly(True)\n    hello_widget.setWindowTitle("Hello Plugin")\n    # Add this widget as a dock to the interface\n    substance_painter.ui.add_dock_widget(hello_widget)\n    # Store added widget for proper cleanup when stopping the plugin\n    plugin_widgets.append(hello_widget)\n\ndef close_plugin():\n    """This method is called when the plugin is stopped."""\n    # We need to remove all added widgets from the UI.\n    for widget in plugin_widgets:\n        substance_painter.ui.delete_ui_element(widget)\n    plugin_widgets.clear()\n\nif __name__ == "__main__":\n    start_plugin()\n\n')))}_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-plugins-hello-plugin-md-619dec6969c0f87b00e2.js.map