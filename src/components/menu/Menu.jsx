import React from 'react'
import PropTypes from 'prop-types'
import './menu.scss'

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#intro'>Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#about'>About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#skill'>Skill</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#portfolio'>Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contacts'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

// document props
Menu.displayName = 'Menu'

Menu.propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    setMenuOpen: PropTypes.func.isRequired
}

export default Menu
