import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
//import {LocalizedLink as Link} from "gatsby-theme-i18n"

//import { useIntl } from "react-intl"

import Layout from "../components/layout"
import Seo from "../components/seo"

import coverImage from "../images/placeholders/cover.webp"
import service0 from "../images/placeholders/service0.webp"
import service1 from "../images/placeholders/service1.webp"
import service2 from "../images/placeholders/service2.webp"

import StainCover from "../components/stain-cover"

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
  //const intl = useIntl()
  const siteTitle = data.site.siteMetadata?.title || `Title`

  if (true) {
    return (
      <Layout location={location} title={siteTitle}>
        <StainCover title={/*intl.formatMessage({id: "welcome"})*/"welcome"} subtitle={/*intl.formatMessage({id: "welcomeSub"})*/"Welcome"} coverImage={coverImage} />
        <div style={{ textAlign: "center" }}>
          <h3 style={{ textTransform: "uppercase" }}>Our Services</h3>
          <p>Professional development customized for your needs</p>
          <div style={{ display: "flex", marginBottom: "2rem", justifyContent: "center"}}>
            <StainServiceCard title="System and app development" description="Experienced developers able to deliver quality systems quickly." img={service0} destination="/services/system-and-app-development" />
            <StainServiceCard title="System maintenance" description="Suitable for freeing up your software engineers/Suitable for maintaining your system by keeping it updated and up and running." img={service1} destination="/services/system-maintenance" />
            <StainServiceCard title="General consultancy" description="A perfect opportunity to get a second pair of eyes to help optimize your new project or ideas." img={service2} destination="/services/general-consultancy"/>
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
    <Link to={destination} style={{ display: "inherit", color: "black", textDecoration: "none" }} /*language={undefined}*/>
      <div style={{ backgroundColor: "rgb(225,239,242)", width: "var(--maxWidth-xs)", marginLeft: 20, marginRight: 20, flex: 1 }}>
        <img src={img} style={{ width: "100%" }} alt="Laptop on a table" />
        <div style={{ paddingLeft: "3rem", paddingRight: "3rem", paddingBottom: "1rem" }}>
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

const StainAboutUs = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "darkgray" }}>
      <div style={{ flex: 1, backgroundColor: "black", padding: "5rem 10rem", textAlign: "left" }}>
        <h2 style={{ color: "white", fontSize: "5em", fontWeight: "normal", width: "50%" }}>Our story</h2>
        <br />
        <hr/>
        <Link style={{ color: "white" }} to="/about" /*language={undefined}*/>Read more here</Link>
      </div>
      <div style={{ flex: 1, padding: "5rem 10rem", textAlign: "left" }}>
        <h3>Get to Know Us</h3>
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
