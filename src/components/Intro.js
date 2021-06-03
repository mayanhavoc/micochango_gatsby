import React from 'react'
// import { Link } from 'gatsby';
import * as introStyles from '../components/about.module.scss';


const Intro = () => {
    return (
        <intro className={introStyles.grid-2}>
            <div className={introStyles.item}>
                <div className={introStyles.popUp}>
                    <h2>About me</h2>
                    <p>Former lawyer transitioning into     software development. I have  extensive   project management experience and have helped hundreds of entrepreneurs build their startups. I am currently finishing an MBA degree with a focus on venture capital  and entrepreneurship. My purpose is to empower change-makers, innovators and visionaries    by providing them the tools to bring about positive change. </p>
                </div>
            </div>  
        </intro>
    )
};

export default Intro;