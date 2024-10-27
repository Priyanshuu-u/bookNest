import React from 'react';
import Slider from "react-slick";
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "purple",
                borderRadius: "50%",
              
                right: 10,
                zIndex: 2,
            }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "purple",
                borderRadius: "50%",
                
                left: 10,
                zIndex: 2,
            }}
            onClick={onClick}
        />
    );
}

function Freebook() {
    const filterData = list.filter((data) => data.available === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-xl pb-2'>Freely Available Books</h1>
                    <p>You can enjoy reading these books for free!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <Cards item={item} key={item.id}></Cards>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
