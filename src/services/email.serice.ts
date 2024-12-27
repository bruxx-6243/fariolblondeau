import nodemailer from "nodemailer";

type sendEmailProps = {
  recipient: string;
  subject: string;
  html: string;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: import.meta.env.EMAIL_ADDRESS,
    pass: import.meta.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({ recipient, subject, html }: sendEmailProps) {
  return await transporter.sendMail({
    from: import.meta.env.EMAIL_ADDRESS,
    to: recipient,
    subject: subject,
    html: html,
  });
}
