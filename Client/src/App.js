import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Admin from './Components/Products/Admin'
import CreateProduct from './Components/Products/CreateProduct'
import Products from './Components/Products/Products'
import Update from './Components/Products/Update'
import RegForm from './Components/Users/Form/Register/RegForm'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/createproduct' element={<CreateProduct />} />
          <Route path='/products' element={<Products />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/update/:id' element={<Update />} />
          {/* <Route path='/register' element={<RegForm />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
