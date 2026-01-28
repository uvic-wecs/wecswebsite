import "./events.css";


const Events = () => {
  return (
    <div className="event-container">
      <br/>
      <div className="event-calendar">
        <h1>WECS Events Calendar</h1>
        <p>We're looking forward to seeing you at our upcoming events!</p>
        <br />
        <iframe title="WECS Events Calendar" src="https://calendar.google.com/calendar/embed?src=1632028d6ee05901b9bed86cd0ead38c9df6986dd3361299a56711051fb3ab3d%40group.calendar.google.com&ctz=America%2FVancouver" frameborder="0" scrolling="no"></iframe>
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};



export default Events;
