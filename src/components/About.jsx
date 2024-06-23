import React from 'react'
import '../style/about.css'
import Ayush from '/Ayush.jpg'

function About() {
    return (
        <div className='about' id='about'>
            <div className="container-lg">
                <h2>About Me</h2>
                <div className="about_box">
                    <img src={Ayush} alt="Image Not Found!" />
                    <div className="text_content">
                        <h4>Hello! I'm <span>Ayush Namdhar</span>, a dedicated full-stack developer with a passion for crafting robust and scalable web applications.I specialize in creating end-to-end solutions that deliver seamless user experiences and meet complex business requirements. My technical skills span HTML, CSS, SASS, JavaScript, React, Node.js, Express, MongoDB,Python and  Django. <br /> <br />Throughout my career, I've worked on diverse projects ranging from e-commerce platforms to enterprise software solutions. <br /><br /> What sets me apart is my holistic approach to development. I excel at bridging the gap between front-end aesthetics and back-end functionality, ensuring that every application I build is both visually stunning and highly performant. <br /><br /> Beyond coding, I am a learner and tech enthusiast. I love exploring new technologies, and staying up-to-date with industry trends. In my free time, you can find me playing the cricket, mobile games and rubike cubes.</h4>
                    </div>
                    {/* <div className="row">
                        <div className="col-6">
                            <div className="img">
                                <img src={Ayush} alt="Image Not Found!" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="text_content">
                                <h4>Hello! I'm Ayush Namdhar, a dedicated full-stack developer with a passion for crafting robust and scalable web applications.I specialize in creating end-to-end solutions that deliver seamless user experiences and meet complex business requirements. My technical skills span HTML, CSS, JavaScript, React, Node.js, Express, MongoDB,Python and  Django. <br /> <br />Throughout my career, I've worked on diverse projects ranging from e-commerce platforms to enterprise software solutions. <br /><br /> What sets me apart is my holistic approach to development. I excel at bridging the gap between front-end aesthetics and back-end functionality, ensuring that every application I build is both visually stunning and highly performant. <br /><br /> Beyond coding, I am a learner and tech enthusiast. I love exploring new technologies, and staying up-to-date with industry trends. In my free time, you can find me playing the cricket, mobile games and rubike cubes.</h4>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default About