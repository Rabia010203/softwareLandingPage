import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Works from "./Works";
import Team from "./Team";
import Testimonal from "./Testimonal";
import Contact from "./Contact";
import Footer from "./Footer";
import Faqs from "./Faqs";
import Pricing from "./Pricing";

const Landing = () => {
  const titleStyle = {
    color: "#fff", // Replace with your desired color
  };
  return (
    <>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        fixed="top"
        className="bg-violet-500"
      >
        <Container>
          <Navbar.Brand className="text-4xl" href="#">
            D
          </Navbar.Brand>
          <Navbar.Toggle
            className="outline-none text-right"
            aria-controls="basic-navbar-nav"
          />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="custom-container text-center"
          >
            <Nav
              className="ms-auto"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Nav.Link href="#home" className="custom-nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="custom-nav-link">
                Features
              </Nav.Link>
              <Nav.Link href="#services" className="custom-nav-link">
                Services
              </Nav.Link>

              <NavDropdown
                title={<span style={titleStyle}>Other Sections</span>}
                id="basic-nav-dropdown"
                className="flex flex-col text-white justify-center items-center"
              >
                <NavDropdown.Item href="#team" className="">
                  Team
                </NavDropdown.Item>
                <NavDropdown.Divider>
                </NavDropdown.Divider>
                  <NavDropdown.Item href="#testimonal">
                    Testimonal
                  </NavDropdown.Item>
               
                <NavDropdown.Divider>
                </NavDropdown.Divider>
                  <NavDropdown.Item href="#action/3.3">
                    Extra features
                  </NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item href="#faqs">Faqs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#works" className="custom-nav-link">
                Works
              </Nav.Link>
              <Nav.Link href="#pricing" className="custom-nav-link">
                Pricing
              </Nav.Link>
              <Nav.Link href="#contact" className="custom-nav-link">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
      <Features />
      <Services />
      <Works />
      <Pricing />
      <Team />
      <Testimonal />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
