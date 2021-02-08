const path = require('path');

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    "@components": path.resolve(__dirname, 'src/components'),
                    "@hooks": path.resolve(__dirname, 'src/hooks')
                },
                extensions: []
            }
        },
        'gatsby-plugin-emotion'
    ]
}