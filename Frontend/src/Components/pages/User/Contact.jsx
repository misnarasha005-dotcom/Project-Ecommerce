import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-5">

      <h2 className="text-center mb-4">Contact Us</h2>

      <Row className="g-4">

        {/* Contact Info */}
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5>📞 Get in Touch</h5>
              <hr />

              <p><strong>Email:</strong> support@ecomers.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p>
                <strong>Address:</strong><br />
                Ecomers Headquarters<br />
                Kochi, Kerala, India
              </p>
            </Card.Body>
          </Card>
        </Col>

        {/* Support Hours */}
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <h5>⏰ Customer Support Hours</h5>
              <hr />

              <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
              <p>Saturday: 10:00 AM – 4:00 PM</p>
              <p>Sunday: Closed</p>
            </Card.Body>
          </Card>
        </Col>

        {/* Message Section */}
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h5>💬 Send Us a Message</h5>
              <hr />

              <p>
                Have a question or concern? Our support team will respond as soon as possible.
              </p>

              <p>
                We value your feedback and are committed to providing the best shopping experience.
              </p>

              <p className="fw-bold text-success">
                Thank you for choosing Ecomers!
              </p>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Contact;  