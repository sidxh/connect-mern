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
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1390,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1090,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 700,
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
              <img src={require(`../images/domains/${props.img1}`)} alt="" data-skill-name={props.dataimg1} />
              <div className="overlay">{props.dataimg1}</div>
              
            </Link>
            <Link className='link_hai' to={props.url2}>
              <img src={require(`../images/domains/${props.img2}`)} alt="" data-skill-name={props.dataimg2} />
              <div className="overlay">{props.dataimg2}</div>
              
            </Link>
            <Link className='link_hai' to={props.url3}>
              <img src={require(`../images/domains/${props.img3}`)} alt="" data-skill-name={props.dataimg3} />
              <div className="overlay">{props.dataimg3}</div>
              
            </Link>
            <Link className='link_hai' to={props.url4}>
              <img src={require(`../images/domains/${props.img4}`)} alt="" data-skill-name={props.dataimg4} />
              <div className="overlay">{props.dataimg4}</div>
              
            </Link>
            <Link className='link_hai' to={props.url5}>
              <img src={require(`../images/domains/${props.img5}`)} alt="" data-skill-name={props.dataimg5} />
              <div className="overlay">{props.dataimg5}</div>
              
            </Link>
            <Link className='link_hai' to={props.url6}>
              <img src={require(`../images/domains/${props.img6}`)} alt="" data-skill-name={props.dataimg6} />
              <div className="overlay">{props.dataimg6}</div>
              
            </Link>
            <Link className='link_hai' to={props.url7}>
              <img src={require(`../images/domains/${props.img7}`)} alt="" data-skill-name={props.dataimg7} />
              <div className="overlay">{props.dataimg7}</div>
              
            </Link>
            <Link className='link_hai' to={props.url8}>
              <img src={require(`../images/domains/${props.img8}`)} alt="" data-skill-name={props.dataimg8} />
              <div className="overlay">{props.dataimg8}</div>
              
            </Link>
            {props.img9 && <Link className='link_hai' to={props.url9}>
              <img src={require(`../images/domains/${props.img9}`)} alt="" data-skill-name={props.dataimg9} />
              <div className="overlay">{props.dataimg9}</div>
              
            </Link>}
            {props.img10 && <Link className='link_hai' to={props.url10}>
              <img src={require(`../images/domains/${props.img10}`)} alt="" data-skill-name={props.dataimg10} />
              <div className="overlay">{props.dataimg10}</div>
              
            </Link>}
            {props.img11 && <Link className='link_hai' to={props.url11}>
              <img src={require(`../images/domains/${props.img11}`)} alt="" data-skill-name={props.dataimg11} />
              <div className="overlay">{props.dataimg11}</div>
              
            </Link>}
            {props.img12 && <Link className='link_hai' to={props.url12}>
              <img src={require(`../images/domains/${props.img12}`)} alt="" data-skill-name={props.dataimg12} />
              <div className="overlay">{props.dataimg12}</div>
              
            </Link>}
            {props.img13 && <Link className='link_hai' to={props.url13}>
              <img src={require(`../images/domains/${props.img13}`)} alt="" data-skill-name={props.dataimg13} />
              <div className="overlay">{props.dataimg13}</div>
              
            </Link>}
            {props.img14 && <Link className='link_hai' to={props.url14}>
              <img src={require(`../images/domains/${props.img14}`)} alt="" data-skill-name={props.dataimg14} />
              <div className="overlay">{props.dataimg14}</div>
              
            </Link>}
            {props.img15 && <Link className='link_hai' to={props.url15}>
              <img src={require(`../images/domains/${props.img15}`)} alt="" data-skill-name={props.dataimg15} />
              <div className="overlay">{props.dataimg15}</div>
              
            </Link>}
            {props.img16 && <Link className='link_hai' to={props.url16}>
              <img src={require(`../images/domains/${props.img16}`)} alt="" data-skill-name={props.dataimg16} />
              <div className="overlay">{props.dataimg16}</div>
              
            </Link>}
          </Slider>
        </div>
    )
}

export default Carousel
