import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity ;
        shipping = shipping + product.shipping;
    }
    const tax =parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax ;
    return (
        <div className='cart'>
            <h4>Cart System With React</h4>
            <h5>Selected Items : {quantity}</h5>
            <p>Price : {total} $</p>
            <p>Shipping : {shipping} $</p>
            <p>Tax : {tax}</p>
            <h5>Grand Total : {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;