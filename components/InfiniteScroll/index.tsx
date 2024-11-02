import React, { CSSProperties } from 'react'
import Image from 'next/image';
import './infiniteScroll.css'


type CustomCSSProperties = CSSProperties & {
    '--scroll-speed': string
};


const InfiniteScroll = () => {

    return (
        <>
            <div className="scroll-container" style={{ '--scroll-speed': '60s' } as CustomCSSProperties}>
                <div className="scroll">
                    <span>Custom color</span>
                    <span>css only</span>
                    <span>Design style</span>
                    <span>Randomization</span>
                    <span> UI colors</span>
                    <span>Dark mode</span>
                    <span>Light mode</span>
                </div>
                <div className="scroll">
                <span>Custom color</span>
                    <span>css only</span>
                    <span>Design style</span>
                    <span>Randomization</span>
                    <span> UI colors</span>
                    <span>Dark mode</span>
                    <span>Light mode</span>
                </div>
            </div>
        </>
    )
}

export default InfiniteScroll