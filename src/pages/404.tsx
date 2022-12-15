import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

import coverImage from "../images/graphql-image.jpg"

interface Stain404DataProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const Stain404: React.FC<PageProps<Stain404DataProps>> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <StainCover title="404: Not found" subtitle="Page does not exist" coverImage={coverImage}></StainCover>
            <div style={{ alignContent: "center", textAlign: "center" }}>
                <h1>The page you attempted to view does not exist</h1>
                <p>
                  You can navigate back to the front page
                </p>
            </div>
        </Layout>
    )
}

export default Stain404

export const Head = () => <Seo title="404: Not found" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`