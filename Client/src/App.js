import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
//Pages
import Home from './Pages/HomePage/Home'
import AboutUs from './Pages/AboutPage/AboutUs'
import ProductsPage from './Pages/ProductPage/ProductsPage'
//Components
import CreateProduct from './Components/Products/CreateProduct'
import ProductList from './Components/Products/ProductList'
import ProductAdmin from './Components/Products/ProductAdmin'
import ProductUpdate from './Components/Products/ProductUpdate'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/listproduct' element={<ProductList />} />
          <Route path='/adminproduct' element={<ProductAdmin />} />
          <Route path='/update/:id' element={<ProductUpdate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
