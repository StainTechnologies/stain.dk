import * as React from "react"
import { graphql, PageProps, Link as oldLink } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

import coverImage from "../images/placeholders/service1.webp"
import { LocalizedLink } from "gatsby-plugin-i18n-l10n"

interface StainServiceDataProps {
    site: {
        siteMetadata: {
            title: string
        }
    },
    allFile: {
        nodes: any
    }
}

const StainServices: React.FC<PageProps<StainServiceDataProps>> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`
    const posts = data.allFile.nodes

    let alternate = false;

    return (
        <Layout location={location} title={siteTitle}>
            <StainCover title="Our Services" subtitle="We offer a wide range of software services to help you accellerate your business" coverImage={coverImage}></StainCover>
            <div style={{ alignContent: "center", textAlign: "center" }}>
                <h1>Our Services</h1>
                <p>
                    We offer a wide range of software services to help accellerate your business.
                    <br />
                    Take a look at some of our service below to learn more about what we can offer you
                </p>
                <div style={{}}>
                    {posts.map((post: any) => {
                        const title: string = post.childMdx.frontmatter.title || post.childMdx.frontmatter.slug
                        alternate = alternate === false
                        return (
                            <StainServiceCard title={title} post={post} left={alternate} />
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default StainServices

interface StainServiceCardProps {
    title: string,
    post: any,
    left?: boolean
}

function StainServiceCard(props: StainServiceCardProps, page: PageProps) {
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
        <LocalizedLink to={props.post.childMdx.frontmatter.slug} className="internalLink" activeClassName="internalLink">
            <div style={{ backgroundColor: background_color, padding: "2rem" }}>
                {card()}
            </div>
        </LocalizedLink >
    )
}

export const Head = () => <Seo title="Services" />

export const pageQuery = graphql`
  query($locale: String!){
    site {
      siteMetadata {
        title
      }
    },
    allFile(
    filter: {sourceInstanceName: {eq: "services"}, childMdx: {id: {ne: null}, fields: {locale: {eq: $locale}}}}
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