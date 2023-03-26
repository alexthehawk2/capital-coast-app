import cookie from "cookie";

export default async function updateProfileHandler(req, res) {
  if (req.body.type === "profileChange") {
    const payload = req.body.userData;

    const response = await fetch(
      "https://capital-coast-server.onrender.com/api/profile/edit-profile",
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
    const response = await fetch(
      "https://capital-coast-server.onrender.com/api/auth/request-change-email",
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
  } else if (req.body.type === "emailUpdateCodeVerify") {
    const payload = {
      email: req.body.email,
      enteredCode: req.body.emailUpdateCode,
    };
    const response = await fetch(
      "https://capital-coast-server.onrender.com/api/auth/verify-email?type=change-email",
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
      "https://capital-coast-server.onrender.com/api/auth/verify-email?type=change-email-to",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );
    const data = await response.json();
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", data.token, {
        path: "/",
        maxAge: 60 * 60,
        sameSite: "strict",
        secure: true,
        httpOnly: true,
      })
    );
    res.json(data);
  }
}
