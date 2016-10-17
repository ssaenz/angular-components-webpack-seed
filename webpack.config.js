var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-ui-bootstrap']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};
