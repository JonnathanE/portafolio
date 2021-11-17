import { Mail, Person } from '@material-ui/icons'
import React from 'react'
import './topbar.scss'

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href='#intro' className='logo'>JEDE</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+507 924 12 74</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>ldsjfs@jede.com</span>
                    </div>
                </div>
                <h1>Hello</h1>
                <div className="right">right</div>
            </div>
        </div>
    )
}

export default Topbar
