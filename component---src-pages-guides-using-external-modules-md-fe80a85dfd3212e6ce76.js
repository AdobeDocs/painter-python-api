"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[375],{42742:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return d}});var a=t(87462),o=t(63366),l=(t(15007),t(64983)),i=t(91515),s=["components"],m={},r={_frontmatter:m},p=i.Z;function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,l.mdx)(p,(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"using-external-modules"},"Using external modules"),(0,l.mdx)("p",null,"This page shows how to use external modules with the Python integration by using the PYTHONPATH environment variable."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},(0,l.mdx)("strong",{parentName:"p"},"Note"),": External modules must be installed and compatible with the Python version provided within the application. Any modules that rely on older or newer Python versions may lead to compatibility or stability issues.")),(0,l.mdx)("h2",{id:"installing-an-external-module"},"Installing an external module"),(0,l.mdx)("p",null,"Install modules like any other modules. The recommended method is to use ",(0,l.mdx)("strong",{parentName:"p"},"pip"),", for example with ",(0,l.mdx)("a",{parentName:"p",href:"https://numpy.org/doc/stable/user/whatisnumpy.html"},"numpy"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},"> pip install numpy\nDefaulting to user installation because normal site-packages is not writeable\nCollecting numpy\n  Downloading numpy-1.21.0-cp38-cp38-manylinux_2_12_x86_64.manylinux2010_x86_64.whl (15.7 MB)\n     |████████████████████████████████| 15.7 MB 2.5 MB/s\nInstalling collected packages: numpy\nSuccessfully installed numpy-1.21.0\n")),(0,l.mdx)("p",null,"Depending on the platform and installation path, the modules may be installed in specific locations."),(0,l.mdx)("p",null,"The easiest way to discover these locations is to start a command line/terminal and type the following commands:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"python\n>>> import sys\n>>> sys.path\n['', '/usr/lib/python37.zip', '/usr/lib/python3.7', '/usr/lib/python3.7/lib-dynload', '/home/username/.local/lib/python3.7/site-packages', '/usr/lib/python3.7/site-packages']\n")),(0,l.mdx)("p",null,"In the example above, the ",(0,l.mdx)("strong",{parentName:"p"},"sys.path")," variable shows the list where Python and its modules have been installed on a Linux system. The most interesting paths are the one with the ",(0,l.mdx)("strong",{parentName:"p"},"site-packages")," folders."),(0,l.mdx)("h2",{id:"setting-up-the-environment-variable"},"Setting up the environment variable"),(0,l.mdx)("p",null,"There are several ways to setup the environment variable, either once for all or in a more temporary manner."),(0,l.mdx)("h3",{id:"with-the-system-settings"},"With the system settings"),(0,l.mdx)("p",null,"This method is the best way to setup the path for the long run and will work anytime the application will run."),(0,l.mdx)("p",null,"On ",(0,l.mdx)("strong",{parentName:"p"},"Windows"),":"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Open the System from the Control Panel."),(0,l.mdx)("li",{parentName:"ol"},"Click on the Advanced system settings link and then on Environment Variables."),(0,l.mdx)("li",{parentName:"ol"},"Under the section System Variables, select the environment variable to edit, and click on New or Edit (if it already exists)."),(0,l.mdx)("li",{parentName:"ol"},"Input the value of the variable in the New System Variable (or Edit System Variable) window"),(0,l.mdx)("li",{parentName:"ol"},"Validate by clicking OK."),(0,l.mdx)("li",{parentName:"ol"},"Log off or restart the computer for the change to take effect.")),(0,l.mdx)("h3",{id:"with-a-command-line"},"With a command line"),(0,l.mdx)("p",null,"On ",(0,l.mdx)("strong",{parentName:"p"},"Windows"),", open a command line and type:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-cmd"},'set PYTHONPATH=C:/Python/lib/site-packages/\nstart "" "C:/Path/To/Installation/Folder/Adobe Substance 3D Painter.exe"\n')),(0,l.mdx)("p",null,"For Windows, make sure the path doesn't use quotation marks (\") otherwise it won't be read properly by Python."),(0,l.mdx)("p",null,"On Linux, open a terminal and type:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-bash"},'cd "/Path/To/Installation/Folder/"\nexport PYTHONPATH="/home/username/.local/lib/python3.7/site-packages"\n./"Adobe Substance 3D Painter"\n')),(0,l.mdx)("h3",{id:"with-python"},"With Python"),(0,l.mdx)("p",null,"Here is a simple script to setup the environment and launch the application:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'import os\nimport subprocess\n\n# Add the environment variable\nos.environ["PYTHONPATH"] = "C:/Python/lib/site-packages/"\n\n# Launch the application with the new environment\nsubprocess.call( "Adobe Substance 3D Painter.exe", env=os.environ )\n')),(0,l.mdx)("h2",{id:"loading-and-using-an-external-module"},"Loading and using an external module"),(0,l.mdx)("p",null,"Once the application is running, check that the custom module location is available. To do so open the Python Console window and type:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},">>> import sys\n>>> sys.path\n['/home/username', '/installation/path/Substance 3D Painter/resources/pythonsdk/lib/python37.zip', ... ]\n")),(0,l.mdx)("p",null,"If the path specified via the environment variable doesn't appear or its value is incorrect, this means the variable wasn't set properly."),(0,l.mdx)("p",null,"If the path is correct, then the custom modules can be imported and used:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},">>> import numpy\n>>> numpy.__version__\n'1.21.0'\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-external-modules-md-fe80a85dfd3212e6ce76.js.map