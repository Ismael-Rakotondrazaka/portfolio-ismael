import nodemailer from "nodemailer";

const { smtpHost, smtpPort, smtpUser, smtpPass } = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const sendEmail = async ({ from, to, subject, text }) => {
  await transporter.sendMail({
    from,
    to,
    subject,
    text,
  });
};

export { sendEmail };
