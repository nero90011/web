const webpack = require("webpack");
module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            externals: ['ffi-napi', 'ref-napi']
        }
    }
}