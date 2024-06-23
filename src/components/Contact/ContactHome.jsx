import React, { useState } from 'react'
import Calendar from 'react-calendar';
import '../../style/contact/ContactHome.css';
import '../../style/contact/Calender.css'
import 'react-calendar/dist/Calendar.css';
import { NavLink } from 'react-router-dom'
import Scheduled_Time from './Scheduled_Time';
import FormDetails from './FormDetails';
import { MdAccessTime, MdOutlineCalendarToday } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { IoArrowBackOutline } from "react-icons/io5";
import Scheduled_Submit from './Scheduled_Submit';
import emailjs from '@emailjs/browser'
import A from '/A.jpg'


const DAY_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
const MONTH_NAME = [
    "January", "February",
    "March", "April", "May",
    "June", "July", "August",
    "September", "October",
    "November", "December"
];


function ContactHome() {

    const [value, setValue] = useState(new Date());
    const [isDateClick, setIsDateClick] = useState(false);
    const [fetchtime, setFetchTime] = useState(null)
    const [formName, setFormName] = useState(null)

    const handleClick = (date) => {
        setValue(date)
        setIsDateClick(true)
    }
    const disableWeekendDate = (date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    }
    const isDisableWeekendDate = ({ date }) => {
        return disableWeekendDate(date)
    }
    const handleEvent = (time) => {
        setFetchTime(time)
    }
    const handleBackButton = () => {
        setIsDateClick(false)
    }
    const handleSubmit = (form, e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_EMAIL_JS_SERVICE_ID, import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID, form, {
            publicKey: import.meta.env.VITE_EMAIL_JS_PUBLIC_ID,
        }).then(() => {
            console.log('Success');
            setFormName(form.name.value);
        }, (err) => {
            console.log('Failed...', err.text);
        })

    }
    const handleBackSubmit = () => {
        setFetchTime(null)
    }

    const SELECTED_TIME = `${fetchtime}, ${DAY_NAME[value.getDay()]}, ${MONTH_NAME[value.getMonth()]} ${value.getDate()}, ${value.getFullYear()}`
    return (
        <div className={`homePage container ${isDateClick ? 'homepage-width' : ''}`}>
            <div className='row homepage_row  ' style={{ display: (formName ? 'none' : '') }}>
                <button onClick={handleBackButton} className={`back_button ${isDateClick ? (fetchtime ? 'd-none' : 'd-md-none') : 'd-none'}`}
                    type='submit'><IoArrowBackOutline fontSize={30} /></button>

                <div className={`${isDateClick ? 'col-lg-4 ' : 'col-lg-6 '} ${fetchtime ? 'd-block' : (isDateClick ? 'd-none d-md-block' : 'd-block')}`}>
                    <div className='img'>
                        <img src={A} alt="Image Not Found" />
                        <button type='button' onClick={handleBackSubmit} className={`back_button cancle_button ${fetchtime ? '' : 'd-none'}`}
                        ><IoArrowBackOutline fontSize={30} /></button>
                    </div>
                    <hr />
                    <div className='p-3'>
                        <h2 className='text-center text-lg-start main_contact_content'>Let's Collaborate!</h2>
                        <p className='time_text1 text-center text-lg-start' style={{ fontWeight: '600', opacity: '0.6' }}><MdAccessTime className='me-1' /> 45 min </p>
                        {
                            fetchtime && <div className='time_text2 text-center text-lg-start' style={{ fontWeight: '600', opacity: '0.6' }}>
                                <p><MdOutlineCalendarToday />   {SELECTED_TIME}</p>
                                <p><BiWorld className='fs-4' /> Indian Standard Time</p>
                            </div>
                        }

                        <p className='meeting_book_text '>Share your project ideas and let's bring them to life. <br /> Get in touch to discuss your project.</p>
                    </div>
                </div>
                <div style={{ display: fetchtime ? 'none' : '' }} className={`${isDateClick ? 'col-lg-8' : 'col-lg-6'} pt-3 pb-3`}>
                    <div className='row custom-row'>
                        <h3 className='col-12 text-center text-lg-start medium_text' >Select a Date & Time</h3>

                        <h3 className='col-12 text-center text-lg-start medium_text2 d-md-none' style={{ display: isDateClick ? 'none' : '' }}>Select a Date</h3>

                        <h3 className='col-12 text-center text-lg-start d-md-none medium_text3' style={{ display: isDateClick ? 'block' : 'none' }}>Select Time</h3>

                        <div className={`${isDateClick ? 'col-12 col-md-8 react-calendar1' : 'col-12 react-calendar2'} `}>
                            <div>
                                <Calendar tileDisabled={isDisableWeekendDate}
                                    minDetail='month'
                                    minDate={new Date()}
                                    onChange={handleClick}
                                    value={value}
                                />
                            </div>
                            <div className='ps-4 text-center text-lg-start'>
                                <h6 style={{ fontWeight: '650' }}>Time Zone</h6>
                                <p><BiWorld className='fs-4' /> India Standard Time ({new Date().toLocaleTimeString()})</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-4 pt-4 mt-2' style={{ display: isDateClick ? 'inline-block' : 'none' }}>
                            <p className='f-1 text-center text-md-start'>{DAY_NAME[value.getDay()]},{MONTH_NAME[value.getMonth()]} {value.getDate()}</p>
                            <Scheduled_Time handleEvent={handleEvent} />
                        </div>
                    </div>
                </div>
                <div
                    style={{ display: (!fetchtime ? 'none' : '') }}
                    className='col-12 col-lg-6 mt-5 mt-md-0 form_details'>
                    <FormDetails handleSubmit={handleSubmit} />
                </div>
            </div>
            <div className={`${formName ? 'shceduled_container' : 'd-none'}`}>
                <Scheduled_Submit Selected_time={SELECTED_TIME} formName={formName} />
            </div>
        </div >

    )
}


export default ContactHome