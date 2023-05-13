import postAPI from "@/components/utilities/helpers/postApi";

export default async function sendVerifyEmailHandler(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://capital-coast-server.onrender.com"
      : "http://localhost:3001";
  const { email } = JSON.parse(Object.keys(req.body)[0]);
  const response = await fetch(endpoint + "/api/auth/request-verify-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  console.log(data);
  res.json(data);
}
