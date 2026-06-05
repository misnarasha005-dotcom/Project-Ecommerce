import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../Redux/authSlice";

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''

    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Email is required'),
      password: Yup.string().min(6, "Password must have 6 characters").max(15, "Max 15 chars").required('password required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://localhost:4000/user/signin', values);
        localStorage.setItem(
          'token',
          response.data.token
        )
        dispatch(login(response.data))
        alert('Login Successful')
        formik.resetForm()
        const role = response.data.user.role

        if (role === 'admin') {
          navigate('/admin-home')
        } else {
          navigate('/')
        }
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data?.message || 'Login failed'
        )
      }
    }
  })
  return (
    <Container className="mt-5 w-50">

      <h2 className="mb-4 text-center">Login Form</h2>

      <Form onSubmit={formik.handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}

        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          className="w-100"
        >
          Login
        </Button>

      </Form>

    </Container>
  );
}

export default Login;