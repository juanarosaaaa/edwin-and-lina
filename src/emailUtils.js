const nodemailer = require('nodemailer');

// Create a Nodemailer transporter with Hostinger SMTP settings
const transporter = nodemailer.createTransport({
  host: 'your-smtp-host', // Hostinger's SMTP server address
  port: 587, // Port number (typically 587 for TLS)
  secure: false, // Set to true if using SSL
  auth: {
    user: 'your-email@example.com', // Your Hostinger email address
    pass: 'your-email-password', // Your email password
  },
});

// Function to send an email
async function sendEmail(to, subject, text) {
  try {
    // Compose email data
    const mailOptions = {
      from: 'your-email@example.com', // Your email address
      to,
      subject,
      text,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendEmail;
