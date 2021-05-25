import React from 'react'
// import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as introStyles from '../components/about.module.scss';


const Intro = () => {
    return (
        <intro >
            <Container fluid="md">
                <Row className="justify-content-md-center">
                    <Col>
                        <div className={introStyles.item}>
                            <div className={introStyles.popUp}>
                                <h2>About me</h2>
                                <p>Former lawyer transitioning into     software    development. I have     extensive   project       management   experience and have helped   hundreds of  entrepreneurs build  their        startups.    I   am currently finishing an   MBA    degree with a focus on  venture     capital     and         entrepreneurship. My    purpose is to  empower change-makers,    innovators and    visionaries    by      providing the tools to   bring about     positive change.    </p>
                            </div>
                        </div>  
                    </Col>
                    <Col>
                        <div className="profile-pic"></div>
                    </Col>
                </Row>
            </Container >
        </intro>
    )
};

export default Intro;