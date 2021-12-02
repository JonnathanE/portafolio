import { React, useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data';
import { GitHub, Public } from '@material-ui/icons';

const Portfolio = () => {

    const [selected, setSelected] = useState('featured')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web App'
        }
    ]

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} key={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item" key={d.id}>
                        <img src={d.img} alt="" />
                        <div className="itemInfo">
                            <h3>{d.title}</h3>
                            {d.preview && <a href={d.preview} target='_blank' rel="noreferrer"><button><Public className='itemIcon' />  Preview</button></a>}
                            <a href={d.repository} target='_blank' rel="noreferrer"><button><GitHub className='itemIcon' />  Repository</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
