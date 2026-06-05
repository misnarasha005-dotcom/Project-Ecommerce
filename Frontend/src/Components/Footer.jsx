import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (

    <div className="bg-dark text-white mt-5 p-5">

      <Container>

        <Row>

          <Col md={6}>

            <h2>Ecommerce</h2>

            <p>
             Ecomers is a user-friendly online shopping platform where customers can explore, compare, and purchase a variety of products in one place. Built for convenience and speed, it offers a smooth browsing experience, secure checkout, and reliable order management. Ecomers aims to make online shopping simple, fast, and accessible for everyone.
            </p>

          </Col>

          <Col md={6} className="text-center">

            <h5>Links</h5>

            <div className="d-flex justify-content-center gap-4 mt-3">

              <a href="/" className="text-white text-decoration-none">
                Home
              </a>

              <a href="/signin" className="text-white text-decoration-none">
                Login
              </a>

              <a href="/signup" className="text-white text-decoration-none">
                Register
              </a>

            </div>

          </Col>

        </Row>

        <hr />

        <p className="text-center">
          © 2026 Ecommerce | All Rights Reserved
        </p>

      </Container>

    </div>

  )
}

export default Footer