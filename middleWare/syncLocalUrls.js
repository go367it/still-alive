import axios from "axios";
import { toast } from "react-toastify";
// function for syncing urls
// from localstorage to cloud
const syncLocalUrls = (urls) => {
  console.log(urls);

  const config = {
    url: "https://chota.ninja/urls/syncUserurls",
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      url_id: ``,
    },
  };

  urls.forEach((element) => {
    config.data.url_id = element.id;
    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Network error!");
      });
  });
};

export default syncLocalUrls;
