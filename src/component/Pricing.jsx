import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Row, Col, Card, Accordion } from "react-bootstrap";
import { RxQuestionMarkCircled } from "react-icons/rx";
import faq from "../Assets/img/faq.jpg";
const Pricing = () => {
  // GET APT
  const [usedata, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/getplan")
      .then((res) => {
        setData(res.data.data);
        // console.log("xtrcyt",res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="pricing" style={{ backgroundColor: "lightgrey" }}>
      <div className="m-5">
        <h1>Our Plans</h1>
        <p>His needs result from something he wants to escape from</p>
      </div>
      <div className=" ps-5 text-center">
        <Row>
          {usedata.map((a) => (
            <Col md={3} className="mb-5">
              <Card
                className="shadow bg-white rounded h-100"
                style={{ width: "18rem" }}
              >
                <Card.Body>
                  <div>
                    <h5>{a.name}</h5>
                  </div>
                  <div className="d-flex justify-content-center">
                    <sup className="pricing-sup">$</sup>
                    <div className="pricing-price">
                      <p>{a.price}</p>
                    </div>
                    <div className="pricing-duration">/month</div>
                  </div>
                  <Card.Text className="">
                    <div className="p-2">
                      <div className="p-2">{a.desc1}</div>
                      <div className="p-2">{a.desc2}</div>
                      <div className="p-2">{a.desc3}</div>
                      <div className="p-2">{a.desc4}</div>
                      <div className="p-2 linethrough">{a.desc5}</div>
                      <div className="p-2 linethrough">{a.desc6}</div>
                      <div className="p-2 linethrough">{a.desc7}</div>
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-white">
                     <Button
                    href="#"
                    variant="outline-success"
                    className="rounded-pill mb-2"
                  >
                    BUY NOW
                  </Button>
                  </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="faq m-5">
        <Row>
          <Col md="6">
            <h2>
              Frequently Asked <b>Questions</b>
            </h2>
            <p>
              It is important to take care of the patient, to be followed by the
              patient, but it will happen at such a time that there is a lot of
              work and pain. Duis or Irure pain in the rebuke
            </p>
            <Accordion defaultActiveKey="" flush className="mb-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <RxQuestionMarkCircled color="green" size="24px"/> Can I start investing with $1000?

                </Accordion.Header>
                <Accordion.Body>
                  Yes, many brokerages have no minimum account size and will offer zero-commission trading, allowing you to begin investing with even very small amounts. In fact, now with many brokers offering fractional shares, you can invest in stocks even if their share price is over $1000.<br />Learn More How to Invest $1,000
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <RxQuestionMarkCircled color="green" size="24px" /> How do I invest in stocks?
                </Accordion.Header>
                <Accordion.Body>
                  While there are many ways to invest in stocks, one of the easiest and best ways for beginning investors to do so is to open up a retirement account with a discount broker. These accounts have tax advantages when saving for retirement and many different brokers have ones that cost little or even nothing to have.
                  <br />
                  Learn More Best Investment Accounts for Young Investors
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <RxQuestionMarkCircled color="green" size="24px" /> How can I invest with no money?
                </Accordion.Header>
                <Accordion.Body>
                  While you can’t invest with zero money, you can invest with very little. Many stock brokers offer accounts with no minimum balance and no trading commissions so almost any amount you add to your account can be used to invest.
                  <br />
                  Learn More How to Invest When You're Broke
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <RxQuestionMarkCircled color="green" size="24px" /> When should I start investing?
                </Accordion.Header>
                <Accordion.Body>
                  As soon as you can afford to. Because investment returns compound, that is, the money you earn from investing then earns money, the sooner you begin investing, the more time you give for this process to work.
                  <br />
                  Learn More 5 Advantages of Investing in Your 20s
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <RxQuestionMarkCircled color="green" size="24px" /> What time does the stock market open and close?
                </Accordion.Header>
                <Accordion.Body>
                  In the U.S. stock markets major exchanges such as the New York Stock Exchange (NYSE) and Nasdaq are open from 9:30 .a.m to 4.p.m Eastern Time. However, this varies around the world depending on what exchange you’re looking at and whether that day is a holiday.
                  <br />
                  Learn More Stock Market Opening Times Around the World
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md="6">
            <div className="ps-5 mt-5">
              <img
                src={faq}
                alt="Img"
                style={{  width: "560px" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Pricing;
