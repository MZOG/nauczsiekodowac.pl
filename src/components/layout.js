import React from "react"
import "../assets/styles.scss"

import Header from "./header"
import Footer from "./footer"

const Layout = ({children }) => {
  return (
    <main>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  )
}

export default Layout
