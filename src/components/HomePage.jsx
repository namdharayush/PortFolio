import React, { Fragment, useEffect, useState } from 'react'
import '../style/homepage.css'
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactHome from './Contact/ContactHome';
import Contact from './Contact/Contact';
import { FaArrowUp } from "react-icons/fa";
import Aos from 'aos';


function HomePage() {

    const [changeText, setChangeText] = useState('Full Stack')
    const [customTime, setCustomTime] = useState('');
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if (changeText == 'Full Stack') {
                setChangeText('Web');
            }
            else {
                setChangeText('Full Stack')
            }
        }, 5000)
    }, [changeText])

    useEffect(() => {
        setInterval(() => {
            setCustomTime(new Date().getSeconds());
        }, 1000)
    }, [])

    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    })

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        Aos.init();
    },[])

    return (
        <Fragment>
            <div style={{overflowX : 'hidden'}}>
                <div className='homepage' id='homepage'>
                    <div className='overlay_text'>
                        {/* <h1>{`${new Date().getHours()} : ${new Date().getMinutes()} : ${customTime}`}</h1> */}
                        <h1>Hello !</h1>
                    </div>
                    <div className="container">
                        <div className="main_text" >
                            <h4 data-aos='fade-down' data-aos-duration='1500'>I am <span className='ayush_text'>Ayush Namdhar</span></h4>
                            <div className='child_text' >
                                <h2 data-aos='fade-up' data-aos-duration='1500'><span >{changeText}</span> Developer</h2>
                            </div>
                            <div className='main_icons'>
                                <div data-aos='fade-right' data-aos-duration='2000'>
                                    <NavLink to='https://www.linkedin.com/in/ayush-namdhar/' target='_blank'>
                                        <FaLinkedinIn className='icon' />
                                    </NavLink>
                                </div>
                                <div data-aos='fade-up' data-aos-duration='2000'>
                                    <NavLink to='https://github.com/namdharayush' target='_blank'>
                                        <FaGithub className='icon' />
                                    </NavLink>
                                </div>
                                <div data-aos='fade-down' data-aos-duration='2000'>
                                    <NavLink to='mailto:ayushnamdhar27@gmail.com' target='_blank'>
                                        <MdMarkEmailRead className='icon' />
                                    </NavLink>
                                </div>
                                <div data-aos='fade-left' data-aos-duration='2000'>
                                    <NavLink to='https://wa.me/+918200172854' target='_blank'>
                                        <FaWhatsapp className='icon' />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='scroller' style={{ display: !scroll ? 'none' : '' }} onClick={handleScroll}>
                    <FaArrowUp className='icon' />
                </div>
                <About  />
                <Skills />
                <Projects />
                <Contact />

            </div>
        </Fragment>
       
    )
}

export default HomePage