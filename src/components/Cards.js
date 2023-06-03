import React from "react"
import Tilt from "react-parallax-tilt";

export default function Cards(props){
    return(
        <div className="cards_component">
            <img src={require("../images/user2.png")} />
            <h1>Experience</h1>
            <ul>
                <li>Line1</li>
                <li>Line2</li>
                <li>Line3</li>
            </ul>
        </div>
    )
}



{/*         <div className="cards_component">
            <img className="user_img" src={require("../images/user2.png")} />
            <h1>{props.name}</h1>
            <p>{props.role}</p>
        </div> */}