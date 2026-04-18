# Task Management API

## Project Description

This project is a simple Task Management REST API built using **Node.js** and **Express.js**. It was developed as part of the CSE 362 Web Programming II Lab. The API demonstrates basic backend development concepts including routing, JSON responses, error handling, modular route structure using Express Router, and version control using Git.

The project includes the following endpoints:

* GET `/` → Server status message
* GET `/tasks` → Retrieve all tasks
* GET `/task/:id` → Retrieve a task by ID
* GET `/health` → Check server health and uptime

---


## Prerequisites

Make sure the following tools are installed on your system:

* Node.js (LTS version recommended)
* npm (comes with Node.js)
* Git
* Postman (for API testing)
* VS Code or any code editor

You can verify installation using:

```
node -v
npm -v
git --version
```

---

## Installation Instructions (Setup)

Follow these steps to set up the project on a new machine.

### Step 1: Clone the Repository (if applicable)

```
git clone <repository-url>
cd task-management
```

OR if starting locally:

```
mkdir task-management
cd task-management
```

### Step 2: Initialize the Project (only if not already initialized)

```
npm init -y
```

### Step 3: Install Dependencies

```
npm install express
```

This will create the `node_modules` folder automatically.

---

## Running the Server

### Start the Server

```
npm start
```

OR

```
node src/index.js
```

### Expected Output

```
Server running at http://localhost:3000
```

Open your browser and visit:

```
http://localhost:3000
```

You should see:

```
Task Management API is running!
```

---

## API Endpoints

### 1. Root Endpoint

**Request**

```
GET /
```

**Response**

```
Task Management API is running!
```

---

### 2. Get All Tasks

**Request**

```
GET /tasks
```

**Response Example**

```json
[
  {
    "id": 1,
    "title": "Learn Node.js",
    "completed": false,
    "priority": "high",
    "createdAt": "2026-04-18T10:00:00.000Z"
  }
]
```

---

### 3. Get Task by ID

**Request**

```
GET /task/1
```

**Successful Response**

```json
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false,
  "priority": "high",
  "createdAt": "2026-04-18T10:00:00.000Z"
}
```

**Error Response (Task Not Found)**

Status Code: **404**

```json
{
  "error": "Task not found"
}
```

**Error Response (Invalid ID Format)**

Status Code: **400**

```json
{
  "error": "Invalid ID format"
}
```

---

### 4. Health Check Endpoint

**Request**

```
GET /health
```

**Response Example**

```json
{
  "status": "healthy",
  "uptime": 123.45
}
```

`uptime` represents how long the server has been running in seconds.

---
