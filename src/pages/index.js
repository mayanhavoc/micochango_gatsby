// Step 1: Import React
import React from 'react';
// import { Link } from 'gatsby';
// import { FaRegPaperPlane } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
// import Head from '../components/head'
import Home from '../pages/Home'
import About from '../pages/about'
import Work from '../pages/work'
import Blog from '../pages/blog'
import Contact from '../pages/contact'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch />
          <Route patch='/' exact component={Home} />
          <Route patch='/about' exact component={About} />
          <Route patch='work' exact component={Work} />
          <Route patch='blog' exact component={Blog} />
          <Route patch='contact' exact component={Contact} />
      </Router>
    </>  
  )  
}

// Step 3: Export your component
export default IndexPage