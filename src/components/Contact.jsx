import React from 'react'
import Title from './Title'
import Form from './Form'
const Contact = () => {
  return (
    <section className='mt-12 bg-slate-100 equal-margin grid grid-cols-1 md:grid-cols-2 gap-4' id='contact'>
    <div>
    <Title text="You can contact us anytime and we are just one text away from you." title="Get in Touch With Us !"/>
    <Form/>
    </div>
    <div>
        <img src="/contact2.svg" className='w-80 h-80' alt="" />
    </div>  

    </section>
  )
}

export default Contact
