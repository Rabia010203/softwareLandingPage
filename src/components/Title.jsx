import React from 'react'

const Title = ({title, text}) => {
  return (
    <>
      <h2 className='text-2xl capitalize  font-medium tracking-wider'>{title}</h2>
      <p className='mt-2 text-lg'>{text}</p>
    </>
  )
}

export default Title
