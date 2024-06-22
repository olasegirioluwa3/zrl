// /src/lib/sendEmail.ts
import nodemailer from 'nodemailer';

const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE, // True for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

export async function sendEmail(to: string, subject: string, text: string) {
  const mailOptions = {
    from: `"ZionAi" <${process.env.FROM_EMAIL}>`, // Sender address
    to, // List of receivers
    subject, // Subject line
    text, // Plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export async function sendClientAndAdminEmails(clientEmail: string, clientName: string, message: string, phonenumber: string) {
  const adminEmail = 'zionrebornlimited@gmail.com'; // Replace with the admin's email address
  
  const clientSubject = 'Thank you for your message';
  const clientText = `Hello ${clientName},\n\nThank you for reaching out to us. We have received your message: \n"${message}"\n\nA dedicated member of our Customer Success Team will reach out to you shortly. \n\nBest regards,\nZionAi`;
  
  const adminSubject = `New Contact Form Submission from ${clientName}`;
  const adminText = `You have received a new message from the contact form:\n\nName: ${clientName}\nEmail: ${clientEmail}\nPhonenumber: ${phonenumber}\nMessage: ${message}`;

  await Promise.all([
    sendEmail(clientEmail, clientSubject, clientText),
    sendEmail(adminEmail, adminSubject, adminText),
  ]);
}
