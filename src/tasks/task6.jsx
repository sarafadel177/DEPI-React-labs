import React, { Component } from "react";

class comp6 extends Component{
    constructor(){
        super()
        this.satate={
            username:"",
            gender:""

        }
    }
    handelusername=(e) =>{
        this.setState({username:e.target.value})
    }
    handelgender=(e)=>{
        this.setState({gender:e.ta4rget.value}
)
    }
    render(){
        return(
            <div>
                <form onsubmit={this.handelsubmit}>
                    <div>
                        <label >userName</label>
                        <input type="text" placeholder="username" value={this.satate.username} onChange={this.handelusername}></input>
                    </div>

                    <label>choose gender</label>
                    <select value={this.state.gender} onChange={this.handelgender}>
                    <option value="">Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                   
                    </select>
                </form>
                <button type="submit">submit</button>
            </div>
        )
    }
}