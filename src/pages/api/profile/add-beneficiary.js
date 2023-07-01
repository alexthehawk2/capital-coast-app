import axios from "axios";

export default async function addBeneficiaryHandler(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";

  try {
    const response = await axios.post(
      endpoint + "/api/account/add-beneficiary",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          token: req.cookies.token,
        },
      }
    );
    const data = response.data;
    res.status(200).json({ ...data });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
