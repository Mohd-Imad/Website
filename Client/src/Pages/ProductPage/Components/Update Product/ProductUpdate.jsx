import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'
import './ProductUpdate.css'

const ProductUpdate = () => {

  let [selectedProduct, setSelectedProduct] = useState({
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
  let [submitted, setSubmitted] = useState(false)

  let selectedId = useParams().id

  useEffect(() => {
    Axios.get(`https://filthy-ox-girdle.cyclic.app/products/${selectedId}`)
      .then((response) => {
        setSelectedProduct(response.data)
      })
      .catch(() => { })
      if (valid === true) {
        validateForm()
      }
  }, [selectedId])

  let changeInput = (event) => {
    setSelectedProduct({
      ...selectedProduct, [event.target.name]: event.target.value
    })
    console.log(event.target.value)
  }

  const validateForm = () => {
    let name = selectedProduct.name
    let price = selectedProduct.price
    let qty = selectedProduct.qty

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
    else if (price > 1000) {
      setPriceErr("Product price is too costly")
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


  let changeImage = (event) => {
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

  const updateHandler = (event) => {
    event.preventDefault()
    setValid(true)
    let submit = validateForm()
    // console.log(submit)
    if (submit === true) {
      alert("Product updated successfully")
      let url = `https://filthy-ox-girdle.cyclic.app/products/update/${selectedId}`
      Axios.put(url, selectedProduct).then((resp) => {
        setSubmitted(true)
      }).catch((err) => { console.log(err) })
      console.log(selectedProduct)
    }
  }

  return (
    <>
      {/* <div className="container mt-mi">
        {
          submitted ? <><Navigate to='/listproduct' /></> : <>
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

      </div> */}

      <div className="update-container">
        {
          submitted ? <><Navigate to='/listproduct' /></> : <>
            <div className="update-card">
              <div className="update-card-header">
                <h1 className="update-heading">Product Details</h1>
              </div>
              <div className="update-card-body">
                <form onSubmit={updateHandler}>
                  <input type="text" name='name' className='update-input' value={selectedProduct.name} placeholder='Product Name' onChange={changeInput} />
                  <p className='err-msg'>{nameErr}</p>
                  <input type="file" name='image' className='update-input' onChange={changeImage} />
                  <img src={selectedProduct.image} height='100px' alt="Product image" />
                  <input type="number" name='price' className='update-input' placeholder='Price' value={selectedProduct.price} onChange={changeInput} />
                  <p className='err-msg'>{priceErr}</p>
                  <input type="number" name='qty' className='update-input' value={selectedProduct.qty} placeholder='QTY' onChange={changeInput} />
                  <p className='err-msg'>{qtyErr}</p>
                  <textarea name="info" className='update-input' placeholder='Description' cols="40" rows="3"></textarea>
                  <input type="submit" className="update-btn" value='Create Product' />
                </form>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default ProductUpdate
