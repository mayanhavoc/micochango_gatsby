import React from 'react'
import Head from '../components/head'
import * as layoutStyles from '../components/layout.module.scss';
import Intro from '../components/Intro'


function Home(){
    return(
        <>
            <Head title="home" id='home'/>
            <div className={layoutStyles.container}>
            <Intro />
            </div>
        </>
    );
}

export default Home;