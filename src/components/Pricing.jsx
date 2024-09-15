import React from 'react'
import Title from './Title'
import { pricing } from '../data'
const Pricing = () => {

  return (
    <section className='bg-white equal-margin' id='pricing'>
      <Title title='Choose Your Plan' text='Choose the best plan according to your needs'/>
      <div className='grid grid-cols-1 mt-16  md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-7'>
{pricing.map((data) => {
  const {purpose, price, projects, color, specialPriceCol, initialConceptStrike, logoTransparencyStrike} = data;
  

  return <div className="cardHover card border-none outline-none bg-white w-full md:w-fit-content lg:largeCard  ms-0 transition ease-in-out delay-150  hover:-translate-y-6   duration-300">
  <div className="card-body items-center text-center">
    <p className='text-md font-medium specialGrey'>{purpose}</p>
    <h2 className={`text-6xl tracking-wider ${specialPriceCol} mt-3`}>{price}</h2>
    <p className='text-md mt-3'>{projects}</p>
<h3 className={`capitalize mt-3 ${
                    initialConceptStrike ? 'line-through lineThrough' : 'specialGrey'
                  }`}>1 Initial Concept Included</h3>
<h3 className={`capitalize mt-3 ${
                    logoTransparencyStrike ? 'line-through lineThrough' : 'specialGrey'
                  }`}> Logo Transparency </h3>
<h3 className={`specialGrey capitalize mt-3`}>High Resolution</h3>
    <div className="card-actions">
      <button className={`btn uppercase btn-outline mt-12 ${color}`}>choose the plan</button>
    </div>
  </div>
</div>
})}
      </div>
    </section>
  )
}

export default Pricing

