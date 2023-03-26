import axios from "axios";

const getAPI = async (url) => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(url);
  return response.data;
};

export default getAPI;
