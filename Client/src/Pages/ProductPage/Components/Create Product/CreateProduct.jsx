import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate } from 'react-router-dom'
import './CreateProduct.css'

const CreateProduct = () => {

  let [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: ""
  })

  const [nameErr, setNameErr] = useState(null)
  const [priceErr, setPriceErr] = useState(null)
  const [qtyErr, setQtyErr] = useState(null)
  const [valid, setValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (valid === true) {
      validateForm()
    }
  }, [product])

  const validateForm = () => {
    let name = product.name
    let price = product.price
    let qty = product.qty

    //Name validation
    if (name === "") {
      setNameErr("Please enter Product Name")
    }
    else if (name.length < 4 || name.length > 15) {
      setNameErr("Product Name must be of min 4 and max 10 characters")
    }
    else {
      setNameErr("")
    }

    //Price validation
    if (price === "") {
      setPriceErr("Please enter Product Price")
    }
    else {
      setPriceErr("")
    }

    //QTY validation
    if (qty === "") {
      setQtyErr("Please enter quantity of product")
    }
    else if (qty > 1000 || qty <= 0) {
      setQtyErr("Enter quantity from 1 to 1000")
    }
    else {
      setQtyErr("")
    }

    //for submitting purpose when every fields are true
    if (nameErr === "" && priceErr === "" && qtyErr === "") {
      return true
    }
  }

  
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
  
  const createHandler = (event) => {
    event.preventDefault()
    setValid(true)
    let submit = validateForm()
    // console.log(submit)
    if (submit === true) {
      alert("Product created successfully")
      let url = 'https://filthy-ox-girdle.cyclic.app/products/create'
      Axios.post(url, product).then((resp) => {
        setSubmitted(true)
      }).catch((err) => { console.log(err) })
      console.log(product)
    }
  }
  
  return (
    <>
      <div className="create-container">
        {
          submitted ? <><Navigate to='/listproduct' /></> : <>
            <div className="create-card">
              <div className="create-card-header">
                <h1 className="create-heading">Product Details</h1>
              </div>
              <div className="create-card-body">
                <form onSubmit={createHandler}>
                  <input type="text" name='name' className='create-input' placeholder='Product Name' onChange={productData} />
                  <p className='err-msg'>{nameErr}</p>
                  <input type="file" name='image' className='create-input' onChange={changeImageToStr} />
                  <input type="number" name='price' className='create-input' placeholder='Price' onChange={productData} />
                  <p className='err-msg'>{priceErr}</p>
                  <input type="number" name='qty' className='create-input' placeholder='QTY' onChange={productData} />
                  <p className='err-msg'>{qtyErr}</p>
                  <textarea name="info" className='create-input' placeholder='Description' cols="40" rows="3"></textarea> 
                  <input type="submit" className="create-btn" value='Create Product' />
                </form>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default CreateProduct
