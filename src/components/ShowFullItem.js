import React,{ Component } from "react";

export class ShowFullItem extends Component {
    render() {
        const { item, onShowItem, onAdd } = this.props; // Деструктурируем props

        return (
            <div className="full-item">
            <img src={"./img/" + item.img} alt={item.title} onClick={() => onShowItem(item)}/>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}руб.</b>
            <div className="add-to-cart" onClick={() => onAdd(item)}>+</div>
            </div>
        )
    }
}

export default ShowFullItem;