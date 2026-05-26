import axios from "axios";

export const sendMessage = async ({ name, email, message }) => {
  try {
    const response = await axios.post(
      "https://portfolio-1-m1qy.onrender.com/message/sendMessage",
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
