export default async function tranferMoney(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://capital-coast-server.onrender.com"
      : "http://localhost:3001";
  console.log(req.body);
  const response = await fetch(endpoint + "/api/account/transfer-money", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: req.cookies.token || "",
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.json(data);
}
