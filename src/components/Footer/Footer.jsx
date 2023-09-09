import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer>
            <div className='content'>
                <div>
                    <img src="logo.png" alt="Logo" className='footerLogo' />
                </div>
                <div>
                    <h3>Doormat Navigation</h3>
                    <div>
                        <a href="#Home">Home</a>
                        <a href="#About">About</a>
                        <a href="#Reservations">Reservations</a>
                        <a href="#Order online">Order online</a>
                        <a href="#Login">Login</a>
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div>
                        <p>main area chicago</p>
                        <p>1-125-452-6524</p>
                        <p>little-lemon@email.com</p>
                    </div>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <div>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Youtube</p>
                        <p>tweeter</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer