const fse = require('fs-extra')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CSS_COPY_LOCATION = process.env.CSS_COPY_LOCATION || './../www/css/homepage.min.css'

module.exports = {
    entry: './app.js',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "homepage.min.css"
        }),
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap("AfterEmitPlugin", async () => {
                    // Copy CSS
                    try {
                        await fse.copy(`dist/homepage.min.css`, `${CSS_COPY_LOCATION}`)
                    } catch (e) {
                        console.error(e);
                    }
                });
            }
        }

    ],
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './css',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            }
        ],
    },
};
