import React, { Fragment, useEffect, useState } from 'react'
import '../../style/contact/Scheduled_Submit.css'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineCalendarToday } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { CiVideoOn } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";

function Scheduled_Submit({ formName, Selected_time }) {

    const avatarName = formName && formName.split(' ').join('-')

    const [avatar , setAvatarName] = useState('')

    const CUSTOM_URL = `https://ui-avatars.com/api/?name=${avatarName}&background=000000&color=ffffff&bold=true&rounded=true`

    return (
        <Fragment>
            <div className='sch_box'>
                <div>
                    <div className='sch_img'>
                        <img src={CUSTOM_URL} alt="Image Not Found" />
                    </div>
                    <div className='text-center'>
                        <h3 ><IoCheckmarkDoneCircle style={{ color: 'green' }} /> You are Scheduled</h3>
                        <p>A calender invitation has been sent to your email address.</p>
                    </div>
                    <div className='sch_card'>
                        <h6><FaRegUser className='me-2' /> {formName}</h6>
                        <h6><MdOutlineCalendarToday className='me-2' /> {Selected_time}</h6>
                        <h6><BiWorld className='me-2' /> Indian Standard Time</h6>
                        <h6><CiVideoOn className='me-2' /> Web conferencing details to follow.</h6>
                    </div>
                    <hr />
                    {/* <div className='text-center'>
                        <p className='mb-0' style={{ fontWeight: '650' }}>Scheduled your own meetings with Calendly for free</p>
                        <p>Eliminate the back-end-forth emails for finding time.</p>
                    </div>
                    <div className='sch_online_btn'>
                        <button type='button'><FcGoogle className='me-1' /> Sign up with Google</button>
                        <button type='button'><BsMicrosoft className='me-1' /> Sign up with MicroSoft</button>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Scheduled_Submit