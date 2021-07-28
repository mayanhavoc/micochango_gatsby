import React from 'react'
import './ContactForm.css'


export default function ContactForm() {
    return (
        <>
            <div className="container">
            <div className="wrapper">
                <div className="company-info">
                <h3 className="contact-title">micochango</h3>
                    <ul>
                        <li>this.micochango@gmail.com</li>
                    </ul>
                </div>
                <div className="contact">
                    
                    <form
                    name="contact" 
                    id="contactForm"
                    method="POST"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label htmlFor="name">Name</label>
                            <input
                            type="text" 
                            name="name" 
                            id="name" 
                            required/>
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input 
                            type="email" 
                            name="_replyto"   
                            id="email" 
                            required/>
                        </p>
                    <p>
                        <label>Phone</label>
                        <input 
                        type="text" 
                        name="phone" 
                        id="phone"/>
                    </p>
                    <p className="full">
                        <label>Message</label>
                        <textarea 
                        name="message" 
                        rows="5" 
                        id="message"/>
                    </p>
                    <p className="full">
                    <button 
                    type="submit"
                    >Send</button>
                    </p>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
