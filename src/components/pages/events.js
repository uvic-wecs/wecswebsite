// App.js
import React from 'react';
import MyCalendar from '../calendar/calendar';
import Footer from '../footer/footer';

const Events = () => {
  return (
    <div>
      <h1>WECS Events Calendar</h1>
      <p>We're looking forward to seeing you at our upcoming events!</p>
      <MyCalendar />
      <Footer />
    </div>
  );
};

export default Events;
