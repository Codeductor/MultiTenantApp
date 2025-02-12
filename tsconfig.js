module.exports = {
    "extends": "@react-native/typescript-config/tsconfig.json",
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "*": [
                `./tenants/${process.env.TENANT_ID}/src/*`,
                `./tenants/${process.env.TENANT_ID}/*`,
                "./tenants/default/src/*",
                "./tenants/default/*",
                "./src/*",
            ],
        },
    },
    "include": ["src/**/*"]
}