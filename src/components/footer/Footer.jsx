import { red } from '@material-ui/core/colors'
import { Favorite } from '@material-ui/icons'
import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <span>Made with <Favorite style={{ color: 'red' }} /> in React and a good <img src='assets/icons8-hot-coffee-64.png' alt='' /> </span>
            <div className="iconAtribute">
                <a target="blank" href="https://iconos8.es/icon/J1TVzd6ZX0TZ/hot-coffee">Hot Coffee</a> icono de <a target="blank" href="https://iconos8.es">Icons8</a>
            </div>
        </div>
    )
}

export default Footer
