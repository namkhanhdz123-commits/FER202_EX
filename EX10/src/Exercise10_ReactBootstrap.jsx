import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
  Row,
  Col,
  Card,
  Badge,
} from "react-bootstrap";

export default function ReactBootstrapDemo() {
  return (
    <div>
      {/* 1. Header / Navbar */}
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand href="#home" className="text-secondary">
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" active>
                Home
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 2. Hero Carousel Slider */}
      <Carousel>
        <Carousel.Item>
          <div
            className="d-flex align-items-center justify-content-center bg-secondary-subtle text-muted fw-light"
            style={{ height: "400px", fontSize: "3.5rem" }}
          >
            1920 x 530
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-flex align-items-center justify-content-center bg-secondary-subtle text-muted fw-light"
            style={{ height: "400px", fontSize: "3.5rem" }}
          >
            1920 x 530
          </div>
        </Carousel.Item>
      </Carousel>

      {/* 3. New Product Section */}
      <Container className="my-5">
        <div className="mb-4">
          <h2 className="text-secondary fw-normal">NEW PRODUCT</h2>
          <p className="text-muted">List product description</p>
        </div>

        {/* Product Cards Grid */}
        <Row className="g-4">
          {/* Card 1 */}
          <Col xs={12} sm={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center bg-body-tertiary text-secondary fs-4"
                style={{ height: "250px" }}
              >
                280 x 280
              </div>
              <Card.Body className="px-2">
                <Card.Title className="text-secondary">Product</Card.Title>
                <div className="d-flex justify-content-between align-items-center mb-2 small">
                  <span className="text-decoration-line-through text-muted">
                    100.000 vnd
                  </span>
                  <span className="text-warning fw-bold">80.000 vnd</span>
                </div>
                <Button variant="outline-primary" size="sm" className="w-100">
                  <i className="bi bi-cart-fill me-1"></i> Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} sm={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center bg-body-tertiary text-secondary fs-4"
                style={{ height: "250px" }}
              >
                280 x 280
              </div>
              <Card.Body className="px-2">
                <Card.Title className="text-secondary">Product</Card.Title>
                <div className="d-flex justify-content-between align-items-center mb-2 small">
                  <span className="text-decoration-line-through text-muted">
                    100.000 vnd
                  </span>
                  <span className="text-warning fw-bold">80.000 vnd</span>
                </div>
                <Button variant="outline-primary" size="sm" className="w-100">
                  <i className="bi bi-cart-fill me-1"></i> Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} sm={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm">
              <div
                className="d-flex align-items-center justify-content-center bg-body-tertiary text-secondary fs-4"
                style={{ height: "250px" }}
              >
                280 x 280
              </div>
              <Card.Body className="px-2">
                <Card.Title className="text-secondary">Product</Card.Title>
                <div className="d-flex justify-content-between align-items-center mb-2 small">
                  <span className="text-decoration-line-through text-muted">
                    100.000 vnd
                  </span>
                  <span className="text-warning fw-bold">80.000 vnd</span>
                </div>
                <Button variant="outline-primary" size="sm" className="w-100">
                  <i className="bi bi-cart-fill me-1"></i> Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 (With Sale Tag) */}
          <Col xs={12} sm={6} lg={3}>
            <Card className="h-100 border-0 shadow-sm position-relative">
              <Badge
                bg="warning"
                className="position-absolute top-0 end-0 m-2 px-2 py-1 text-uppercase"
              >
                Sale
              </Badge>
              <div
                className="d-flex align-items-center justify-content-center bg-body-tertiary text-secondary fs-4"
                style={{ height: "250px" }}
              >
                280 x 280
              </div>
              <Card.Body className="px-2">
                <Card.Title className="text-secondary">Product</Card.Title>
                <div className="d-flex justify-content-between align-items-center mb-2 small">
                  <span className="text-decoration-line-through text-muted">
                    100.000 vnd
                  </span>
                  <span className="text-warning fw-bold">80.000 vnd</span>
                </div>
                <Button variant="outline-primary" size="sm" className="w-100">
                  <i className="bi bi-cart-fill me-1"></i> Xem chi tiết
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
