import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AddTruck = ({
  newTruckData,
  handleInputChange,
  handleAddTruck,
  handleCancelAddTruck,
}) => {
  return (
    <div>
      <h2>Add a New Truck</h2>
      <Form>
        <Form.Group as={Row} controlId="formRegistration">
          <Form.Label column sm={2}>
            Registration
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="registration"
              value={newTruckData.registration}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formArrivalDate">
          <Form.Label column sm={2}>
            Arrival Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="arrivalDate"
              value={newTruckData.arrivalDate}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formArrivalTime">
          <Form.Label column sm={2}>
            Arrival Time
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="arrivalTime"
              value={newTruckData.arrivalTime}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formDepartureDate">
          <Form.Label column sm={2}>
            Departure Date
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="departureDate"
              value={newTruckData.departureDate}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formDepartureTime">
          <Form.Label column sm={2}>
            Departure Time
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="departureTime"
              value={newTruckData.departureTime}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formBay">
          <Form.Label column sm={2}>
            Bay
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="bay"
              value={newTruckData.bay}
              onChange={handleInputChange}
            />
          </Col>
        </Form.Group>
        <Button variant="success" onClick={handleAddTruck}>
          Add Truck
        </Button>
        <Button variant="secondary" onClick={handleCancelAddTruck}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default AddTruck;

