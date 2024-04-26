import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const dropdown_menu = document.querySelector('.dropdown_menu');
        const toggle_btnIcon = document.querySelector('.toggle_btn i');

        const click = () => {
            dropdown_menu.classList.toggle('open');
            const isOpen = dropdown_menu.classList.contains('open');
            toggle_btnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        };

        const toggle_btn = document.querySelector('.toggle_btn');
        toggle_btn.addEventListener('click', click);

        return () => {
            toggle_btn.removeEventListener('click', click);
        };
    }, []);

    function handleButtonClick() {
        window.location.href = 'https://google.com/'; 
    }

    return (
        <div className='body' id='Home'>
            <header className='header'>
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


                    {/* <a href="#" className="action_btn">Download Brouchre</a> */}
                
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
                        {/* <li className='li'><a href='#' className='action_btn'>Download Brouchre</a></li> */}
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
            </header>
        </div>
    );
}

export default Home;
