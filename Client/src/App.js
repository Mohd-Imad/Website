import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import RegForm from './Form/RegForm'
import LoginForm from './Form/LoginForm'

const App = ()=>{
  return <>
   <Router>
      <Navbar />
      <Routes>
        <Route path='/registration' element={<RegForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
    </Router>
  </>
}

export default App