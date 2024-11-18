
import React, { useState, useEffect } from 'react';
import { Container,Button} from 'react-bootstrap';
import axios from 'axios';
import NavbarComponent from './components/Navbar';
import AddTruck from './components/AddTruck';
import TruckTable from './components/TruckTable';

function App() {
  //Trucks
  const [trucks, setTrucks] = useState([]);
  //Form for add new truck
  const [showAddForm, setShowAddForm] = useState(false);
  //New truck -data updation
  const [newTruckData, setNewTruckData] = useState({
    registration: '',
    arrivalDate: '',
    arrivalTime: '',
    departureDate: '',
    departureTime: '',
    bay: '',
  });

  useEffect(() => {
    fetchTrucks();
  }, []);
  // Fetch trucks from backend
  const fetchTrucks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/trucks');
      setTrucks(response.data);
    } catch (error) {
      console.log(error);
    }
  };
 // delete truck
  const deleteTruck = async (registration) => {
    try {
      await axios.delete(`http://localhost:3000/trucks/${registration}`);
      fetchTrucks();
    } catch (error) {
      console.log(error);
    }
  };
 //format departure time -for better view
  const formatDepartureTime = (time) => {
    try {
      const departureTime = new Date(time);
      console.log('Original Departure Time:', time);
      console.log('Parsed Departure Time:', departureTime);
      if (isNaN(departureTime)) {
        throw new Error('Invalid departure time');
      }
      const timeString = departureTime.toISOString().split('T')[1];
      console.log('Formatted Departure Time:', timeString);
      return timeString;
    } catch (error) {
      console.log(error);
      return '';
    }
  };
 // Increase departure time 
  const increaseDepartureTime = async (registration) => {
    try {
      const updatedTrucks = trucks.map((truck) => {
        if (truck.registration === registration) {
          const newDepartureTime = new Date(truck.departureTime);
          if (isNaN(newDepartureTime)) {
            throw new Error('Invalid departure time');
          }
          newDepartureTime.setMinutes(newDepartureTime.getMinutes() + 5);
          return { ...truck, departureTime: newDepartureTime.toISOString() };
        }
        return truck;
      });

      await axios.put(`http://localhost:3000/trucks/${registration}`, updatedTrucks.find((truck) => truck.registration === registration));
      fetchTrucks();
    } catch (error) {
      console.log(error);
    }
  };
  // Add a new truck
  const addTruck = () => {
    alert('Please make sure to use the correct format for the departure time (e.g., YYYY-MM-DDTHH:mm:ss)[Date T time].  sample:departureTime: 2023-06-10T11:20:10');
    setShowAddForm(true);
  };
  
  const handleAddTruck = async () => {
    try {
      const response = await axios.post('http://localhost:3000/trucks', newTruckData);
      console.log(response); // Log the response to the console
      setNewTruckData({
        registration: '',
        arrivalDate: '',
        arrivalTime: '',
        departureDate: '',
        departureTime: '',
        bay: '',
      });
      setShowAddForm(false);
      fetchTrucks();
    } catch (error) {
      console.log(error);
      
    }
  };
//hiding the add truck form
  const handleCancelAddTruck = () => {
    setShowAddForm(false);
    setNewTruckData({
      registration: '',
      arrivalDate: '',
      arrivalTime: '',
      departureDate: '',
      departureTime: '',
      bay: '',
    });
  };
    //handling changes in the input fields of the add truck form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTruckData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <Container>
      
      <NavbarComponent />
      <h1>Truck Management</h1>
      
        {!showAddForm && (
          <div>
            <TruckTable
              trucks={trucks}
              deleteTruck={deleteTruck}
              increaseDepartureTime={increaseDepartureTime}
              formatDepartureTime={formatDepartureTime}
            />

            <h2>Add a New Truck</h2>

            <Button variant="success" onClick={addTruck}>
              Add Truck
            </Button>
          </div>
        )}
        
        {showAddForm && (
          <AddTruck
            newTruckData={newTruckData}
            handleInputChange={handleInputChange}
            handleAddTruck={handleAddTruck}
            handleCancelAddTruck={handleCancelAddTruck}
          />
        )}
      </Container>
    </div>
  );
}

export default App;








