import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalPrice = totalPrice + element.price;
        
    }
    return (
        <div className="cart-container">
            <h3 className="header">Purchase Summary</h3>
            <h6 style={{fontWeight: 'bold'}}>Course Purchased: {cart.length}</h6>
            <h6 style={{fontWeight: 'bold'}}>Total Price: {totalPrice}</h6>
        </div>
    );
};

export default Cart;