import React, { useEffect } from 'react'
import '../../style/contact/contact.css'
import ContactHome from './ContactHome'

function Contact() {
  return (
    <div className='contact_home' id='contact'>
        <div className="container">
            <h2 className='h2'>Lets Connect</h2>
            <div className=''>
                <ContactHome />
            </div>
        </div>
    </div>
  )
}

export default Contact