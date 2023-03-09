export default async function updateProfileHandler(req, res) {
  const payload = req.body;
  const requesterEmail = JSON.parse(req.cookies.user).email;
  payload.requesterEmail = requesterEmail;
  console.log(payload);
  const response = await fetch(
    "http://localhost:3001/api/profile/edit-profile",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    }
  );
  const data = await response.json();
  res.json(data);
}
