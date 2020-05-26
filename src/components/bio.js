/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div>
      <p style={{
        lineHeight: 1.5,
        margin: `10px 0`,
        display: `block`
      }}>
        Kodowanie jest proste! Naucz się tworzyć nowoczesne strony internetowe.
      </p>
      <p
        style={{
          lineHeight: 1.5,
          display: `block`
        }}><strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> oraz <strong>JAMstack</strong>.</p>
    </div>
  )
}

export default Bio
