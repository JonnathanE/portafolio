import { DoubleArrow } from '@material-ui/icons'
import React from 'react'
import './about.scss'

const About = () => {
    return (
        <div className='about' id='about'>
            <h1>About Me</h1>
            <p>Why Choose Me?</p>
            <div className="container">
                <div className="card">
                    <div className="left">
                        <img src="assets/man.png" alt="" />
                    </div>
                    <div className="right">
                        <div className="wrapper">
                            <p>Full stack web developer with background knowledge of MERN stacks, along with a knack of building applications with utmost efficiency. Strong professional willing to be an asset for an organization.</p>
                            <div className="listDescription">
                                <h2>Here a Few Highlights:</h2>
                                <ul>
                                    <li><DoubleArrow className='bullet' /> Full satack web development</li>
                                    <li><DoubleArrow className='bullet' /> Interactive Front End as per the design</li>
                                    <li><DoubleArrow className='bullet' /> React an Nodejs</li>
                                    <li><DoubleArrow className='bullet' /> Building REST API</li>
                                    <li><DoubleArrow className='bullet' /> Managing database</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
