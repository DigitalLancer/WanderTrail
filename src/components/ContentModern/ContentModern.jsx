import React from 'react'
import './contentModern.css'
import img from '../../images/hiking-image.jpg'
function ContentModern() {
    return (
        <div className='container-modern'>
            <div>
                <h1>About Us</h1>
                <div className='content-detail'>
                    <p className='content-text'>
                        Welcome to WanderTrail, your ultimate guide to exploring the world on foot! Whether you're a seasoned hiker or just starting out, WanderTrail is here to inspire your next adventure. 
                        <hr style={{border:'none', margin:'8px'}}/>
                        Our website offers detailed information on the best hiking destinations across the globe, with insider tips to help you prepare for every trail.
                        From scenic mountain paths to hidden coastal routes, we bring you all the essentials to make your hiking experience unforgettable. 
                        <hr style={{border:'none', margin:'8px'}}/>
                        At WanderTrail, we believe every journey is a step toward discovery—so lace up your boots and let's explore together!
                    </p>
                    
                    <img src={img} alt="" />
                </div>

            </div>

        </div>

    )
}

export default ContentModern
