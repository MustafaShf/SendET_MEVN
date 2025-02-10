# SendET - Email Sending App

SendET is an email-sending application that utilizes **SendGrid by Twilio** for sending emails. The frontend is built using **Vue.js**, providing a simple and efficient interface for composing and tracking emails.

## Features
- Send emails using **SendGrid API**
- Track email history with **read/unread status**
- Responsive and modern UI with **Tailwind CSS**
- Built using **Vue 3 and Composition API**

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Vue CLI](https://cli.vuejs.org/) (optional, for development)
- [SendGrid API Key](https://sendgrid.com/)
- A backend service (e.g., **Express.js**) to handle email requests

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/SendET.git
   cd SendET
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the backend and add your **SendGrid API Key**:
     ```env
     PORT
MONGO_CONN
SENDGRID_API
URL
PUBLIC_URL
     S
     ```

4. **Run the backend server:**
   Ensure your backend is running on **localhost:3000** or update the API URL in the frontend if needed.
   ```sh
   node server.js
   ```

5. **Start the frontend:**
   ```sh
   npm run dev
  
