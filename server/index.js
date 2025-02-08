const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const app = express();
const cors=require('cors')
const connectToDb=require('./config/db')
connectToDb()
const sgMail=require('@sendgrid/mail')
const emailModel=require('./model/email.model')

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/email", async (req, res) => {
  let data = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API);

  try {
    // Save email 
    const savedEmail = await emailModel.create({
      to: data.toEmail,
      from: data.fromEmail,
      subject: data.subject,
      isOpened: false,
      body: data.body,
    });

    
    const trackingURL = `${process.env.PUBLIC_URL}/track-open?id=${savedEmail._id}`;

    const msg = {
      to: data.toEmail,
      from: data.fromEmail,
      subject: data.subject,
      text: data.body,
      html: `
        <p>${data.body}</p>
        <a href="${trackingURL}">Click to confirm</a>
      `,
    };

    // Send email after storing in DB
    await sgMail.send(msg);

    res.send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});


app.get('/track-open',async (req,res)=>
{
  //console.log(req.query);
  const emailId=req.query.id;
  if(!emailId)
    res.send('email id not found')

  await emailModel.findByIdAndUpdate(emailId, { isOpened: true });
  console.log(`Email ${emailId} marked as opened.`);

  res.send('Email marked as opened');

})


app.get('/emails',async (req,res)=>{

  const emails=await emailModel.find();
  console.log(emails)
  res.json(emails)
})

//port
app.listen(process.env.PORT || 4000, () => {
  console.log(`App is running on ${process.env.PORT || 4000}`);
});
