const webpack = require('webpack');

module.exports = {
  plugins: [new webpack.DefinePlugin({
    'process.env': {
      PROJECTREGION: JSON.stringify(process.env.PROJECTREGION),
      CONGNITOIDENTITYPOOLID: JSON.stringify(process.env.CONGNITOIDENTITYPOOLID),
      COGNITOUSERPOOLID: JSON.stringify(process.env.COGNITOUSERPOOLID),
      COGNITOAPPCLIENTID: JSON.stringify(process.env.COGNITOAPPCLIENTID),
      S3BUCKETURL: JSON.stringify(process.env.S3BUCKETURL),
      APISERVICEURL: JSON.stringify(process.env.APISERVICEURL),
      TENANTID: JSON.stringify(process.env.TENANTID)
    }
  })]
}