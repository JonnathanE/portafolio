import React from 'react'
import PropTypes from 'prop-types'
import './portfolioList.scss'

const PortfolioList = ({ id, title, active, setSelected }) => {
    return (
        <li className={active ? 'portfolioList active' : 'portfolioList'} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

// document props
PortfolioList.displayName = 'PortfolioList'

PortfolioList.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    setSelected: PropTypes.func.isRequired
}

export default PortfolioList
