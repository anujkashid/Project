import { useState } from "react";
import { Button, Form, Row, Col, Modal } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const UserRegistration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    if (password !== confirmpassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    const Userdata = {
      fname,
      lname,
      mnumber,
      gender,
      username,
      city,
      state,
      zip,
      address,
      password,
    };

    axios
      .post("http://localhost:8000/addRdata", Userdata)
      .then((res) => {
        console.log(res.data);

        // Reset form fields
        setFname("");
        setLname("");
        setMnumber("");
        setGender("");
        setUsername("");
        setCity("");
        setState("");
        setZip("");
        setAddress(""); 
        setPassword("");
        setConfirmpassword("");
        setValidated(false); // Reset validation state
        setErrorMessage(""); // Clear any previous error
        setShowModal(true);  // Show success modal
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div id="registration">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="m-4 ms-5 p-5"
      >
        <div className="m-2 mb-5">
          <h1>Registration Form</h1>
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01" className="mb-2">
            <Form.Label>
              <b>First name :</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a First Name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02" className="mb-2">
            <Form.Label>
              <b>Last name :</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a Last Name.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="forMnumber" className="mb-2">
            <Form.Label>
              <b>Mobile Number :</b>
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your mobile number"
              value={mnumber}
              onChange={(e) => setMnumber(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide Mobile Number.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" className="mb-2">
            <Form.Label as="legend" column sm={2} className="fw-bold">
              Gender
            </Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type={type}
                  value="Male"
                  id={`inline-${type}-1`}
                  onChange={() => setGender("Male")}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type={type}
                  value="Female"
                  id={`inline-${type}-2`}
                  onChange={() => setGender("Female")}
                />
                <Form.Check
                  inline
                  label="Other"
                  name="group1"
                  type={type}
                  value="Other"
                  id={`inline-${type}-3`}
                  onChange={() => setGender("Other")}
                />
              </div>
            ))}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>
              <b>Username :</b>
            </Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom03" className="mb-2">
            <Form.Label>
              <b>City :</b>
            </Form.Label>
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom04" className="mb-2">
            <Form.Label>
              <b>State :</b>
            </Form.Label>
            <Form.Control
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05" className="mb-2">
            <Form.Label>
              <b>Zip :</b>
            </Form.Label>
            <Form.Control
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Zip"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-2"
            as={Col}
            md="6"
            controlId="formGridAddress1"
          >
            <Form.Label>
              <b>Address :</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Address
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group controlId="formPassword" className="mb-2">
            <Form.Label>
              <b>Password :</b>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-2">
            <Form.Label>
              <b>Confirm Password :</b>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please confirm your password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div className=" d-flex justify-content-center">
        <Button type="submit" className="btn btn-primary  ">
          Submit form
        </Button>
        <span className="ms-5"><Link to='/'>Already have an account !</Link></span>        
        </div>
      </Form>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Form submitted successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserRegistration;
