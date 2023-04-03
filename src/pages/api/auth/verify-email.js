export default async function sendVerifyEmailHandler(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://capital-coast-server.onrender.com"
      : "http://localhost:3001";
  const payload = req.body;
  const response = await fetch(endpoint + "/api/auth/verify-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload }),
  });
  const data = await response.json();
  res.json(data);
}
