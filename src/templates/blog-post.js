import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { formatPostDate } from '../utils/helpers'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={image}
        pathname={post.fields.slug}
      />
      <article className="post">
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(2),
              fontFamily: `inherit`,
              ...scale(1.3),
            }}
            className="post-title"
          >
            {post.frontmatter.title}
          </h1>

        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />

        <div style={{ display: `flex`, justifyContent: `space-between`, marginTop: rhythm(1) }}>
          <p
            style={{
              display: `block`,
              marginBottom: rhythm(1),

            }}
          >
            {formatPostDate(post.frontmatter.date, 'pl-pl')}
          </p>

          <p><a href={`https://github.com/MZOG/nauczsiekodowac.pl/tree/master/content/blog${post.fields.slug}index.md`}>Edytuj post</a></p>
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="post-next-prev">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
