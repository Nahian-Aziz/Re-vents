import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { connect } from 'react-redux';
import { deleteEvent } from '../eventActions';
import LoadingComponent from '../../../app/layout/LoadingComponent';

const mapState = state => ({
  events: state.events,
  loading: state.async.loading
});

const actions = {
  deleteEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <Grid>
        <Grid.Column width={10}>
          {/* Passing events down to our events list, coming from what we are calling eventsDashboard at the top. */}
          <EventList
            handleDeleteEvent={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(EventDashboard);
