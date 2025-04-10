import React from "react";
import { FaTrash } from "react-icons/fa6";

function Order({item}){
    return(
        <div className="item">
            <img src={"./img/" + item.img} alt={item.title}/>
            <h2>{item.title}</h2>
            <b>{item.price}руб.</b>
            <FaTrash className="delete-icon" />
        </div>
    )
}

export default Order;