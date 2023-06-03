import React from 'react'
import { Link } from "react-router-dom"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {
    const settings = {
        className: "center",
        dots: true,
        // focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      return (
        <div className="carousel_cont">
          <h1>{props.title}</h1>
          <Slider className='link_div' {...settings}>
            <Link className='link_hai' to={props.url1}>
              <img src={require(`../images/domains/${props.img1}`)} alt="Image 1" />
            </Link>
            <Link className='link_hai' to={props.url2}>
              <img src={require(`../images/domains/${props.img2}`)} alt="Image 2" />
            </Link>
            <Link className='link_hai' to={props.url3}>
              <img src={require(`../images/domains/${props.img3}`)} alt="Image 3" />
            </Link>
            <Link className='link_hai' to={props.url4}>
              <img src={require(`../images/domains/${props.img4}`)} alt="Image 4" />
            </Link>
            <Link className='link_hai' to={props.url5}>
              <img src={require(`../images/domains/${props.img5}`)} alt="Image 1" />
            </Link>
            <Link className='link_hai' to={props.url6}>
              <img src={require(`../images/domains/${props.img6}`)} alt="Image 2" />
            </Link>
            <Link className='link_hai' to={props.url7}>
              <img src={require(`../images/domains/${props.img7}`)} alt="Image 3" />
            </Link>
            <Link className='link_hai' to={props.url8}>
              <img src={require(`../images/domains/${props.img8}`)} alt="Image 4" />
            </Link>
            {props.img9 && <Link className='link_hai' to={props.url9}>
              <img src={require(`../images/domains/${props.img9}`)} alt="Image 4" />
            </Link>}
            {props.img10 && <Link className='link_hai' to={props.url10}>
              <img src={require(`../images/domains/${props.img10}`)} alt="Image 4" />
            </Link>}
            {props.img11 && <Link className='link_hai' to={props.url11}>
              <img src={require(`../images/domains/${props.img11}`)} alt="Image 4" />
            </Link>}
            {props.img12 && <Link className='link_hai' to={props.url12}>
              <img src={require(`../images/domains/${props.img12}`)} alt="Image 4" />
            </Link>}
            {props.img13 && <Link className='link_hai' to={props.url13}>
              <img src={require(`../images/domains/${props.img13}`)} alt="Image 4" />
            </Link>}
            {props.img14 && <Link className='link_hai' to={props.url14}>
              <img src={require(`../images/domains/${props.img14}`)} alt="Image 4" />
            </Link>}
            {props.img15 && <Link className='link_hai' to={props.url15}>
              <img src={require(`../images/domains/${props.img15}`)} alt="Image 4" />
            </Link>}
            {props.img16 && <Link className='link_hai' to={props.url16}>
              <img src={require(`../images/domains/${props.img16}`)} alt="Image 4" />
            </Link>}
          </Slider>
        </div>
    )
}

export default Carousel
