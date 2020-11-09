import React from 'react'
import { Link } from 'gatsby'

const Header = () => {

  return(
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            {"< nauczsiekodowac />"}
          </Link>
        </div>

        <nav className="site-navigation">
          <ul>
            <li>
              <Link to="/dodaj">
                Dodaj
              </Link>
            </li>
            <li>
              <Link to="/contact">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header