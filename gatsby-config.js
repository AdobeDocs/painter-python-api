/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
	pathPrefix: process.env.PATH_PREFIX || '/dev-site-documentation-template/',
	siteMetadata: {
		home: {
			title: 'Painter',
			path: 'https://www.adobe.com/products/substance3d-painter.html'
		},
		pages: [
			{
				title: 'Python API',
				path: '/'
			},
			{
				title: 'Guides & Examples',
				path: '/guides/'
			},
			{
				title: 'API Reference',
				path: '/api/'
			},
			{
				title: 'Documentation',
				path: 'https://helpx.adobe.com/substance-3d-painter/home.html'
			},
			{
				title: 'Support',
				path: 'https://community.adobe.com/t5/substance-3d-painter/ct-p/ct-substance-3d-painter'
			}
		],
		subPages: [
			{
				title: "Guides & Examples",
				header: true,
				path: "/guides/",
				pages: [
					{
						title : "Guides",
						path: "/guides/",
						pages: [
							{
								title: "Creating a Python plugin",
								path: "/guides/creating-python-plugin/"
							},
							{
								title: "Using external modules",
								path: "/guides/using-external-modules/"
							},
							{
								title: "Using external plugins",
								path: "/guides/loading-external-plugins/"
							},
							{
								title: "Qt6 migration",
								path: "/guides/qt6-migration/"
							}
						]
					},
					{
						title : "Examples",
						path: "/guides/examples/",
						pages: [
							{
								title: "Randomize all seeds in a project",
								path: "/guides/examples/random_seed/"
							},
							{
								title: "Save and restore layer selection",
								path: "/guides/examples/save_selection/"
							},
							{
								title: "Layer blending mode editor",
								path: "/guides/examples/blending_mode/"
							}
						]
					}
				]
			},
			{
				title: "Python API",
				header: true,
				path: "/api/",
				pages: [
					{
						title : "Home",
						path: "/api/",
					}
				]
			}
		]
  	},
	plugins: [`@adobe/gatsby-theme-aio`]
};
