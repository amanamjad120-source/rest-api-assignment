# Express.js Modular MVC REST API Assignment

A beginner-friendly REST API using Express.js, MongoDB/Mongoose, JWT authentication, and modular MVC architecture.

## Features
- Register and login with hashed passwords and JWT tokens
- Category CRUD: create, list, get one, update, delete
- Course CRUD with a reference to a Category
- Input validation and consistent 400/401/404/409/500 responses
- Postman collection included

## Requirements
- Node.js LTS and npm
- MongoDB local server or a MongoDB Atlas database
- Postman (for testing and evidence screenshots)

## Setup
1. Extract the ZIP and open the `rest-api-assignment` folder in VS Code.
2. Open a terminal in that folder and run:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set `MONGO_URI` and a long random `JWT_SECRET`.
   - Local MongoDB example: `mongodb://127.0.0.1:27017/college_api`
   - For Atlas, paste your own connection string and configure database access.
4. Start the server:
   ```bash
   npm run dev
   ```
5. Visit `http://localhost:5000/` or import `postman/REST_API_Assignment.postman_collection.json` into Postman.

## API endpoints
All category and course routes require `Authorization: Bearer <token>`.

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login and receive JWT |
| POST | `/api/categories` | Create category |
| GET | `/api/categories` | List categories |
| GET | `/api/categories/:id` | Get one category |
| PUT | `/api/categories/:id` | Update category |
| DELETE | `/api/categories/:id` | Delete category |
| POST | `/api/courses` | Create course |
| GET | `/api/courses` | List courses |
| GET | `/api/courses/:id` | Get one course |
| PUT | `/api/courses/:id` | Update course |
| DELETE | `/api/courses/:id` | Delete course |

## Postman testing order
1. Send **Auth / Register** (sample credentials are in the collection).
2. Send **Auth / Login**. The collection's test script stores the returned token in the collection variable automatically.
3. Send **Categories / Create Category**.
4. Send **Categories / Get All Categories**.
5. Send **Categories / Missing Required Name (400)**.
6. Send **Errors / Unknown Route (404)**.
7. For Course / Create Course, first copy a category `_id` from the category response and set the `categoryId` collection variable.

If you run Register more than once, change the email because emails must be unique.

## Mandatory evidence submission
The `screenshots/` directory contains instructions only; real screenshots must be captured from your own running Postman session (do not submit mock responses as evidence). Capture the following:
1. Register and Login successful responses.
2. `POST /api/categories` with **201 Created**.
3. `GET /api/categories` with **200 OK**.
4. Missing required category name with **400 Bad Request**.
5. Unknown URL with **404 Not Found**.

Every screenshot should show your name and roll number at the top of the page, Postman method/URL, relevant headers/body, response status and response body. Put your real screenshots in `screenshots/`, create a PDF/Word document for printout, and push the screenshots to GitHub.

## GitHub upload
Create a new empty GitHub repository, then run from this folder:
```bash
git init
git add .
git commit -m "Complete REST API assignment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```
Replace the URL with your repository URL. Never commit `.env` or `node_modules`.
