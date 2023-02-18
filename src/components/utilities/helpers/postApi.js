import axios from "axios";

const postAPI = async (url, data) => {
  const response = await axios.post(url, data);
  return response.data;
};

export default postAPI;
