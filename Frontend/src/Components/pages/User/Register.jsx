import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: ""
        },

        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
                .min(6, "Min 6 characters")
                .max(15, "Max 15 characters")
                .required("Password required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Confirm password required"),
            role: Yup.string().required("Role is required")
        }),

        onSubmit: async (values) => {
            try {
                const { confirmPassword, ...data } = values;

                await axios.post("http://localhost:4000/user/signup", data);

                alert("Registration Successful");

                formik.resetForm();

                navigate("/signin");

            } catch (error) {
                console.log(error.response?.data);
                alert(error.response?.data?.message || "Registration failed");
            }
        }
    });

    return (
        <Container className="mt-5 w-50">
            <h2 className="mb-4 text-center">Register Form</h2>

            <Form onSubmit={formik.handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                        name="role"
                        onChange={formik.handleChange}
                        value={formik.values.role}
                    >
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                </Form.Group>

                <Button type="submit" className="w-100">
                    Register
                </Button>

            </Form>
        </Container>
    );
}

export default Register;