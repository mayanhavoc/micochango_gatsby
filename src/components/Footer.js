import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import * as footerStyles from '../components/footer.module.scss';

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                        author
                        title
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            <p>created by {data.site.siteMetadata.author}, &copy; 2021</p>
        </footer>
    )
}

export default Footer;