# LumenTask Server

This project is the backend for the LumenTask application, a task management tool designed to streamline project workflows and enhance productivity. The backend is built using modern web technologies to provide a robust and scalable server environment.

## Project Overview

The LumenTask Server is developed with Node.js and Express, providing a RESTful API for managing tasks, users, and authentication. The server handles all business logic, data storage, and communication with the frontend.

## Features

### Task Management

The server supports the following operations for task management:

- Create, read, update, and delete tasks
- Assign tasks to projects and users
- Set task priorities and statuses

### User Authentication

User authentication is implemented using JWT tokens, ensuring secure access to the API endpoints. The server supports:

- User registration
- User login
- Token-based authentication

### Real-Time Updates

The server uses WebSockets to provide real-time updates to clients, ensuring that users have the most up-to-date information.

## Technical Details

### Project Structure

The project follows a modular structure to keep the codebase organized and maintainable. Key directories include:

- `controllers`: Handles request processing and business logic
- `routes`: Defines API endpoints and routes
- `models`: Defines data schemas and interacts with the database
- `middlewares`: Custom middleware functions for request handling

### API Endpoints

The server provides the following key API endpoints:

- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login
- `GET /api/tasks`: Get all tasks
- `POST /api/tasks`: Create a new task
- `PUT /api/tasks/:id`: Update a task
- `DELETE /api/tasks/:id`: Delete a task

### Database

The server uses MongoDB for data storage, providing a flexible and scalable solution for managing task and user data.

## Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **MongoDB** instance

### Installation

Clone the repository and install dependencies:

git clone https://github.com/AleksMarkov/LumenTask-server.git
cd LumenTask-server
npm install

### Configuration

Create a `.env` file in the root directory and add the following environment variables:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

### Running the Server

Start the development server:

npm start

The server will run on `http://localhost:5000`.

### API Documentation

API documentation is available through Swagger. Visit `http://localhost:5000/api-docs` to view the API documentation.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.
