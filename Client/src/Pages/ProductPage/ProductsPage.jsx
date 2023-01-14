import React from 'react'
import {Link} from 'react-router-dom'
import './ProductsPage.css'
import ProductList from './Components/Product List/ProductList'

const ProductsPage = () => {
  return (
    <>
      <div className="productpage">
        <div className="product-container">
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default ProductsPage
