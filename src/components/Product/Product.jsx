import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,name,seller,quantity,price,ratings}=props.product
    const handleCart=props.handleCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
            <h3>Price:{price}</h3>
            <p>Manufacturer:{seller}</p>
            <p>Ratings:{ratings}</p>
        </div>
        <button onClick={()=>handleCart(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;