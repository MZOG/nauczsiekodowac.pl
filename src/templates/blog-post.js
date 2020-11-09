import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { formatPostDate } from '../utils/helpers';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize.src
    : null;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={image}
        pathname={post.fields.slug}
      />
      <div className="container">
        <article className="post">
          <header>
            <h1>{post.frontmatter.title}</h1>

            <div className="post-info">
              <p>
                {post.frontmatter.category.toUpperCase()} /
                {formatPostDate(post.frontmatter.date, 'pl-pl')} /{' '}
                <a href={post.frontmatter.author_www}>
                  {post.frontmatter.author}
                </a>
              </p>

              <p>
                Udostępnij:{' '}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://nauczsiekodowac.pl${post.fields.slug}`}
                  title="Share on Facebook"
                >
                  Facebook
                </a>
                ,{' '}
                <a
                  href={`https://twitter.com/intent/tweet?text=${post.frontmatter.title}&amp;url=https://nauczsiekodowac.pl${post.fields.slug}&amp;via=zogrodnik_m`}
                  title="Share on Twitter"
                >
                  Twitter
                </a>{' '}
                /{' '}
                <a
                  href={`https://github.com/MZOG/nauczsiekodowac.pl/tree/master/content/blog${post.fields.slug}index.md`}
                >
                  Edytuj post
                </a>
              </p>
            </div>
          </header>

          <section
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>

        <nav className="post-next-prev">
          <ul>
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}
            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

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
        author
        author_www
        category
      }
      fields {
        slug
      }
    }
  }
`;
