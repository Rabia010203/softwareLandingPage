import React from 'react'
import Title from './Title'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { services } from '../data';
const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // screens greater than 1600px
      breakpoint: { max: 4000, min: 1600 },
      items: 5,  // 5 items for very large screens
    },
    desktop: {
      // screens between 1024px and 1600px
      breakpoint: { max: 1600, min: 1024 },
      items: 4,  // 4 items for desktop
    },
    ipadLandscape: {
      // iPad landscape (1024px)
      breakpoint: { max: 1024, min: 768 },
      items: 3,  // 3 items for iPad landscape
    },
    tablet: {
      // screens between 768px and 1024px
      breakpoint: { max: 1024, min: 768 },
      items: 2,  // 2 items for tablets
    },
    mobile: {
      // screens less than 768px
      breakpoint: { max: 768, min: 0 },
      items: 1,  // 1 item for mobile
    },
  };

  return (
    <section className='GreyBg equal-margin' id='services'>
      <Title title='our services' text='Services that we provide :-'/>
      <div className='mt-12'>
      <Carousel responsive={responsive}  infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000} className='mt-12'>
      {services.map((service) => {
        const {img, desc, title} = service;
        return <div key={title} className="cardHover border-none outline-none card   card-compact w-full bg-white md:w-fit h-100 flex justify-center items-center">
  <figure className='w-50 h-40'>
    <img className='w-full'
      src= {img}
      alt={title}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title mt-4">{title}</h2>
    <p>{desc}</p>
    
  </div>
</div>
      })}
      
  
</Carousel>;
      </div>
      
    </section>
  )
}

export default Services
