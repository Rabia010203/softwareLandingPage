import React, {useRef} from 'react';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import './Carousel.css';  // Your custom CSS for card styling
import { testimonals } from '../data';

const CardCarousel = () => {
  // Create a ref for the Slider component
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // default number of slides
    slidesToScroll: 1,
    autoplay: true, // enable autoplay
    autoplaySpeed: 3000, // speed in milliseconds (3 seconds)
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For screens up to 1024px wide
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1284, // For screens up to 1024px wide
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 912, // For iPad Air and similar devices
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 820, // For iPad Air and similar devices
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768, // For screens up to 768px wide
        settings: {
          slidesToShow: 1, // Show 2 slides
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480 && 540, // For screens up to 480px wide (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1
        }
      }
    ]
  };

// Custom handlers to trigger slider actions
const handleNext = () => {
  sliderRef.current.slickNext();
};

const handlePrev = () => {
  sliderRef.current.slickPrev();
};
  return (

    <div className='slider-container mt-12'>
<Slider ref={sliderRef} {...settings} className='slider'>
      {testimonals.map((test) => {
        const {rev, img, role, name} = test;
        return <div key={img} className='cardHover card border-none outline-none bg-white w-full md:w-80 h-60 '>
<div className='card-body'>
<h2 className="text-sm text-justify">{rev}</h2>
<div className='flex items-center  mt-3'>

  <img src={img} alt={name} className='w-30 h-30 md:w-50  rounded-full'/>
  <div className='flex flex-col ps-8'>
    <h3 className='text-md md:text-sm text-left'>{name}</h3>
    <p className='text-sm md:text-lg md:text-left'>{role}</p>
  </div>
</div>
</div>
</div>
      })}
    </Slider>
    {/* Custom Buttons outside the slider */}
    <div className='mt-4 flex items-center justify-center custom-btn'>
        <button className='btn  curvePurPBtn' onClick={handlePrev} style={{ marginRight: '18px' }}><FiChevronLeft/></button>
        <button className='btn curvePurPBtn' onClick={handleNext}><FiChevronRight/></button>
      </div>
    </div>
    
  );
};

export default CardCarousel;