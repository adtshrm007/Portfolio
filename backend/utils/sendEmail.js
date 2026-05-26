import nodemailer from "nodemailer";

const sendEmail = async ({ name, email, message }) => {
  try {

    console.log("Email SENDING......");

    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,

      auth: {
        user: String(process.env.EMAIL_USER),
        pass: String(process.env.EMAIL_PASS),
      },
    });

    await transporter.verify();

    console.log("Transporter Ready");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `New Portfolio Message from ${name}`,

      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("EMAIL SENT");
    console.log(info);

  } catch (error) {

    console.log("NODEMAILER ERROR:");
    console.log(error);

    throw error;
  }
};

export default sendEmail;