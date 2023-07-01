import axios from "axios";

export default async function sendVerifyEmailHandler(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";

  const payload = req.body;

  try {
    const response = await axios.post(
      endpoint + "/api/auth/verify-email",
      { payload },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
