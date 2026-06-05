import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products({products}) {
    
return (
    <>
        <Container className="mt-5">
            <h1 className="text-centre mb-5">Our Products</h1>

            <Row>
                {
                    products.map((product) => (
                        <Col
                            lg={4}
                            md={6}
                            sm={12}
                            className="mb-4"
                            key={product.id}
                        >
                            <Card className='h-100' style={{ borderRadius: '12px', overflow: 'hidden' }} >
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {product.name}
                                    </Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <h5>₹{product.price}</h5>
                                    <Link to={`/viewmore/${product.id}`}>
                                        <Button>View Product</Button>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </>
)
}
export default Products