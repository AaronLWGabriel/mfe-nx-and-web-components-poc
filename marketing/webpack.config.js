const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, 'tsconfig.json'),
//   [/* mapped paths to share */]);

module.exports = {
  output: {
    publicPath: "http://localhost:5002/",
    uniqueName: "marketing"
  },
  optimization: {
    runtimeChunk: false
  },
  // resolve: {
  //   alias: {
  //     ...sharedMappings.getAliases(),
  //   }
  // },
  plugins: [
    new ModuleFederationPlugin({

        // For remotes (please adjust)
        name: "marketing",
        library: { type: "var", name: "marketing" },
        filename: "remoteEntry.js",
        exposes: {
          //  './Component': './/src/app/app.component.ts',
          './web-components': './src/bootstrap.ts', // bootstrap --> main --> AppModule --> WebComp
        },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        // shared: share({
        //   "@angular/core": { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0' },
        //   "@angular/common": { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0' },
        //   "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0' },
        //   "@angular/router": { singleton: true, strictVersion: true, requiredVersion: '>=12.0.0' },

        //   ...sharedMappings.getDescriptors()
        // })

        shared: ["@angular/core", "@angular/common", "@angular/router"]


    }),
    // sharedMappings.getPlugin()
  ],
};
