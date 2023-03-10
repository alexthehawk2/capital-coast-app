export default async function updateProfileHandler(req, res) {
  if (req.body.type === "profileChange") {
    const payload = req.body.userData;

    const response = await fetch(
      "http://localhost:3001/api/profile/edit-profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    res.json(data);
  } else if (req.body.type === "emailChangeRequest") {
    const payload = req.body;
    delete payload.type;
    // const response = await fetch(
    //   "http://localhost:3001/api/auth/request-verify-email",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: payload,
    //   }
    // );
    // const data = await response.json();
    // res.json(data);
    res.json({
      message: "Email change request sent to admin for approval.",
      status: 1,
    });
  } else if (req.body.type === "emailUpdateCodeVerify") {
    const payload = {
      email: req.body.email,
      enteredCode: req.body.emailUpdateCode,
    };
    const response = await fetch(
      "http://localhost:3001/api/auth/verify-email?type=change-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    const data = await response.json();
    res.json(data);
  } else if (req.body.type === "activationCodeVerify") {
    const response = await fetch(
      "http://localhost:3001/api/auth/verify-email?type=change-email-to",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.json(data);
  }
}
