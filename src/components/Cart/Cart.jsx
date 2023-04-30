import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart=props.cart: Option 1
    //const {cart}=props //option 2
    let totalPrice=0;
    let totalShipping=0;
    let tax=0;
    let grandTotal;
    for(const product of cart){
    totalPrice=totalPrice+product.price
    totalShipping=totalShipping+product.shipping
    tax=totalPrice*7/100
    grandTotal=totalPrice+totalShipping+tax

    }
    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
              <p>Selected Items:{cart.length}</p>
              <p>Total Price:{totalPrice}</p>
              <p>Total Shipping Charge:{totalShipping}</p>
              <p>Tax:{tax}</p>
              <h4>GrandTotal:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;