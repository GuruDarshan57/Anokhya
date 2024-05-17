import React, { useState, useEffect } from 'react';
import './Landing_Page.css';
import Alert_mssg from '../../Components/Alert_mssg/Alert_mssg'


import logo from '../../Assets/LPMV/Logo.png'
import banner from '../../Assets/LPMV/Banner.png'

function Home() {

    function handleButtonClick() {
        window.location.href = 'https://google.com/';
    }

    return (
        <div className='body' id='Home'>

            <div>
                {/* <Alert_mssg message="The tickets for Deploy it and Hack My Pc are currently unavailable at this moment." duration={8000} /> */}
                {/* <Alert_mssg message="There are no tech talk/workshop happening today, they will be happening on 17th May ." duration={8000} /> */}
            </div>

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
                    <a href='/Anokhya.pdf' >BROCHURE</a>
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
                    <div><a href="https://discord.com/invite/Mg6Re2Kt"><i class="fa-brands fa-discord" style={{ color: "#ffffff" }}></i></a></div>
                    <div><a href="mailto:techfest@anokhya.com"><i class="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i></a></div>
                </div>
            </div >
        </div >
    );
}

export default Home;
