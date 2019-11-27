module.exports = {
    mode: 'production',
    entry: './src-a/index.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:["@babel/preset-env"]
                    }
                },
            }
        ]
    },
    devServer: {
        contentBase: './',
        hot: true,
        inline: true,
    },
}