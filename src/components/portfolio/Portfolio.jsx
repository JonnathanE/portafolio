import { React, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

const Portfolio = () => {

    const [selected, setSelected] = useState('featured')

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'mobile',
            title: 'Movile App'
        },
        {
            id: 'design',
            title: 'Design'
        },
        {
            id: 'content',
            title: 'Content'
        }
    ]

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} key={item.id} />
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://uploads-ssl.webflow.com/5d5065aaa4a3707be089b7db/5e127a0d946b126218bbda28_6ee3dc43b57f5b1e03f179187c4f26fa.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src="https://uploads-ssl.webflow.com/5d5065aaa4a3707be089b7db/5e127a0d946b126218bbda28_6ee3dc43b57f5b1e03f179187c4f26fa.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://uploads-ssl.webflow.com/5d5065aaa4a3707be089b7db/5e127a0d946b126218bbda28_6ee3dc43b57f5b1e03f179187c4f26fa.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://uploads-ssl.webflow.com/5d5065aaa4a3707be089b7db/5e127a0d946b126218bbda28_6ee3dc43b57f5b1e03f179187c4f26fa.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://uploads-ssl.webflow.com/5d5065aaa4a3707be089b7db/5e127a0d946b126218bbda28_6ee3dc43b57f5b1e03f179187c4f26fa.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://uploads-ssl.webflow.com/5d5065aaa4a3707be089b7db/5e127a0d946b126218bbda28_6ee3dc43b57f5b1e03f179187c4f26fa.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://uploads-ssl.webflow.com/5d5065aaa4a3707be089b7db/5e127a0d946b126218bbda28_6ee3dc43b57f5b1e03f179187c4f26fa.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
