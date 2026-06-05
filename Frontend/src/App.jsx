import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/pages/User/Register';
import Login from './Components/pages/User/Login';
import Home from './Components/pages/User/Home';
import About from './Components/pages/User/About';
import Contact from './Components/pages/User/Contact';
import Products from './Components/pages/User/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from './Components/pages/User/Profile';
import UserLayout from './Components/userLayout';
import AdminDashboard from './Components/pages/Admin/adminHome';
import AddProduct from './Components/pages/Admin/AddProduct';
import ViewProducts from './Components/pages/Admin/ViewProduct';
import EditProduct from './Components/pages/Admin/editProduct';
import ProtectedRoute from './Components/protectedRoute';
import ViewUsers from './Components/pages/Admin/viewUser';

function App(){
  const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/product/viewall')
                console.log(response.data)
                setProducts(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()

    }, [])

return(
<>
<BrowserRouter>

<div className="app-container">

    
        <main className="content">

          <Routes>

            {/* User Routes */}

            <Route element={<UserLayout/>}>

              <Route path="/" element={<Home products={products} />} />

              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/signup" element={<Register/>} />

              <Route path="/signin" element={<Login />} />

              <Route path="/product" element={<Products products={products} />} />

              <Route path="/profile" element={<Profile />} />

            </Route>

            {/* Admin Routes */}

            <Route path="/admin-home" element={
                <ProtectedRoute>
                <AdminDashboard/>
                </ProtectedRoute>
                }>

              
              <Route path="add-product" element={<AddProduct/>}/>
              <Route path="view-product" element={<ViewProducts/>}/>
              <Route path="edit-product/:id" element={<EditProduct/>} />
              <Route path="view-users" element={<ViewUsers/>}/>
              
            </Route>

          </Routes>

        </main>
      
    

    </div>
</BrowserRouter>
</>

)
}
export default App