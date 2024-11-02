import React from 'react'
import './navbar.css'
import { SvgWavy6, SvgWavy2, SvgWavy4 } from "@/components/svg/shapes";

const Navbar = () => {
    return (
        <>
            <nav className="navbar container">
                {/* <div className="nav-wave">
                    <SvgWavy6  color='var(--primary)' />
                </div> */}
                <div className="bar">
                    <div className="logo">
                        <h2>bogy<span> UI</span></h2>
                        
                    </div>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar