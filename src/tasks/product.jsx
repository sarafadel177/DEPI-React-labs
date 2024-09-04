import React, { Component } from "react"
import { products } from './ProductData';
import './style.css';
import Comp7 from './task7.jsx'

class Product extends Component {


    constructor() {
        super();
        this.state = {
          username: "",
          password: "",
          showRegister: false,
          gender: "",
          date:""
        };
      }
    
      handleUsername = (event) => {
        this.setState({ username: event.target.value });
      };
    
      handlePassword = (event) => {
        this.setState({ password: event.target.value });
      };
    
      handleLogin = (event) => {
        event.preventDefault(); 
        alert(`Your UserName is ${this.state.username},  
            on: 9/3/2024,
            `)
      };
    
     
    render() {
        return (
            <div class="cont">
                {
                    products.map((value, idx) => (
                        <div class="p-div" key={value.id}>
                            <img src={value.img}></img>
                            <h2 class="ff">{value.name}</h2>
                            <p>EGP {value.price}</p>
                            <p class="dd">description {value.description}</p>
                            <p class="cc">{value.category}</p>
                            <Comp7 />

                        </div>


                    ))

                }

            </div>
        )
    }
}
export default Product;