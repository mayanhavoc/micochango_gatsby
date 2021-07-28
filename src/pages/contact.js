import React from 'react';
import Head from '../components/head'
import * as layoutStyles from '../components/layout.module.scss';
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
    return (
       <>
           <Head title="Contact"/>
           <div className={layoutStyles.container} id="contact">
           <h1>Contact</h1>
           <ContactForm />
           </div>
       </>
    )
}

export default ContactPage;