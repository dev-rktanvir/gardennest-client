import React, { use } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';

const slidesPromiss = fetch('http://localhost:5000/slider').then(res => res.json());

const Sliderr = () => {
    const slides = use(slidesPromiss)
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <div className='w-full'>
            <Slider {...settings}>
                {slides.map((slide) => (
                    <div key={slide._id} className="relative h-[70vh]">
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-top object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-4 w-full bg-black/40">
                                <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-200 mb-6">
                                    {slide.desc}
                                </p>
                                <button className="px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-semibold inline-flex items-center gap-2 transition cursor-pointer">
                                    {slide.button} <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default Sliderr;