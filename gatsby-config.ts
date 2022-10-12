import type { GatsbyConfig } from "gatsby";

import English from "./i18n/react-intl/en";
import Danish from "./i18n/react-intl/da";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stain Technologies`,
    siteUrl: `https://www.stain.dk`,
    description: `Stain Technologies`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "about",
      "path": "./content/about/"
    },
    __key: "about"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "services",
      "path": "./content/services/"
    },
    __key: "services"
  }, {
    resolve: `gatsby-plugin-i18n-l10n`,
    options: {
      // IETF BCP 47 language tag: default locale, which won't be prefixed
      defaultLocale: `en-US`,
      // string: absolute site url
      siteUrl: `https://www.stain.dk/`,
      // locales[]: all locales, which should be available
      locales: [
        {
          // IETF BCP 47 language tag of this language
          locale: `en-US`,
          // string: prefix for this language, which will be used to prefix the url, if it's not the default locale
          prefix: `en`,
          // object: mapping of given urls (by filename) to translated urls, if no mapping exists, given url will be used
          slugs: {},
          // object: this messages will be handed over to react-intl and available throughout the website
          messages: English
        },
        // another language
        {
          locale: `da-DK`,
          prefix: `da`,
          slugs: {},
          messages: Danish
        },
      ],
      // omit certain path segments (relative directories)
      // be careful not to cause path collisions
      pathBlacklist: [
        '/pages' // /pages/products/gummibears becomes /products/gummibears
      ]
    },
  }]
};

export default config;
