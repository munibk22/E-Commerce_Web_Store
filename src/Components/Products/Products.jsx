import React, { useState, useEffect } from 'react';
import Main from '../Main';

const Products = () =>{
const[display,setDisplay] = useState(false);
var [products,setProducts] = useState([]);

  // const getProducts = () =>{
  //   try {
  //     var productsApi = fetch('https://fakestoreapi.com/products')
  //     .then(response=> response.json())
  //     .then(data=>{ console.log(data)
  //       setProducts(data)})
  //     .then((data)=>    setDisplay(true)
  //       );
  //   } catch (error) {
  //     console.log(error.message);
  //   }   
  //   console.log(products);

  // }
  async function getProducts(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
    setTimeout(()=>setDisplay(true),300);
      };


 useEffect(() =>{
  return()=> getProducts();
 },[]);

 

 return(
  <>

{display ? <Main products={products}/> : <h1>Loading Products...</h1>}
  </>
 )

};

export default Products;