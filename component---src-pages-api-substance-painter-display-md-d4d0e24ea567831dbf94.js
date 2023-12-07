"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2913],{44816:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(15007),n(64983)),p=n(91515),i=["components"],m={},s={_frontmatter:m},l=p.Z;function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"display module — Substance 3D Painter Python API 0.2.11 documentation"),(0,o.mdx)("h1",{id:"display-module"},"display module"),(0,o.mdx)("p",null,"This module exposes functions that change how the model of a project is presented\nin the viewports. They correspond to settings available in the “Display\nSettings” window."),(0,o.mdx)("p",null,"The Environment Map used to light the scene can be retrieved with\n",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.get_environment_resource",title:"substance_painter.display.get_environment_resource"},(0,o.mdx)("inlineCode",{parentName:"a"},"get_environment_resource()")),", or set with ",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.set_environment_resource",title:"substance_painter.display.set_environment_resource"},(0,o.mdx)("inlineCode",{parentName:"a"},"set_environment_resource()")),".\nThe look up table (LUT) used as a Color Profile can be retrieved with\n",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.get_color_lut_resource",title:"substance_painter.display.get_color_lut_resource"},(0,o.mdx)("inlineCode",{parentName:"a"},"get_color_lut_resource()")),", or set with ",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.set_color_lut_resource",title:"substance_painter.display.set_color_lut_resource"},(0,o.mdx)("inlineCode",{parentName:"a"},"set_color_lut_resource()")),"."),(0,o.mdx)("p",null,"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'import substance_painter.display\n\n# Show the currently used color profile:\ncolor_lut = substance_painter.display.get_color_lut_resource()\nif (color_lut != None):\n    print(color_lut.url())\nelse:\n    print("No color profile is used.")\n\n# Set a different color profile:\nnew_color_lut = substance_painter.resource.ResourceID(context="starter_assets",\n                                                      name="sepia")\nsubstance_painter.display.set_color_lut_resource(new_color_lut)\n\n\n# Show the currently used environment map:\nenvmap = substance_painter.display.get_environment_resource()\nprint(envmap.url())\n\n# Set a different environment map:\nnew_envmap = substance_painter.resource.ResourceID(context="starter_assets",\n                                                   name="Bonifacio Street")\nsubstance_painter.display.set_environment_resource(new_envmap)\n\n\n# Show the currently active tone mapping operator:\ntry:\n    tone_mapping = substance_painter.display.get_tone_mapping()\n    print(tone_mapping)\nexcept RuntimeError:\n    print("The project is color managed; tone mapping is not available")\n\n# Set a different tone mapping:\ntry:\n    new_tone_mapping = substance_painter.display.ToneMappingFunction.ACES\n    substance_painter.display.set_tone_mapping(new_tone_mapping)\nexcept RuntimeError:\n    print("The project is color managed; tone mapping is not available")\n\n')),(0,o.mdx)("p",null,"See also"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"resource.html#module-substance_painter.resource",title:"substance_painter.resource"},(0,o.mdx)("inlineCode",{parentName:"a"},"substance_painter.resource")),",\n",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/painter-color-profile"},"Color Profile documentation"),",\n",(0,o.mdx)("a",{parentName:"p",href:"https://www.adobe.com/go/painter-environment-settings"},"Environment Settings documentation"),",\n",(0,o.mdx)("a",{parentName:"p",href:"https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html"},"Camera Settings documentation"),"."),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"class")," substance_painter.display.ToneMappingFunction(",(0,o.mdx)("em",{parentName:"p"},"value"),")\nTone mapping function used in display."),(0,o.mdx)("p",null,"This corresponds to the “Tone mapping” list in the “Camera settings” section\nof the “Display settings” view."),(0,o.mdx)("p",null,"Members:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Linear")),(0,o.mdx)("td",{parentName:"tr",align:null},"Transformation from linear to sRGB without any color remapping.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Color values above 1 are clamped."),(0,o.mdx)("td",{parentName:"tr",align:null})),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"ACES")),(0,o.mdx)("td",{parentName:"tr",align:null},"Use the standard color remapping from the Academy Color Encoding")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"System (ACES)."),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("p",null,"substance_painter.display.get_environment_resource() → ",(0,o.mdx)("a",{parentName:"p",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},"ResourceID")," | None\nGet the environment map resource of the active project."),(0,o.mdx)("p",null,"Returns:\nThe environment map resource or None."),(0,o.mdx)("p",null,"Return type:\n",(0,o.mdx)("a",{parentName:"p",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},"ResourceID")),(0,o.mdx)("p",null,"Raises:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ServiceNotFoundError",title:"substance_painter.exception.ServiceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ServiceNotFoundError"))," – If Substance 3D Painter has not started all its\nservices yet.")),(0,o.mdx)("p",null,"substance_painter.display.set_environment_resource(",(0,o.mdx)("em",{parentName:"p"},"new_env_map: ",(0,o.mdx)("a",{parentName:"em",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},"ResourceID")),") → None\nSet the environment map resource of the active project."),(0,o.mdx)("p",null,"Parameters:\n",(0,o.mdx)("strong",{parentName:"p"},"new_env_map")," (",(0,o.mdx)("a",{parentName:"p",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},(0,o.mdx)("em",{parentName:"a"},"ResourceID")),") – The new environment map resource."),(0,o.mdx)("p",null,"Raises:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"TypeError")," – If ",(0,o.mdx)("inlineCode",{parentName:"li"},"new_env_map")," is not a ResourceID."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ResourceNotFoundError",title:"substance_painter.exception.ResourceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ResourceNotFoundError"))," – If the environment map ",(0,o.mdx)("inlineCode",{parentName:"li"},"new_env_map")," is not found."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ServiceNotFoundError",title:"substance_painter.exception.ServiceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ServiceNotFoundError"))," – If Substance 3D Painter has not started all its\nservices yet.")),(0,o.mdx)("p",null,"substance_painter.display.get_color_lut_resource() → ",(0,o.mdx)("a",{parentName:"p",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},"ResourceID")," | None\nGet the color profile LUT resource of the active project."),(0,o.mdx)("p",null,"Returns:\nThe color profile LUT resource or None."),(0,o.mdx)("p",null,"Return type:\n",(0,o.mdx)("a",{parentName:"p",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},"ResourceID")),(0,o.mdx)("p",null,"Raises:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ServiceNotFoundError",title:"substance_painter.exception.ServiceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ServiceNotFoundError"))," – If Substance 3D Painter has not started all its\nservices yet.")),(0,o.mdx)("p",null,"substance_painter.display.set_color_lut_resource(",(0,o.mdx)("em",{parentName:"p"},"new_color_lut: ",(0,o.mdx)("a",{parentName:"em",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},"ResourceID")),") → None\nSet the color profile LUT resource of the active project."),(0,o.mdx)("p",null,"Parameters:\n",(0,o.mdx)("strong",{parentName:"p"},"new_color_lut")," (",(0,o.mdx)("a",{parentName:"p",href:"resource.html#substance_painter.resource.ResourceID",title:"substance_painter.resource.ResourceID"},(0,o.mdx)("em",{parentName:"a"},"ResourceID")),") – The new color profile LUT."),(0,o.mdx)("p",null,"Raises:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"TypeError")," – If ",(0,o.mdx)("inlineCode",{parentName:"li"},"new_color_lut")," is not a ResourceID."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ResourceNotFoundError",title:"substance_painter.exception.ResourceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ResourceNotFoundError"))," – If the color profile ",(0,o.mdx)("inlineCode",{parentName:"li"},"new_color_lut")," is not found."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ServiceNotFoundError",title:"substance_painter.exception.ServiceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ServiceNotFoundError"))," – If Substance 3D Painter has not started all its\nservices yet.")),(0,o.mdx)("p",null,"substance_painter.display.get_tone_mapping() → ",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.ToneMappingFunction",title:"substance_painter.display.ToneMappingFunction"},"ToneMappingFunction"),"\nGet the tone mapping operator used to display the current project."),(0,o.mdx)("p",null,"Note"),(0,o.mdx)("p",null,"The tone mapping function is disabled when color management is enabled.\nIn that case trying to call get_tone_mapping will throw a RuntimeError."),(0,o.mdx)("p",null,"Returns:"),(0,o.mdx)("p",null,"The tone mapping function currently used bythe project."),(0,o.mdx)("p",null,"Return type:\n",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.ToneMappingFunction",title:"substance_painter.display.ToneMappingFunction"},"ToneMappingFunction")),(0,o.mdx)("p",null,"Raises:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"RuntimeError")," – If the project is color managed."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ServiceNotFoundError",title:"substance_painter.exception.ServiceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ServiceNotFoundError"))," – If Substance 3D Painter has not started all its\nservices yet.")),(0,o.mdx)("p",null,"substance_painter.display.set_tone_mapping(",(0,o.mdx)("em",{parentName:"p"},"new_tone_mapping: ",(0,o.mdx)("a",{parentName:"em",href:"#substance_painter.display.ToneMappingFunction",title:"substance_painter.display.ToneMappingFunction"},"ToneMappingFunction")),") → None\nSet the tone mapping operator to display the current project."),(0,o.mdx)("p",null,"Note"),(0,o.mdx)("p",null,"The tone mapping function is disabled when color management is enabled.\nIn that case trying to call set_tone_mapping will throw a RuntimeError."),(0,o.mdx)("p",null,"Parameters:\n",(0,o.mdx)("strong",{parentName:"p"},"new_tone_mapping")," (",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.ToneMappingFunction",title:"substance_painter.display.ToneMappingFunction"},(0,o.mdx)("em",{parentName:"a"},"ToneMappingFunction")),") – The new tone mapping function\nto use in the project."),(0,o.mdx)("p",null,"Raises:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"TypeError")," – If ",(0,o.mdx)("inlineCode",{parentName:"li"},"new_tone_mapping")," is not a ToneMappingFunction."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"RuntimeError")," – If the project is color managed."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ServiceNotFoundError",title:"substance_painter.exception.ServiceNotFoundError"},(0,o.mdx)("strong",{parentName:"a"},"ServiceNotFoundError"))," – If Substance 3D Painter has not started all its\nservices yet.")),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"class")," substance_painter.display.CameraProjectionType(",(0,o.mdx)("em",{parentName:"p"},"value"),")\nCamera projection type."),(0,o.mdx)("p",null,"Members:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Perspective")),(0,o.mdx)("td",{parentName:"tr",align:null},"Objects appear smaller when they are far from the camera.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"Orthographic")),(0,o.mdx)("td",{parentName:"tr",align:null},"Preserves relative size of objects regardless its distance from the camera.")))),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"class")," substance_painter.display.Camera(",(0,o.mdx)("em",{parentName:"p"},"_camera_id: int"),")\nAllows the manipulation of the properties of an existing Camera.\nCoordinates of the camera are defined in the scene space."),(0,o.mdx)("p",null,"Example"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'import substance_painter.display\nimport substance_painter.project\n\nsubstance_painter.project.open("C:/projects/MeetMat.spp")\n\n# Get the dimensions of the scene\nbounding_box = substance_painter.project.get_scene_bounding_box()\n\n# Get the main camera\ncamera = substance_painter.display.Camera.get_default_camera()\n\n# Update camera properties\ncamera.projection_type = substance_painter.display.CameraProjectionType.Perspective\n# Move the camera away from the center of the scene\ncamera.position = [\n    bounding_box.center[0] + 15,\n    bounding_box.center[1],\n    bounding_box.center[2] + 15]\n# Rotate the camera (45° of Y-axis)\ncamera.rotation = [0, 45, 0]\n# Update the camera field of view (in degrees)\ncamera.field_of_view = 50\n\n')),(0,o.mdx)("p",null,"See also"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://substance3d.adobe.com/documentation/spdoc/camera-settings-172818743.html"},"Camera Settings documentation"),".\n",(0,o.mdx)("a",{parentName:"p",href:"project.html#substance_painter.project.get_scene_bounding_box",title:"substance_painter.project.get_scene_bounding_box"},(0,o.mdx)("inlineCode",{parentName:"a"},"substance_painter.project.get_scene_bounding_box()"))),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"static")," get_default_camera() → ",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.Camera",title:"substance_painter.display.Camera"},"Camera"),"\nGet the default camera."),(0,o.mdx)("p",null,"Returns:\nThe default (main) camera."),(0,o.mdx)("p",null,"Return type:\n",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.Camera",title:"substance_painter.display.Camera"},"Camera")),(0,o.mdx)("p",null,"Raises:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"RuntimeError")," – If no camera has been found.")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," position",(0,o.mdx)("em",{parentName:"p"},": List","[float]"),"\nThe position (x,y,z) of the camera."),(0,o.mdx)("p",null,"Getter:\nReturns the position of the camera."),(0,o.mdx)("p",null,"Setter:\nSets the position of the camera."),(0,o.mdx)("p",null,"Type:\nList","[float]"),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," rotation",(0,o.mdx)("em",{parentName:"p"},": List","[float]"),"\nThe rotation (x,y,z) of the camera as Euler angles in degrees."),(0,o.mdx)("p",null,"Getter:\nReturns the rotation of the camera."),(0,o.mdx)("p",null,"Setter:\nSets the rotation of the camera."),(0,o.mdx)("p",null,"Type:\nList","[float]"),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," field_of_view",(0,o.mdx)("em",{parentName:"p"},": float"),"\nThe field of view of the camera in degrees.\nThis value is only used if the ",(0,o.mdx)("inlineCode",{parentName:"p"},"CameraProjectionType")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"Perspective"),"."),(0,o.mdx)("p",null,"Getter:\nReturns the field of view of the camera."),(0,o.mdx)("p",null,"Setter:\nSets the field of view of the camera. Value is clamped between 3 and 179."),(0,o.mdx)("p",null,"Type:\nfloat"),(0,o.mdx)("p",null,"Note"),(0,o.mdx)("p",null,"Modifing the field of view will change the focal length."),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," focal_length",(0,o.mdx)("em",{parentName:"p"},": float"),"\nThe focal length of the camera in mm.\nThis value is only used if the ",(0,o.mdx)("inlineCode",{parentName:"p"},"CameraProjectionType")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"Perspective"),"."),(0,o.mdx)("p",null,"Getter:\nReturns the focal length of the camera."),(0,o.mdx)("p",null,"Setter:\nSets the focal length of the camera. Value is clamped between 1 and 500."),(0,o.mdx)("p",null,"Type:\nfloat"),(0,o.mdx)("p",null,"Note"),(0,o.mdx)("p",null,"Modifing the focal length will change the field of view."),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," focus_distance",(0,o.mdx)("em",{parentName:"p"},": float"),"\nThe focus distance of the camera.\nDefines the distance at which the focus point is located."),(0,o.mdx)("p",null,"Getter:\nReturns the focus distance of the camera."),(0,o.mdx)("p",null,"Setter:\nSets the focus distance of the camera.\nValue is clamped between 0 and 10 * scene radius."),(0,o.mdx)("p",null,"Type:\nfloat"),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," aperture",(0,o.mdx)("em",{parentName:"p"},": float"),"\nThe aperture of the camera. Defines how wide the Depth of Field will be."),(0,o.mdx)("p",null,"Getter:\nReturns the lens radius."),(0,o.mdx)("p",null,"Setter:\nSets the lens radius. Value is clamped between 0 and 1 * scene radius."),(0,o.mdx)("p",null,"Type:\nfloat"),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," orthographic_height",(0,o.mdx)("em",{parentName:"p"},": float"),"\nThe orthographic height of the camera.\nThis value is only used if the ",(0,o.mdx)("inlineCode",{parentName:"p"},"CameraProjectionType")," is ",(0,o.mdx)("inlineCode",{parentName:"p"},"Orthographic"),"."),(0,o.mdx)("p",null,"Getter:\nReturns the orthographic height of the camera."),(0,o.mdx)("p",null,"Setter:\nSets the orthographic height of the camera."),(0,o.mdx)("p",null,"Type:\nfloat"),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"property")," projection_type",(0,o.mdx)("em",{parentName:"p"},": ",(0,o.mdx)("a",{parentName:"em",href:"#substance_painter.display.CameraProjectionType",title:"substance_painter.display.CameraProjectionType"},"CameraProjectionType")),"\nThe projection type (perspective or orthographic) of the camera."),(0,o.mdx)("p",null,"Getter:\nReturns the projection type of the camera."),(0,o.mdx)("p",null,"Setter:\nSets the projection type of the camera."),(0,o.mdx)("p",null,"Type:\n",(0,o.mdx)("a",{parentName:"p",href:"#substance_painter.display.CameraProjectionType",title:"substance_painter.display.CameraProjectionType"},"CameraProjectionType")),(0,o.mdx)("p",null,"Raises:\n",(0,o.mdx)("a",{parentName:"p",href:"exception.html#substance_painter.exception.ProjectError",title:"substance_painter.exception.ProjectError"},(0,o.mdx)("strong",{parentName:"a"},"ProjectError"))," – If no project is opened."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-substance-painter-display-md-d4d0e24ea567831dbf94.js.map