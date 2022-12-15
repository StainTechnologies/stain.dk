import * as React from "react"
import { graphql, PageProps, Link as oldLink } from "gatsby"
//import {LocalizedLink as Link} from "gatsby-theme-i18n"

import { useIntl } from "react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

import coverImage from "../images/graphql-image.jpg"
import service0 from "../images/designing-app.jpg"
import service1 from "../images/unityCode.jpg"
import service2 from "../images/development-meeting.jpg"
import placeholderSplat from "../images/icon.png"

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
          <StainAboutUs />
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
    <div className="flex flex-col flex-1 rounded-xl overflow-hidden drop-shadow-xl">
      <div className="flex-1">
        <img src={img} className="w-full object-cover h-full aspect-[4/3]" alt="" />
      </div>
      <div className="flex flex-2 flex-grow justify-center bg-gradient-to-b from-pink-100 to-blue-100">
        <div className="flex flex-col justify-center mt-4 mx-6 mb-8 ">
          <div className="flex-3">
            <h5 className="text-xl font-bold mb-2">{title}</h5>
            </div>
            <div className="flex-1">
            <p className="text-md">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const StainAboutUs = () => {
  const intl = useIntl()

  return (
    <div className="w-full bg-gradient-to-b from-blue-100 to-pink-100 flex flex-col md:flex-row">
      <div className="flex flex-1 m-5 justify-center items-center">
        <img className="object-contain w-[50%] h-[50%]" src={placeholderSplat} />
      </div>
      <div className="flex flex-col flex-1 text-left px-8 pt-8 text-black justify-center items-center">
        <h2 className="text-3xl font-bold text-ellipsis pb-4 self-start">{intl.formatMessage({ id: "storyHeading" })}</h2>
        {intl.formatMessage({ id: "storyText1" })}
        <br/><br/>
        {intl.formatMessage({ id: "storyText2" })}
        <br/><br/>
        {intl.formatMessage({ id: "storyText3" })}
        <br/><br/>
      </div>
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
