import React, { Component } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carusel.css'
import { Container } from "../../globalStyle";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear"

        };

        const data = [
            {
                title: 'Temuriylar davri adabiyoti',
                img: 'https://static.zarnews.uz/crop/3/9/720__80_393a0414495fbaa3ad1f52fb97d5ad4a.jpg?img=self&v=1657176971'
            },
            {
                title: 'Jadid davri adabiyoti',
                img: 'https://static.zarnews.uz/crop/3/9/720__80_393a0414495fbaa3ad1f52fb97d5ad4a.jpg?img=self&v=1657176971'
            },
            {
                title: 'Sovet davri adabiyoti',
                img: 'https://static.zarnews.uz/crop/3/9/720__80_393a0414495fbaa3ad1f52fb97d5ad4a.jpg?img=self&v=1657176971'
            },
            {
                title: 'Musataqillik davri adabiyoti',
                img: 'https://static.zarnews.uz/crop/3/9/720__80_393a0414495fbaa3ad1f52fb97d5ad4a.jpg?img=self&v=1657176971'
            }
        ]
        return (
            <Container>
                <div>
                    <Slider {...settings}>
                        {data.map(item => {
                            return (
                                <div key={item.title} className='carusel-div'>
                                    <h2 className='carusel-title'>{item.title}</h2>
                                    <div className="carusel-img1"></div>
                                    <div className="carusel-img2"></div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </Container>
        )
    }
}