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
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; border: 1px solid #e0e0e0;">
          <div style="background-color: #0f172a; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="color: #38bdf8; margin: 0; font-size: 24px;">New Portfolio Message 🚀</h2>
          </div>
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <p style="font-size: 16px; color: #333; margin-top: 0;">You have received a new message from your portfolio website.</p>
            
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="color: #64748b; font-size: 14px; text-transform: uppercase;">Name</strong><br>
                  <span style="font-size: 16px; color: #0f172a;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="color: #64748b; font-size: 14px; text-transform: uppercase;">Email</strong><br>
                  <a href="mailto:${email}" style="font-size: 16px; color: #38bdf8; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px 0 5px 0;">
                  <strong style="color: #64748b; font-size: 14px; text-transform: uppercase;">Message</strong>
                </td>
              </tr>
              <tr>
                <td style="padding: 15px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #38bdf8; font-size: 15px; color: #334155; line-height: 1.6;">
                  ${message}
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="background-color: #0f172a; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Reply to ${name}</a>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 20px;">
            Sent automatically via RagCoder Portfolio
          </p>
        </div>
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