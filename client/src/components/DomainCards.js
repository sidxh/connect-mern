import React from "react"

export default function DomainCards(props){
    return(
        <div
            className="cards_component">   
            <img className="domain_img" src={require(`../images/domains/${props.url}.png`)} alt="" />
        </div>
    )
}