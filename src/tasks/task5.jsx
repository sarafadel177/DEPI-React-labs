import React, { Component } from "react";

class ToggleButton extends Component{

    constructor(){
        super();
        this.state={
            thestate:false,
           

        }
    }

    cliked(){
        console.log(this)
        this.setState({thestate:!this.state.thestate})
    }
    render(){
        const{thestate,onthebutton}=this.state
       
        
        return(
            <div>
                <button onClick={this.cliked}>{thestate? "ON":"OFF"}</button>
            </div>

        )
    }
}
export default ToggleButton;