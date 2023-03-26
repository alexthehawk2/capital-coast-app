import axios from "axios";
import Cookies from "js-cookie";
const checkAuth = async () => {
  const token = Cookies.get("token");
  if (!token) {
    return null;
  }
  const response = await axios.get("/api/auth", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default checkAuth;
