import React from 'react'
import './footer.css'
import { SvgFacebookIcon, SvgFeatures, SvgHome, SvgInfo, SvgMailIcon, SvgPencilDollar, SvgQuote, SvgSettingsQuestion, SvgYoutubeIcon } from '../svg/icons'

const Footer = () => {
    return (
        <footer className="">
            <div className="footer container">
                {/* <div className="spot"></div> */}

                <div className='footer-content'>

                    <div className='logos'>
                        <h1 className='logo'>Bogy <span> UI </span> <span className='emoji'>👋</span></h1>
                        <h3>Your Journey Shouldn&apos;t End Here.</h3>
                        <p>Follow me on social media to stay tuned on more projects.</p>
                        <div className="contact-box">
                            <a href="mailto:samoz.goolz@gmail.com"><SvgMailIcon /></a>
                            <a href="https://youtube.com/@linesdesign3668?si=yi0RkaxSgOGNWJeH"><SvgYoutubeIcon /></a>
                            <a href="https://youtube.com/@linesdesign3668?si=yi0RkaxSgOGNWJeH"><SvgFacebookIcon /></a>
                        </div>
                    </div>

                    <ul className='content'>
                        <li className='list'>
                            <a href="#home">
                                <SvgHome color='var(--text)' />
                                <span>HOME</span>
                            </a>
                        </li>
                        <li className='list'>
                            <a href="#home">
                                <SvgInfo color='var(--text)' />
                                <span>About</span>
                            </a>
                        </li>
                        <li className='title'></li>
                    </ul>

                    <ul className='content'>
                        <li className='list'>
                            <a href="#home">
                                <SvgFeatures color='var(--text)' />
                                <span>Features</span>
                            </a>
                        </li>

                        <li className='list'>
                            <a href="#home">
                                <SvgSettingsQuestion color='var(--text)' />
                                <span>How Does it Work?</span>
                            </a>
                        </li>

                        <li className='list'>
                            <a href="#home">
                                <SvgPencilDollar color='var(--text)' />
                                <span>Plans & Pricing</span>
                            </a>
                        </li>

                        <li className='list'>
                            <a href="#home">
                                <SvgQuote color='var(--text)' />
                                <span>Testimonials</span>
                            </a>
                        </li>
                    </ul>

                    <div className='content bubbles-box'>
                        <div className='bubbles'>
                            <div className='bubble b1'></div>
                            <div className='bubble b2'></div>
                            <div className='bubble b3'></div>
                        </div>
                    </div>

                </div>

                <div className='author'>
                    <h3>Made with <span>❤</span> by Osama Soliman</h3>
                    <small>BogyUI © 2024 All Right Reserved</small>
                </div>
            </div>
        </footer>
    )
}

export default Footer