const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.json'), [ /* mapped paths to share */ ]);

module.exports = {
    output: {
        uniqueName: "root",
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
            // For hosts (please adjust)
            remotes: {
                "workers": "http://localhost:4201/remoteEntry.js",
                "resources": "http://localhost:4202/remoteEntry.js",
                "students": "http://localhost:4203/remoteEntry.js",
                "dashboard": "http://localhost:4204/remoteEntry.js",
                "parents": "http://localhost:4205/remoteEntry.js",
                "documents": "http://localhost:4206/remoteEntry.js"
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