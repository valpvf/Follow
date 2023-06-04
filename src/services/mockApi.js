import axios from "axios";

axios.defaults.baseURL =
    "https://64793789a455e257fa630948.mockapi.io";
//  params.append("page", 1);
//  params.append("limit", 10);

export const getUserApi = async () => {
    
    return await axios.get("card", {params:{page:2, limit:3}}).then((res) => {
      const { data } = res;
    return data;
  });
};



