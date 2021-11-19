import React from 'react'
import './testimonials.scss'
import { testimonials } from '../../data';

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {testimonials.map(d => (
                    <div className={d.featured ? 'card featured' : 'card'} key={d.id}>
                        <div className="top">
                            <img src="assets/right-arrow.png" className='left' alt="" />
                            <img src={d.img} className='user' alt="" />
                            <img src={d.icon} className='right' alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
