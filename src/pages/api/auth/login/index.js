import postAPI from "@/components/utilities/helpers/postApi";
import cookie from "cookie";
export default function loginHandler(req, resp) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";
  const apiRoute = endpoint + "/api/auth/login";

  postAPI(apiRoute, req.body).then((res) => {
    if (res.status === "1") {
      resp.setHeader(
        "Set-Cookie",
        cookie.serialize("token", res.token, {
          path: "/",
          maxAge: 60 * 60,
          sameSite: "strict",
          // secure: true,
          httpOnly: true,
        })
      );

      // Send a JSON response with a message and status code
      resp
        .status(200)
        .json({ message: "Login successfully", status: "1", token: res.token });
    } else {
      resp.status(200).json({ message: "Invalid credentials", status: "0" });
    }
  });
}
