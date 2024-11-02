import React, { useEffect, useState } from 'react'
import './testimonials.css'
import UserCard from './UserCard';
import Image from 'next/image';
import person1 from '@/public/person1.png'
import person2 from '@/public/person2.png'
import person3 from '@/public/person3.png'
import person4 from '@/public/person4.png'
import person5 from '@/public/person5.png'






const Testimonials = () => {

    const [position, setPosition] = useState('')
    const [value, setValue] = useState('com-3')
    const handleInput = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const lab = document?.querySelector('.testimonials-numbers .reviews-numbers label.active ') as any
        const indi = document?.querySelector('.testimonials-numbers .reviews-numbers .indicator') as any

        if (lab) {
            // console.log(lab.offsetTop);
            // console.log(lab.offsetHeight);
            setPosition(`calc(${lab.offsetLeft}px + ${lab.offsetWidth / 2}px)`)
            indi.style.left = position;
        }

    }, [value, position])


    return (
        <>
            {/* <div className="testimonials-wrapper"> */}
            <div className="testimonials">
                <div className="testimonials-header">
                    <h1 className="title">Testimonials</h1>
                    <p className="desc">What do our clients say? (Hypothetical Feedback)</p>
                </div>

                <div className="testimonials-wrapper">


                    <div className='testimonials-numbers'>
                        <h3>client reviews</h3>

                        <div className='reviews-numbers'>

                            <label htmlFor="review-1" className={`${value === 'com-1' ? 'active' : ''}`}>
                                <span className='num'>01</span>
                                <input type="radio" id='review-1' checked={value === 'com-1'} value={'com-1'} onChange={(e) => handleInput(e)} name='testimonials' />
                            </label>

                            <label htmlFor="review-2" className={`${value === 'com-2' ? 'active' : ''}`}>
                                <span className='num'>02</span>
                                <input type="radio" id='review-2' checked={value === 'com-2'} value={'com-2'} onChange={(e) => handleInput(e)} name='testimonials' />
                            </label>

                            <label htmlFor="review-3" className={`${value === 'com-3' ? 'active' : ''}`}>
                                <span className='num'>03</span>
                                <input type="radio" id='review-3' checked={value === 'com-3'} value={'com-3'} onChange={(e) => handleInput(e)} name='testimonials' />
                            </label>

                            <label htmlFor="review-4" className={`${value === 'com-4' ? 'active' : ''}`}>
                                <span className='num'>04</span>
                                <input type="radio" id='review-4' checked={value === 'com-4'} value={'com-4'} onChange={(e) => handleInput(e)} name='testimonials' />
                            </label>

                            <label htmlFor="review-5" className={`${value === 'com-5' ? 'active' : ''}`}>
                                <span className='num'>05</span>
                                <input type="radio" id='review-5' checked={value === 'com-5'} value={'com-5'} onChange={(e) => handleInput(e)} name='testimonials' />
                            </label>

                            <div className='indicator'></div>
                        </div>
                    </div>


                    <div className="testimonials-content">
                        <label htmlFor="review-1" className={`${value === 'com-1' ? 'active' : ''}`}>
                            <UserCard
                                name='Nada Ramadan'
                                about='Egypt Company limited'
                                image={<Image width={200} height={200} alt='img' src={person1} />}
                            />
                            <p className='comment one'>
                                <span className='icon one'> <SvgQuote2 /></span>
                                <span className='icon two'> <SvgQuote2 /></span>
                                I`ve been using Bogy UI for a few months now, and Im really impressed with the results. The colors are vibrant and eye-catching, and the design is clean and modern. Ive received a lot of positive feedback on my website, and Im confident that Bogy UI has helped me stand out from the competition.
                            </p>
                        </label>

                        <label htmlFor="review-2" className={`${value === 'com-2' ? 'active' : ''}`}>
                            <UserCard
                                title='developer'
                                name='Ragab Mahfoz'
                                about='Nasr Company limited'
                                image={<Image width={200} height={200} alt='img' src={person2} />}
                            />
                            <p className='comment one'>
                                <span className='icon one'> <SvgQuote2 /></span>
                                <span className='icon two'> <SvgQuote2 /></span>
                                Bogy UI has been a game-changer for my business. The colors are vibrant and eye-catching, and the design is clean and modern. Ive received a lot of positive feedback on my website, and Im confident that Bogy UI has helped me stand out from the competition.
                            </p>
                        </label>

                        <label htmlFor="review-3" className={`${value === 'com-3' ? 'active' : ''}`}>
                            <UserCard
                                name='Monika Albert'
                                about='freelancer'
                                image={<Image width={200} height={200} alt='img' src={person3} />}
                            />
                            <p className='comment one'>
                                <span className='icon one'> <SvgQuote2 /></span>
                                <span className='icon two'> <SvgQuote2 /></span>
                                I`ve been using Bogy UI for a few months now, and Im really impressed with the results. The colors are vibrant and eye-catching, and the design is clean and modern. Ive received a lot of positive feedback on my website, and Im confident that Bogy UI has helped me stand out from the competition.
                            </p>
                        </label>

                        <label htmlFor="review-4" className={`${value === 'com-4' ? 'active' : ''}`}>
                            <UserCard
                                name='Samira Fawzy'
                                about='Electronic Company'
                                image={<Image width={200} height={200} alt='img' src={person4} />}
                            />
                            <p className='comment one'>
                                <span className='icon one'> <SvgQuote2 /></span>
                                <span className='icon two'> <SvgQuote2 /></span>
                                I`ve been using Bogy UI for a few months now, and Im really impressed with the results. The colors are vibrant and eye-catching, and the design is clean and modern. Ive received a lot of positive feedback on my website, and Im confident that Bogy UI has helped me stand out from the competition.
                            </p>
                        </label>

                        <label htmlFor="review-5" className={`${value === 'com-5' ? 'active' : ''}`}>
                            <UserCard
                                name='Magdy Gamal'
                                about='Software Company'
                                image={<Image width={200} height={200} alt='img' src={person5} />}
                            />
                            <p className='comment one'>
                                <span className='icon one'> <SvgQuote2 /></span>
                                <span className='icon two'> <SvgQuote2 /></span>
                                I`ve been using Bogy UI for a few months now, and Im really impressed with the results. The colors are vibrant and eye-catching, and the design is clean and modern. Ive received a lot of positive feedback on my website, and Im confident that Bogy UI has helped me stand out from the competition.
                            </p>
                        </label>
                    </div>

                </div>



                {/* <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="author-img" /> */}
            </div>
        </>
    )
}

export default Testimonials












// /////////////////////////////////////////////////////////////////////////// Icons
// /////////////////////////////////////////////////////////////////////////// Icons
// /////////////////////////////////////////////////////////////////////////// Icons
// /////////////////////////////////////////////////////////////////////////// Icons
// /////////////////////////////////////////////////////////////////////////// Icons
// /////////////////////////////////////////////////////////////////////////// Icons

export interface IconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
}

export const SvgQuote2: React.FunctionComponent<IconProps> = (
    ({ color = 'currentColor', ...props }) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="transparent" strokeLinecap="round" strokeLinejoin="round" {...props}>
                <path stroke="none" d="M0 0h24v24H0z" fill="transparent" />
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" fill="transparent" />
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" fill="transparent" />
            </svg>
        );
    }
);