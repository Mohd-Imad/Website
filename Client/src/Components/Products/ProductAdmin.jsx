import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, /* useNavigate */ } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'


const ProductAdmin = () => {
  let [products, setProducts] = useState([])

  // let navigate = useNavigate()
  let [loading, setLoading] = useState(null)

  
  useEffect(()=>{
    setLoading(<Spinner animation='border' variant='danger'/>)
    getAllProducts()
  },[]) 

  let getAllProducts = ()=>{
    Axios.get('https://filthy-ox-girdle.cyclic.app/products/all').then((res)=>{
      setProducts(res.data)
    }).catch(()=>{
      setLoading(<h1 className='text-danger'>***No Products***</h1>)
    })
  }

  let deleteProduct = (id)=>{
    Axios.delete(`https://filthy-ox-girdle.cyclic.app/products/delete/${id}`)
    .then((res)=>{
      // navigate(0)
      getAllProducts()
    })
    .catch(()=>{})
  }

  return (
    <>
      <h1 className='text-white'>ProductAdmin</h1>
      <div className="container">
        <pre className='text-white'>{JSON.stringify(products)}</pre>
        <div className="row">
          <div className="col-md-8">
            <table className="table table-hover">
              <thead className="bg-dark text-white">
                <tr>
                  {/* <th>ID</th> */}
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.length > 0 ? <>
                    {
                      products.map((product)=>{
                        return <tr key={product.id}>
                          <td>{product.name}</td>
                          <td><img src={product.image} height='100px' alt="No Pic" /></td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>
                            <Link to={`/update/${product.id}`} className='btn btn-warning'>Edit <i className='fa fa-pen'></i></Link>&nbsp;
                            <Link to='/admin' className='btn btn-danger'  onClick={deleteProduct.bind(this,product.id)}>Del <i className='fa fa-trash'></i></Link>
                          </td>
                        </tr>
                      })
                    }
                  </> : <>{loading}</>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductAdmin
