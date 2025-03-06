import React from 'react'
import {Col, Row, Button} from 'react-bootstrap';
import Featuresbg from '../Assets/img/features-bg.jpg';
import client1 from '../Assets/img/client-1.png';
import client2 from '../Assets/img/client-2.png';
import client3 from '../Assets/img/client-3.png';
import client4 from '../Assets/img/client-4.png';
import client5 from '../Assets/img/client-5.png';
import client6 from '../Assets/img/client-6.png';
import client7 from '../Assets/img/client-7.png';
import client8 from '../Assets/img/client-8.png';
import { BsArchive } from "react-icons/bs";
import { BsBasket } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import { BsCameraReels } from "react-icons/bs";
import Table from 'react-bootstrap/Table';
 const Features = () => {
  return (
  <div id='features'>
       <div className='m-5'>
        <h1>Features</h1>
        <p>At Elevate Investments, we provide a diverse range of financial instruments to suit every investor's needs:</p>
        <div className='d-flex justify-content-center'> 
          <Button variant="success" className='m-2'>
            Stocks
          </Button>
          <Button variant="success" className='m-2'>
            Bonds
          </Button>
          <Button variant="success" className='m-2'>
            Mutual Funds
          </Button>
          <Button variant="success" className='m-2'>
            Cryptocurrency
          </Button>
        </div>
        </div>
    <div className='features-img'>
      <Row>
         <Col md='8'>
         <div className='p-5' style={{color:'white'}}>
         <h2>Call To Action</h2>
         <p><b>Ready to Elevate Your Investments?</b><br/> Join thousands of investors who trust us to help them
          grow their wealth. Whether you're just starting or looking to optimize your portfolio, we have the tools, 
          insights, and expertise to guide you every step of the way.
          <br/> <b>Take the First Step Towards Financial Freedom Today!</b>
         </p>
           </div>
         </Col>
         <Col md='4' className='d-flex justify-content-center align-items-center'>
        <Button variant="success" size="lg" className="rounded-pill features-button"  >Call To Action</Button>
        </Col>
      </Row>
    </div>
    <Row>
      <Col md='6'>
    <div className='mx-5 p-5'>
      <div className='d-flex p-3 '>
          <BsArchive color='green' size='60px'/>
        <div className='ps-2'>
        <h4>Est labore ad</h4>
        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
        </div>
      </div>
      <div className='d-flex p-3' >
          <BsBasket color='green' size='60px'/>
        <div className='ps-2'>
        <h4>Harum esse qui</h4>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
        </div>
      </div>
      <div className='d-flex p-3'>
          <BsBroadcast color='green' size='60px'/>
        <div className='ps-2'>
        <h4>Aut occaecati</h4>
        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facer</p>
        </div>
      </div>
      <div className='d-flex p-3'>
          <BsCameraReels color='green' size='60px' />
        <div className='ps-2'>
        <h4>Beatae veritatis</h4>
        <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
        </div>
      </div>
    </div>
      </Col>
      <Col md='6'>
      <div className='p-2 mt-5'><img src={Featuresbg} alt='IMG' style={{height:'100%', width:'100%'}}/></div>
      </Col>
    </Row>
    <div className="m-4">
  <Row>
    <Col xs={6} sm={6} md={3} className="mb-5">
      <img src={client1} alt="Img" className="features-client " />
    </Col>
    <Col xs={6} sm={6} md={3} className="mb-3">
      <img src={client2} alt="Img" className="features-client " />
    </Col>
    <Col xs={6} sm={6} md={3} className="mb-3">
      <img src={client3} alt="Img" className="features-client " />
    </Col>
    <Col xs={6} sm={6} md={3} className="mb-3">
      <img src={client4} alt="Img" className="features-client " />
    </Col>
  </Row>
  <Row>
    <Col xs={6} sm={6} md={3} className="mb-3">
      <img src={client5} alt="Img" className="features-client " />
    </Col>
    <Col xs={6} sm={6} md={3} className="mb-3">
      <img src={client6} alt="Img" className="features-client " />
    </Col>
    <Col xs={6} sm={6} md={3} className="mb-3">
      <img src={client7} alt="Img" className="features-client " />
    </Col>
    <Col xs={6} sm={6} md={3} className="mb-3">
      <img src={client8} alt="Img" className="features-client " />
    </Col>
  </Row>
</div>

    <div className='features-stats text-center'>
      <div className=' pt-5'>
      <h1>What we have achieved so far</h1>
      <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
      </div> 
         <Row className='m-5'>
          <Col md='3'><h1>232</h1><h5>Client</h5></Col>
          <Col md='3'><h1>521</h1><h5>Project</h5></Col>
          <Col md='3'><h1>1453</h1><h5>Hours Of Support</h5></Col>
          <Col md='3'><h1>32</h1><h5>Workers</h5></Col>

         </Row>
    </div>
  </div>
  )
}
export default Features;
