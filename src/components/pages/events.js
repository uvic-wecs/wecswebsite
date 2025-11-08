import React from "react";
import MyCalendar from "../calendar/calendar";
import "./events.css";

const Events = () => {
  return (
    <div className="event-calendar">
      <h1>WECS Events Calendar</h1>
      <p>We're looking forward to seeing you at our upcoming events!</p>
      <br />
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FVancouver&showPrint=0&showTitle=0&src=dXZpY3dlY3Mub2ZmaWNpYWxAZ21haWwuY29t&src=MGMxZDE2YTQ1MjQ4NTRjMWZiYzcyNWI5ZDJmMmQ5ZjEyZmE1NjZhZTBkOGY1NjhjNWZlM2JlNWUzYTg4ODQ0MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=M2ZlZTcyNmNjZDg4ZjVjNmI3MWZjZTcyZGJiNWRlOGI5NjQ1OGM0NTA0NTIzMzgzNzRiOWU5NWNmMDY5MzVmMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MTYzMjAyOGQ2ZWUwNTkwMWI5YmVkODZjZDBlYWQzOGM5ZGY2OTg2ZGQzMzYxMjk5YTU2NzExMDUxZmIzYWIzZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23d81b60&color=%237986cb&color=%238e24aa&color=%23ff9ceb&color=%230b8043"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <br />
    </div>
  );
};

export default Events;
