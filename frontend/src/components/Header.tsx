import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

interface tagInterface {
  node: {
    id: number
    name: string
  }
}

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <div>
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
)

export default Header
