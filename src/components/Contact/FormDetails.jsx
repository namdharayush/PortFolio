import React, { useRef } from 'react'
import '../../style/contact/FormDetails.css'

function FormDetails({ handleSubmit }) {

    const form = useRef();
    return (
        <div>
            <form ref={form} action="" className='custom_form' onSubmit={(e)=>handleSubmit(form.current,e)}>
                <h4>Enter Details</h4>
                <div>
                    <label className='label' htmlFor="name">Name <span>*</span></label>
                    <input type="text" name='name'  id='name' required />
                </div>
                <div>
                    <label className='label' htmlFor="email">Email <span>*</span></label>
                    <input type="email" name='email' id='email' required />
                </div>
                <div>
                    <label className='label' htmlFor="contact">Contact <span>*</span></label>
                    <input type="text" name='contact' id='contact' required />
                </div>
                <div>
                    <label className='label' htmlFor="message">Message <span>*</span></label>
                    <textarea name="message" id="message" rows='3' required></textarea>
                </div>
                <button type='submit' className='mb-5'>Scheduled Meeting</button>
            </form>
        </div>
    )
}

export default FormDetails