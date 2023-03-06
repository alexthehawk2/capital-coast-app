import postAPI from "@/components/utilities/helpers/postApi";

export default async function authHandler(req, res) {
  const { email } = JSON.parse(Object.keys(req.body)[0]);
  const response = await fetch("http://localhost:3001/api/auth/verify-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  console.log(response);
  res.json({ message: "Hello from API route" });
}
