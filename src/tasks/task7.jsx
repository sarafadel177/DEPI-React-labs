import React, { Component } from "react";
import './style.css';


class Comp7 extends Component {
    constructor() {
        super();
        this.state = {
            num: 1
        };
    }
    add = () => {
        
   
        this.setState({ num: this.state.num + 1 });
    }
    minus = () => {
        if (this.state.num >1) {
            this.setState({ num: this.state.num-1 });
        } 
       
    }

    render() {
        return (
            <div className="div-1">

                <div className="col">
                    <button className="bt" onClick={this.add}>+</button>
                </div>
                <div className="coll">
                    {this.state.num}
                </div>
                <div className="col">
                    <button className="bt" onClick={this.minus}>-</button>
                </div>

            </div>
        );
    }
}

export default Comp7;
