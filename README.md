# Conference Registration System

A MongoDB/Mongoose practice project modeling conference attendee registration, sessions, and bookings — built to demonstrate core query patterns rather than a polished UI.

## Screenshot

<img width="2716" height="700" alt="conference-registration-system" src="https://github.com/user-attachments/assets/a0be7a4e-21bc-455e-a58a-04e905ecf7f2" />

## Tech Stack

Node.js, Express, Mongoose (MongoDB)

## What it demonstrates

- `insertOne` / `insertMany`, `.populate()` across referenced documents
- Pagination, sorting, field projection, `countDocuments`
- `$or` filters and `$group` aggregation pipelines

## Setup

```bash
npm install
node server.js
```

Visit `http://localhost:5000`. Requires MongoDB running locally (`mongodb://127.0.0.1:27017/conferenceDB`).
