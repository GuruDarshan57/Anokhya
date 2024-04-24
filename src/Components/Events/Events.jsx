import React from 'react'
import './Events.css'

import bimg from '../../Assets/bottom.png'
import event_data from '../../Assets/Data/Events_data.json'

const Events = () => {
    return (
        <div className="events">
            <div className="events_con">
                <div className="events_head">
                    EVENTS
                </div>
                <div className="event_con">
                    {event_data.map((ele) => {
                        return <div data-aos="zoom-out" class="event_card">
                            <div class="event-card-inner">
                                <div class={`event-card-front event${ele.event_id}`}>
                                </div>
                                <div class="event-card-back" style={{ color: `${ele.colour_code}` }}>
                                    <h2>{ele.event_name}</h2>
                                    <p>{ele.event_description}</p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className="events_bottom">
                <img src={bimg} alt="" />
            </div>
        </div>
    )
}

export default Events