// Calendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventPopup from './EventPopup';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const events = [
        {
            title: 'UVSS Clubs Day',
            start: new Date("2024-09-11T10:00:00"),
            end: new Date("2024-09-12T15:30:00"),
            desc: <p>Come chat with us at clubs day! We would love to meet you!</p>,
        },
        {
            title: 'LinkedIn Headshots',
            start: new Date("2024-09-18"),
            end: new Date("2024-09-18"),
            desc: <p>TIME UNDECIDED
                <br></br>
                Get your photo taken for your LinkedIn profile picture.
                Especially helpful for co-op applications!
            </p>,
        },
        {
            title: 'Open House',
            start: new Date("2024-09-23T18:00:00"),
            end: new Date("2024-09-23T19:00:00"),
            desc: <p>Come make some bracelets, eat pizza, meet the WECS team, and hear about our upcoming events!</p>,
        },
        {
            title: 'WECS Hackathon',
            start: new Date("2024-10-05T09:00:00"),
            end: new Date("2024-10-06T17:00:00"),
            desc: <p>We are so excited to welcome you to our first hackathon!
                There will be 2 levels: beginner and intermediate. More details to come.</p>,
        },
        {
            title: 'Academia Panel',
            start: new Date("2024-10-10T17:30:00"),
            end: new Date("2024-10-10T19:30:00"),
            desc: <p>
                Our wonderful panelists will be announced soon!
            </p>,
        },
        {
            title: 'Jewellery Night',
            start: new Date("2024-10-17T16:00:00"),
            end: new Date("2024-10-17T18:00:00"),
            desc: <p>
                Join us to hang out, make some jewellery, and meet new people!
            </p>,
        },
        {
            title: 'WECS Birthday Party',
            start: new Date("2024-11-1"),
            end: new Date("2024-11-1"),
            desc: <p>
                Join us to celebrate the 1 year anniversary of the revival of WECS!
                <br></br>
                TIME TO BE ANNOUNCED
            </p>,
        },
        {
            title: 'Tote Bag Paint Night',
            start: new Date("2024-11-19T17:30:00"),
            end: new Date("2024-11-19T19:30:00"),
            desc: <p>
                Paint an awesome tote bag! Everything provided.
            </p>,
        },
        {
            title: 'Global Co-op Panel',
            start: new Date("2024-11-28T16:30:00"),
            end: new Date("2024-11-28T18:00:00"),
            desc: <p>
                Our wonderful panelists will be announced soon!
            </p>,
        },
        {
            title: 'December 6th Memorial',
            start: new Date("2024-12-6"),
            end: new Date("2024-12-6"),
            desc: <p>
                In memory of the December 6th 1989 shooting at École Polytechnique.
                On this day we remember the women who were killed and injured due to a violent act of misogyny.
                As women and future engineers, we understand the importance of upholding the memory of these women who paved the way for us.
            </p>,
        },
        // Final Exam Review Sessions
        {
            title: 'CSC 110 Final Exam Review Session',
            start: new Date("2024-12-05T17:00:00"),
            end: new Date("2024-12-05T19:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'CSC 115 Final Exam Review Session',
            start: new Date("2024-12-06T14:00:00"),
            end: new Date("2024-12-06T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'ECE 250 Final Exam Review Session',
            start: new Date("2024-12-08T10:00:00"),
            end: new Date("2024-12-08T12:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'CSC 226 Final Exam Review Session',
            start: new Date("2024-12-08T14:00:00"),
            end: new Date("2024-12-08T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'PHYS 110 Final Exam Review Session',
            start: new Date("2024-12-09T14:00:00"),
            end: new Date("2024-12-09T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'CSC 111 Final Exam Review Session',
            start: new Date("2024-12-13T14:00:00"),
            end: new Date("2024-12-13T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'CSC 110 Final Exam Review Session',
            start: new Date("2024-12-14T14:00:00"),
            end: new Date("2024-12-14T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'CSC 225 Final Exam Review Session',
            start: new Date("2024-12-15T14:00:00"),
            end: new Date("2024-12-12T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
            </p>,
        },
        {
            title: 'Exam Fuel and Chill',
            start: new Date("2024-12-16T13:00:00"),
            end: new Date("2024-11-06T20:00:00"),
            desc: <p>
                Our wonderful panelists will be announced soon!
            </p>,
        },

        // Spring 2025 Events
        {
            title: 'Open House',
            start: new Date("2025-01-22T18:30:00"),
            end: new Date("2025-01-22T19:30:00"),
            desc: <p>
                Join us for bracelet making and pizza!
            </p>,
        },
        {
            title: 'Phone Case + Claw Clip Decorating',
            start: new Date("2025-02-11T17:30:00"),
            end: new Date("2025-02-11T19:30:00"),
            desc: <p>
                Join us for phone case and claw clip decorating!
            </p>,
        },
        {
            title: 'March Movement Event',
            start: new Date("2025-03-05T18:30:00"),
            end: new Date("2025-03-05T19:30:00"),
            desc: <p>
                Pilates night is here!
                Do you 🫵 want to have fun with friends or make new ones? Join us for a Pilates night💪
            </p>,
        },
        {
            title: 'Transitioning into the Workplace Panel',
            start: new Date("2025-03-06T17:00:00"),
            end: new Date("2025-03-06T19:00:00"),
            desc: <p>This Thursday from 5-7pm, swing by ECS 660 for a panel featuring industry professionals, recent graduates, and co-op students. 
                Get real-world tips on workplace culture, time management & more. 
                Plus, free pizza! 🥳</p>,
        },
        {
            title: 'CSC 111 Final Exam Review Session',
            start: new Date("2025-04-02T18:00:00"),
            end: new Date("2025-04-02T20:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                Location: ECS 108
            </p>,
        },
        {
            title: 'CSC 225 Final Exam Review Session',
            start: new Date("2025-04-05T10:00:00"),
            end: new Date("2025-04-05T12:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                Location: ECS 104
            </p>,
        },
        {
            title: 'PHYS 110 Final Exam Review Session',
            start: new Date("2025-04-05T14:00:00"),
            end: new Date("2025-04-05T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                Location: ECS 130
            </p>,
        },
        {
            title: 'CSC 225 Final Exam Review Session',
            start: new Date("2025-04-05T10:00:00"),
            end: new Date("2025-04-05T12:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                Location: ECS 104
            </p>,
        },
        {
            title: 'ENGR 141 Final Exam Review Session',
            start: new Date("2025-04-12T14:00:00"),
            end: new Date("2025-04-12T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                Location: ECS 108
            </p>,
        },
        {
            title: 'PHYS 111 Final Exam Review Session',
            start: new Date("2025-04-15T14:00:00"),
            end: new Date("2025-04-15T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                Location: DSB C122
            </p>,
        },
        {
            title: 'SENG 265 Final Exam Review Session',
            start: new Date("2025-04-15T14:00:00"),
            end: new Date("2025-04-15T16:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                Location: ECS 104
            </p>,
        },
        {
            title: 'CSC 110 Study Group',
            start: new Date("2025-04-22T17:00:00"),
            end: new Date("2025-04-22T19:00:00"),
            desc: <p>
                Join upper year students as they lead a final exam review session!
                <br/><br/>
                Location: ECS 104
            </p>,
        },


        //Sept-April 2025 events
        {
            title: 'UVSS Clubs Day',
            start: new Date("2025-09-10T10:00:00"),
            end: new Date("2025-09-11T15:30:00"),
            desc: <p>Come chat with us at clubs day! We would love to meet you!</p>,
        },
        {
            title: 'Open House',
            start: new Date("2025-09-16T18:30:00"),
            end: new Date("2025-09-16T20:30:00"),
            desc: <p>
                Join us for introductions, pizza, pop, and bracelet making! 🍕🥤
                There will be presentations from the VPs and a chance to ask questions
                Hope to see you there!
                <br/>
                <br/>
                Location: ECS 660  from 6pm - 8pm
            </p>,
        },
        {
            title: 'ECSS Clubs Day',
            start: new Date("2025-09-16T11:00:00"),
            end: new Date("2025-09-16T15:00:00"),
            desc: <p>Come chat with us at clubs day! We would love to meet you! <br/><br/>
                Location: ELW Lobby from 11am - 3pm
            </p>,
        },
        {
            title: 'Wellness Wander with IWIST and WIS',
            start: new Date("2025-09-21T13:00:00"),
            end: new Date("2025-09-21T15:00:00"),
            desc: <p>
                🌿✨ Take a mindful break with us at UVic!
                <br/>
                Join Island Women in Science and Technology, WECS, and UVic Women in Science for a Wellness Wander along the UVic Alumni Chip Trail. 🚶‍♀️🌲<br/>

                📅 September 21, 2025<br/>
                🕐 1:00 – 3:00 pm<br/>
                📍 UVic Alumni Chip Trail
                <br/>
                <br/>

                Let’s connect, recharge, and enjoy nature together 💙<br/>
                <a href="https://www.google.com/url?q=https://www.iwist.ca/events/wellnesswanderseptember2025&sa=D&source=editors&ust=1757656603633086&usg=AOvVaw0RJz38mBb7Ft5EDjgDoJQi">Link to Register </a>
                ⬇️<br/>
            </p>,
        },
        {
            title: 'Last Day for Merch!!',
            start: new Date("2025-09-24T12:00:00"),
            end: new Date("2025-09-24T13:00:00"),
            desc: <p>
                ✨ UVic W.E.C.S Official Merch is here! ✨<br/>
                Don’t miss out — our online store closes September 24th ⏳<br/>
                Sweaters, tees, hoodies, and more — grab yours before they’re gone! 💖🖤<br/>
                👉
                <br/>  <br/>
                <a href="https://www.google.com/url?q=https://store.passionsports.ca/wems/shop/home&sa=D&source=editors&ust=1757803638518659&usg=AOvVaw2xfElA_0PNVW3W8SMCh8cL">Order Here </a>
                🔗<br/>
            </p>,
        },
        {
            title: 'Job Posting Workshop with Karae White',
            start: new Date("2025-10-07T16:00:00"),
            end: new Date("2025-10-07T18:00:00"),
            desc: <p> `📝✨ Learn how to craft standout job applications that get noticed!
                <br/><br/>
                Join Karae White for practical tips on writing compelling cover letters, optimizing your resume, and navigating the application process like a pro.
                <br/><br/>
                📅 October 7, 2025<br/>
                🕕 4:00 – 6:00 PM<br/>
                🎯 Perfect for students ready to land their dream opportunities!
                <br/><br/>
                <em>Registration details coming soon...</em>
                <br/>
            </p>,
        },
    ];

    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    const eventPropGetter = (event) => {
        const backgroundColor = event.color || '#590D22'; // Default color if none specified
        return { style: { backgroundColor } };
      };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={eventPropGetter}
            />
            {selectedEvent && (
                <EventPopup
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </div>
    );
};

export default MyCalendar;
