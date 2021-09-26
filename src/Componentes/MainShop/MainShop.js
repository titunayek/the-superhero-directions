import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import User from '../User/User';

import './MainShop.css'

const MainShop = () => {
    const [users, setUsers] = useState([])
    const [cart,setCart]  = useState([])

    useEffect(() =>{
       fetch('./fac.json')
       .then(res => res.json())
       .then(data => setUsers(data))
    },[])
    const addToCart = user =>{
        // console.log(user.name)
        const newCart = [...cart,user]
        setCart(newCart)
    }

    return (
        <div className='main-container'>
            <div className='cart-container'>
                
                {
                    users.map(user => <User
                        key={user.key}
                         user={user}
                         addToCart={addToCart}
                         >
                         </User>)
                }
            </div>
            <div className='cart-details'>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default MainShop;