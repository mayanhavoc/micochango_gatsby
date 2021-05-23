// Step 1: Import React
import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout'
import * as indexStyles from '../components/index.module.scss';
import { FaRegPaperPlane } from "react-icons/fa";
import Head from '../components/head'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1 className={indexStyles.display1} style={{marginLeft: '0.5rem'}}>Hello!</h1>
      <div className={indexStyles.tagSection}>
        <div style={{display: 'flex', alignItems:'center', margin: '1rem',}}>
        <FaRegPaperPlane size="3rem" />

        </div>
        <div>
          <h2 style={{marginBottom: 0}}>Roberto Mayen-Hess</h2>
          <p style={{marginTop: '0.5rem'}}>Software Developer</p>
        </div>
      </div>
    </Layout>  
  )  
}

// Step 3: Export your component
export default IndexPage