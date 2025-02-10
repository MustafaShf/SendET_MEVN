# SendET

SendET is an email-sending application using SendGrid by Twilio. It has a frontend built with Vue.js and a backend powered by Node.js and Express.

## Features
- Send emails using SendGrid
- Track email opens with automatic status updates
- Display email history with real-time status changes

## Tech Stack
- **Frontend:** Vue.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Email Service:** SendGrid by Twilio

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/SendET.git
   cd SendET
   ```

2. **Set up the backend:**
   ```sh
   cd backend
   npm install
   ```

3. **Create a `.env` file** inside the `backend` directory with the following variables:
   ```env
   PORT=3000
   MONGO_CONN=mongodb://localhost/EmailSend
   SENDGRID_API=your-sendgrid-api-key
   URL=
   PUBLIC_URL=https://your-ngrok-url.ngrok-free.app
   ```

4. **Start the backend server:**
   ```sh
   npm start
   ```

5. **Set up the frontend:**
   ```sh
   cd ../frontend
   npm install
   ```

6. **Run the frontend:**
   ```sh
   npm run dev
   ```

