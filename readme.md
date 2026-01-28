# Tallie Backend API

**Tallie Backend API** is a small **Express + TypeScript** REST API for managing **Subscriptions**, **Tables**, and **Reservations** with business-rule validation and soft deletes.

---

## Quick Start

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm**
- **MongoDB**

  - Local MongoDB instance **or**
  - Hosted MongoDB connection (provided via email)

---

### Install & Run (Development)

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Create a `.env` file** in the project root:

   ```env
   DATABASE="mongodb://localhost:27017/tallie"; a hosted database url is provided in the email
   PORT=8100
   ```

   | Variable   | Description                                                                                    |
   | ---------- | ---------------------------------------------------------------------------------------------- |
   | `DATABASE` | MongoDB connection string (**required**) you can use the hosted database provided in the email |
   | `PORT`     | Server port (**required**)                                                                     |

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Uses **nodemon + ts-node** for hot reloading.

---

### Helpful Scripts

| Script                 | Description                    |
| ---------------------- | ------------------------------ |
| `npm run dev`          | Development server             |
| `npm run build`        | Compile TypeScript to `build/` |
| `npm run start:server` | Run compiled server            |
| `npm run tscTest`      | TypeScript type-check only     |

---

## Server Basics

- **Base API prefix:** `/api`
- **Health check:**
  `GET /health` → `200 OK`

### Standard JSON Response Shape

```json
{
  "success": true,
  "result": null,
  "message": "Optional message"
}
```

---

## Routes & Payloads

All routes are prefixed with `/api/*`

### HTTP Status Codes

| Code  | Meaning                                 |
| ----- | --------------------------------------- |
| `201` | Created                                 |
| `200` | OK                                      |
| `400` | Validation error                        |
| `404` | Not found                               |
| `409` | Conflict (e.g. overlapping reservation) |

---

## Subscription Routes

### Create Subscription

**POST** `/api/Subscription/create`

#### Request Body

```json
{
  "name": "Stephen's Test Subscription",
  "email": "stephen@example.com",
  "plan": "paid",
  "startDate": "2024-01-01T00:00:00Z",
  "endDate": "2024-12-31T23:59:59Z"
}
```

#### Notes

- `openingTime` / `closingTime` are **minutes from midnight** (`0–1439`)
- Days must be **lowercase full names** (`monday`, `tuesday`, etc.)

---

### Other Subscription Routes

- **GET** `/api/Subscription/read/:id`
- **PATCH** `/api/Subscription/update/:id`
  _(Partial updates allowed)_
- **DELETE** `/api/Subscription/delete/:id`
  _(Soft delete: `removed = true`)_

---