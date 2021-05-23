import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import * as headerStyles from '../components/header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
            <ul className={headerStyles.navList}>
                <li><span><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link></span></li>
                <li><span><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></span></li>
                <li><span><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></span></li>
                <li><span><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></span></li>
            </ul>
        </header>
    )
}

export default Header;