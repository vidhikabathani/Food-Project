import React, { useState } from 'react'
import { add_product } from '../redux/Action'
import { useDispatch } from 'react-redux'

function AddProduct() {

    let[title,setTitle]=useState("")
    let[url,setUrl]=useState("")
    let[price,setPrice]=useState("")
    let[category,setCategory]=useState("")

    let dispatch=useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        let products = {
            title, url, price,category
        }
        dispatch(add_product(products))
        setCategory("")
        setTitle("")
        setUrl("")
        setPrice("")
    }

    return (
        <div className='p-100 center'>
            <div className="container">
                <h1>Add Products!</h1><br />
            <form action="">
                <input type="text" placeholder='Enter Product Title' onChange={(e)=>setTitle(e.target.value)} value={title}/><br/>
                <input type="url" placeholder='Enter Product image URL' onChange={(e)=>setUrl(e.target.value)} value={url}/><br/>
                <input type="number" placeholder='Enter Product price' onChange={(e)=>setPrice(e.target.value)} value={price}/><br/>
                <input type="text" placeholder='Enter Product Category' onChange={(e)=>setCategory(e.target.value)} value={category}/><br/>
                <input type="submit" value="Add Product" className='btn' onClick={handleSubmit}/>
            </form>
            </div>
        </div>
    )
}

export default AddProduct