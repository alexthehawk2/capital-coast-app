import postAPI from "@/components/utilities/helpers/postApi";
import cookie from "cookie";
export default function signupHandler(req, resp) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";
  const apiRoute = endpoint + "/api/auth/signup";
  postAPI(apiRoute, req.body).then((res) => {
    console.log(res);
    if (res.status === "1") {
      resp.setHeader(
        "Set-Cookie",
        cookie.serialize("token", res.token, {
          path: "/",
          maxAge: 60 * 60,
          sameSite: "strict",
          secure: true,
          httpOnly: true,
        })
      );

      // Send a JSON response with a message and status code
      resp.status(200).json({ message: res.message, status: "1" });
    } else {
      resp.status(200).json({ message: res.message, status: "0" });
    }
  });
}
