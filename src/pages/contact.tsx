import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

import coverImage from "../images/placeholders/service1.webp"

interface StainContactDataProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const StainContact: React.FC<PageProps<StainContactDataProps>> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <StainCover title="Contact Us" subtitle="" coverImage={coverImage}></StainCover>
            <div style={{ alignContent: "center", textAlign: "center" }}>
                <h1>Contact Us</h1>
                <p>
                    We offer a wide range of software services to help accellerate your business.
                    <br />
                </p>
            </div>
        </Layout>
    )
}

export default StainContact

export const Head = () => <Seo title="Contact Us" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`