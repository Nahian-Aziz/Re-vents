import React, { Component } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    const { events, handleFormOpenEvent, handleDeleteEvent } = this.props;
    return (
      <div>
        <h1>Event List</h1>
        {/* Events repeated for every single event in that array */}
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            handleFormOpenEvent={handleFormOpenEvent}
            handleDeleteEvent={handleDeleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
