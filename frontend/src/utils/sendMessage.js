import axios from "axios";

export const sendMessage = async ({ name, email, message }) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/message/sendMessage",
      {
        name,
        email,
        message,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};
