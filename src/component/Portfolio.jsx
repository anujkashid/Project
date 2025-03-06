import React from 'react'
import {Row, Col, Button,} from 'react-bootstrap'
import portfolio1 from '../Assets/img/masonry-portfolio-1.jpg';
import portfolio2 from '../Assets/img/masonry-portfolio-2.jpg';
import portfolio3 from '../Assets/img/masonry-portfolio-3.jpg';
import portfolio4 from '../Assets/img/masonry-portfolio-4.jpg';
import portfolio5 from '../Assets/img/masonry-portfolio-5.jpg';
import portfolio6 from '../Assets/img/controller.jpeg';
import portfolio7 from '../Assets/img/masonry-portfolio-7.jpg';
import portfolio8 from '../Assets/img/masonry-portfolio-8.jpg';
import portfolio9 from '../Assets/img/masonry-portfolio-9.jpg';
 const Portfolio = () => {
  return (
    <div id='portfolio'>
      <div className='m-5'>
      <h1>Portfolio</h1>
      <p>His needs result from something he wants to escape from</p>
      </div>
      <div className='text-center p-5'>
        <Button variant="light">All</Button>
        <Button variant="light">APP</Button>
        <Button variant="light">Card</Button>
        <Button variant="light">Web</Button>
      </div>
      <Row className='m-5'>
        <Col>
        <img src={portfolio1} className='img-fluid mb-4' style={{height: '350px', width: '350px'}} alt='Img'/>
        <img src={portfolio6} className='img-fluid mb-4' style={{height: '400px', width: '350px'}} alt='Img'/>
        </Col>
        <Col>
        <img src={portfolio2} className='img-fluid mb-4' style={{height: '200px', width: '350px'}} alt='Img'/>
        <img src={portfolio5} className='img-fluid mb-4' style={{height: '430px', width: '350px'}} alt='Img'/>
        <img src={portfolio9} className='img-fluid mb-4' style={{height: '210px', width: '350px'}} alt='Img'/>
        </Col>
        <Col>
        <img src={portfolio3} className='img-fluid mb-4' style={{height: '190px', width: '350px'}} alt='Img'/>
        <img src={portfolio4} className='img-fluid mb-4' style={{height: '200px', width: '350px'}} alt='Img'/>
        <img src={portfolio7} className='img-fluid mb-4' style={{height: '200px', width: '350px'}} alt='Img'/>
        <img src={portfolio8} className='img-fluid mb-4' style={{height: '200px', width: '350px'}} alt='Img'/>
        </Col>
      </Row>
    </div> 
  )
}
export default Portfolio;
