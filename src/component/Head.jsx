import React from 'react'
import {Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Head = () => {
  const userfname = localStorage.getItem('fname');
  const userlname = localStorage.getItem('lname');
  return (
    <Navbar className='head-navbar' fixed="top" collapseOnSelect expand="xl" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className='text-success bold '><h1>Elevate Investments</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <NavDropdown title="Profile" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Orders</NavDropdown.Item>
              {/* <NavDropdown title="DeepDropdown" id="collapsible-nav-deepdropdown" >
              <NavDropdown.Item href="#action/3.3">DeepDropdown 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DeepDropdown 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DeepDropdown 3</NavDropdown.Item>
              </NavDropdown> */}
              <NavDropdown.Item href="#action/3.2">Wishlist </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rewards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Address</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='mx-2'>        
          <Button  href='' style={{borderRadius:"20rem", backgroundColor:"green",}} className='mx-2 p-2 '><Link to="/profile_head" className='text-decoration-none text-white'> {userfname} {userlname}</Link></Button>
          <Button style={{borderRadius:"20rem", backgroundColor:"green",}} className='mx-2 p-2 '><Link to="/" className='text-decoration-none text-white'>Log Out</Link></Button>      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Head;