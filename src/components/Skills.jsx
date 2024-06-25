import React, { useState } from 'react'
import '../style/skills.css'
import html5 from '/html.png'
import css from '/css.png'
import javascript from '/javascript.png'
import bootstrap from '/bootstrap.png'
import react from '/react.svg'
import jquery from '/jquery.png'
import sass from '/sass.png'
import python from '/python.png'
import django from '/django.png'
import node from '/node.jpg'
import sql from '/sql.png'
import mongo from '/mongo.jpeg'
import redux from '/redux.jpeg'
import postgresql from '/postgresql.png'

function Skills() {

  const [front, setFront] = useState(true);
  const [back, setBack] = useState(false);
  const [database, setDatabase] = useState(false);

  const handleClickFront = () => {
    setFront(true);
    setBack(false);
    setDatabase(false);
  }
  const handleClickBack = () => {
    setFront(false);
    setBack(true);
    setDatabase(false);
  }
  const handleClickData = () => {
    setFront(false);
    setBack(false);
    setDatabase(true);
  }

  return (
    <div className='skills' id='skills'>
      <div className="container-lg">
        <h2 data-aos='fade-down' data-aos-duration='2000'>Skills</h2>
        <div className="skills_box mt-5">
          <div className='skills_navbar'>
            <h4 onClick={handleClickFront} className={`${front ? 'active' : ''}`}>Front-End</h4>
            <h4 onClick={handleClickBack} className={`${back ? 'active' : ''}`}>Back-End</h4>
            <h4 onClick={handleClickData} className={`${database ? 'active' : ''}`}>Database</h4>
          </div>
          <div className='skills_data_front mt-5' style={{ display: front ? '' : 'none' }}>
            <img data-aos='fade-right' data-aos-duration='2000' src={html5} alt="Image Not Found!" />
            <img data-aos='fade-left' data-aos-duration='2000' src={css} alt="Image Not Found!" />
            <img data-aos='fade-down' data-aos-duration='2000' src={javascript} alt="Image Not Found!" />
            <img src={bootstrap} alt="Image Not Found!" />
            {/* <br /> */}
            <img data-aos='fade-up' data-aos-duration='2000' src={react} alt="Image Not Found!" />
            <img data-aos='fade-right' data-aos-duration='2000' src={redux} alt="Image Not Found!" />
            <img data-aos='fade-down' data-aos-duration='2000' src={jquery} alt="Image Not Found!" />
            <img data-aos='fade-up' data-aos-duration='2000' src={sass}  alt="Image Not Found!" />
          </div>
          <div className='skills_data_back mt-5' style={{ display: back ? '' : 'none' }}>
            <img data-aos='fade-right' data-aos-duration='2000' src={python} alt="Image Not Found!" />
            <img data-aos='fade-down' data-aos-duration='2000' src={django} alt="Image Not Found!" />
            <img data-aos='fade-up' data-aos-duration='2000' src={node} alt="Image Not Found!" />
          </div>
          <div className='skills_data_base mt-5' style={{ display: database ? '' : 'none' }}>
            <img data-aos='fade-right' data-aos-duration='2000' src={sql} alt="Image Not Found!" />
            <img data-aos='fade-down' data-aos-duration='2000' src={mongo} alt="Image Not Found!" />
            <img data-aos='fade-up' data-aos-duration='2000' style={{backgroundColor:'white',padding:'0 10px'}} src={postgresql} alt="Image Not Found!" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills