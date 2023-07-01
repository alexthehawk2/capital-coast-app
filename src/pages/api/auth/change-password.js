import postAPI from "@/components/utilities/helpers/postApi";

export default function changePasswordHandler(req, resp) {
  const endpoint =
    process.env.NODE_ENVIRONMENT === "production"
      ? "https://65.2.166.175"
      : "http://localhost:3001";
  postAPI(endpoint + "/api/auth/change-password", req.body).then((res) => {
    resp.json({ message: res.message, status: res.status });
  });
}
