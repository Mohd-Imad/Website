import React, { useState } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'

const CreateProduct = () => {

  let [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  let [submitted, setSubmitted] = useState(false)

  let productData = (event) => {
    setProduct({
      ...product, [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  let changeImageToStr = (event) => {
    let imageFile = event.target.files[0];
    // console.log(event)
    let reader = new FileReader(imageFile)
    reader.readAsDataURL(imageFile)
    reader.addEventListener('load', () => {
      if (reader.result) {
        setProduct({
          ...product,
          image: reader.result
        });
      }
    })
  }

  let createHandler = (event) => {
    event.preventDefault()
    let url = "https://filthy-ox-girdle.cyclic.app/products/create"
    Axios.post(url, product).then((resp) => {
      setSubmitted(true)
      console.log(resp)
    }).catch(() => { })
  }
  return (
    <>
      <div className="container mt-mi">
        {/* <pre className='text-white'>{JSON.stringify(product)}</pre> */}
        {
          submitted ? <><Navigate to='/listproduct' /></> : <>
            <div className="row">
              <div className="col-md-5">
                <div id='card-create' className="card">
                  <div id='head-create' className="card-header bg-info text-white">
                    <h1>Create Product</h1>
                  </div>
                  <div id='body-create' className="card-body">
                    <form onSubmit={createHandler}>
                      <div className="form-group">
                        <input type="text" name="name" placeholder='Product Name' className='form-control' onChange={productData} />
                      </div>
                      <div className="form-group">
                        <input type="file" name="image" placeholder='Image' className='form-control' onChange={changeImageToStr} />
                      </div>
                      <div className="form-group">
                        <input type="number" name="price" placeholder='Price' className='form-control' onChange={productData} />
                      </div>
                      <div className="form-group">
                        <input type="number" name="qty" placeholder='QTY' className='form-control' onChange={productData} />
                      </div>
                      <div className="form-group">
                        <textarea name="info" cols="52" rows="3" placeholder='Description' className='form-control' onChange={productData}></textarea>
                      </div>
                      <button className='btn btn-info'>Create Product</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </>
        }

      </div>
    </>
  )
}

export default CreateProduct
