import React, { Fragment, useEffect, useState } from 'react'
import '../style/navbar.css'
import { MdDownloading } from "react-icons/md";
import A from '/A.jpg'
import { NavLink } from 'react-router-dom'
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

function Navbar() {

    const [open, setOpen] = useState();

    useEffect(() => {
        const close_width_content = document.getElementById('close_width_content')
        close_width_content && close_width_content.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() == 'h4') {
                if (e.target.className.split(' ').includes('link')) {
                    setOpen(false);
                }
            }
        })
    }, [])

    const scrollToSection = (id) => {
        const ele = document.getElementById(id);
        if (ele) {
            window.scrollTo({
                top: ele.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    return (

        <Fragment>
            <div className='custom_navbar' >
                <div className=''>
                    <div className="row">
                        <div className="col-2 first" >
                            <div className='bg'>
                                <img src={A} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-8 second" >
                            <div className="left_text_navbar">
                                <h4 onClick={() => scrollToSection('homepage')}>Home</h4>
                                <h4 onClick={() => scrollToSection('about')}>About Us</h4>
                                <h4 onClick={() => scrollToSection('skills')}>Skills</h4>
                                <h4 onClick={() => scrollToSection('projects')}>Work</h4>
                                <h4 onClick={() => scrollToSection('contact')}>Contact Us</h4>
                            </div>
                        </div>
                        <div className="col-2 third" >
                            <a download style={{ textDecoration: 'none' }} href='/Ayush_Namdhar.pdf' target='_blank'><button className='btn'>Resume<MdDownloading className='download_icon' /></button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='media_custom_navbar'>

                <div className='flex_item_navbar'>
                    <div className='media_bg'>
                        <img src={A} alt="Image Not Found" />
                    </div>
                    <div className='media_menubar'>
                        <CgMenuRightAlt onClick={() => setOpen(true)} className='menu_icon' />
                    </div>
                </div>
            </div>
            <div className={`full_menu_width ${!open ? 'close_full_menu' : ''}`}>
                <div className='close_button'>
                    <IoMdClose className='close_icon' onClick={() => setOpen(false)} />
                </div>
                <div className='close_width_content' id='close_width_content'>
                    <h4 onClick={() => scrollToSection('homepage')} className='link'>Home</h4>
                    <h4 onClick={() => scrollToSection('about')} className='link'>About Us</h4>
                    <h4 onClick={() => scrollToSection('skills')} className='link'>Skills</h4>
                    <h4 onClick={() => scrollToSection('projects')} className='link'>Work</h4>
                    <h4 onClick={() => scrollToSection('contact')} className='link'>Contact Us</h4>
                    <div className="third" >
                        <a download style={{ textDecoration: 'none' }} href='/Ayush_Namdhar.pdf' target='_blank'><button className='btn'>Resume<MdDownloading className='download_icon' /></button></a>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Navbar