import postAPI from "@/components/utilities/helpers/postApi";

export default function changePasswordHandler(req, resp) {
  postAPI("http://localhost:3001/api/auth/change-password", req.body).then(
    (res) => {
      resp.json({ message: res.message, status: res.status });
    }
  );
}
