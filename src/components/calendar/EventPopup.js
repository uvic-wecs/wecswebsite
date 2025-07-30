import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: 'true' };

const EventPopup = ({ event, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{event.title}</DialogTitle>
      <DialogContent>
        <p>{event.desc}</p>
        <p>
          Date: {event.readableDate ?? `${event.start.toLocaleDateString("en-GB")} to ${event.end.toLocaleDateString("en-GB")}`}
          <br></br>
          Time: {event.readableTime ?? `${event.start.toLocaleTimeString(timeOptions)} to ${event.end.toLocaleTimeString(timeOptions)}`}
          <br></br>
          {event.location ? `Location: ${event.location}` : undefined}
          <br></br>
          {event.rsvp ? (
            <>RSVP: <a href={event.rsvp}>here</a></>
          ) : (
            "No RSVP Required."
          )}
        </p>
        {event.image ?? undefined}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventPopup;
