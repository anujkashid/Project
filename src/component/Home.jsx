import React from 'react'
import About from '../component/About.jsx'
import Services from '../component/Services.jsx'
import Features from '../component/Features.jsx';
import Portfolio from '../component/Portfolio.jsx';
import Pricing from '../component/Pricing.jsx';
import Contact from '../component/Contact.jsx';
import Foot from '../component/Foot.jsx';
import { Container, Button, Row, Col,  } from 'react-bootstrap';
import { IoIosPlay } from "react-icons/io"; 
import Products from './Products.jsx';
import Head from './Head.jsx';
export const Home = () => {
  return (
    <>
    
    <div className="home-section text-white p-5">
    <Container>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={8}>
    <div className='' style={{marginTop:"30%"}}>
      <p className="font-TimesNewRoman mb-3" style={{fontWeight:"500", fontSize:"50px"}}>Welcome to Elevate Investments</p>
      <p className="lead">"Invest Smarter, Reach Higher"</p>
      <Button variant="success" size="lg" style={{height:"90px", width:"90px", borderRadius:"50%"}}><IoIosPlay /></Button>
    </div> 
      </Col>
      </Row>  
    </Container>
    </div>
    
    <div id='home'>
     <Head/>
    <About/>
    <Services/>
    <Features/>
    <Portfolio/>
    <Pricing/>
    <Contact/>
    <Products/>
    <Foot/>
    </div>
    </>
  )
}
export default Home;
