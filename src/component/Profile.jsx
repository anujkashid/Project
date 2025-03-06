import React from 'react';
import { Nav } from 'react-bootstrap';
import { BsBarChartLineFill, BsCart } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";
// import { LuUserSquare2 } from "react-icons/lu";
// import { BsCart } from "react-icons/bs";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';
import profile1 from "../Assets/img/avatar-1.webp"; 

const Profile = () => {
  const userfname = localStorage.getItem('fname');
  const userlname = localStorage.getItem('lname');
  return (
    <>
    <style>
      {`
      .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 110%;
        z-index: 1000;
        // padding: 0rem;
      }
      .nav-link {
        color: white;
        font-size: 20px
      }
      .nav-link:hover {
        background-color: #e2e6ea; 
        color: #007bff; 
      }
    `}
    </style>

    <div className="offcanvas-custom sidebar" style={{  overflow: 'auto', background: 'rgba(21, 115, 71, 1.0)' }}>
      <div className='m-2 text-white' style={{ display: 'flex' }}> 
        <img src={profile1} alt="profile" style={{ width: "60px", borderRadius: "50%" }} /> 
        <h2 className='m-2'>{userfname} {userlname}</h2>
      </div>
      <Nav defaultActiveKey="/account_info" className="flex-column">
        <Nav.Item>
          <Link to="/account_info" className="nav-link p-2">
            <BsBarChartLineFill size={40} color="white" /> Account Info
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="" className="nav-link p-2">
             Security
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="" className="nav-link p-2">
            <RiContactsBook2Fill size={40} color="white" /> Payment Methods
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="" className="nav-link p-2">
            <RiCustomerServiceFill size={40} color="white" /> Order History
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="" className="nav-link p-2">
            <RiCustomerServiceFill size={40} color="white" /> Your Cart
          </Link>
        </Nav.Item>
        
        
        <Nav.Item>
          <Link to="" className="nav-link p-2">
            Rewards Earned
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/head/currentplans" className="nav-link p-2">
            <BsCart size={40} color="grey" /> Current Plan
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/" className="nav-link p-2">
            <IoIosLogIn size={40} color="white" /> Sign Out
          </Link>
        </Nav.Item>
      </Nav>
    </div>
    </>
  );
};

export default Profile;
