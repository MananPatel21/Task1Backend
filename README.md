# Company and Contact Management Project

This project is a CRUD application that allows users to upload Excel files containing data about companies and contacts. Each row in the Excel file represents one object, and the data is stored in a MongoDB database. The project is built using Node.js and Express.

## Features

- Upload Excel files containing company and contact data
- CRUD operations for managing the data
- Well-structured project with separate routers, services, and controllers

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm
- You have a MongoDB Atlas account (or a local MongoDB server)
- You have installed necessary dependencies using `npm`

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/company-contact-management.git
    cd company-contact-management
    ```

2. **Set up the backend**
    ```bash
    cd backend
    npm install
    ```

3. **Create a `.env` file**

    In the `backend` directory, create a `.env` file and add the following content:
    ```env
    PORT=8001
    MONGODB_URI=mongodb+srv://pmpatelmanan21:21100811@cluster0.9c2cigr.mongodb.net/test
    ```

## Running the Application

1. **Start the backend server**

    In the `backend` directory, run:
    ```bash
    npm start
    ```

The application should now be running. You can access it at `http://localhost:8001`.

## Usage

- Use API endpoints to upload your Excel file containing company or contact data.
- Perform CRUD operations using the available endpoints.

## Project Structure

The project is structured to maintain a clean separation of concerns:

- `backend/` - Contains the Node.js backend code
  - `index.js` - Entry point of the Node.js application
  - `controllers/` - Contains route handlers
  - `services/` - Contains business logic
  - `models/` - Contains database models
  - `routes/` - Contains route definitions
