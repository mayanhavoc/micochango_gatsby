import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { HashLink as Link } from 'react-router-hash-link';
import * as navStyles from '../components/navbar.module.scss';

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "micochango-face.png"}) {
                id
                childImageSharp {
                    fixed (width: 30) {
                        ...GatsbyImageSharpFixed
                    }
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)


    return (
        <nav className={navStyles.container}>
            <h1>
                <Link 
                className={navStyles.title} 
                smooth to="#work">
                    <Img
                    className={navStyles.logoTitle} 
                    fixed = {data.image.childImageSharp.fixed}
                    />
                    micochango
                </Link>
            </h1>
            <ul 
            className={navStyles.navList}>
                <li>
                    <span>
                        <Link 
                        className={navStyles.navItem} activeClassName={navStyles.activeNavItem} 
                        smooth to='#home'>
                            Home
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link 
                        className={navStyles.navItem} activeClassName={navStyles.activeNavItem} 
                        smooth to="#about">
                            About
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link 
                        className={navStyles.navItem} activeClassName={navStyles.activeNavItem} 
                        smooth to="#work">
                            Work
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link 
                        className={navStyles.navItem} activeClassName={navStyles.activeNavItem} 
                        smooth to="#blog">
                            Blog
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link 
                        className={navStyles.navItem} activeClassName={navStyles.activeNavItem} 
                        smooth to="#contact">
                            Contact
                        </Link>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;