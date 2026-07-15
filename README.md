# DMA Labs

A full-stack MERN platform for a tech services company — showcasing services like software engineering and networking, connecting customers with developers, and running the company's internal hiring pipeline.

**Live app:** [dma-labs-irxq-three.vercel.app](https://dma-labs-irxq-three.vercel.app/)

---

## Overview

DMA Labs is a company site with two sides:

- **Public side** — visitors can learn about the company's services (software engineering, networking, and connecting customers to developers), get in touch, browse open job listings, and submit applications, including a resume upload.
- **Admin side** — authenticated admins can post/edit/delete job listings, review incoming applications, update candidate status, and archive profiles.

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router (nested routes, loaders, protected routes)
- React Hook Form
- Axios
- React Select
- React Spinners

**Backend**
- Node.js / Express
- MongoDB with Mongoose
- JWT authentication (access + refresh token pattern)
- Multer + Cloudinary (resume file uploads)
- Nodemailer (application email notifications)

**Deployment**
- Frontend: Vercel
- Backend: (add host, e.g. Render / Railway)
- Database: MongoDB Atlas

---

## Features

### Public
- Learn about company services (software engineering, networking, and developer-client matchmaking)
- Contact the company
- Browse open job listings
- View individual job details
- Submit a job application with resume upload (PDF/DOC/DOCX)

### Admin
- Secure login/signup with hashed passwords
- Short-lived access tokens + long-lived httpOnly refresh tokens, with automatic silent refresh on expiry
- Protected admin routes (dashboard, job management, applicant tracker)
- Create, update, and delete job postings
- View, search, and filter incoming applications
- Update applicant status (`New Lead`, `Interviewing`, `Hired`, `Declined`)
- View applicant contact info, skills, and resume inline
- Archive/delete applicant profiles

---

## Project Structure

```
/client
  /src
    /api            → axios instance and API call functions
    /components      → reusable UI components (forms, cards, inputs)
    /context          → AuthContext (global auth state)
    /hooks            → custom hooks (useLogin, useSignup, useAuthContext)
    /layout           → route layout wrappers
    /pages            → route-level pages (Jobs, Login, SignUp, AdminDashboard, etc.)
    /styles           → per-page CSS

/server
  /controllers        → route handler logic (jobs, auth, applicants)
  /middleware         → requireAuth, file upload handling
  /models             → Mongoose schemas (Job, User, Applicant)
  /routes             → Express route definitions
  /config             → Cloudinary config
```

---

## Environment Variables

**Backend (`server/.env`)**
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET=your_access_token_secret
REFRESH_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
GMAIL_USER=your_company_gmail
GMAIL_APP_PASSWORD=your_gmail_app_password
```

**Frontend (`client/.env`)**
```
VITE_API_URL=http://localhost:3000/api
```

---

## Running Locally

**1. Clone the repository**
```bash
git clone <repo-url>
cd dma-labs
```

**2. Backend setup**
```bash
cd server
npm install
npm run dev
```

**3. Frontend setup**
```bash
cd client
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend on `http://localhost:3000` by default.

---

## Authentication Flow

1. On login/signup, the backend issues:
   - A short-lived **access token**, sent in the JSON response and kept in memory on the frontend.
   - A long-lived **refresh token**, set as an httpOnly cookie.
2. Every protected API request attaches the access token via an `Authorization: Bearer` header.
3. If the access token has expired, the backend responds with `401`, and an axios response interceptor automatically calls `/auth/refresh` to obtain a new access token using the refresh cookie, then retries the original request — transparently to the user.
4. Logging out clears the refresh cookie server-side.

---

## API Overview

| Method | Endpoint                          | Description                        | Auth required |
|--------|------------------------------------|-------------------------------------|----------------|
| POST   | `/api/auth/signup`                 | Create an admin account             | No             |
| POST   | `/api/auth/login`                  | Log in                              | No             |
| POST   | `/api/auth/refresh`                | Refresh access token                | Cookie         |
| POST   | `/api/auth/logout`                 | Log out                             | No             |
| GET    | `/api/jobs/getJobs`                | List all jobs                       | No             |
| GET    | `/api/jobs/getJob/:id`             | Get a single job                    | No             |
| POST   | `/api/jobs/addJob`                 | Create a job                        | Yes            |
| PATCH  | `/api/jobs/updateJobs/:id`         | Update a job                        | Yes            |
| DELETE | `/api/jobs/deleteJob/:id`          | Delete a job                        | Yes            |
| POST   | `/api/applicants/submit`           | Submit a job application            | No             |
| GET    | `/api/applicants`                  | List all applicants                 | Yes            |
| GET    | `/api/applicants/:id`              | Get a single applicant              | Yes            |
| PATCH  | `/api/applicants/:id/status`       | Update applicant status             | Yes            |
| DELETE | `/api/applicants/:id`              | Archive/delete an applicant         | Yes            |

---

## Roadmap / Possible Next Steps

- Live notifications for new applications (Socket.io)
- Pagination for job and applicant lists
- Role-based access for multiple admin accounts
- Client-side JWT expiry checks for smarter route guarding

---

## License

This project is for internal/portfolio use. Add a license if distributing publicly.
