import React from 'react'
import ProductList from '../ProductPage/Components/Product List/ProductList'
import './Home.css'
import MIMart from '../../assets/MImartImage/MIMart.png'

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="home-container">
        <img src={MIMart} alt="" className='mi-home-logo' />
        </div>
      </div>
      <ProductList />
    </>
  )
}

export default Home
