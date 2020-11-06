import * as React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styles from '../styles/header.module.css'

interface HeaderProps {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <nav className={styles.headerNav}>
    <div className={styles.homeLink}>
      <Link to="/">Home</Link>
    </div>
    <div className={styles.aboutLink}>
      <Link to="/about">About</Link>
    </div>
  </nav>
)

export default Header
