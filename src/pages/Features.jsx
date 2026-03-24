import React, { useEffect, useState } from 'react'
import "./features.css";

export default function Features() {

  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
        const fetchData = async () =>{
       try {
        const responce = await fetch(`https://fakestoreapi.com/products`)
        const data = await responce.json()
        setProducts(data)
       } catch (error) {
          console.log("Error fetching ", error);         
       }
       finally{
        setLoading(false)
       }
  }

  fetchData()
  },[])

  if(loading){
    return <div>Loading Product...</div>
  }

  return (
    <>
      
        {products.map((product) => (
        <div key={product.id} className="productcard">
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <div className="product-title">{product.title}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">${product.price.toFixed(2)}</div>
          <button
            className="add-to-cart"
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart 
          </button>
        </div>
      ))}
    
 

    </>
  )
}

