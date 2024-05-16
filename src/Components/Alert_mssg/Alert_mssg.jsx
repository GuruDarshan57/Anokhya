import React, { useState, useEffect } from 'react';

const Announcement = ({ message, duration }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (

        <div style={{ backgroundColor: 'yellow', color: 'black', padding: '10px', width: '100%', display: 'flex', justifyContent: 'space-between', fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px" }}>
          <div>Tech Talk and Workshop scheduled today will be conducted tommorow at 9:00 AM DUE TO TIME CONSTRAINTS.</div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <i className="fa-solid fa-xmark" style={{ color: "#000000" }} onClick={handleClose}></i>
          </div>
        </div>

      )}
    </div>
  );
};

export default Announcement;
