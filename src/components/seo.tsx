/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string,
  lang?: string,
  title?: string,
  children?: React.ReactNode
}

const Seo = (props: SEOProps) => {
  const { site } = useStaticQuery(
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

  const metaDescription = props.description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${props.title} | ${defaultTitle}` : props.title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {props.children}
    </>
  )
}

Seo.defaultProps = {
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo
