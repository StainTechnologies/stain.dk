import type { GatsbyConfig } from "gatsby";

import English from "./i18n/en.json"
import Danish from "./i18n/dk.json"

const siteURL: string = process.env.URL || "https://www.stain.dk"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Stain Technologies`,
    siteUrl: siteURL,
    description: `Stain Technologies`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-image", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 'gatsby-plugin-postcss', {
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
  }, {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      excludes: ["/**/404", "/**/404.html"],
      query: `{
        allSitePage(filter: {context: {prefix: {eq: "en"}}}) {
        nodes {
          path
        }
      }
    }`,
      resolveSiteUrl: () => siteURL,
      serialize: (props: {path: any}) => {
          return {
            url: siteURL + props.path,
            changefreq: 'daily',
            priority: 0.7,
            links: [
              { lang: 'en', url: siteURL + props.path },
              { lang: 'da', url: `${siteURL}/da${props.path}` },
              // The default in case page for user's language is not localized.
              { lang: 'x-default', url: siteURL + props.path }
            ]
          };
        }
    }
  }]
};

export default config;
