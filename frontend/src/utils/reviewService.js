export const getReviews = async () => {
  try {
    const res = await fetch("https://portfolio-1-m1qy.onrender.com/review/getReviews");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { success: false, data: [] };
  }
};

export const addReview = async ({ name, role, content, rating }) => {
  try {
    const res = await fetch("https://portfolio-1-m1qy.onrender.com/review/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, role, content, rating }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding review:", error);
    return { success: false };
  }
};
