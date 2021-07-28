import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import { Link } from 'gatsby';
import { DiGithubFull } from "react-icons/di";
import * as introStyles from '../pages/about.module.scss';



const Intro = () => {
    const data = useStaticQuery(graphql`
        query Images {
            image: file(relativePath: {eq: "micochango-face.png"}) {
                id
                childImageSharp {
                    fixed {
                        ...GatsbyImageSharpFixed
                    }
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <div>
            <div className={introStyles.grid2}>
                <div className={introStyles.item}>
                    <div className={introStyles.popUp}>
                    <Img
                    fluid = {data.image.childImageSharp.fluid} 
                    />
                    </div>
                </div>
                <div className={introStyles.item}>
                    <div className={introStyles.popUp}>
                        <h2>better</h2>
                        <h2>business</h2>
                        <h2>solutions</h2>
                        <h2>through</h2>
                        <h2>code</h2>
                    </div>
                </div>  
            </div>
            <Link to="https://github.com/micochango" >
            <DiGithubFull size={'6rem'} />
            </Link>
        </div>
    )
};

export default Intro;