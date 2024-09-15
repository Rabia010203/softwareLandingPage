import React from 'react'

const Card = ({img, name, jobTitle, desc}) => {

  return (
    <>
     <div className="cardHover card border-none outline-none  bg-white w-full md:w-70 lg:w-60">
    <figure className="px-10 pt-10">
      <img
        src={img}
        alt={name}
        className="rounded-full"
      />
    </figure>
    <div className="card-body items-center text-center">

      <h2 className="card-title" style={{color:'#332E38'}}>{name}</h2>
      <h2 className='' style={{color:'#47404f'}}>{jobTitle}</h2>
      <p style={{color:'#47404f'}}>{desc}</p>
      <div className="card-actions">
        <button className="btn curveBor text-white  flex justify-center text-xs items-center btn-sm  mt-3 btn-primary">Contact now</button>
      </div>
    </div>
  </div>
      
    </>
  )
}

export default Card
