import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { IoIosBasket } from "react-icons/io";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

const Products = () => {
  const [usedata, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getproductdata")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="products" style={{ padding: "20px" }}>
      <h1 className="m-4">Check Out Our Interesting Products</h1>
      <div style={{ textAlign: "right" }}>
        <IoIosBasket size={60} />
      </div>
      <Row>
        <div style={{ display: "flex", textAlign: "right" }}>
          <p>
            Filters <IoFilter size={30} />
          </p>
          <p className="ms-5">
            Sort By:
            <Form.Select>
              <option>Latest</option>
              <option>Price: High To Low</option>
              <option>Price: Low To High</option>
            </Form.Select>
          </p>
        </div>
        {usedata.map((product, index) => (
          <Col className="mx-2 mb-4" key={index}>
            <Card
              className=" shadow"
              style={{
                width: "20rem",
                textAlign: "center",
                border: "none",
              }}
            >
              <Card.Img
                className="img-fluid"
                variant="top"
                src={`http://localhost:8000/images/${product.image}`}
                alt={product.pname}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {product.pname}
                </Card.Title>

                <div
                  className="card-price mb-2"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {product.price}
                </div>

                {/* Colors Dropdown */}
                <div className="mb-2">
                  <DropdownButton as={ButtonGroup} size="sm" title="Colors">
                    {product.color &&
                    Object.entries(product.color).length > 0 ? (
                      Object.entries(product.color).map(([key, value], i) => (
                        <Dropdown.Item key={i} eventKey={i}>
                          {value}
                        </Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item>No Colors Available</Dropdown.Item>
                    )}
                  </DropdownButton>
                </div>

                {/* Sizes Dropdown */}
                <div className="mb-2">
                  <DropdownButton as={ButtonGroup} size="sm" title="Sizes">
                    {product.size &&
                    Object.entries(product.size).length > 0 ? (
                      Object.entries(product.size).map(([key, value], i) => (
                        <Dropdown.Item key={i} eventKey={i}>
                          {value}
                        </Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item>No Sizes Available</Dropdown.Item>
                    )}
                  </DropdownButton>
                </div>

                {/* Star Ratings */}99999
                <div className="mb-2">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < Math.floor(product.rating) ? (
                      <FaStar key={i} style={{ color: "#FFD700" }} />
                    ) : (
                      <FaRegStar key={i} style={{ color: "#FFD700" }} />
                    )
                  )}
                </div>

                <div className="text-center">
                  <Button variant="dark" className="m-2 p-2">
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
