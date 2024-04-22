import React from 'react'
import './Events.css'
import bimg from '../../Assets/bottom.png'


const Events = () => {
    return (
        <div className="events">
            <div className="events_con">
                <div className="events_head">
                    EVENTS
                </div>
                <div className="events_container">
                    <div className="event">
                    </div>

                </div>

            </div>
            <div className="events_img">
                <img src={bimg} alt="" />
            </div>
        </div>
    )
}

export default Events