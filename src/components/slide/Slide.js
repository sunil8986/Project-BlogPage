import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cdata from './Cdata';
import "./Slide.css"


export default function Slide() {

  var settings = {
    dots: true,
    infinite: true,
    arrows : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    
//   {
//     id: 1,
//     cover: "/Images/card-1.jpg",
//     category: "lifestyle",
//     title: "Best Places to visit in the World",
//   },

  return (
    <>
        <div className='slide'>
            <Slider {...settings}>
                {
                    Cdata.map((data)=>{
                        let {id,cover,category,title,desc } = data;
                        return (
                            <div key={id} className='box'>
                                <div className='img'>
                                    <img src={cover} alt='' />
                                </div>
                                <div className='text'>
                                    <span>{category}</span>
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </>
  )
}
