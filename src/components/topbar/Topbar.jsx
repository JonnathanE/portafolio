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
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+507 924 12 74</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>ldsjfs@jede.com</span>
                    </div>
                </div>
                <h1>Hello</h1>
                <div className="right">
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
