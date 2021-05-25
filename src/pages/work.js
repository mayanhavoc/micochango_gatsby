import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const WorkPage = () => {
    return (
        <Layout>
          <Head title="About"/>
          <body>
            <div class="portfolio-list">
               <div class="container">
                   <h1 class="oleez-page-title wow fadeInUp">Recent projects</h1>
                    <article class="project">
                       <div class="row">
                           <div class="col-md-4 mb-5 md-mb-0 project-content wow fadeInLeft">
                               <h2 class="project-title">Movie seat booking app</h2>
                               <Link to="https://movie-seat-b00king.netlify.app/" class="project-link">view project</Link>
                           </div>
                           <div class="col-md-7 mb-5">
                               <div class="project-thumbnail-wrapper wow fadeInRight">
                                   <img src="movie-theater.jpeg" style={{ maxWidth: '90%', borderRadius: '15px', padding: '1rem 1rem 1rem 0'}} alt="Movie-seat-booking-app"/>
                               </div>
                           </div>
                       </div>
                   </article>
                   <article class="project">
                       <div class="row">
                           <div class="col-md-4 mb-5 md-mb-0 project-content wow fadeInLeft">
                               <h2 class="project-title">Form validator</h2>
                               <Link to="https://form-validat0r.netlify.app/" class="project-link">view project</Link>
                           </div>
                           <div class="col-md-7 wow fadeInRight">
                               <div class="project-thumbnail-wrapper">
                                   <img src="fb-login.jpeg" style={{ maxWidth: '90%', borderRadius: '15px', padding: '1rem 1rem 1rem 0'}} alt="project"/>
                               </div>
                           </div>
                       </div>
                   </article>
                   <article class="project">
                       <div class="row">
                           <div class="col-md-4 mb-5 md-mb-0 project-content wow fadeInLeft">
                               <h2 class="project-title">Exchange rate calculator</h2>
                               <Link to="https://exchange-rate-calculat0r.netlify.app/" class="project-link">view project</Link>
                           </div>
                           <div class="col-md-7 wow fadeInRight">
                               <div class="project-thumbnail-wrapper">
                                   <img src="currencies.jpeg" style={{ maxWidth: '90%', borderRadius: '15px', padding: '1rem 1rem 1rem 0'}} alt="project"/>
                               </div>
                           </div>
                       </div>
                   </article>
                   <article class="project">
                       <div class="row">
                           <div class="col-md-4 mb-5 md-mb-0 project-content wow fadeInLeft">
                               <h2 class="project-title">Meal finder API</h2>
                               <Link to="https://mealdb-finder-api.netlify.app/" class="project-link">view project</Link>
                           </div>
                           <div class="col-md-7 wow fadeInRight">
                               <div class="project-thumbnail-wrapper">
                               <img src="/soup.jpeg" style={{ maxWidth: '90%', borderRadius: '15px', padding: '1rem 1rem 1rem 0'}} alt="Roberto Mayen-Hess"/>
                               </div>
                           </div>
                       </div>
                   </article>
               </div>
            </div>
        </body>
        </Layout>
    )
}

export default WorkPage;