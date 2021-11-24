import React from 'react'
import './skill.scss'
import { skills } from '../../data';

const Skill = () => {
    return (
        <div className='skills' id='skill'>
            <h1>My Skills</h1>
            <div className="skillContainer">
                {skills.map(d => (
                    <div className="skillItem" key={d.id}>
                        {d.image && <img src={d.image} alt="" />}
                        <h3>{d.name}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Skill
