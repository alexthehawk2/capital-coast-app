import cookie from "cookie";
export default function loginHandler(req, resp) {
  resp.setHeader(
    "Set-Cookie",
    "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  );
  resp.status(200).json({ message: "Logout successfully", status: "1" });
}
