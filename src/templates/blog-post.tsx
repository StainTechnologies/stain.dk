import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

interface DataProps {
  site: {
    siteMetadata: {
      title: string
    }
  },
  mdx: MDXProps
}

interface MDXProps {
  excerpt: any
  frontmatter: any
}

interface MDXDataProps {
  children: React.ReactNode
  data: DataProps,
  location: any
}

function MDXTemplate(props: MDXDataProps) {
  console.log(props)
  const siteTitle = props.data.site.siteMetadata?.title || `Title`
  const post = props.data.mdx

  return (
    <Layout location={location} title={siteTitle}>
      <div className="flex justify-center py-8 mx-10">
        <div className="max-w-4xl bg-red-100 p-10">
          <StainCover coverImage={post.frontmatter.thumbnail.publicURL} contain></StainCover>
          <article
            className="mt-8"
            itemScope
            itemType="http://schema.org/Article"
          >
            <section itemProp="articleBody">{props.children}</section>
          </article>
        </div>
      </div>
    </Layout>
  )
}

export const Head = (props: MDXDataProps) => {
  return (
    <Seo
      title={props.data.mdx.frontmatter.title}
      description={props.data.mdx.frontmatter.description || props.data.mdx.excerpt}
    />
  )
}

export default MDXTemplate

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      excerpt
      frontmatter {
        title
        slug
        thumbnail {
          publicURL
        }
      }
    }
  }
`

