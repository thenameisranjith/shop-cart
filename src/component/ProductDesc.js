import Counter from "./Counter";
import React, { Component } from 'react'
import  "../App.css";
export default class    ProductDesc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                {this.props.products.map((product,id)=>{
                 return(
                     <div className="row">
                         <div className="product-image">
                                   
                                    <img src={product.image_url} class="responsive" style={{height:"200px",width:"200px"}}  alt="images"></img>
                                    <h4 style={{marginLeft:"60px"}}>{product.offer_text}</h4>
                        </div>
                    
                    <div className="product-details">
                            <h3>{product.product_name}</h3>
                            <h4>{product.brand_name}</h4>
                            <h4>{product.mrp}</h4>
                            <h4>{product.quantity}</h4>
            
                        <div className="count">
                             <Counter id={product.id} price={product.price}/>  
                        </div>
                        <div className="cartBtn">
                          <button className="btn-lg"   onClick={(e)=>this.props.addToCart(e,product)}>Add to cart</button>
                        </div>
                    </div>
                    <hr className="thick-line"/>
                   
            </div>) 
              })}  
            </div>
        )
    }
}


