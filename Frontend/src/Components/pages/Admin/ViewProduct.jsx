import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ViewProducts() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // FETCH PRODUCTS

     const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/product/viewall');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };


    useEffect(() => {
       
        fetchProducts();
    }, []);

    // DELETE PRODUCT
    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');

            await axios.delete(`http://localhost:4000/product/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            alert('Product deleted successfully');

            // refresh list
            fetchProducts();

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.message || 'Delete failed');
        }
    };

    return (
        <Container className="mt-4">

            <h2 className="mb-4">All Products</h2>

            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products?.map((product) => (
                        <tr key={product._id}>

                            <td>
                                <Image
                                    src={product.image}
                                    width="70"
                                    height="70"
                                    rounded
                                />
                            </td>

                            <td 
                               style={{
                                maxWidth:'200px'
                               }}
                            >{product.name}</td>
                            <td
                               style={{
                                maxWidth:'200px'
                               }}
                            >{product.description}</td>
                            <td>₹ {product.price}</td>

                            <td>

                                {/* EDIT BUTTON */}
                                <Button
                                    variant="warning"
                                    className="me-2"
                                    onClick={() => navigate(`/admin-home/edit-product/${product._id}`)}
                                >
                                    Edit
                                </Button>

                                {/* DELETE BUTTON */}
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </Button>

                            </td>

                        </tr>
                    ))}
                </tbody>

            </Table>
        </Container>
    );
}

export default ViewProducts;