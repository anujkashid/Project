import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Col, Card, Alert, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate


const Login = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerError("");
    axios
      .post(
        "http://localhost:8000/loginauth",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { token } = response.data.token;
        console.log(response.data);
          localStorage.setItem("accessToken", token);
        //   localStorage.setItem("userid",response.data.id);

          localStorage.setItem("fname", response.data.fname)
          localStorage.setItem("lname", response.data.lname)
          navigate("/home");
      })
      .catch((err) => {
        console.error("Login Error:", err);
        setServerError( "Invalid credentials. Please try again later.");
      });
  };

  return (
    <Col
      md={12}
      lg={12}
      className="d-flex justify-content-center align-items-center mt-5 mb-5"
    >
      <Card className="shadow p-5" style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title className="text-center">
            <h1>Login</h1>
            {serverError && <Alert variant="danger">{serverError}</Alert>}
          </Card.Title>
          <Card.Text>
          <Button variant="success"> Go to Dashboard</Button>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-5" controlId="formBasicEmail">
                <Form.Label>
                  <b>Username:</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
               
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <b>Password:</b>
                </Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onClick={() => setShowPassword(!showPassword)}
                />
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <div className="text-center mb-4">
                <Button
                  className="mt-3 px-4 py-2"
                  variant="primary"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </Form>
          </Card.Text>
         <Row>
          <Col>
              <Card.Link href="#">Forgot Password</Card.Link>
          </Col>
          <Col>
                <Card.Link href="#" className="d-flex justify-content-end" >
                   Continue As A Guest
            </Card.Link>
          </Col>
         </Row>
            <br></br>
          <Card.Link className="ms-5">
            <Link to='/registration'>Don’t have an account? Get Started</Link>
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Login;
