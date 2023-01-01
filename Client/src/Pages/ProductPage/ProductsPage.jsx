import React from 'react'
import {Link} from 'react-router-dom'
import './ProductsPage.css'

const ProductsPage = () => {
  return (
    <>
      <h1 style={{color:'aliceblue'}}>ProductsPage</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">
                <h5>Click link to Redirect</h5>
              </div>
              <div className="card-body text-center">
                <div className="list-group-item"><Link to='/createproduct'>CreateProduct</Link></div>
                <div className="list-group-item"><Link to='/listproduct'>ProductList</Link></div>
                <div className="list-group-item"><Link to='/adminproduct'>ProductAdmin</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsPage
