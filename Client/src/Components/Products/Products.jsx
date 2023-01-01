import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'

const Products = () => {
  let [products, setProducts] = useState([])

  let [loading, setLoading] = useState(null)


  useEffect(() => {
    setLoading(<><Spinner animation='border' variant='danger' /></>)     
    Axios.get('http://localhost:3000/products').then((res) => {
      setProducts(res.data)
    }).catch((err) => { 
      setLoading(<h1>***No Products***</h1>)
    })
  }, [])

  return (
    <>
      <h1>Products</h1>
      <div className="container">
        <pre>{JSON.stringify(products)}</pre>
        <div className="row">
          {
            products.length > 0 ? <>
              {
                products.map((product) => {
                  return <div className="col-md-3">
                    <div className="card mt-5">
                      <div className="card-header bg-info">
                        <center>
                          <img src={product.image} height='150px' alt="No pic" /></center>
                      </div>
                      <div className="card-body">
                        <li className="list-group-item">Name : {product.name}</li>
                        <li className="list-group-item">Price : {product.price}</li>
                        <li className="list-group-item">QTY : {product.qty}</li>
                      </div>
                    </div>
                  </div>
                })
              }
            </> : <>{loading}</>
          }
        </div>
      </div>
    </>
  )
}

export default Products
