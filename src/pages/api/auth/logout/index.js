import cookie from "cookie";
export default function loginHandler(req, resp) {
  resp.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

  resp.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expires: new Date(0),
      path: "/",
    })
  );
  resp.status(200).json({ message: "Logout successfully", status: "1" });
}
