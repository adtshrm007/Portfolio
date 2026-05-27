import messageModel from "../models/message.model.js";
import sendEmail from "../utils/sendEmail.js";

export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(403).json({
        message: "All fields are required",
      });
    }

    const newMessage = new messageModel({
      name,
      email,
      message,
    });

    await newMessage.save();
    console.log("Controller Hit");
    await sendEmail({
      name,
      email,
      message,
    });

    return res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Message Controller Error:", error);
    return res.status(500).json({
      message: "Server Error",
    });
  }
};
