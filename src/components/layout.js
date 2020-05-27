import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import "../assets/styles.scss"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontFamily: `inherit`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h2
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(27),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          fontSize: `14px`
        }}>
        <p>© {new Date().getFullYear()} nauczsiekodowac.pl</p>

        <p>
          <a href="https://marcinzogrodnik.pl">Marcin Zogrodnik</a> & <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
