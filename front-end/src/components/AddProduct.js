import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const[name,setname]=useState('');
    const[price,setprice]=useState('');
    const[category,setcategory]=useState('');
    const[company,setcompany]=useState('');
    const[error,seterror]=useState(false)
    const navigate=useNavigate();

    const addProduct=async ()=>{
        
        if(!name||!price||!category||!company) {
            seterror(true)
                   return false;
        }
        const userID = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, userID , company}),
            headers: {
    
                    authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`,
                  
                "Content-Type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)
        navigate('/')


    }
    
  return (
    <div className='product'>
        <h1>Add Product</h1>
        <input type="text" placeholder='Enter product name' className='inputBox' 
        onChange={(e)=>setname(e.target.value
        )} value={name} />
        {error&&!name&& <span className='invalid-input '>Enter valid name</span>}
        <input type="text" placeholder='Enter product price' className='inputBox' onChange={(e)=>setprice(e.target.value
        )} value={price}/>
        {error&&!price&& <span className='invalid-input '>Enter valid price</span>}
        <input type="text" placeholder='Enter product category' className='inputBox' onChange={(e)=>setcategory(e.target.value
        )} value={category}/>
        {error&&!category&& <span className='invalid-input '>Enter valid category</span>}
        <input type="text" placeholder='Enter product company' className='inputBox' onChange={(e)=>setcompany(e.target.value
        )} value={company}/>
        {error&&!company&& <span className='invalid-input '>Enter valid company</span>}
        <button className='appButton' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct