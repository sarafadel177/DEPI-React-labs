import React, { Component } from "react";
class Comp4 extends Component{
   
    render(){
        const { course1,course2,c3,c4,c5,children}=this.props
        return(
            <div>
                <h5>I take 5 courses which are : {course1},{course2},{c3},{c4},{c5}</h5>
                {children}
            </div>
        )
    }

}
export default Comp4;