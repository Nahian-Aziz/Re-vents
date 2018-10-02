import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  ///////////////////////Life Cycle Events/////////////////////
  // We need to change it on basis of an event being passed in
  // called immediately after a component is mounted
  // setting state here wil trigger re-rendering.
  // We will check if an event is being passed in, if it is then // we are going to setState, this will trigger a re-render and // our form will be updated with the selected events.
  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  // Will not be called when the component mounts but when it
  // receives props afterwards, then it will be called.
  // We have access to the existing props and the next props
  // that are coming in.
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        // If there is no selected events then we are passing
        // empty events i.e. accounting for the fact that creat // event button maybe clicked.
        event: nextProps.selectedEvent || emptyEvent
      });
    }
  }

  //////////////////////////////////////////////////////////////

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.handleFormUpdateEvent(this.state.event);
    } else {
      // takes our event and pass it to our event method
      this.props.handleFormCreateEvent(this.state.event);
    }
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  render() {
    const { handleFormCancel } = this.props;
    const { event } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={event.title}
              placeholder="First Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              onChange={this.onInputChange}
              value={event.date}
              type="date"
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              onChange={this.onInputChange}
              value={event.city}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              onChange={this.onInputChange}
              value={event.venue}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              onChange={this.onInputChange}
              value={event.hostedBy}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
