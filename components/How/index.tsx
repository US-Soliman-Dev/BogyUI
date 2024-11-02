import React from 'react'
import './how.css'

const How = () => {
    return (
        <>
            <article>
                <div className="how ">

                    <div className="how-header">
                        <h1 className="title">🤔 How can I use these colors<span className="que-mark">?</span></h1>
                        <p className="desc">To get started easily, you can follow a simple four-step process to achieve rapid results.</p>
                    </div>

                    <div className="how-content">
                        <div className="how-content-color">
                            <div className='color-title'>
                                <span className='number'>01</span>
                                <h3>text & background</h3>
                            </div>
                            <p>The text color needs to be contrasting enough to ensure readability against the background.</p>
                        </div>

                        <div className="how-content-color">
                            <div className='color-title'>
                                <span className='number'>02</span>
                                <h3>primary & secondary</h3>
                            </div>
                            <p>Choose a primary color and select a more subdued hue for the secondary color to use in elements like icons, buttons, and information cards.</p>
                        </div>

                        <div className="how-content-color">
                            <div className='color-title'>
                                <span className='number'>03</span>
                                <h3>accent</h3>
                            </div>
                            <p> Select an accent color for highlights, check marks, boxes, links, and other elements.</p>
                        </div>

                        <div className="how-content-color">
                            <div className='color-title'>
                                <span className='number'>04</span>
                                <h3>muted & hover</h3>
                            </div>
                            <p>Muted and hover colors serve as additional hues in design. They appear in images and backgrounds, often with transparency to create depth and visual interest.</p>
                        </div>
                    </div>
                </div>
            </article>

        </>
    )
}

export default How 