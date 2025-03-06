import { Button, Card } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import "animate.css/animate.min.css";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Services = () => {
  // GET API
  const [usedata, setData] = useState([]);
  const scrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true); // Control auto-scroll state

  useEffect(() => {
    axios
      .get("http://localhost:8000/getSdata")
      .then((res) => {
        setData(res.data.data);
        console.log("API Data:", res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  // Manual Scroll Logic
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const scrollAmount = 400; // Adjust for card size

      // Pause auto-scroll temporarily
      setAutoScroll(false);

      if (direction === "left") {
        scrollContainer.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        scrollContainer.scrollLeft += scrollAmount;
      }

      // Resume auto-scroll after a delay
      setTimeout(() => {
        setAutoScroll(true);
      }, 2000); // Adjust delay as needed
    }
  };

  // Auto-Scroll Effect
  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const scrollContainer = scrollRef.current;

          // Reset to the start when reaching the end
          if (
            scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
            scrollContainer.scrollWidth
          ) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 2; // Adjust scroll speed
          }
        }
      }, 30); // Adjust scroll interval speed

      return () => clearInterval(interval);
    }
  }, [autoScroll]); // Restart auto-scroll when the state changes

  return (
    <div className="services-section" id="services">
      <h1>Services</h1>
      <p>
        Expert investment strategies designed to grow and protect your wealth
        with precision and dedication.
      </p>
      <div>
        <div className="d-flex justify-content-end">
          <Button
            variant="success"
            className="rounded-5"
            onClick={() => handleScroll("left")}
          >
            <IoMdArrowRoundBack size={24} className="text-white" />
          </Button>
          <Button
            variant="success"
            className="ms-5 rounded-5"
            onClick={() => handleScroll("right")}
          >
            <IoMdArrowRoundForward size={24} className="text-white" />
          </Button>
        </div>

        <div
          className="overflow-hidden"
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            scrollBehavior: "smooth",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {usedata.map((a) => (
            <Card
              className="shadow mb-4 overflow-hidden"
              style={{
                width: "18rem",
                flexShrink: 0,
                backgroundColor: "rgba(189, 187, 187, 0.8)",
                
              }}>
              <Card.Img
                src={`http://localhost:8000/images/${a.icon}`}
                height={150}
                alt={a.title}
              />
              <Card.Body className="mt-5 mb-5">
                <Card.Title>{a.title}</Card.Title>
                <Card.Text className=" text-overflow-eclipse"><p>{a.desc}</p></Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
