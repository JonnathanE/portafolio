import React from 'react'
import './portfolio.scss'

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className='active'>Featured</li>
                <li>Web App</li>
                <li>Movile App</li>
                <li>Design</li>
                <li>Branding</li>
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
