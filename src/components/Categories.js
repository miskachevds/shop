import React,{ Component } from "react";

export class Categories extends Component{
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'chairs',
                    name: 'Стулья'
                },
                {
                    key: 'tables',
                    name: 'Столы'
                },
                {
                    key: 'cabinet',
                    name: 'Тумбы'
                },
                {
                    key: 'closet',
                    name: 'Шкафы'
                },

            ]
        }
    }
    render(){
        return(
            <div className="categories">
                {this.state.categories.map(el=>(
                    <div key={el.key}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;


//переделать на хуки