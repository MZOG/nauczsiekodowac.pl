// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { formatPostDate } from '../utils/helpers'

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="HTML, CSS, JavaScript" />
      <Bio />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const date = formatPostDate(node.frontmatter.date, 'pl-pl')
        return (
          <article key={node.fields.slug} className="article-post">
            <header>
              <h2
                style={{
                  ...scale(0.4),
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h2>
              <small>{date}</small>
            </header>
            <section>
              <p
                style={{
                  marginTop: rhythm(1 / 2),
                  fontSize: `14px`
                }}
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />

              <Link style={{ boxShadow: `none`, fontSize: `14px` }} to={node.fields.slug}>
                Więcej →
              </Link>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
    }
  }
`
