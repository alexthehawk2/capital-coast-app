import axios from "axios";
import cookie from "cookie";

export default async function updateProfileHandler(req, res) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";

  if (req.body.type === "profileChange") {
    const payload = req.body.userData;

    try {
      const response = await axios.post(
        endpoint + "/api/profile/edit-profile",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      res.json(data);
    } catch (error) {
      // Handle error
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else if (req.body.type === "emailChangeRequest") {
    const payload = req.body;
    delete payload.type;

    try {
      const response = await axios.post(
        endpoint + "/api/auth/request-change-email",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      res.json(data);
    } catch (error) {
      // Handle error
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else if (req.body.type === "emailUpdateCodeVerify") {
    const payload = {
      email: req.body.email,
      enteredCode: req.body.emailUpdateCode,
    };

    try {
      const response = await axios.post(
        endpoint + "/api/auth/verify-email?type=change-email",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      res.json(data);
    } catch (error) {
      // Handle error
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  } else if (req.body.type === "activationCodeVerify") {
    try {
      const response = await axios.post(
        endpoint + "/api/auth/verify-email?type=change-email-to",
        req.body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
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
    } catch (error) {
      // Handle error
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  }
}
