import React from 'react'
import './Events.css'

import bimg from '../../Assets/bottom.png'
import event_data from '../../Assets/Data/Events_data.json'
import { Navigate } from 'react-router-dom'

const Events = () => {
    return (
        <div className="events" id='Events'>
            <div className="events_con">
                <div className="events_head">
                    <h2>EVENTS</h2>
                    <p>Click on event card to know more !!</p>
                </div>
                <div className="event_con">
                    {event_data.map((ele) => {
                        return <div key={ele.event_id} class="event_card">
                            <div class="event-card-inner" id='events'>
                                <div class={`event-card-front event${ele.event_id}`}>
                                </div>
                                <div class="event-card-back" style={{ color: `${ele.colour_code}` }}>
                                    <h2>{ele.event_name}</h2>
                                    <p>{ele.event_description.length > 280 ? ele.event_description.slice(0, 280) + " ..... Read More" : ele.event_description}</p>
                                    <a href={`/events/${ele.event_id}`}>Explore More</a>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className="events_bottom">
                <img src={bimg} alt="" />
            </div>
        </div >
    )
}

export default Events