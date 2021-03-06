/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var Plotly = require('./core');

Plotly.register([
    require('./scatter3d'),
    require('./surface'),
    require('./mesh3d')
]);

// locales
Plotly.register([
    require('./locale-en'),
    require('./locale-en-us')
]);

module.exports = Plotly;
