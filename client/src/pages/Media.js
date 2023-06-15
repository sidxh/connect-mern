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
        url1="/explore/media-design/ui-ux" 
        img2="product-designing.png"
        url2="/explore/media-design/product-designing" 
        img3="film-making.png"
        url3="/explore/media-design/film-making" 
        img4="graphic-designing.png"
        url4="/explore/media-design/graphics-designing"
        img5="animations.png"
        url5="/explore/media-design/animations"
        img6="vfx.png"
        url6="/explore/media-design/vfx"
        img7="3d-modeling.png"
        url7="/explore/media-design/3d-modeling"
        img8="video-editing.png"
        url8="/explore/media-design/video-editing"
        img9="photography.png"
        url9="/explore/media-design/photography"
        img10=""
        url10="/explore/media-design/blockchain-development"
        />
    )
} 