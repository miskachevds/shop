import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import './App.css';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Директ Нью (ткань/экокожа)',
          img: 'ch1.JPG',
          desc: 'Кресло для персонала Direct New (ткань/экокожа), черный / черный в Казани',
          category: 'chairs',
          price: '13154'
        },
        {
          id: 2,
          title: 'Кресло для руководителя Рапид',
          img: 'ch2.JPG',
          desc: 'Кресло для руководителя Rapid, черный в Казани',
          category: 'chairs',
          price: '23748'
        },
        {
          id: 3,
          title: 'Кресло для руководителя Сенат',
          img: 'ch3.JPG',
          desc: 'Кресло для руководителя Senat (экокожа), черный в Казани',
          category: 'chairs',
          price: '59899'
        },
        {
          id: 4,
          title: 'Серия мебели для персонала Смарт',
          img: 'tb1.JPG',
          desc: 'Smart Стол рабочий тип 2, 138х78х73,7, орех табак в Казани',
          category: 'tables',
          price: '13068'
        },
        {
          id: 5,
          title: 'Серия мебели для персонала Берлин',
          img: 'tb2.JPG',
          desc: 'Berlin Рабочее место эргономичное с тумбой правое 160х140х74, орех вармия / черный графит в Казани',
          category: 'tables',
          price: '43923'
        },
        {
          id: 6,
          title: 'Серия мебели для персонала Берлин Металл',
          img: 'tb3.JPG',
          desc: 'Berlin Metal Рабочее место левое 160x140x75, орех вармия / черно-коричневый / черный в Казани',
          category: 'tables',
          price: '47691'
        },
        {
          id: 7,
          title: 'Серия мебели для персонала Берлин',
          img: 'cab1.JPG',
          desc: 'Berlin Тумба мобильная 40x50x61, орех вармия / серый в Казани',
          category: 'cabinet',
          price: '16801'
        },
        {
          id: 8,
          title: 'Серия мебели для персонала Фолдер',
          img: 'cab2.JPG',
          desc: 'Folder Тумба под оргтехнику 79х62х57, дуб натюрель / черный графит в Казани',
          category: 'cabinet',
          price: '18949'
        },
        {
          id: 9,
          title: 'Серия мебели для кабинета руководителя Смарт Директор',
          img: 'cab3.JPG',
          desc: 'Smart Director Тумба мобильная правая 117,2х50х59,4, орех табак в Казани',
          category: 'cabinet',
          price: '28963'
        },
        {
          id: 10,
          title: 'Серия мебели для персонала Берлин',
          img: 'cl1.JPG',
          desc: 'Berlin Шкаф-стеллаж 90x43x208, орех вармия / черный графит в Казани',
          category: 'closet',
          price: '39692'
        },
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} /> }
        <Footer />

      </div>
    );
  }

  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }

}
export default App;


//классы переделать на хуки 