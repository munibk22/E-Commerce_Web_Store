import React from 'react';
import RatingSystem from './Products/RatingsSystem';

const products2 =  {
  id: 0,
  name:'',
  description:  '',
}
const Main = (props) => {
  const {products} = props;
  console.log(products);
 return (
  <>
  {products.map(product =>{
    const {id,title,description,price,category,image,rating} = product;
    // if (product.id == 1) return;
    if (title == null) title = "Loading Products...";
    return (
    <div key={id} className='
    product-grid align-center 
    margin-bottom-2
    padding-4 product-style
    align-center text-center '>
      <h3>{title}</h3>
     <img src={image} alt='product image' className='product-image'></img>
     <span className='description'>{description}</span>
     <span>-{category} <span style={{color:'green'}}> $</span>{price}</span>
    
     <span> <RatingSystem rating={rating.rate} /> </span>
     <span> <button className= "btn-green">Add to Cart</button> </span>
     </div>)
  })}
  </>
 )
}

export default Main;