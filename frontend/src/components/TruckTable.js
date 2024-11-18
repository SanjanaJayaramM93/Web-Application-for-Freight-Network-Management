import React from 'react';
import { Table, Button } from 'react-bootstrap';

const TruckTable = ({ trucks, deleteTruck, increaseDepartureTime,formatDepartureTime }) => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Registration</th>
          <th>Arrival Date</th>
          <th>Arrival Time</th>
          <th>Departure Date</th>
          <th>Departure Time</th>
          <th>Bay</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {trucks.map((truck) => (
          <tr key={truck.registration}>
            <td>{truck.registration}</td>
            <td>{truck.arrivalDate}</td>
            <td>{truck.arrivalTime}</td>
            <td>{truck.departureDate}</td>
            <td>{formatDepartureTime(truck.departureTime)}</td>
            <td>{truck.bay}</td>
            <td>
              <Button variant="danger" onClick={() => deleteTruck(truck.registration)}>
                Delete
              </Button>
              <Button
                variant="primary"
                onClick={() => increaseDepartureTime(truck.registration)}
              >
                Increase Departure Time
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TruckTable;
