import React from 'react';
import MyCalendar from '../calendar/calendar';

const Events = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>WECS Events Calendar</h1>
      <p>We're looking forward to seeing you at our upcoming events!</p>
      <MyCalendar />
      <br/>
    </div>
  );
};

export default Events;
