import React from 'react'
import { SvgAvatar, SvgHome } from '../svg/icons'
import './hero.css'
import { Svgimage3 } from '../svg/shapes'

const Hero = () => {
    return (
        <>
            <div className="hero ">
                {/* ///////////////////////////////// hero  Start */}
                <article>
                    <h1 className='hero-title'>
                        theming support out of the box<span> Bogy UI</span>
                    </h1>

                    <p className='hero-desc'>
                        Bogy UI is a set of React components that help you build beautiful
                        and modern web interfaces. Easy UI was built with the design
                        system in mind so it comes packed full of useful features like
                        theming support out of the box!
                    </p>

                    <div className="hero-examples">


                        {/* ------------------------------------hero-components */}
                        <div className="hero-components">
                            <div>
                                <input type="checkbox" id="check1" onChange={() => { }}  defaultChecked/>
                                <label htmlFor="check1">Bogy UI</label>
                            </div>
                            <div>
                                <input type="checkbox" id="check2" onChange={() => { }} defaultChecked/>
                                <label htmlFor="check2">Bogy UI</label>
                            </div>
                            <div>
                                <input type="checkbox" id="check3" onChange={() => { }} defaultChecked/>
                                <label htmlFor="check3">Bogy UI</label>
                            </div>
                        </div>





                        {/* ///////////////////////////////// hero  End */}
                    </div>


                    <div className="mouse">
                        <div className="scroll-down"><span></span></div>
                    </div>
                </article>


                <article >

                    {/* ------------------------------------ Nav-Dummy */}
                    <div className="hero-nav-dummy">
                        <div className="button-dummy">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='burger-dummy'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* ------------------------------------ Layout-Dummy */}
                    <div className="hero-layout">

                        <div className=" hero-Box d-1"> Bogy UI</div>
                        <div className=" hero-Box d-2"></div>
                        <div className=" hero-Box d-3"></div>
                        <div className=" hero-Box d-4">15</div>
                        <div className=" hero-Box d-5">10</div>
                        <div className=" hero-Box d-6"></div>
                        <div className=" hero-Box d-7"></div>
                        <div className=" hero-Box d-8"></div>
                        <div className=" hero-Box d-9"></div>
                        <div className=" hero-Box d-10"><SvgAvatar /></div>
                        <div className=" hero-Box d-11"><SvgHome /></div>
                        <div className=" hero-Box d-12"></div>
                        <div className=" hero-Box d-13"></div>
                    </div>
                    {/* ------------------------------------ Image SVG */}
                    <div className="drow-image">
                        <Svgimage3 color="var(--text)" secandary="var(--secondary)" background="var(--background)" hover="var(--hover)" text="var(--text)" muted="var(--muted)" primary="var(--primary)" accent="var(--accent)" />
                    </div>
                </article>
            </div>
        </>
    )
}

export default Hero