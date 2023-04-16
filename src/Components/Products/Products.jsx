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
    console.log("Fetching products...");
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    let setData = await setProducts(data);
    console.log(products);
     
      await setTimeout(()=>setDisplay(true),300);
    console.log(display);
    let update = await setDisplay(true);
    console.log(update);
      };


 useEffect(() =>{
  getProducts();
  // setTimeout(()=>getProducts(),2000
  return()=> "";
 },[]); 
 
 const loadProducts = async () =>{
  console.log("Manual Fetch..");
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  await setProducts(data);
  setDisplay(true);
 }


 const manualDeploy =() =>{
  console.log(display);
if(!products.length)
loadProducts();
 }

 //setTimeout(()=>manualDeploy(),700);


 return(
  <>
{display ? <Main products={products}/> : <h1>Loading Products...
<button 
className = "btn-blue margin-top-5"
onClick={loadProducts}>Click to Load Now</button></h1>}
  </>
 )

};

export default Products;