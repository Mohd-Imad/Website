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
      <div className="container">
        {/* <pre>{JSON.stringify(products)}</pre> */}
        <div className="row">
          {
            products.length > 0 ? <>
              {
                products.map((product) => {
                  return <div className="col-md-3">
                    <div className="product-card">
                      <div className="product-card-header">
                      <img src={product.image} className="productImg" alt="" />
                      </div>
                      <div className="product-card-body">
                        <li className="product-details"><b> Name :</b> {product.name}</li>
                        <li className="product-details"><b> Price :</b> {product.price}</li>
                        <li className="product-details"><b> QTY :</b> {product.qty}</li>
                        {/* <li className="product-details"><b> Info :</b> {product.info}</li> */}
                      </div>
                    </div>
                  </div>
                })
              }
            </> : loading
          }
        </div>
      </div>
    </>
  )
}

export default ProductList




