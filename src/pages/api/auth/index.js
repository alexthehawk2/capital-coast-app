import { verify } from "jsonwebtoken";
export default function authHandler(req, res) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodedToken = verify(token, process.env.JWT_SECRET);
      return res
        .status(200)
        .json({ message: "Valid token", user: decodedToken, status: 200 });
    } catch (e) {
      res.status(200).json({ message: "Invalid token", status: 401 });
    }
  } else {
    return res.status(200).json({ message: "Unauthorized", status: 401 });
  }
}
