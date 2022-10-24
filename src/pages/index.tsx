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
          <div className="text-center mt-8 max-w-7xl">
            <h3 className="text-3xl font-bold uppercase my-2">Our Services</h3>
            <p className="text-md mb-2">Professional development customized for your needs</p>
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
    <LocalizedLink to={destination} className="flex flex-col bg-slate-300 flex-1">
      <img src={img} className="w-full" alt="Laptop on a table" />
      <div className="flex flex-col flex-grow justify-center mt-4 mx-6 mb-8">
        <h5 className="text-xl font-bold mb-2">{title}</h5>
        <p className="text-md">{description}</p>
      </div>
    </LocalizedLink>
  )
}

const StainAboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-300 w-full">
      <div className="flex-1 bg-black text-left p-8">
        <h2 className="text-8xl text-white text-ellipsis">Our</h2>
        <h2 className="text-8xl text-white text-ellipsis">story</h2>
        <hr className="mb-4 mt-8" />
        <LocalizedLink to="/about" className="internalLink text-white text-md">Read more here</LocalizedLink>
      </div>
      <div className="flex-1 p-8 text-left text-md">
        <h3 className="text-2xl font-bold mb-2">Get to Know Us</h3>
        STAIN was founded by a student at SDU university in Odense, Denmark, where the founder discovered a large amount of students being neglected by major companies. Since then, the company has been dedicated to providing quality software delivered as quickly as possible, by wo
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
