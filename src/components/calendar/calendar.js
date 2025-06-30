import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventPopup from './EventPopup';
import Image from 'react-bootstrap/Image';
import csc110 from '../../resources/csc 110.png';
import PrideNight from '../../resources/PrideNight.png';

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
            </p>,
            image: <Image src={csc110} alt="CSC 110 poster" style={{ height: "100%", width: "100%" }} />,
            readableDate: "April 22nd",
            readableTime: "5PM - 7PM",
            location: "ECS 104"
        },
        {
            title: 'Pride Night Crafting!',
            start: new Date("2025-06-27T17:00:00"),
            end: new Date("2025-06-27T20:00:00"),
            desc: <p>
                Come make buttons and carabiner keychains!
            </p>,
            image: <Image src={PrideNight} alt="Pride Night Crafting Event Poster" style={{ height: "100%", width: "100%" }} />,
            readableDate: "June 27th",
            readableTime: "5PM - 8PM",
            location: "ECS 660",
            rsvp: "https://forms.gle/i5zKtBbm4ZHmQ5dU8"
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
