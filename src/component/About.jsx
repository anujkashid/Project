import React from 'react'
import { Button, Col } from 'react-bootstrap';
import { GoArrowRight, } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true
    });
  }, []);

  return (
    <>
    <div className="m-5 " id='about'>
      <div data-aos="fade-right" data-aos-delay="600">
        <h5>About Us</h5>
        <p className='fs-2'>Empowering Your Investment Journey</p>
      </div>
      <div className="row gy={4}">
        <Col md={6}>
          <div className='border-2' data-aos="fade-right" data-aos-delay="600">
            <p>At Elevate Investments, we are dedicated to helping you achieve your financial goals. With a proven track record in brokerage services, we provide cutting-edge tools, expert insights, and personalized support to empower your investment decisions.</p>
            <ul><IoMdCheckmarkCircleOutline color='green' /> Access to a wide range of investment options tailored to your needs.</ul>
            <ul><IoMdCheckmarkCircleOutline color='green' /> Secure and transparent trading platforms.</ul>
            <ul><IoMdCheckmarkCircleOutline color='green' /> Expert guidance to help grow your wealth.</ul>
          </div>

        </Col>
        <Col md={1}>
        </Col>
        <Col md={5} data-aos="fade-left" data-aos-delay="1000" className='text-center'>
          <div className='mb-2'>
<div><span className='fw-bold fs-4'>Relax... and make your investments work for you</span></div>          
            <br/>Whether you're a seasoned investor or just starting, we are here to help you every step of the way.
            </div>
          <Button variant="success" className="rounded-pill lg text-center"> Start Now <GoArrowRight /></Button>
        </Col>
      </div>
    </div>
    </>
  )
}
export default About;