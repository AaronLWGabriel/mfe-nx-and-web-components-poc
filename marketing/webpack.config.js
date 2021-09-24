const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "marketing",
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
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "marketing",
        filename: "remoteEntry.js",
        exposes: {
            './web-components': './src/bootstrap.ts', // bootstrap --> main --> AppModule --> WebComp
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
