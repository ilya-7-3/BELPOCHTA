import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const Cart=({icon,title,id,path='/'})=>{
    return(
        <div id={id} className="cart">
            <Link to={path} className="cart__title">{title}</Link>
            <img className="cart__icon" src={icon} alt='icon'/>
        </div>
    )
}

export default Cart;