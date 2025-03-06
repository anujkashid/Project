import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
 const Foot = () => {
  return (
    <div className='text-center p-4' style={{background:'black', color:'white'}}>
        <h1>KnightOne</h1>
        <p>And either he who flees them is nothing. With great physical effort, choosing a flight is often the most convenient thing to do.</p>
        <div className='d-flex p-4 justify-content-center'>
            <div className='circle1 m-1'><FaXTwitter size='20px' /></div>
            <div className='circle1 m-1'><MdOutlineFacebook size='20px' /></div>
            <div className='circle1 m-1'><FaInstagram size='20px' /></div>
            <div className='circle1 m-1'><FaSkype size='20px' /></div>
            <div className='circle1 m-1'><FaLinkedin size='20px' /></div>
        </div>
        <hr/>
        <p>Copyright <b>KnightOne</b> All Rights Reserved</p>
        <p>Designed by Anuj</p>

    </div>
  )
}
export default Foot;