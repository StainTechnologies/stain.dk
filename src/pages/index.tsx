import * as React from "react"
import { graphql, PageProps, Link as oldLink } from "gatsby"
//import {LocalizedLink as Link} from "gatsby-theme-i18n"

import { useIntl } from "react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

import coverImage from "../images/placeholders/cover.webp"
import service0 from "../images/placeholders/service0.webp"
import service1 from "../images/placeholders/service1.webp"
import service2 from "../images/placeholders/service2.webp"

import StainCover from "../components/stain-cover"
import { LocalizedLink } from "gatsby-plugin-i18n-l10n"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const BlogIndex: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => {
  const intl = useIntl()
  const siteTitle = data.site.siteMetadata?.title || `Title`

  if (true) {
    return (
      <Layout location={location} title={siteTitle}>
        <StainCover title={intl.formatMessage({ id: "welcome" })} subtitle={intl.formatMessage({ id: "welcomeSub" })} coverImage={coverImage} />
        <div className="flex flex-col items-center">
          <div className="text-center mt-16 max-w-7xl">
            <h3 className="text-3xl font-bold uppercase my-2">{intl.formatMessage({ id: "serviceHeading" })}</h3>
            <p className="text-md mb-2">{intl.formatMessage({ id: "serviceSubHeading" })}</p>
            <div className="flex flex-col md:flex-row m-8 justify-center gap-8 lg:gap-16 mb-16">
              <StainServiceCard title="System and app development" description="Experienced developers able to deliver quality systems quickly." img={service0} destination="/services/system-and-app-development" />
              <StainServiceCard title="System maintenance" description="Suitable for freeing up your software engineers/Suitable for maintaining your system by keeping it updated and up and running." img={service1} destination="/services/system-maintenance" />
              <StainServiceCard title="General consultancy" description="A perfect opportunity to get a second pair of eyes to help optimize your new project or ideas." img={service2} destination="/services/general-consultancy" />
            </div>
          </div>
          <div className="flex m-8">
          <StainAboutUs />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

interface StainServiceCardProps {
  title: string,
  description: string,
  img: any,
  destination: any
}

const StainServiceCard: React.FC<StainServiceCardProps> = ({ title, description, img, destination }) => {
  return (
    <LocalizedLink to={destination} className="flex flex-col bg-sky-50 flex-1 rounded-xl overflow-hidden drop-shadow-xl">
      <img src={img} className="w-full" alt="Laptop on a table" />
      <div className="flex flex-col flex-grow justify-center mt-4 mx-6 mb-8">
        <div className="flex-3">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        </div>
        <div className="flex-1">
        <p className="text-md">{description}</p>
        </div>
      </div>
    </LocalizedLink>
  )
}

const StainAboutUs = () => {
  const intl = useIntl()

  return (
    <div className="bg-red-50 w-full overflow-hidden rounded-xl shadow-inner">
      <div className="flex-1 text-center px-8 pt-8 text-black">
        <h2 className="text-3xl font-bold text-ellipsis pb-4">{intl.formatMessage({ id: "storyHeading" })}</h2>
        {intl.formatMessage({ id: "storyText" })}
      </div>
      <hr className="m-8 border-black" />
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

/*
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
*/
