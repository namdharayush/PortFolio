import React, { useState } from 'react'
import '../style/project.css'
import { IoIosInformationCircle, IoMdCloseCircle } from "react-icons/io";
import ProjectItem from './ProjectItem';

const PROJECT_DATA = [
    {
        id: 1,
        img : '/ecomm.png',
        title: 'E-Commerce Website',
        description: ['In this Project I have done <b>Registration & Login , Various Product Listing , Product Comparison , Product Filtering </b> based on their Price.', '<b>Popularity , Each Product Feedback </b> and also Created a <b>Admin DashBoard</b>'],
        techStack: ['React.js', 'Express.js', 'Node.js', 'MongoDb'],
        github: 'https://github.com/namdharayush/E-Commerce',
        liveSite: '',
        freelancing : false,
    },
    {
        id: 2,
        img : '/indroda.png',
        title: 'Indroda Nature Park (Gov.)',
        description: ['I got this Project for Only Updatation . So I was Created a <b>Landing Page</b>.', 'I was also Convert a <b>Payu ( Payment Integration )</b> to <b>PayPhi ( Payment Integration )</b>.','I was make a <b>QR Code</b> to Scan <b>QR to add Automaticly Booking Entry</b> in their Visiting Date also '],
        techStack: ['Python', 'Django', 'SQL', 'Reddis'],
        github: '',
        liveSite: '',
        freelancing : true
    },
    {
        id: 3,
        img : '/surajmetal.png',
        title: 'Suraj Metal',
        description: ['This is a Freelancing project based on <b>Metal Industries & Corporation.</b>'],
        techStack: ['React.js','Email.js'],
        github: '',
        liveSite: 'https://surajmetal.netlify.app/',
        freelancing : true
    },
    {
        id: 4,
        img : '/dummyjson.png',
        title: 'DummyJson API',
        description: ['<b>DummyJSON</b> can be used with any type of <b>front end project</b> that needs products, carts, users, todos or any dummy data in JSON format.','Focus on your frontend magic while our open-source backend handles the data serving.'],
        techStack: ['React.js','Node.js','Express.js'],
        github: 'https://github.com/namdharayush/dummy_api',
        liveSite: 'https://dummy-api-json.netlify.app/',
        freelancing : false
    },
]

function Projects() {

    

    return (
        <div className='projects' id='projects'>
            <div className="container-xl">
                <h2 className='h2'>My Works</h2>
                <div className='project_box'>
                    <div className="row gy-4" >
                        {
                            PROJECT_DATA && PROJECT_DATA.map((val) => {
                                return (
                                    <div className="col-sm-6 col-lg-4" key={val.id}>
                                        <ProjectItem val={val} data = {PROJECT_DATA} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects