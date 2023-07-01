import axios from "axios";
import https from "https";
const getAPI = async (url) => {
  axios.defaults.withCredentials = true;
  axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
  const response = await axios.get(url);
  return response.data;
};

export default getAPI;
