import React, { Component } from 'react'
import  "../App.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
export default class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        const {cartItems} = this.props;
        const { open } = this.state;
        return (
            <div className="footer-part">
                {cartItems.length===0? 
                    <div className="abc" style={{textAlign:"center",padding:"5px"}}><h2>No items in cart</h2></div>: 
                            <div className="product-cart">You have {cartItems.length} product in cart
                    </div>}

                {cartItems.length>0 &&
                <div>
                    <ul>{cartItems.map(item=>
                        <ol style={{display:"inline"}}><b>{item.product_name}&nbsp;</b>
                            X &nbsp;{item.count}={item.price*item.count}&nbsp;&nbsp;
                        </ol>
                        )}
                    </ul>
                                Total Items  :&nbsp;{cartItems.reduce((a,c)=>a+c.price*c.count,0)}    
                                <button className="btn-lg" onClick={this.onOpenModal}>Check Out</button>
                </div>
                }
                <div style={styles}>
                    
                            <Modal open={open} onClose={this.onCloseModal}>
                                Total Amount: {cartItems.reduce((a,c)=>a+c.price*c.count,0)}
                                <h2>Transaction successful,Thank You</h2>
                            </Modal>
                </div>
            </div>
        )
    }
}
