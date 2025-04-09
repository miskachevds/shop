import React from "react";

function Order({item}){
    return(
        <div className="item">
            <img src={"./img/" + item.img} alt={item.title}/>
            <h2>{item.title}</h2>
            <b>{item.price}руб.</b>
        </div>
    )
}

export default Order;