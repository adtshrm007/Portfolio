import messageModel from "../models/message.model.js";

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

    return res.status(201).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
    });
  }
};
