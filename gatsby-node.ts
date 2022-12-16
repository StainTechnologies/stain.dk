import { pseudoRandomBytes } from "crypto"

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

interface CreatePagesProps {
  graphql: any,
  actions: any,
  reporter: any
}

exports.createPages = async (props: CreatePagesProps) => {
  const { createPage } = props.actions
  return

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await props.graphql(
    `query getAllMdx {
      allMdx(
        sort: {order: DESC, fields: frontmatter___date}
        limit: 1000    
      ) {
          nodes {
            id
            internal {
              contentFilePath
            }
            frontmatter {
              slug
              title
            }
            fields {
              locale
              pathPrefix
            }
          }
        }
    }
    `
  )

  if (result.errors) {
    props.reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes

  if (posts.length > 0) {
    posts.forEach((post: any, index: any) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      let slug = post.frontmatter.slug
      slug = slug ? slug : slugify(post.frontmatter.title)

      if (post.fields.locale != "en-US") {
        slug = post.fields.pathPrefix + slug
      }

      createPage({
        path: slug,
        component: `${blogPost}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

interface OnCreateNodeProps {
  node: any,
  actions: any,
  getNode: any
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
