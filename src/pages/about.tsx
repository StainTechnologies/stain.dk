import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
//import {LocalizedLink as Link} from "gatsby-theme-i18n"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

import coverImage from "../images/placeholders/service1.webp"

interface StainAboutDataProps {
    site: {
      siteMetadata: {
        title: string
      }
    },
    allFile: {
        nodes: any
    }
  }

const StainAbout: React.FC<PageProps<StainAboutDataProps>> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allFile.nodes

    let alternate = false;

    return (
        <Layout location={location} title={siteTitle}>
            <StainCover title="About Us" subtitle="We offer a wide range of software services to help you accellerate your business" coverImage={coverImage}></StainCover>
            <div style={{ alignContent: "center", textAlign: "center" }}>
                <h1>About Us</h1>
                <p>
                    We offer a wide range of software services to help accellerate your business.
                    <br />
                    Take a look at who we are below
                </p>
                <hr/>
                <h2>Our story</h2>
                <p>
                    STAIN was founded by a student at SDU university in Odense, Denmark, where the founder discovered a large amount of students being neglected by major companies. Since then, the company has been dedicated to providing quality software delivered as quickly as possible, by wo
                </p>
                <hr/>
                <h2>Get to know us</h2>
                <div style={{}}>
                    {posts.map((post: any) => {
                        const title = post.childMdx.frontmatter.title || post.childMdx.frontmatter.slug
                        alternate = alternate === false
                        return (
                            <StainAboutCard title={title} post={post} left={alternate} />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default StainAbout

interface StainAboutCardProps {
    title: string,
    post: any,
    left: boolean
}

function StainAboutCard(props: StainAboutCardProps, page: PageProps) {
    const background_color = props.left ? "rgb(255,239,242)" : "white"

    const imageDiv = () => {
        return (
            <div style={{ display: "flex", flex: 1, height: "50%" }}>
                <img src={props.post.childMdx.frontmatter.thumbnail.publicURL} style={{ width: "100%", objectFit: "contain" }} alt="Laptop on a table" />
            </div>
        )
    }

    const textDiv = () => {
        return (
            <div style={{ flex: 1, paddingLeft: "3rem", paddingRight: "3rem", paddingBottom: "1rem", height: "50%" }}>
                <h5>
                    <span itemProp="headline">{props.title}</span>
                </h5>
                <p itemProp="description">{props.post.childMdx.excerpt}</p>
            </div>
        )
    }

    const card = () => {
        if (props.left) {
            return (
                <div style={{ display: "flex", }}>
                    {imageDiv()}
                    {textDiv()}
                </div>
            )
        } else {
            return (
                <div style={{ display: "flex", }}>
                    {textDiv()}
                    {imageDiv()}
                </div>
            )
        }
    }

    return (
        <Link to={props.post.childMdx.frontmatter.slug} itemProp="url" style={{ color: "black", textDecoration: "none", textAlign: "left" }} /*language={undefined}*/>
            <div style={{ backgroundColor: background_color, padding: "2rem" }}>
                {card()}
            </div>
        </Link >
    )
}

export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    },
    allFile(
    filter: {sourceInstanceName: {eq: "about"}, childMdx: {id: {ne: null}}}
    sort: {fields: childrenMdx___frontmatter___date, order: DESC}
    ) {
      nodes {
        childMdx {
          excerpt
          frontmatter {
            slug
            title
            thumbnail {
                publicURL
            }
          }
        }
      }
    }
  }
`