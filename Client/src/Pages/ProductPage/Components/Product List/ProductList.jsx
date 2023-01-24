import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import './ProductList.css'

const ProductList = () => {
  let [products, setProducts] = useState([])

  let [loading, setLoading] = useState(null)


  useEffect(() => {
    setLoading(<><Spinner animation='border' variant='danger' /></>)
    Axios.get('https://filthy-ox-girdle.cyclic.app/products/all').then((res) => {
      setProducts(res.data)
    }).catch((err) => {
      setLoading(<h1 className='text-white'>***No Products***</h1>)
    })
  }, [])

  return (
    <>



      <div className="list-container">
      <div className="product-card-wrapper">
        {/* {
          products.length > 0 ? <>
            {
              products.map((product) => {
                return <div className="product-card" style={{ marginBottom: '40px' }}>
                    <div className="product-card-header">
                      <img src={product.image} height='150px' width='180px' alt="product pic" />
                    </div>
                    <div className="product-card-body">
                      < h5 className='product-details' >Name : {product.name}</ h5 >
                      < h5 className='product-details' >Price : {product.price}</ h5 >
                      < h5 className='product-details'>QTY : {product.qty}</ h5 >
                    </div>
                  </div>
              })
            }
          </> : <>{loading}</>
        } */}
        </div>
      </div>
    </>
  )
}

export default ProductList




