const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.base.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "shell",
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

        // For hosts (please adjust)
        remotes: {
            "marketing": "marketing@http://localhost:5001/remoteEntry.js",
            "loanApp": "loanApp@http://localhost:5002/remoteEntry.js",
            "userApp": "userApp@http://localhost:5003/remoteEntry.js",
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
