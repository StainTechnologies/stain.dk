import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

import coverImage from "../images/graphql-image.jpg"
import { useIntl } from "react-intl"

import EN from "../../i18n/en.json"
import DA from "../../i18n/dk.json"

const StainContact: React.FC<PageProps> = ({ location }) => {
  const intl = useIntl()

  return (
    <Layout location={location}>
      <StainCover title={intl.formatMessage({ id: "contactTitle" })} subtitle="" coverImage={coverImage}></StainCover>
      <div className="flex flex-col items-center">
        <div className="text-center mt-8 max-w-6xl">
          <h1 className="text-4xl font-bold mb-2">{intl.formatMessage({ id: "contactTitle" })}</h1>
          <p className="text-md mb-8 mx-2">
            {intl.formatMessage({ id: "contactSubtitle" })}
            <br />
            {intl.formatMessage({ id: "contactText1" })}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default StainContact

export const Head: HeadFC = (props) => {
  const locale = (props.pageContext as { locale: string }).locale
  const title = { "en-US": EN["contactTitle"], "da-DK": DA["contactTitle"] }

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