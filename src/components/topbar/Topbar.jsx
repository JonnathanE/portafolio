import { Mail, Person } from '@material-ui/icons'
import React from 'react'
import PropTypes from 'prop-types'
import './topbar.scss'

const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={'topbar ' + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>JEDE</a>

                </div>
                <div className="right">
                    <div className="itemContainer">
                        <a href='#intro'>Home</a>
                    </div>
                    <div className="itemContainer">
                        <a href='#portfolio'>Portfolio</a>
                    </div>
                    <div className="itemContainer">
                        <a href='#works'>Works</a>
                    </div>
                    <div className="itemContainer">
                        <a href='#testimonials'>Testimonials</a>
                    </div>
                    <div className="itemContainer">
                        <a href='#contact'>Contact</a>
                    </div>
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// document props
Topbar.displayName = 'Topbar'

Topbar.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired
}

export default Topbar
