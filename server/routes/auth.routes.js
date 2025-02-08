const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const emailModel = require("../model/email.model");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/email", async (req, res) => {
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

    const trackingURL = `https://9763-2407-d000-405-f0b8-95a2-1246-8ccd-5b3f.ngrok-free.app/track-open?id=${savedEmail._id}`;

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

router.get("/track-open", async (req, res) => {
  //console.log(req.query);
  const emailId = req.query.id;
  if (!emailId) res.send("email id not found");

  await emailModel.findByIdAndUpdate(emailId, { isOpened: true });
  console.log(`Email ${emailId} marked as opened.`);

  res.send("Email marked as opened");
});

router.get("/emails", async (req, res) => {
  const emails = await emailModel.find();
  console.log(emails);
  res.json(emails);
});

module.exports = router;
