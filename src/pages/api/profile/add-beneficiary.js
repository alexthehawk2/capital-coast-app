export default async function addBeneficiaryHandler(req, res) {
  const response = await fetch(
    "http://localhost:3001/api/account/add-beneficiary",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: req.cookies.token,
      },
      body: JSON.stringify(req.body),
    }
  );
  const data = await response.json();
  res.status(200).json({ ...data });
}
