import { React, useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'
import { KeyboardArrowDown } from '@material-ui/icons';

const Intro = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay:  1500,
            backSpeed:  60,
            strings: ['Developer', 'Designer', 'Content Creator'] 
        })
    }, []);

    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/perfil_intro_circle.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jonnathan Damián Espinoza Erráez</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <KeyboardArrowDown className='arrowDown'/>
                </a>
            </div>
        </div>
    )
}

export default Intro
