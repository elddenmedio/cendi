const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'), [ /* mapped paths to share */ ]);

module.exports = {
    output: {
        uniqueName: "documents",
        publicPath: "auto"
    },
    optimization: {
        runtimeChunk: false
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        }
    },
    experiments: {
        outputModule: true
    },
    plugins: [
        new ModuleFederationPlugin({
            library: { type: "module" },
            // For remotes (please adjust)
            name: "documents",
            filename: "remoteEntry.js",
            exposes: {
                './Module': './projects/documents/src/app/_modules/documents/documents.module.ts',
            },
            shared: {
                ...mf.shareAll({
                    singleton: true,
                    strictVersion: false,
                    requiredVersion: 'auto',
                    includeSecondaries: true,
                    eager: true
                }),
                ...sharedMappings.getDescriptors()
            }
        }),
        sharedMappings.getPlugin()
    ],
};