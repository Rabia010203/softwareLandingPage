import React from 'react'
import Card from 'react-bootstrap/Card';
import { cards } from '../data';
import Title from './Title';
const Features = () => {
  return (
    <section className='grid grid-cols-1  lg:grid-cols-2 gap-y-16 md:gap-x-24 lg:gap-x-36 mt-12 bg-white equal-margin' id="features">
      <div>
      <Title  title='Our Exciting Features' text='Explore some of our Exciting features'/>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-2 gap-y-4 md:gap-x-6 lg:gap-x-40 xl:gap-x-20'>
{cards.map((card) => {
  const {icon, title, text} = card;
  return <Card key={title} style={{  boxShadow:'', height:'11rem',  }} className="w-full md:w-[20rem] lg:w-[17rem] border-none outline-none  sm:w-60 shadow-md hover:shadow-lg text-center d-flex justify-content-center" >
      <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
      <Card.Text className='text-2xl text-violet-500'>
          {icon}
        </Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text className=''>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
})}
      </div>
      </div>
      <article>
      <img src="/features.svg" alt="features" className='w-96' />
      </article>
      
      
      
      
      
    </section>
  )
}

export default Features
