  import React, {  useState } from "react";
  import axios from "axios";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Button, Col, Row, Form, Modal } from "react-bootstrap";
  import { IoLocationOutline } from "react-icons/io5";
  import { IoCallOutline } from "react-icons/io5";
  import { BsEnvelope } from "react-icons/bs";
  const Contact = () => {

    const [UserData, setUserData] = useState([]);
    const [Name, setName ]= useState("");
    const [Email, setEmail] = useState("");
    const [Subject, setSubject] = useState("");
    const  [Message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const UserData = {
        Name: Name,
        Email: Email,
        Subject: Subject,
        Message:Message,
      };

      axios
        .post("http://localhost:8000/addFdata", UserData)
        .then((res) => {
          console.log(res.data.data);
          console.log("form data",res.data.data)


          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setShowModal(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return (
      <div className="m-5" id="contact">
        <div className="p-4">
          <h1>Contact</h1>
          <p>His needs result from something he wants to escape from</p>
        </div>
        <Row>
          <Col md="4">
            <div className="d-flex p-3">
              <IoLocationOutline size="25px" color="green" />
              <div className="ps-2">
                <h4>Adress</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="p-3 d-flex icon-circle">
              <IoCallOutline size="25px" color="green" />
              <div className="ps-2">
                <h5>Call Us</h5>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className="p-3 d-flex">
              <BsEnvelope size="25px" color="green" />
              <div className="ps-2">
                <h5>Email Us</h5>
                <p>info@example.com</p>
              </div>
            </div>
          </Col>
          <Col md="8">
            <Form onSubmit={handleSubmit} >
              <Row className="mt-4 mb-4">
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Control type="text" placeholder="Your Name" value={Name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="email" placeholder="Your Email" value={Email} onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control type="text" placeholder="Subject"  value={Subject} onChange={(e) => setSubject(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Control type="text" as="textarea" placeholder="Message" rows={5} value={Message} onChange={(e) => setMessage(e.target.value) } required />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="success" type="submit" className=" rounded-pill">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        {/* Bootstrap Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Message Sent Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for contacting us! We will get back to you soon.</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
  export default Contact;
