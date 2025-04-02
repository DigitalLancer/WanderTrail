import React from 'react'
import './contact.css'
import HikerImg from '../../images/hiker_close_up.png'
import mountainImg from '../../images/mountains_sillouthe.jpg'
function Contact() {
    return (
        <div className='contact'>
            <div className="image-container">
                <img src={HikerImg} alt="" />
            </div>
            <div className="form-container">
                <h1>Contact Us</h1>
                <div className="input-field">
                    <input type="text" placeholder='Your name' />
                    <input type="text" placeholder='Email' />
                    <textarea name="Message" rows="10" placeholder="Your message"></textarea>
                    <div className="btn-right">
                        <button type='submit'>Submit</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Contact
