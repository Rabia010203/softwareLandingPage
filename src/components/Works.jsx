import React from 'react'
import Title from './Title'
import { works } from '../data'
const Works = () => {
  return (
    <section className='equal-margin bg-white' id='works'>
      <Title title='Recent Works' text='Explore Our enchanting Works'/>
      <div className='mt-12 grid gap-4 grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3'>
        {works.map((work) => {
            const {title, text, img, id} = work;
            return <div key={id} className="cardHover  card border-none outline-none bg-white w-fit-content lg:w-auto ">
  <figure>
    <img
      src={img}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{text}</p>
   
  </div>
</div>
        })}
      </div>
    </section>
  )
}

export default Works
