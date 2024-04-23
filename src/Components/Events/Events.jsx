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
                    <div className="event_container">
                        {event_data.map((ele) => {
                            return <div className="event">
                                <div className="event_img">

                                </div>
                                <div className="event_info">
                                    <div className="event_name">
                                        {ele.event_name}
                                    </div>
                                    <div className="event_desc">
                                        {ele.event_description}
                                    </div>
                                    <div className="event_tinfo">
                                        <div className="event_tsize">
                                            {ele.team_size}
                                        </div>
                                        <div className="event_regfee">
                                            {ele.registration_fees}
                                        </div>
                                    </div>
                                    <div className="event_prizes"
                                    >{ele.prize_pool.first_prize}
                                    </div>
                                    <div className="event_cord">
                                        Zeta 9876543210
                                    </div>
                                </div>
                            </div>
                        })}


                    </div>
                </div>
                <div className="event_page_info">

                </div>
            </div>

            <div className="events_bottom">
                <img src={bimg} alt="" />
            </div>
        </div>
    )
}

export default Events