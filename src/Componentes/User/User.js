import React from 'react';
import './User.css'

const User = (props) => {
    // console.log(props)
    const {img, name,Age,Country,Salary,Role}= props.user ;
    return (
        <div className='singel-cart'>
           <div>
           <img className='img' src={img} alt="" />
           
           <h2>Name : {name}</h2>
           <h4 >Role : <span className='font-style'>{Role}</span> </h4>
           <h4>Age : {Age}</h4>
           <h4>Country : {Country}</h4>
           <h4> Salary :$ {Salary}</h4>
           <button
            onClick={() => props.addToCart(props.user)}
            className='btn-cart'><i id='logo' className="fas fa-shopping-cart"></i>   add to cart</button>
           </div>
            
        </div>
    );
};

export default User;