import React from 'react'
import Card from '../Card/Card'
import './hikeCatalogue.css'
import ScrollAnimation from 'react-animate-on-scroll';
function HikeCatalogue() {
    return (
        <div className='catalogue'>
            <ScrollAnimation animateIn='anim' animateOnce={true} offset={100}>
                <div className="catalogue-content">
                    <h1>DISCOVER HIKING ROUTES</h1>
                    <div className="cards">
                        <Card country={'Germany'} />
                        <Card country={'Austria'} />
                        <Card country={'Italy'} />
                        <Card country={'Turkey'} />
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default HikeCatalogue
