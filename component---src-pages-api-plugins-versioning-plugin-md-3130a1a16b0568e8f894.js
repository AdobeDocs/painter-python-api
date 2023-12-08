"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9881],{27001:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return _}});var o=t(87462),r=t(63366),s=(t(15007),t(64983)),a=t(91515),i=["components"],l={},p={_frontmatter:l},c=a.Z;function _(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.mdx)(c,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",null,"Versioning Plugin",(0,s.mdx)("a",{className:"headerlink",href:"#versioning-plugin",title:"Link to this heading"}," ")),(0,s.mdx)("div",{className:"code-block-caption"},"versioning_plugin.py",(0,s.mdx)("a",{className:"headerlink",href:"#id1",title:"Link to this code"}," ")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-python"},'##########################################################################\n# ADOBE CONFIDENTIAL\n# ___________________\n# Copyright 2010-2020 Adobe\n# All Rights Reserved.\n# NOTICE:  All information contained herein is, and remains\n# the property of Adobe and its suppliers, if any. The intellectual\n# and technical concepts contained herein are proprietary to Adobe\n# and its suppliers and are protected by all applicable intellectual\n# property laws, including trade secret and copyright laws.\n# Dissemination of this information or reproduction of this material\n# is strictly forbidden unless prior written permission is obtained\n# from Adobe.\n##########################################################################\n"""This is a skeleton for a plugin to integrate Substance 3D Painter with a versioning system.\n\nThis plugin listens for project events and provides a custom export action. All methods\nwhose name starts with ``on_`` can be customized to integrate the application with a\nversioning system.\n"""\n\nfrom PySide2 import QtWidgets, QtCore\nimport substance_painter.export\nimport substance_painter.project\nimport substance_painter.textureset\nimport substance_painter.ui\n\n\nclass VersioningPlugin:\n    def __init__(self):\n        # Create a dock widget to report plugin activity.\n        self.log = QtWidgets.QTextEdit()\n        self.log.setReadOnly(True)\n        self.log.setWindowTitle("Projects Versioning")\n        substance_painter.ui.add_dock_widget(self.log)\n        # Create a custom export action in the FILE application menu.\n        self.export_action = QtWidgets.QAction("Versioned Export...")\n        self.export_action.triggered.connect(self.export_textures)\n        substance_painter.ui.add_action(\n            substance_painter.ui.ApplicationMenu.File,\n            self.export_action\n        )\n        # Subscribe to project related events.\n        connections = {\n            substance_painter.event.ProjectOpened: self.on_project_opened,\n            substance_painter.event.ProjectCreated: self.on_project_created,\n            substance_painter.event.ProjectAboutToClose: self.on_project_about_to_close,\n            substance_painter.event.ProjectAboutToSave: self.on_project_about_to_save,\n            substance_painter.event.ProjectSaved: self.on_project_saved,\n        }\n        for event, callback in connections.items():\n            substance_painter.event.DISPATCHER.connect(event, callback)\n\n    def __del__(self):\n        # Remove all added UI elements.\n        substance_painter.ui.delete_ui_element(self.log)\n        substance_painter.ui.delete_ui_element(self.export_action)\n\n    def on_project_opened(self, e):\n        self.log.append("Project `{}` opened.".format(substance_painter.project.name()))\n        ##################################\n        # Add custom integration code here\n\n    def on_project_created(self, e):\n        self.log.append("New project created.")\n        ##################################\n        # Add custom integration code here\n\n    def on_project_about_to_close(self, e):\n        self.log.append("Project `{}` closed.".format(substance_painter.project.name()))\n        ##################################\n        # Add custom integration code here\n\n    def on_project_about_to_save(self, e):\n        self.log.append("Project will be saved in `{}`.".format(e.file_path))\n        ##################################\n        # Add custom integration code here\n\n    def on_project_saved(self, e):\n        self.log.append("Project `{}` saved.".format(substance_painter.project.name()))\n        ##################################\n        # Add custom integration code here\n\n    def on_export_about_to_start(self, export_configuration):\n        self.log.append("Export textures.")\n        ##################################\n        # Add custom integration code here\n\n    def on_export_finished(self, res):\n        self.log.append(res.message)\n        self.log.append("Exported files:")\n        for file_list in res.textures.values():\n            for file_path in file_list:\n                self.log.append("  {}".format(file_path))\n        ##################################\n        # Add custom integration code here\n\n    def on_export_error(self, err):\n        self.log.append("Export failed.")\n        self.log.append(repr(err))\n        ##################################\n        # Add custom integration code here\n\n    @QtCore.Slot()\n    def export_textures(self):\n        """Export base color of all Texture Sets to a location choosen by the user."""\n        json_config = dict()\n        # Set export directory.\n        export_path = QtWidgets.QFileDialog.getExistingDirectory(\n            substance_painter.ui.get_main_window(),\n            "Choose export directoty")\n        if not export_path:\n            # Export aborted.\n            return\n        json_config["exportPath"] = export_path + "/" + substance_painter.project.name()\n        # Export configuration.\n        json_config["exportShaderParams"] = False\n        channels = []\n        for channel in "RGBA":\n            channels.append({\n                "destChannel": channel,\n                "srcChannel": channel,\n                "srcMapType": "DocumentMap",\n                "srcMapName": "BaseColor"\n            })\n        json_config["exportPresets"] = [{\n            "name": "OnlyBaseColorExamplePreset",\n            "maps": [{\n                "fileName": "$textureSet_BaseColor",\n                "channels": channels,\n            }]\n        }]\n        json_config["exportParameters"] = [{\n            "parameters": {\n                "fileFormat" : "png",\n                "bitDepth" : "8",\n                "dithering": True,\n                "paddingAlgorithm": "infinite"\n            }\n        }]\n        # Create the list of Texture Sets to export.\n        json_config["exportList"] = []\n        for texture_set in substance_painter.textureset.all_texture_sets():\n            try:\n                stack = texture_set.get_stack()\n                channel = stack.get_channel(substance_painter.textureset.ChannelType.BaseColor)\n                if channel.is_color():\n                    json_config["exportList"].append({\n                        "rootPath": texture_set.name(),\n                        "exportPreset" : "OnlyBaseColorExamplePreset",\n                    })\n            except:\n                pass\n        # Do the export.\n        self.on_export_about_to_start(json_config)\n        try:\n            res = substance_painter.export.export_project_textures(json_config)\n            self.on_export_finished(res)\n        except ValueError as err:\n            self.on_export_error(err)\n\n\nVERSIONING_PLUGIN = None\n\n\ndef start_plugin():\n    """This method is called when the plugin is started."""\n    global VERSIONING_PLUGIN\n    VERSIONING_PLUGIN = VersioningPlugin()\n\n\ndef close_plugin():\n    """This method is called when the plugin is stopped."""\n    global VERSIONING_PLUGIN\n    del VERSIONING_PLUGIN\n\n\nif __name__ == "__main__":\n    start_plugin()\n')))}_.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-plugins-versioning-plugin-md-3130a1a16b0568e8f894.js.map