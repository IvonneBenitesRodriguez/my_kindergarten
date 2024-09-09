import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => (
  <footer className="mt-2 bg-light py-1">
    <Container className="mx-auto">
      <Row className="mb-4">
        <Col>
          <h5 className="mb-3">Follow us</h5>
          <div>
            <label htmlFor="instagram-link" />
            <Link id="instagram-link" to="/" className="me-3 text-dark ms-0">
              <FaInstagram size={34} />
            </Link>
            <label htmlFor="facebook-link" />
            <Link id="facebook-link" to="/" className="me-3 text-dark ms-3">
              <FaFacebookF size={34} />
            </Link>
            <label htmlFor="twitter-link" />
            <Link id="twitter-link" to="/" className="me-3 text-dark ms-3">
              <FaTwitter size={34} />
            </Link>
            <label htmlFor="pinterest-link" />
            <Link id="pinterest-link" to="/" className="me-3 text-darl ms-3">
              <FaPinterest size={34} />
            </Link>
            <label htmlFor="youtube-link" />
            <Link id="youtube-link" to="/" className="text-dark ms-3">
              <FaYoutube size={34} />
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={3}>
          <img src={logo} alt="kindergarten" height="100" />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-wrap justify-content-center">
            <Link to="/kindergarten-terms" className="text-dark me-3 mb-2">
              Kindergarten Terms
            </Link>
            <Link to="/terms-of-use" className="text-dark me-3 mb-2">
              Terms of use
            </Link>
            <Link to="/privacy-policy" className="text-dark me-3 mb-2">
              Privacy Policy
            </Link>
            <Link to="/berlin-privacy-rights" className="text-dark me-3 mb-2">
              Berlin Privacy Rights
            </Link>
            <Link to="/promotion-terms" className="text-darl me-3 mb-2">
              Promotion Terms and Conditions
            </Link>
            <Link to="/privacy-choices" className="text-dark mb-2">
              Your Privacy Choices
              <span></span>
            </Link>
          </div>
        </Col>
        <Col md={3} className="d-md-flex justify-content-md-end">
          <small>
            © 2024 Kindergarten, GmbH.
            <br />
            All rights reserved.
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;
