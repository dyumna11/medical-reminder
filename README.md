
# Medical Reminder App 💊

Medical Reminder is a full-stack web application that helps users manage and track their medications efficiently. Users can create accounts, log in securely, add medicines with customized schedules, and store their reminder data in the cloud.
## 📸 Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/d81c7415-e829-406c-94f9-c7ff005c1230" alt="Dashboard" width="45%" />
  <img src="https://github.com/user-attachments/assets/cfca8580-14b3-41de-9100-dd153414cdd5" alt="Email Reminder" width="30%" />
</p>
## Features

- Secure JWT-based authentication with encrypted password storage using bcrypt
- Create, update, and delete medication reminders
- Custom medication schedules with configurable reminder timings
- Automated email reminders using Node-Cron and Resend
- RESTful API architecture for reminder management
- Cloud-hosted MongoDB Atlas database
- Responsive React frontend

## Tech Stack

Frontend
React
React Router
CSS

Backend
Node.js
Express.js

Database
MongoDB Atlas
Mongoose

Authentication
JWT
bcrypt

Scheduler
Node-Cron

Email
Resend API

Deployment
Vercel
Render

## Live Demo

Frontend: https://medical-reminder.vercel.app/

Backend API: https://medical-reminder-tp61.onrender.com/

## Architecture

User
   │
   ▼
React Frontend
   │
REST API
   ▼
Express.js Backend
   │
   ├── JWT Authentication
   ├── Reminder Scheduler (Node-Cron)
   ├── Email Service (Resend)
   ▼
MongoDB Atlas

## How It Works

1. Users create an account and log in securely.
2. Medicines can be added with custom schedules and timings.
3. Reminder information is stored in MongoDB Atlas.
4. A background scheduler continuously monitors reminder timings.
5. Email notifications are sent when medication times are reached.

## Key Engineering Concepts

RESTful API Design
JWT Authentication
Password Hashing with bcrypt
Background Scheduling
Cloud Database Design
Full-Stack MERN Development

## Future Improvements

* SMS Notifications
* Mobile App Support
* Dashboard Analytics
* Caregiver Notifications
* Medicine History Tracking

---

Built with ❤️ using React, Node.js, Express, and MongoDB.
