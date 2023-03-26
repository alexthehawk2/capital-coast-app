import postAPI from "@/components/utilities/helpers/postApi";

export default function changePasswordHandler(req, resp) {
  postAPI(
    "https://capital-coast-server.onrender.com/api/auth/change-password",
    req.body
  ).then((res) => {
    resp.json({ message: res.message, status: res.status });
  });
}
