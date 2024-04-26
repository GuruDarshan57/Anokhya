import './About_us.css'
import bimg from '../../Assets/bottom.png'
import React, { useEffect, useRef, useState } from 'react'



const About_us = () => {
    const Ref = useRef(null);

    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e) => {
        const total =
            Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        const days = Math.floor(total / 1000 / 60 / 60 / 24)
        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    };
    const startTimer = (e) => {
        let { total, days, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (days > 9 ? days : "0" + days) + ":" +
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };
    const clearTimer = (e) => {
        setTimer("00:00:00:00");

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date("2024-05-16T18:47:00");
        return deadline;
    };
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


    return (
        <div className="about_us" id='About'>
            <div className="abs_con">
                <div className="abs_head">ABOUT US</div>
                <div className="abs_body">
                    <div className="abs_timer">
                        <h2 className='time_text'>TECH</h2>
                        <h2 className="time_text">
                            <div className="container">
                                <div class="stack" style={{ "--stacks": "3" }}>
                                    <span style={{ "--index": "0" }}>AWESOMENESS</span>
                                    <span style={{ "--index": " 1" }}>AWESOMENESS</span>
                                    <span style={{ "--index": "2" }}>AWESOMENESS</span>
                                </div>
                            </div> IN</h2>
                        <h2 id="time">{timer}</h2>
                        <div id="label"><p>DAYS</p> <p>HOURS</p>   <p>MINUTES</p><p>SECONDS</p></div>
                    </div>
                    <div className="abs_txt">
                        <div className="abs_txt_con">
                            <h1>ANOKHYA TECH-FEST</h1>
                            <div className="abs_abs">
                                <p>Anokhya is a 2-Day Tech Fest organized by the department of Artificial Intelligence and Machine Learning under the aegis of DSCE Innovation Council and SCRS Students Chapter. </p>
                                <p>Scheduled for the 16th and 17th of May, 2024, this event showcases nine unique competitions, each designed for individual or team participation. </p>
                                <p>In addition to the competitions, Anokhya offers a series of workshops and technical talks delivered by industry experts. Anokhya aims to foster innovation and skill development among students, making it a cornerstone event for budding technologists and engineers.</p>
                            </div>
                            <div className="abs_tinfo">
                                <div className="abs_t">
                                    <span className='abs_d'>02</span><span className='abs_dt'>DAYS</span>
                                </div>
                                <div className="abs_t">
                                    <span className='abs_d'>11</span><span className='abs_dt'>EVENTS</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="abs_img">
                    <img src={bimg} alt="" />
                </div>

            </div >
        </div >
    )
}

export default About_us