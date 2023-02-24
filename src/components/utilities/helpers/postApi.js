import axios from "axios";

const postAPI = async (url, data) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(url, data);
  return response.data;
};

export default postAPI;
