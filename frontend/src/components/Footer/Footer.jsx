import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

import "./footer.css";

import logo from "../../assets/images/Logo/logo_travel.png";

const menu__link = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick__link = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                {" "}
                The company itself is a very smart company, adipsic developer.
              </p>
              <div className="social__links">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-tiktok-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-linkedin-box-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {menu__link.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}> {item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick__link.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}> {item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            {" "}
            <h5 className="footer__link-title">Contact</h5>
            <ListGroup className="footer__quick-links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Việt Nam</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-fill"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">YourEmail@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">(028) 345 6789</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="12" className="text-center">
            <p className="copyright">
              <i className="ri-copyright-fill"></i>
              Copyright {year}, design and developer by TLA & LTT & DNC
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
