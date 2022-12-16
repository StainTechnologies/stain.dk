/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface translations {
  [key: string]: string
}

interface SEOProps {
  description?: translations,
  title: translations,
  locale: string,
  children?: React.ReactNode
}

const Seo = (props: SEOProps) => {
  const { site, sitePage } = useStaticQuery(
    graphql`
       {
         site {
           siteMetadata {
             title
             description
           }
         }
       }
     `
  )

  let metaDescription = site.siteMetadata.description
  if (props.description !== undefined) {
    metaDescription = props.description[props.locale] || metaDescription
  }
  
  const defaultTitle = site.siteMetadata?.title

  const title = props.title[props.locale]

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {props.children}
    </>
  )
}

export default Seo