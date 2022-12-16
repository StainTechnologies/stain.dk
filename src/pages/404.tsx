import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

import coverImage from "../images/graphql-image.jpg"

import EN from "../../i18n/en.json"
import DA from "../../i18n/dk.json"
import { useIntl } from "react-intl"

const Stain404: React.FC<PageProps> = ({ location }) => {
    const intl = useIntl()

    return (
        <Layout location={location}>
            <StainCover title={intl.formatMessage({ id: "404Title" })} subtitle={intl.formatMessage({ id: "404SubTitle" })} coverImage={coverImage}></StainCover>
            <div className="flex flex-col items-center mb-12">
              <div className="text-center mt-12 max-w-7xl mx-2">
                <h3 className="text-2xl font-bold uppercase my-2">{intl.formatMessage({ id: "404Explaination" })}</h3>
                <p className="text-md mb-2">{intl.formatMessage({ id: "404Actionable" })}</p>
              </div>
            </div>
        </Layout>
    )
}

export default Stain404

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": EN["404Title"], "da-DK": DA["404Title"] }

  return (
    <Seo locale={locale} title={title} />
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`