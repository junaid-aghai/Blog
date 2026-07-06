import React from 'react'
import '../App.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='nav'>
                    
                    <div className='nav-logo'>
                        <div className='nav-icon'>
                            <a href="/"><i className="ri-code-s-slash-line"></i> </a>
                        </div>
                        <div>
                            <a href="/">
                                <h1>My Blog</h1>
                                <p>Professional Insights</p> 
                            </a>
                        </div>                                
                    </div>
                    <div className='nav-links'>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/admin">Admin</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar