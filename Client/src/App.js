import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import './App.css'

//Pages
import Home from './Pages/HomePage/Home'
import AboutUs from './Pages/AboutPage/AboutUs'
import ProductsPage from './Pages/ProductPage/ProductsPage'
import RegisterPage from './Pages/RegisterPage/RegisterPage'

//Components
import CreateProduct from './Pages/ProductPage/Components/Create Product/CreateProduct'
import ProductList from './Pages/ProductPage/Components/Product List/ProductList'
import ProductAdmin from './Pages/ProductPage/Components/Product Admin/ProductAdmin'
import ProductUpdate from './Pages/ProductPage/Components/Update Product/ProductUpdate'
import LoginForm from './Pages/RegisterPage/Components/Form/Login/LoginForm'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Pages */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/register' element={<RegisterPage />} />
          {/* Components */}
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/listproduct' element={<ProductList />} />
          <Route path='/adminproduct' element={<ProductAdmin />} />
          <Route path='/update/:id' element={<ProductUpdate />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
