import Container from "../../components/uiComponents/Container";
import { useEffect } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";

// function for syncing urls
// from localstorage to cloud
const syncLocalUrls = (urls) => {
  cogoToast.loading("Syncing local urls!");
};

// getting links from cloud
const getCloudLinks = () => {
  cogoToast.loading("Loading ...");

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
      return res.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function Dashboard() {
  // function when
  useEffect(() => {
    // checking if webtoken is present or not
    if (localStorage.getItem("token")) {
      // checking if local urls are there or not
      if (localStorage.getItem("anonymousLinks")) {
        // calling and storing the anonymous links
        const anonymousLinks = JSON.parse(
          localStorage.getItem("anonymousLinks")
        );
        (async () => {
          await syncLocalUrls(anonymousLinks);
          const data = getCloudLinks();
        })();

        return () => {};
      }
    } else {
      window.location = "/login";
    }
  }, []);

  return (
    <div>
      <Container>Dashboard</Container>
    </div>
  );
}
