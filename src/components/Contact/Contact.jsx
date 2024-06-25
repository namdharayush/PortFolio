import React, { useEffect } from 'react'
import '../../style/contact/contact.css'
import ContactHome from './ContactHome'

function Contact() {
  return (
    <div className='contact_home'    id='contact'>
        <div className="container" >
            <h2 className='h2' data-aos='fade-down' data-aos-duration='2000'>Lets Connect</h2>
            <div className='' data-aos='fade-right' data-aos-duration='2000'>
                <ContactHome />
            </div>
        </div>
    </div>
  )
}

export default Contact