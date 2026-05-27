import { Resend } from "resend";

const sendEmail = async ({ name, email, message }) => {
  try {
    console.log("Email SENDING via Resend......");

    // Initialize Resend with the API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend default for testing, no domain verification needed
      to: process.env.EMAIL_USER, // Sending it to your own email address
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email (Reply to):</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error("RESEND API ERROR:");
      console.error(error);
      throw error;
    }

    console.log("EMAIL SENT SUCCESSFULLY via Resend");
    console.log(data);

  } catch (error) {
    console.error("EMAIL SENDING FAILED:");
    console.error(error);
    throw error;
  }
};

export default sendEmail;