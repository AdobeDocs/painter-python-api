---
title: js - Painter Python API
description: Substance 3D Painter - Python API
keywords:
  - Creative Cloud
  - API Documentation
  - Substance 3D
  - Painter
---






js module — Substance 3D Painter Python API 0.2.11 documentation
















js module
=========


This module allows to evaluate JavaScript code against the legacy embedded
JavaScript engine. This allows to use all the exposed JavaScript API through
Python scripting. The JavaScript API is described in dedicated help accessible
via the `Help > Scripting documentation > JavaScript API` menu found in
Substance 3D Painter application.


Example



```python
import substance_painter.js

# Get the baking parameters
js_code = 'alg.baking.textureSetBakingParameters("some_texture_set")'
baking_parameters = substance_painter.js.evaluate(js_code)

# substance_painter.js.evaluate returns JSON, so the result is easy to retrieve and use
material_parameters = baking_parameters['materialParameters']
apply_diffusion = material_parameters['commonParameters']['Apply_Diffusion']

```




substance_painter.js.evaluate(*js_code: str*) → str
Evaluate a JavaScript expression.
The JavaScript API is described in dedicated help accessible via the
`Help > Scripting documentation > JavaScript API` menu found in
Substance 3D Painter application.



Parameters:
**js_code** (*str*) – The block of JavaScript code to be evaluated.



Returns:
The JSON formated result of the evaluation.



Return type:
str



Raises:
**RuntimeError** – If the JavaScript exception evaluation returns an error.













