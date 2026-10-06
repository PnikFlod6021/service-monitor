# Service Monitor API

A simple API/Dashboard for managing and monitoring services.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose

## Features

- Create services
- Get all services
- Get a service by ID
- Update services
- Delete services
- MongoDB persistence

## Project Structure

```text
server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── package-lock.json

Environment Variables
Create a .env file inside the server directory:
PORT=3000
MONGO_DB_URI=your_mongodb_connection_string

Do not commit your .env file.
Installation
Install dependencies:
npm install

Run the Server
node server/src/server.js

The API will run at:
http://localhost:3000

API Endpoints
GET    /api/services
GET    /api/services/:id
POST   /api/services
PATCH  /api/services/:id
DELETE /api/services/:id

Example Service
{
  "name": "GitHub",
  "url": "https://github.com",
  "healthy": true
}

Future Plans
- Automatic service health checks
- Store check history
- React dashboard
- Prometheus metrics
- Grafana dashboards
- Alerts
- Authentication