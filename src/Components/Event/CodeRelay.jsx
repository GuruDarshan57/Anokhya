import React, { useEffect, useRef } from 'react';
import './Indivevents.css';
import event_data from '../../Assets/Data/Events_data.json';
import eimg from '../../Assets/Events/8.png';
import VanillaTilt from 'vanilla-tilt';



function Tilt(props) {
  const { options, children, ...rest } = props;
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);

    return () => {
      tiltRef.current.vanillaTilt.destroy();
    };
  }, [options]);

  return (
    <div ref={tiltRef} {...rest}>
      {children}
    </div>
  );
}

function Coderelay() {
  const event_ = event_data[2];
  const btn_id = event_.button_id

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.konfhub.com/widget.js';
    script.setAttribute('button_id', btn_id);
    document.getElementById('konfhub-widget-container').appendChild(script);

    return () => {
      document.getElementById('konfhub-widget-container').removeChild(script);
    };
  }, []);

  const options = {
    speed: 2000,
    max: 20,
  };


  return (
    <>
      <div className="IndEventmain">
        <h2 className='event_heading'>{event_.event_name}</h2>

        <div className="indeve">

          <div className="card_comp">
            <div className='card_img_style' >
              <img src={eimg} alt="Event" />
            </div>
          </div>

          <div className="text_comp">
            <Tilt options={options}>
              <div className='event_time_details'>
                <p>Event Date (Prelims): TBD</p>
                <p>Event Date (Finals): {event_.event_time}</p>
                <p>Team Size: {event_.team_size}</p>
              </div>
            </Tilt>

            <Tilt>
              <div className='event_prize_details'>
                <h2> Exciting Prizes</h2>
                <p>First Prize: {event_.prize_pool.first_prize}</p>
                <p>Second Prize: {event_.prize_pool.second_prize}</p>
                <p>{event_.prize_pool.third_prize}</p>
              </div>
            </Tilt>

            <Tilt>
              <div className='event_coordinators_details'>
                <h2>Co-ordinator Details</h2>
                <p>Name: {event_.event_coordinator1}</p>
                <p>Phone: {event_.coordinator1_mobile}</p>
              </div>
            </Tilt>
          </div>

        </div>
        <div className='other_event_details'>
          <div className='event_description'>
            <p>{event_.event_description}</p>
          </div>
          <div className='event_registration_button'>
            {/* Container for the script tag */}
            <div id="konfhub-widget-container"></div>
          </div>
          <div className='event_rules'></div>
        </div>
      </div>
    </>
  )
}

export default Coderelay;
