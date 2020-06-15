import React, { Component } from 'react'
import "./App.css";
import Header from "./component/Header";
import ProductDesc from "./component/ProductDesc";
import Footer from "./component/Footer";
import FlexExamples from "./component/FlexExamples"
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      products:[],
      cartItems:[],
      }
   
    this.addToCart = this.addToCart.bind(this);
   }
  
  componentDidMount() {
    fetch('http://localhost:8065/products')
    .then(res => res.json())
    .then((data) => {
      this.setState({ products: data })
      console.log("RESULT ..", this.state.products)
      
    })
    .catch(console.log)
  }



  addToCart(e,product){

      this.setState(state=>{
        const cartItems = state.cartItems;
        let productIsInCart = false;
        cartItems.forEach(item => {
          if(item.id === product.id){
            productIsInCart =true;
            item.count++;
          }   
        });
        if(!productIsInCart){
          cartItems.push({...product,count:0})
        }
        return cartItems;
      })
  }
 
  render() {
    return (
          <div className="row">
               <Header/>  
               <ProductDesc products={this.state.products} 
                addToCart={this.addToCart} />
               
               <Footer  cartItems ={this.state.cartItems}/>
         </div>
    )
  }
}
