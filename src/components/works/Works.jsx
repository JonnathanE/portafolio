import { React, useState } from 'react'
import './works.scss'
import { works } from '../../data';

const Works = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClick = (way) => {
        way === 'left'
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : works.length - 1)
            : setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className='works' id='works'>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {works.map(d => (
                    <div className="container" key={d.id}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Proyect</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick('left')} />
            <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick('right')} />
        </div>
    )
}

export default Works
