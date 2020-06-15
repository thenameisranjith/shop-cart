import React, { Component } from 'react'
import  "../App.css";
export default class Counter extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        count:1,
        negtiveButton:false
       }

    
   }


   componentDidMount()
   {
       console.log("++++++",this.props.quantitySent)
   }

   increment(){
       
    this.setState({count:this.state.count+1,negtiveButton:false})
   }



   decrement(){
    if(this.state.count<0)
    {
                this.setState({count:1,negtiveButton:true})
    }
    this.setState({count:this.state.count-1})
               
       }
   



    render() {
        return (
            <div>
                 {this.props.price}*{this.state.count}={this.state.count*this.props.price}
                 <button className="btn" onClick={()=>{this.increment(this.props.id,this.props.price)}}>+</button>
                        {this.state.count}
                <button  className="btn" disabled={this.state.negtiveButton} onClick={()=>{this.decrement(this.props.id,this.props.price)}}>-</button>
             
                
            </div>
        )
    }
}
