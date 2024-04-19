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
        let deadline = new Date("2024-05-15T18:47:00");
        return deadline;
    };
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


    return (
        <div className="about_us">
            <div className="abs_con">
                <div className="abs_head">ABOUT US</div>
                <div className="abs_body">
                    <div className="abs_timer">
                        <h2 className='time_text'>TECH</h2>
                        <h2 className="time_text"><span>AWESOMENESS</span> IN</h2>
                        <h2 id="time">{timer}</h2>
                        <div><p>DAYS</p> <p>HOURS</p>   <p>MINUTES</p><p>SECONDS</p></div>
                    </div>
                    <div className="abs_txt">
                        <div className="abs_txt_con">
                            <h1>ANOKHYA TECH-FEST</h1>
                            <p>uia  a itaque, illum ab corrupti architecto hic pariatur explicabo harum ipsum dolorum, nisi dolorem doloremque optio? Suscipit accusamus maiores nemo dolor aliquam ab quod sunt dignissimos! Veniam dolorum optio repellat labore quidem eveniet ea commodi nostrum. Repellat veritatis at consectetur amet ea ex sapiente dolores aliquam. Error, dolor minus debitis nisi ex, nobis recusandae itaque rerum ratione doloribus dolorum? Officiis minus quos quod eius asperiores alias tempora itaque, a perferendis quae, obcaecati voluptatem distinctio sequi sapiente omnis numquam soluta vero deleniti nostrum voluptate aliquid. Inventore modi accusamus dolorem!</p>
                            <div className="abs_tinfo">
                                <div className="abs_t">
                                    <span className='abs_d'>02</span><span className='abs_dt'>DAYS</span>
                                </div>
                                <div className="abs_t">
                                    <span className='abs_d'>11</span><span className='abs_dt'>EVENTS</span>
                                </div>
                            </div>
                            <div className="abs_img">
                                <img src={bimg} alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About_us