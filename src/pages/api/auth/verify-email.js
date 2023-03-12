export default async function sendVerifyEmailHandler(req, res) {
  const payload = req.body;
  const response = await fetch("http://localhost:3001/api/auth/verify-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ payload }),
  });
  const data = await response.json();
  res.json(data);
}
