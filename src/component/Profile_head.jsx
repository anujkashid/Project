import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { Routes, Route } from 'react-router-dom'; 
import Profile from './Profile';
import Account_info from './Account_info';

const Profile_head = () => {
  return (
    <Container fluid>
      <Row>
        {/* Offcanvas Column */}
        <Col md={3} >
          <Profile />
        </Col>

        {/* Main Content Column */}
        <Col md={9}>
          <div  style={{background: 'white'}} >
            <Routes>
              <Route path="/account_info" element={<Account_info />}  />
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Profile_head;