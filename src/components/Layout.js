import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/about';
import Work from '../pages/work';
import Blog from '../pages/blog';
import Contact from '../pages/contact';


import * as layoutStyles from '../components/layout.module.scss';

const Layout = (props) => {
    return (
        <div className ={ layoutStyles.container } >
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            <About />
            <Work />
            <Blog />
            <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;