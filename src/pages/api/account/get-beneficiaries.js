export default async function getBeneficiaries(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://capital-coast-server.onrender.com"
      : "http://localhost:3001";
  const response = await fetch(endpoint + "/api/account/get-beneficiaries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: req.cookies.token || "",
    },
  });
  const data = await response.json();
  res.json(data);
}
