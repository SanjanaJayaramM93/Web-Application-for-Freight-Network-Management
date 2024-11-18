//Error -when updating departure time 
//updating departureTime with date(Date T time)-please use this format while add the new truck data.

const trucks = [
  {
    registration: '1ABC123',
    arrivalDate: '2023-06-10',
    arrivalTime: '09:30:00',
    departureDate: '2023-06-10',
    departureTime: '2023-06-10T11:20:10',
    bay: 1,
  },
  {
    registration: '2DEF456',
    arrivalDate: '2023-06-11',
    arrivalTime: '10:30:00',
    departureDate: '2023-06-11',
    departureTime: '2023-06-11T12:00:00',
    bay: 2,
  },
  {
    registration: '3DFG126',
    arrivalDate: '2023-06-11',
    arrivalTime: '12:00:00',
    departureDate: '2023-06-11',
    departureTime: '2023-06-11T17:40:00',
    bay: 11,
  },
  {
    registration: '4MNB490',
    arrivalDate: '2023-06-12',
    arrivalTime: '05:10:00',
    departureDate: '2023-06-12',
    departureTime: '2023-06-12T07:00:20',
    bay: 5,
  },
  {
    registration: '5GHJ789',
    arrivalDate: '2023-06-13',
    arrivalTime: '09:25:00',
    departureDate: '2023-06-13',
    departureTime: '2023-06-13T12:35:00',
    bay: 8,
  },
  {
    registration: '6TYU389',
    arrivalDate: '2023-06-14',
    arrivalTime: '11:10:00',
    departureDate: '2023-06-14',
    departureTime: '2023-06-14T20:30:00',
    bay: 9,
  },
];

module.exports = trucks;