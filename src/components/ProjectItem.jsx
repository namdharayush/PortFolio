import React, { Fragment, useEffect, useState } from 'react'
import { IoIosInformationCircle, IoMdCloseCircle } from "react-icons/io";
import {NavLink} from 'react-router-dom'

function ProjectItem({ val, data }) {

    


    const [info, setInfo] = useState(true);
    const [close, setClose] = useState(false);
    // const [find, setFind] = useState();



    const handleInfo = (id) => {
        setInfo(false);
        setClose(true);
    }
    const handleClose = () => {
        setInfo(true);
        setClose(false);
    }



    return (
        <Fragment>
            <div className="content" style={{backgroundImage:`url(${val.img})`}} >
                <div style={{display:!info && 'none'}}>
                    <IoIosInformationCircle onClick={() => handleInfo(val.id)} className='icons' />
                    {
                        val.freelancing && <button type='button' className='freelancing_btn'>Freelance</button>
                    }
                    <div className='content_text' >
                        <h4>{val.title}</h4>
                        <div className='tech_btn'>
                            {
                                val.techStack.map((ele, ind) => {
                                    return (
                                        <button key={ind} type='button'>{ele}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='close_content' style={{display:!close && 'none'}} >
                    <div>
                        <IoMdCloseCircle onClick={handleClose} className='icons' />
                    </div>
                    <br /><br /> <br />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '80%' }}>
                        <div className='' >
                            {
                                val.description.map((ele, ind) => {
                                    return (
                                        <p key={ind} dangerouslySetInnerHTML={{ __html: ele }} />
                                    )
                                })
                            }
                        </div>
                        <div className='close_content_buttons'>
                            {
                                val.github && 
                                <NavLink style={{width:(val.liveSite=='') ? '100%' : '40%',}} to={val.github} target='_blank'>
                                    <button>Github</button>
                                    </NavLink>
                            }
                            {
                                val.liveSite && <NavLink style={{width:(val.github=='') ? '100%' : '40%',}} to={val.liveSite} target='_blank'><button>Live</button></NavLink>
                            }
                        </div>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default ProjectItem