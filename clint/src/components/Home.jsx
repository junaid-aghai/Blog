import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = ( {items}) => {
    return (
        <section className="home">
            <div className="home-content">
                <h1>Welcome to the Blog</h1>
                <p>Explore insights on technology, design, and professional development.<br></br> Discover best practices and emerging trends.</p>
            </div>
            <div className="home-search">
                <input
                    type="text"
                    placeholder="Search..." />
            </div>
            <div className="home-articles">
                {items.map((item) => (
                    <div className="home-article" key={item._id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <hr></hr>
                        <div className="home-article-footer">
                            <p>
                                {item.date
                                    ? new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                                    : 'No date available'
                                }
                            </p>
                            <Link to={`/post/${item._id}`}> Read More <i className="ri-arrow-right-long-line"></i></Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home