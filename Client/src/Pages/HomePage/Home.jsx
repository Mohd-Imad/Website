import React from 'react'
import ProductList from '../ProductPage/Components/Product List/ProductList'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="home-container">
        <h1 className="mart-name">MI Mart</h1>
        </div>
      </div>
      <ProductList />
    </>
  )
}

export default Home
