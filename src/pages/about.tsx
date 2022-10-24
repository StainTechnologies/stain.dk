import * as React from "react"
import { graphql, PageProps, Link } from "gatsby"
//import {LocalizedLink as Link} from "gatsby-theme-i18n"

import Layout from "../components/layout"
import Seo from "../components/seo"
import StainCover from "../components/stain-cover"

import coverImage from "../images/placeholders/service1.webp"
import { LocalizedLink } from "gatsby-plugin-i18n-l10n"

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
            <div className="flex flex-col items-center">
                <div className="text-center mt-8 max-w-6xl">
                    <h1 className="text-4xl font-bold mb-2">About Us</h1>
                    <p className="text-md mb-8">
                        We offer a wide range of software services to help accellerate your business.
                        <br />
                        Take a look at who we are below
                    </p>
                    <hr className="mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">Our story</h2>
                    <p className="text-md mb-8">
                        STAIN was founded by a student at SDU university in Odense, Denmark, where the founder discovered a large amount of students being neglected by major companies. Since then, the company has been dedicated to providing quality software delivered as quickly as possible, by wo
                    </p>
                    <hr className="mb-4" />
                    <h2 className="text-2xl font-semibold mb-8">Get to know us</h2>
                    <div style={{}}>
                        {posts.map((post: any) => {
                            const title: string = post.childMdx.frontmatter.title || post.childMdx.frontmatter.slug
                            alternate = alternate === false
                            return (
                                <StainAboutCard title={title} post={post} left={alternate} />
                            )
                        })}
                    </div>
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
    const background_color = props.left ? "bg-red-100" : "bg-white"

    const imageDiv = () => {
        return (
            <div className="flex flex-1 h-1/2">
                <img src={props.post.childMdx.frontmatter.thumbnail.publicURL} className="w-full object-contain" alt="Laptop on a table" />
            </div>
        )
    }

    const textDiv = () => {
        return (
            <div className="flex-1 px-12 h-1/2">
                <h5 className="text-3xl font-bold mb-4">
                    <span itemProp="headline">{props.title}</span>
                </h5>
                <p className="text-md" itemProp="description">{props.post.childMdx.excerpt}</p>
            </div>
        )
    }

    const card = () => {
        if (props.left) {
            return (
                <div className="flex flex-col md:flex-row gap-4">
                    {imageDiv()}
                    {textDiv()}
                </div>
            )
        } else {
            return (
                <div className="flex flex-col-reverse md:flex-row gap-4">
                    {textDiv()}
                    {imageDiv()}
                </div>
            )
        }
    }

    return (
        <LocalizedLink to={props.post.childMdx.frontmatter.slug}>
            <div className={background_color + " p-8"}>
                {card()}
            </div>
        </LocalizedLink >
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