import React from "react"
import { Link } from "react-router-dom"
import Cards from "../components/Cards"
import DomainCards from "../components/DomainCards"
import Carousel from "../components/Carousel"


export default function WebTech(){
    return(
        <Carousel 
        title="Web Technologies" 
        img1="frontend-development.png"
        url1="/explore/web-technologies/frontend-development" 
        img2="game-development.png"
        url2="/explore/web-technologies/game-development" 
        img3="data-science.png"
        url3="/explore/web-technologies/data-science" 
        img4="ai-ml.png"
        url4="/explore/web-technologies/ai-ml"
        img5="backend-development.png"
        url5="/explore/web-technologies/backend-development"
        img6="ar-vr.png"
        url6="/explore/web-technologies/ar-vr"
        img7="technical-writing.png"
        url7="/explore/web-technologies/technical-writing"
        img8="devops.png"
        url8="/explore/web-technologies/devops"
        img9="application-development.png"
        url9="/explore/web-technologies/application-development"
        img10="blockchain-development.png"
        url10="/explore/web-technologies/blockchain-development"
        img11="cyber-security.png"
        url11="/explore/web-technologies/cyber-security"
        img12="quantum-computing.png"
        url12="/explore/web-technologies/quantum-computing"
        />
        
    )
} 