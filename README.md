# Personal Expense Tracker

A simple full-stack Expense Tracker application built using the MERN Stack. It allows users to add, view, and delete expenses while automatically calculating the total amount spent.

## Features

* Add a new expense
* View all expenses
* View expense details
* Delete an expense with confirmation
* Display total expenses
* Clean and responsive user interface
* RESTful API with MongoDB database

## Tech Stack

### Frontend

* React
* React Router DOM
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Project Structure

```
Expense-Tracker
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation Process

### 1. Clone the repository

git clone <your-github-repository-url>

### 2. Move into the project folder

cd Expense-Tracker


## Backend Setup

Go to the server folder.

cd server


Install dependencies.

npm install


Create a `.env` file and add these fields:


PORT=7000
MONGODB_URI=your_mongodb_connection_string


Start the backend server.

npm run dev


## Frontend Setup

Open another terminal.

cd client


Install dependencies.


npm install


Create a `.env` file in client and add below field:


VITE_API_URL=http://localhost:7000/api/expenses


Start the React application.

npm run dev


## API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/expenses`     | Get all expenses     |
| GET    | `/api/expenses/:id` | Get a single expense |
| POST   | `/api/expenses`     | Add a new expense    |
| DELETE | `/api/expenses/:id` | Delete an expense    |



## Author

" Deepak Mistry "

GitHub: https://github.com/mstryG1028/traxPense



------------------------Thank you for reviewing this project.-------------------------
