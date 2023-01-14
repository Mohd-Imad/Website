import React from 'react'
import {Link} from 'react-router-dom'
import './ProductsPage.css'
import ProductList from './Components/ProductList'

const ProductsPage = () => {
  return (
    <>
      <div className="productpage">
        <div className="product-container">
          <h1 className="product-heading">Products</h1>
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default ProductsPage
