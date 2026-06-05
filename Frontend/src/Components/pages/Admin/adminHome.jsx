import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/authSlice';

function AdminDashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        dispatch(logout());
        navigate('/signin');
    };

    return (
        <div className="d-flex">

            {/* SIDEBAR */}
            <div
                className="bg-dark text-white p-3"
                style={{ width: '250px', minHeight: '100vh' }}
            >
                <h4>Admin Panel</h4>
                <hr />

                <Link to="add-product" className="d-block text-white text-decoration-none mb-3">
                    Add Product
                </Link>

                <Link to="view-product" className="d-block text-white text-decoration-none">
                    View Products
                </Link>
                <Link
                    to="view-users" className="d-block text-white text-decoration-none mt-3">
                    View Users
                </Link>
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-grow-1">

                <Navbar bg="light" className="shadow-sm px-3 d-flex justify-content-between">

                    <Navbar.Brand>
                        Admin Dashboard
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link onClick={handleLogout} style={{ cursor: 'pointer' }}>
                            Logout
                        </Nav.Link>
                    </Nav>

                </Navbar>

                <div className="p-4">
                    <Outlet />
                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;