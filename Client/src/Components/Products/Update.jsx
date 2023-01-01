import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'

const Update = () => {

  let [selectedProduct, setSelectedProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  let [submitted, setSubmitted] = useState(false)

  let selectedId = useParams().id

  useEffect(()=>{
    Axios.get(`http://localhost:3000/products/${selectedId}`)
    .then((response)=>{
      setSelectedProduct(response.data)
    })
    .catch(()=>{})
  },[selectedId])


  let changeInput = (event) => {
    setSelectedProduct({
      ...selectedProduct, [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  let changeImage =  (event) => {
    let imageFile = event.target.files[0];
    // console.log(event)
    let reader = new FileReader(imageFile)
    reader.readAsDataURL(imageFile)
    reader.addEventListener('load', () => {
      if (reader.result) {
        setSelectedProduct({
          ...selectedProduct,
          image: reader.result
        });
      }
    })
  }

  let updateHandler = (event) => {
    event.preventDefault()
    let url = `http://localhost:3000/products/${selectedId}`
    Axios.put(url, selectedProduct).then((resp) => {
      setSubmitted(true)
      console.log(resp)
    }).catch(() => { })
  }

  return (
    <>
      <h1>Update</h1>
      <div className="container">
        <pre>{JSON.stringify(selectedProduct)}</pre>
        {
          submitted ? <><Navigate to='/products' /></> : <>
            <div className="row">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-header bg-warning text-white">
                    <h1>Update Product</h1>
                  </div>
                  <div className="card-body">
                    <form onSubmit={updateHandler}>
                      <div className="form-group">
                        <input type="text" name="name" placeholder='Product Name' value={selectedProduct.name} className='form-control' onChange={changeInput} />
                      </div>
                      <div className="form-group">
                        <input type="file" name="image" placeholder='Image' className='form-control' onChange={changeImage} />
                        <img src={selectedProduct.image} height='100px' width='100px' alt="No pic" />
                      </div>
                      <div className="form-group">
                        <input type="number" name="price" placeholder='Price' value={selectedProduct.price} className='form-control' onChange={changeInput} />
                      </div>
                      <div className="form-group">
                        <input type="number" name="qty" placeholder='QTY' value={selectedProduct.qty} className='form-control' onChange={changeInput} />
                      </div>
                      <div className="form-group">
                        <textarea name="info" cols="52" rows="3" value={selectedProduct.info} placeholder='Description' className='form-control' onChange={changeInput}></textarea>
                      </div>
                      <button className="btn btn-warning">Update Product</button>
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

export default Update
