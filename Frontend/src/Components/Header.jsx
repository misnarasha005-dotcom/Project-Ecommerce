import { Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "./Redux/authSlice"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const token = useSelector((state) => state.auth.token)
    const handleLogout = () => {
        dispatch(logout())
        navigate('/signin')
    }

    return (

        <Navbar bg='dark' variant='dark' expand='lg' className='py-3'>

            <Container>

                <Navbar.Brand>
                    Ecommerce
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar" />
                <Navbar.Collapse id="basic-navbar">
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/signup'>Register</Nav.Link>
                        <Nav.Link as={Link} to='/signin'>Login</Nav.Link>
                        <Nav.Link as={Link} to='/product'>Products</Nav.Link>
                        <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                        <Nav.Link
                            onClick={handleLogout}
                            style={{ cursor: 'pointer' }}
                        >LogOut</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header