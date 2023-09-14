# Employee Management Application made with React + Vite

Welcome to the Employee Management Application! This web application is designed to help you manage employee records effectively. You can create, search, and view employee details in a user-friendly interface.
You can find the website here: https://hrnet-opc-p14.netlify.app/

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)

## Project Description

The Employee Management Application is a React-based web application that allows you to:

- Create new employee records with various details.
- Search for employees based on different criteria (e.g., name, department, zip code).
- View and sort employee records.
- Load demo data for testing purposes.

## Features

- User-friendly interface for managing employees.
- Employee creation form with validation.
- Search functionality to find employees quickly.
- Sort employees by different criteria (e.g., name, department, start date).
- Pagination for viewing a limited number of employees at a time.
- Load demo data to populate the application with sample employees.

## Technologies Used

- React
- Vite
- React Bootstrap
- Font Awesome
- CSS (Styling)
- JavaScript
- Context Api (for state management)
- Mock API (for demo data)
- External library "Success-modal-customized" : https://github.com/johary1/success-modal-customized
- Lighthouse (for testing performance)

## Getting Started

Follow these steps to set up and run the Employee Management Application locally on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/johary1/hrnet-app.git
   cd hrnet-appP14
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   In your termninal ctrl+click the link: http://localhost:port_number to access the application from a browser

### Usage

Creating Employees

Click the "Create Employee" button to open the employee creation form.
Fill in the required details (First Name, Last Name, etc.).
Click the "Submit" button to create a new employee record.
A confirmation success message will be displaid in a modal.

Searching for Employees

Use the search bar to search for employees by name, department, zip code, or other criteria.
The table will display the search results in real-time as you type.

Sorting Employees

Click on the column headers in the employee list table to sort employees by that column (e.g., "First Name" or "Start Date").
Click the column header again to reverse the sorting order.

Show demo data for Employees

Click on Demo data button to load some data from a mock service. A confirmation success message will be displaid in a modal.
Click on Clear data button to delete Employee list from demo data.

### Project Structure

The project structure is organized as follows:

```bash

├── public/
│   ├── index.html
│   ├── robots.txt
│   ├── ...
|   └── favicon.png

├── src/
│   ├── assets/
│      ├── font/
│          ├── ...
│          └── ...

│   ├── components/
│       ├── style/
│           ├── ...
│           ├── ...
│           ├── ...
│           └── ...
│   ├── AddressForm.jsx
│   ├── DatePickerWrapper.jsx
│   ├── FormInput.jsx
|   ├── FormSearch.jsx
│   ├── Header.jsx
│   ├── Pagination.jsx
│   └── Select.jsx

│   ├── context/
│       ├── EmployeeContext.js
│       └── ...

│   ├── data/
│       ├── departments.json
│       ├── employees.json
│       └── states.json

│   ├── pages/
|       ├── style/
│           ├── ...
│           ├── ...
│           ├── ...
│           └── ...
|       ├── CreateEmployee.jsx
│       ├── CurrentEmployees.jsx
│       ├── Error404.jsx
│       └── HomePage.jsx

│   ├── service/
│       ├── mockApi.js
│       └── ...

│   ├── App.jsx
│   ├── main.jsx
|   ├── index.jsx
│   ├── index.css
│   └── ...

├── ...
├── package.json
├── README.md
└── ...

```

### Deployment

To deploy this application to a hosting service (e.g., Netlify, Vercel), follow the hosting platform's specific deployment instructions. Generally, you need to configure the deployment settings to build and host the application.

### License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
