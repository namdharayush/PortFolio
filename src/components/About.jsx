import React, { useEffect } from 'react'
import '../style/about.css'
import Ayush from '/Ayush.jpg'
import Aos from 'aos'




function About() {

    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='about'  id='about'>
            <div className="container-lg">
                <h2 data-aos='fade-down' data-aos-duration='2000'>About Me</h2>
                <div className="about_box">
                    <img src={Ayush} alt="Image Not Found!" data-aos='fade-right' data-aos-duration='2000' />
                    <div className="text_content" data-aos='fade-left' data-aos-duration='2000'>
                        <h4>Hey! I'm <span>Ayush Namdhar</span>, a dedicated <span>full-stack developer</span> with a passion for crafting robust and scalable web applications.I specialize in creating end-to-end solutions that deliver seamless user experiences and meet <span>complex business requirements</span>. My technical skills span HTML, CSS, SCSS, JavaScript, React, Node.js, Express, MongoDB,Python and  Django. <br /> <br />Throughout my career, I've worked on <span>diverse projects</span> ranging from <span>e-commerce platforms</span> to enterprise software solutions. <br /><br /> What sets me apart is my holistic approach to development. I excel at bridging the gap between <span>front-end</span> aesthetics and <span>back-end</span> functionality, ensuring that every application I build is both visually stunning and highly performant. <br /><br /> Beyond coding, I am a learner and <span>tech enthusiast</span>. I love exploring new technologies, and staying up-to-date with industry trends. In my free time, you can find me playing the cricket, mobile games and rubike cubes.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About