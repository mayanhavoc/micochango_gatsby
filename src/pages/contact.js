import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/head'


const ContactPage = () => {
    return (
       <Layout>
           <Head title="Contact"/>
           <h1>Contact</h1>
           <p>The best way to contact me is at <a href= "mailto:robertomh@protonmail.com">robertomh@protonmail.com</a></p>
       </Layout>
    )
}

export default ContactPage;