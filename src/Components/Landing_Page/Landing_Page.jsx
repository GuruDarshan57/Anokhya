import React, { useState, useEffect } from 'react';
import './Landing_Page.css';

import logo from '../../Assets/LPMV/Logo.png'
import banner from '../../Assets/LPMV/Banner.png'

function Home() {
    // const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     const dropdown_menu = document.querySelector('.dropdown_menu');
    //     const toggle_btnIcon = document.querySelector('.toggle_btn i');

    //     const click = () => {
    //         dropdown_menu.classList.toggle('open');
    //         const isOpen = dropdown_menu.classList.contains('open');
    //         toggle_btnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    //     };

    //     const toggle_btn = document.querySelector('.toggle_btn');
    //     toggle_btn.addEventListener('click', click);

    //     return () => {
    //         toggle_btn.removeEventListener('click', click);
    //     };
    // }, []);

    function handleButtonClick() {
        window.location.href = 'https://google.com/';
    }

    return (
        <div className='body' id='Home'>
            {/* <header className='header'>
                <div className="navbar">
                    <div className="logo">
                        <a className="a" href="#">Anokhya</a>
                    </div>
                    <ul className="links">
                        <li className='li'><a className='a' href="#Home">Home</a></li>
                        <li className='li'><a className='a' href="#About">About</a></li>
                        <li className='li'><a className='a' href="#Events">Events</a></li>
                        <li className='li'><a className='a' href="#Timeline">Timeline</a></li>
                        <li className='li'><a className='a' href="#Contact">Contact</a></li>
                    </ul>



                    <button className='dbroubutton' id='btnwin' onClick={handleButtonClick}>
                        B R O C H U R E
                        <div id="clip">
                            <div id="leftTop" class="corner"></div>
                            <div id="rightBottom" class="corner"></div>
                            <div id="rightTop" class="corner"></div>
                            <div id="leftBottom" class="corner"></div>
                        </div>
                        <span id="rightArrow" class="arrow"></span>
                        <span id="leftArrow" class="arrow"></span>
                    </button>

                    <div className="toggle_btn">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                <div className='dropdown_menu'>
                    <ul>
                        <li className='li'><a className='a' href="#Home">Home</a></li>
                        <li className='li'><a className='a' href="#About">About</a></li>
                        <li className='li'><a className='a' href="#Events">Events</a></li>
                        <li className='li'><a className='a' href="#Timeline">Timeline</a></li>
                        <li className='li'><a className='a' href="#Contact">Contact</a></li>
                        <li className='li'><button className='dbroubutton'>
                            B R O C H U R E
                            <div id="clip">
                                <div id="leftTop" class="corner"></div>
                                <div id="rightBottom" class="corner"></div>
                                <div id="rightTop" class="corner"></div>
                                <div id="leftBottom" class="corner"></div>
                            </div>
                            <span id="rightArrow" class="arrow"></span>
                            <span id="leftArrow" class="arrow"></span>
                        </button>
                        </li>
                    </ul>
                </div>
            </header > */}
            <div div className="home_m" >
                <div className="home_m_top_left">
                    <h3>TECH FEST 2024</h3>
                    <p>EVENTS WORKSHOPS TECH-TALKS</p>
                    <p style={{ color: 'yellow' }}>16th - 17th MAY 2024</p>
                </div>
                <div className="home_m_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="home_m_banner">
                    <img src={banner} alt="" />
                </div>
                <div className="home_m_buttons">
                    <a href='/Anokhya Brochure.pdf' >BROCHURE</a>
                    <a href="#Events">EVENTS</a>
                    <a href="#Timeline">TIMELINE</a>
                </div>
                <div className="home_m_info">
                    <p>Brought to you by</p>
                    <h4>DAYANANDA SAGAR COLLEGE OF ENGINEERING</h4>
                    <h5>Department of Artificial Intelligence & Machine Learning</h5>
                </div>
                <div className="home_m_links">
                    <div><a href="https://www.instagram.com/_anokhya?igsh=MTR5Y3lhejA1NHZpMw=="><i class="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i></a></div>
                    <div><a href="https://discord.gg/xgyTy8FP"><i class="fa-brands fa-discord" style={{ color: "#ffffff" }}></i></a></div>
                    <div><a href="mailto:techfest@anokhya.com"><i class="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i></a></div>
                </div>
            </div >
        </div >
    );
}

export default Home;
