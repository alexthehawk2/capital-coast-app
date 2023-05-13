export default async function addBeneficiaryHandler(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://capital-coast-server.onrender.com"
      : "http://localhost:3001";
  const response = await fetch(endpoint + "/api/account/add-beneficiary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: req.cookies.token,
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.status(200).json({ ...data });
}
