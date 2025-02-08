const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const app = express();
const cors=require('cors')
const connectToDb=require('./config/db')
connectToDb()
const auth=require('./routes/auth.routes')

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use(auth)


//port
app.listen(process.env.PORT || 4000, () => {
  console.log(`App is running on ${process.env.PORT || 4000}`);
});
