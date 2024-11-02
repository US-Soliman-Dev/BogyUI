import React from 'react'
import './pricing.css'
import { SvgCheck } from '../svg/icons'

const Pricing = () => {
    return (
        <>
            <article className='pricing'>
                <div className="pricing-header">
                    <h1 className="title">Plans & Pricing</h1>
                    <p className="desc">Choose the plan that suits you best</p>
                </div>

                <div className="pricing-content">
                    <div className="price basic">
                        <h3>Basic</h3>
                        <p className='p1'>For small projects</p>
                        <h1>free</h1>
                        <p className='p2'>Forever</p>
                        <ul>
                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>5 projects</span>
                            </li>
                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>10 hours of development</span>
                            </li>
                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>Unlimited support</span>
                            </li>
                        </ul>

                        <button type='button'>Get Started</button>
                    </div>


                    <div className="price pro">
                        <h3>Pro</h3>
                        <p className='p1'>For medium-sized projects</p>
                        <h1>$0</h1>
                        <p className='p2'>Per month</p>
                        <ul>
                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>10 projects</span>
                            </li>

                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>20 hours of development</span>
                            </li>
                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>Unlimited support</span>
                            </li>
                        </ul>

                        <button type='button'>Get Started</button>
                    </div>

                    <div className="price Enterprise">
                        <h3>Enterprise</h3>
                        <p className='p1'>For large projects</p>
                        <h1>$0</h1>
                        <p className='p2'>Per month</p>
                        <ul>

                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>Unlimited projects</span>
                            </li>

                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>Unlimited hours of development</span>
                            </li>
                            <li>
                                <SvgCheck color='var(--text)' />
                                <span>Unlimited support</span>
                            </li>
                        </ul>
                        <button type='button'>Get Started</button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Pricing