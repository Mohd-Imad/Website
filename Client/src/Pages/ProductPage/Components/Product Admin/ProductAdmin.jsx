import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link, /* useNavigate */ } from 'react-router-dom'
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from 'react-bootstrap/Spinner'
import './ProductAdmin.css'

const ProductAdmin = () => {
  let [products, setProducts] = useState([])

  // let navigate = useNavigate()
  let [loading, setLoading] = useState(null)


  useEffect(() => {
    setLoading(<Spinner animation='border' variant='danger' />)
    getAllProducts()
  }, [])

  let getAllProducts = () => {
    Axios.get('https://filthy-ox-girdle.cyclic.app/products/all').then((res) => {
      setProducts(res.data)
    }).catch(() => {
      setLoading(<h1 className='text-danger'>***No Products***</h1>)
    })
  }

  let deleteProduct = (id) => {
    Axios.delete(`https://filthy-ox-girdle.cyclic.app/products/delete/${id}`)
      .then((res) => {
        // navigate(0)
        alert('Product deleted successfully...!')
        getAllProducts()
      })
      .catch(() => { })
  }

  return (
    <>

      {/* <h1 className='text-white text-center mt-mi' >ProductAdmin</h1> */}
      {/* <div className="container">
        <pre className='text-white'>{JSON.stringify(products)}</pre>
        <div className="row">
          <div className="col-md">
            <table className="table table-light table-hover">
              <thead className="bg-dark text-white">
                <tr>
                   <th>ID</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price /Kg</th>
                  <th>Stock</th>
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
                          <td><img src={product.image} height='100px' width='120px' alt="No Pic" /></td>
                          <td>{product.price}</td>
                          <td>{product.qty}</td>
                          <td>
                            <Link to={`/update/${product._id}`} className='btn btn-warning'>Edit <i className='fa fa-pen'></i></Link>&nbsp;
                            <Link to='/adminproduct' className='btn btn-danger'  onClick={deleteProduct.bind(this,product._id)}>Del <i className='fa fa-trash'></i></Link>
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
      </div> */}

      <div className="admin-container">
        <table className='admin-table'>
          <thead className='table-thead'>
            <tr className='thead-tr'>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>QTY</th>
              <th>Action</th>
            </tr>
          </thead>
          {
            products.length > 0 ? <>
              {
                products.map((product) => {
                  return <tbody className='table-tbody'>
                    <tr className='tbody-tr'>
                      <td>{product.name}</td>
                      <td><img src={product.image} height='100px' width='120px' alt="" /></td>
                      <td>{product.price}</td>
                      <td>{product.qty}</td>
                      <td>
                        <Link to={`/update/${product._id}`} className='button edit'>Edit <FontAwesomeIcon icon={faPen} className='edit-icon' /></Link>&nbsp;
                        <Link to='/adminproduct' className='button delete' onClick={deleteProduct.bind(this, product._id)}>Del  <FontAwesomeIcon icon={faTrashAlt} className='del-icon' /></Link>
                      </td>
                    </tr>
                  </tbody>
                })
              }
            </> : <>{loading}</>
          }
        </table>
      </div>

    </>
  )
}

export default ProductAdmin
