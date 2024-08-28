import React from "react";

function Comp3(props)
{
    const {fname,lname,age,uni,number,skills}=props
    return(
        <div>
            <p>my name is: {fname}{lname} and I'm:  {age} years old</p>
            <p>I'm studying at:{uni} with ID:{number}</p>
            <p>my skills are: {skills}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default Comp3;