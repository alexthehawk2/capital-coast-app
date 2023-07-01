import axios from "axios";

export default async function transferMoney(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";

  console.log(req.body);

  try {
    const response = await axios.post(
      endpoint + "/api/account/transfer-money",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          token: req.cookies.token || "",
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
