
import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const[name,setname]=useState('');
    const[price,setprice]=useState('');
    const[category,setcategory]=useState('');
    const[company,setcompany]=useState('');
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
         getProductDetails();
    },[])

    const getProductDetails=async ()=>{
        console.warn(params)
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            headers:{
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
              }
        })
        result=await result.json();
        setname(result.name)
        setcategory(result.category)
        setprice(result.price)
        setcompany(result.company)
    }

    const updateProduct=async ()=>{
     console.warn(name,price,category,company)
     let result=await fetch(`http://localhost:5000/product/${params.id}`,{
        method: 'PUT',
        body: JSON.stringify({ name, price, category, company}),
        headers: {
           
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`,

            // Accept:"application/json",
            "Content-Type": "application/json"
        }
    });
    result = await result.json();
    console.warn(result)
    navigate('/');
     
    }
    
    
   return (
    <div className='product'>
       
        <h1>Updte Product</h1>
        <input type="text" placeholder='Update product name' className='inputBox' 
        onChange={(e)=>setname(e.target.value
        )} value={name} />
        
        <input type="text" placeholder='Update product price' className='inputBox' onChange={(e)=>setprice(e.target.value
        )} value={price}/>
        
        <input type="text" placeholder='Update product category' className='inputBox' onChange={(e)=>setcategory(e.target.value
        )} value={category}/>
        
        <input type="text" placeholder='Update product company' className='inputBox' onChange={(e)=>setcompany(e.target.value
        )} value={company}/>
        
        <button className='appButton' onClick={updateProduct}>Update Product</button>
    </div>
  )

        }

export default UpdateProduct