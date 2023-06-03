import axios from "axios";

axios.defaults.baseURL =
  "https://64793789a455e257fa630948.mockapi.io";

export const getUserApi = async () => {
  return await axios.get("card").then((res) => {
      const { data } = res;
    return data;
  });
};



