// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const trucks = require('./trucks');

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Get all trucks
app.get('/trucks', (req, res) => {
  res.json(trucks);
});

// Add a new truck
app.post('/trucks', (req, res) => {
  const newTruck = req.body;
  trucks.push(newTruck);
  res.json(newTruck); 
});

// Delete a truck
app.delete('/trucks/:registration', (req, res) => {
  const registration = req.params.registration;
  const index = trucks.findIndex((truck) => truck.registration === registration);
  if (index !== -1) {
    const deletedTruck = trucks.splice(index, 1)[0]; 
    res.json(deletedTruck); 
  } else {
    res.status(404).json({ error: 'Truck not found' });
  }
});

// Update truck departure time
app.put('/trucks/:registration', (req, res) => {
  const registration = req.params.registration; 

  const truck = trucks.find((truck) => truck.registration === registration);
  if (truck) {
    // Increase the departure time by 5 minutes
    const newDepartureTime = new Date(truck.departureTime);
    newDepartureTime.setMinutes(newDepartureTime.getMinutes() + 5);
    truck.departureTime = newDepartureTime.toISOString();
    // Return the updated truck
    res.json(truck); 
  } else {
    res.status(404).json({ error: 'Truck not found' });
  }
});

//port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
