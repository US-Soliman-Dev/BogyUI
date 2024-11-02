import React from 'react'
import './features.css'
import { SvgClock, SvgColorpalette, SvghandClick, SvgHome } from '../svg/icons'
const Features = () => {
    return (
        <>
            <article className='features'>
                <div className='features-header'>
                    <h1 className='title'>Features</h1>
                    <p className='desc'>What you get with Bogy UI?</p>
                </div>
                <div className='features-content'>
                    <div className='content c1'>
                        <div className='features-icon'>
                            <SvgColorpalette color='var(--text)' />
                        </div>
                        <div className='features-text'>
                            <h1>Color Palette</h1>
                            <p>You can Customizable color palette for your project</p>
                        </div>
                    </div>

                    <div className='content c2'>
                        <div className='features-icon'>
                            <SvghandClick color='var(--text)' />
                        </div>
                        <div className='features-text'>
                            <h1>It’s simple</h1>
                            <p>Push a few buttons, and there you have it! Your very own branding colors, ready to export.</p>
                        </div>
                    </div>

                    <div className='content c3'>
                        <div className='features-icon'>
                            <SvgClock color='var(--text)' />
                        </div>
                        <div className='features-text'>
                            <h1>Saves time
                            </h1>
                            <p>No need to spend hours implementing different variations of colors. Decide right away!</p>
                        </div>
                    </div>
                </div>


            </article>
        </>
    )
}

export default Features