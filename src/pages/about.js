import React from 'react';
// import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';
import * as aboutStyles from '../styles/index.scss';


const AboutPage = () => {
    return (
        <Layout>
          <Head title="About"/>
          <div>
            <div>
              <div>
                <div className="pop-up">
                  <h2>About me</h2>
                  <p>Former lawyer transitioning into software development. I have extensive project  management experience and have helped hundreds of entrepreneurs build their startups.    I am currently finishing an MBA degree with a focus on venture capital and     entrepreneurship. My purpose is to empower change-makers, innovators and visionaries    by providing the tools to bring about positive change.</p>
                </div>
              </div>        
              <div sm={8}>
                <img src="/Profile-pic.png" style={{ maxWidth: '100%'}} alt="Roberto Mayen-Hess"/>
              </div>
            </div>
            <div className='grid-2'>
            <div className="item item-3">
              <h2>Skills</h2>
              <ul className="pop-up">
                  <li>Project management</li>
                  <li>Web development</li>
                  <li>Business management</li>
                  <li>MongoDB</li>
                  <li>Market analysis</li>
                  <li>Git and Github</li>
                  <li>Strategic analysis</li>
                  <li>Express</li>
                  <li>Team leadership</li>
                  <li>Figma</li>
                  <li>Financial analysis</li>
                  <li>HTML, CSS, Javascript</li>
                  <li>Organizational behavior and human resource  management</li>
                  <li> NodeJS and React</li>
              </ul>
          </div>
          <div className="item item-4">
            <div>
                <h2>Education</h2>
            </div>
            <div className="pop-up">
                <h3 className="m-2">MBA candidate</h3>
                <h4>Specialization: entrepreneurship and innovation</h4>
                <span>2019 - present | University of London, United Kingdom</span>
            </div>
            <div className="pop-up">
                <h3 className="m-1">Attorney and notary</h3>
                <span>2004 - 2009 | Universidad Francisco Marroquín, Guatemala</span>
            </div>
          </div>
          </div>
          <div className="grid-2">
          <div className="item item-5">
              <h2>Work experience</h2>
              <div className="pop-up">
                  <h3>Software Developer</h3>
                  <span>2020 - present | Maka Mobile, Netherlands (remote)</span>
                  <p>Develop user-focused, responsive digital solutions using cutting-edge techniques and tools. 
                  Build wireframes and document functional requirements.
                  Supervised the implementation of a new API interface and database.</p>
              </div>
              <div class="pop-up">
                <h3>Business Development Manager</h3>
                <span>2019 - 2020 | Maka Mobile, Netherlands (remote)</span>
                <p>Recruited, prepared and supervised new publishing affiliate’s to the affiliate network. 
                Ensured process documentation was kept up-to-date while communicating changes to the CEO.
                Monitored traffic quality and quantity to make sure it met the client's requirements.</p>
              </div>
              <div class="pop-up">
                <h3>Bar Manager</h3>
                <span>2017 - 2019 | Bar Alto Restaurant and Bar, Australia</span>
                <p>Managed invoicing, ordering, budgeting and inventory.   
                Negotiated with vendors to provide training to staff and promotions for the bar. 
                Managed the weekly staff roster. 
                Made sure all licenses were up to date and that staff followed proper liquor license requirements. </p>
              </div>
              <div class="pop-up">
                <h3>Program Director</h3>
                <span>2008 - 2016 | Guatemala City Municipality, Guatemala</span>
                <p>Developed, implemented and managed a first of its kind startup incubator focused on helping small businesses grow with the help professionals and successful entrepreneurs. 
                Developed, implemented and coordinated an urban extreme sports program  directed at ‘at-risk-youths’.</p>
              </div>
            </div>
            <div class="item item-6">
                <h2>Other projects</h2>
                <div class="pop-up">
                  <h3 class="m-2">Full-stack app</h3>
                  <p><span class="emphasis">2021</span> - Currently designing and end-to-end solution designed to begin the onboarding process of digitalization of consumer data and automatization and standardization of customer service and sales processes.</p>
                </div>
                <div class="pop-up">
                    <h3>Fun voter education</h3>
                    <p><span class="emphasis">2015</span> - After much political turmoil in Guatemala, a group of friends and I created a media campaign to educate citizens on their constitutional rights while also advocating the fight against corruption. The project amassed more than 50K views.</p>
                </div>
                <div class="pop-up">
                    <h3>Flying hot air balloons</h3>
                    <p><span class="emphasis">2013 - 2015</span> - For 3 years I worked as an operations coordinator for the first hot air balloon company in Guatemala. We produced two sold out free-flight seasons and one national tour as a part of a marketing campaign.</p>
                </div>
                <div class="pop-up">
                  <h3>Created a really cool brand</h3>
                  <p><span class="emphasis">2013 - 2014</span> - Turned a christmas gift into a business opportunity when a friend and I created Bacilongas, a locally sourced, hand-made balance board company.</p>
                </div>
                <div class="pop-up">
                  <span>I can read and write <span><em class="emphasis">spanish</em></span> and <span><em class="emphasis">english</em></span> fluently.</span>
                </div>
            </div>
            </div>
            <div>
        <footer>
            <span class="text-muted">references available upon request</span>
            <span class="text-muted">v.april.2021</span>
        </footer>
        <div class="line-1"></div>
          </div>
        </div>         
        </Layout>
    )
}

export default AboutPage;