# Conference Registration System

A backend-focused MongoDB learning project modeling conference attendee registration, sessions, and bookings — built to demonstrate core MongoDB/Mongoose query patterns.

## Tech Stack

- Node.js, Express, Mongoose (MongoDB)

## Features / MongoDB Concepts Demonstrated

- insertOne / insertMany (attendees, sessions)
- .populate() across referenced documents (registrations -> attendees + sessions)
- Pagination, sorting, and limiting (.limit(), .skip(), .sort())
- Field projection ({ name: 1, email: 1 })
- countDocuments
- Compound query operators ($or)
- Aggregation pipelines ($group, $sort, $limit)
- deleteOne

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/add-attendee | Register a new attendee |
| POST | /api/add-sessions | Seed sample sessions |
| POST | /api/register | Register an attendee for a session |
| GET | /api/registrations | List registrations (populated) |
| GET | /api/sessions | List sessions (paginated/sorted) |
| GET | /api/attendees | List attendees (projected fields) |
| GET | /api/count | Count attendees |
| GET | /api/filter | Filter sessions by duration/capacity |
| GET | /api/agg1 | Registrations grouped by session |
| GET | /api/agg2 | Top session by registration count |
| DELETE | /api/delete/:id | Delete a registration |

## Setup

```bash
npm install
# MongoDB running locally — connects to mongodb://127.0.0.1:27017/conferenceDB
node server.js
```

Server runs on http://localhost:5000. A minimal static frontend is served from /public.
