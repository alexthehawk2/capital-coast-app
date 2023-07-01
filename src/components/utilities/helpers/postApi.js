import axios from "axios";
import https from "https";

const postAPI = async (url, data) => {
  console.log("postAPI", url, data);
  axios.defaults.withCredentials = true;
  axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  const response = await axios.post(url, data);
  return response.data;
};

export default postAPI;
