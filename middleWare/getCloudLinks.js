import axios from "axios";
import { toast } from "react-toastify";
// getting links from cloud
const getCloudLinks = () => {
  // config for calling the api
  const config = {
    url: "https://chota.ninja/urls/mylinks",
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  // calling the api for getting the links
  axios(config)
    .then((res) => {
      console.log(res.data.data);
      toast.success("Fetched Urls!");
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
      toast.error("Network error!");
    });
};

export default getCloudLinks;
