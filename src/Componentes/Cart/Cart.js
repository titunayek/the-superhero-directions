import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for( const user of cart){
        total = total + user.Salary;
    }
    let totalName = '';
    for( const user of cart){
        totalName = totalName + user.name;
    }
    
    return (
        <div className='datels'>
            <div className='font-datels'>
                <h2>Total details</h2>
                <h3>Item Total : {props.cart.length}</h3>
                <h4>Total Salary : $ {total}</h4>
                <h4>Name : {totalName}</h4>
              
            </div>
             
        </div>
    );
};

export default Cart;