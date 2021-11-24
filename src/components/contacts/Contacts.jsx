import { Email, GitHub, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'
import Footer from '../footer/Footer'
import './contacts.scss'

const Contacts = () => {
    return (
        <div className='contacts' id='contacts'>
            <h1>Contact</h1>
            <div className="contactContainer">
                <div className="contactItem">
                    <Email className='emailContact ' />
                </div>

                <a href="https://github.com/JonnathanE" target="blank" rel="noopener noreferrer"><GitHub className='iconContact' />Follow Me</a>

                <a href="https://twitter.com/JonnathanE1" target="blank" rel="noopener noreferrer"><Twitter className='iconContact' /> Follow Me</a>

                <a href="https://twitter.com/JonnathanE1" target="blank" rel="noopener noreferrer"><LinkedIn className='iconContact' />Contact Me</a>

            </div>
            <Footer />
        </div>
    )
}

export default Contacts
