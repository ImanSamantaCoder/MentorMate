const nodemailer = require("nodemailer");
require("dotenv").config(); // Load environment variables

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email provider (e.g., Gmail, Outlook, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email app password (use Gmail App password if 2FA is enabled)
  },
});

// Function to send an email
const sendMail = async (to, subject, text, html) => {
  if (!to || !subject || (!text && !html)) {
    throw new Error("Missing required email fields: 'to', 'subject', 'text' or 'html'");
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: text || "", // Ensure text is always set
    html: html || "", // Ensure html is always set
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("📧 Email sent: ", info.response);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { success: false, message: error.message || "An error occurred while sending email." };
  }
};

module.exports = sendMail;
