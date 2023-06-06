import React from "react"
import { Link } from "react-router-dom"
import Cards from "../components/Cards"
import DomainCards from "../components/DomainCards"
import Carousel from "../components/Carousel"

export default function Media(){
    return(
        <Carousel 
        title="Media & Design" 
        img1="ui-ux.png"
        url1="/explore/web-technologies/ui-ux" 
        img2="product-designing.png"
        url2="/explore/web-technologies/product-designing" 
        img3="film-making.png"
        url3="/explore/web-technologies/film-making" 
        img4="graphic-designing.png"
        url4="/explore/web-technologies/graphics-designing"
        img5="animations.png"
        url5="/explore/web-technologies/animations"
        img6="vfx.png"
        url6="/explore/web-technologies/vfx"
        img7="3d-modeling.png"
        url7="/explore/web-technologies/3d-modeling"
        img8="video-editing.png"
        url8="/explore/web-technologies/video-editing"
        img9="photography.png"
        url9="/explore/web-technologies/photography"
        img10=""
        url10="/explore/web-technologies/blockchain-development"
        />
    )
} 