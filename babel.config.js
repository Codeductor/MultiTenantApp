const tenantConfig = require('./tenant-config.js')
const tenantPath = `./tenants/${tenantConfig.TENANT_ID}`;
console.info(`=> Using tenant: ${tenantPath}`);

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.json', '.ts', '.tsx'],
        root: [`${tenantPath}/src`, tenantPath, './src'],
      },
    ],
  ]
};