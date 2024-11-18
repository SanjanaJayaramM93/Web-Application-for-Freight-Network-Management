# Web Application for Freight Network Management

**Duration:** June 2023  
**Technologies Used:** React.js, Express.js, React Bootstrap, Node.js

## Overview

This project is a web application designed to manage and track truck departures and arrivals within a freight network. It features a responsive user interface built with React.js and React Bootstrap, and a RESTful API powered by Express.js for managing truck data.

## Features

- **Frontend Development**: 
  - Designed and implemented a React.js application.
  - Integrated React Bootstrap for responsive design.
  - Developed components to display truck details, add new trucks, and edit or delete entries.
  - Managed state and props for efficient data flow between components.

- **Backend Development**: 
  - Created a RESTful API using Express.js to handle requests for truck data.
  - Implemented `GET`, `POST`, `PUT`, and `DELETE` endpoints to manage truck information.
  - Focused on modifying departure times and handling static JSON data.
  - Used Express middleware for handling JSON requests and responses.

- **Data Handling**: 
  - Utilized a static JSON dictionary to store truck data.
  - Implemented data filtering and modifications based on user input.

- **UI/UX Design**: 
  - Designed the layout to include key components such as truck data tables and forms for adding/editing truck entries.
  - Focused on a user-friendly and intuitive design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/freight-network-management.git
2. Navigate to the project directory:
   ```bash
   cd freight-network-management
3. Install dependencies for the frontend and backend:
   ```bash
   For the frontend:
   cd client
   npm install
   For the backend:
   cd server
   npm install
4. Run the development servers:
   ```bash
   Frontend:
   npm start
   Backend:
   npm start
Open your browser and navigate to http://localhost:3000 to use the application.
## Usage
Add new trucks to the freight network by filling out the form and submitting the data.
View truck details in a table format, where you can edit or delete truck entries.
Modify truck departure times and track truck arrival and departure statuses.
## Contributing
Fork the repository.
Create a new branch for your changes.
Make the changes and commit them.
Open a pull request with a description of the changes.
## License
This project is licensed under the MIT License - see the LICENSE file for details.
