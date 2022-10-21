import Container from "../../components/uiComponents/Container";
import { useEffect } from "react";
import axios from "axios";

// function for syncing urls
// from localstorage to cloud
const syncLocalUrls = (urls) => {
  console.log(urls)

  const config = {
    url: "https://chota.ninja/urls/syncUserurls",
    method: "post",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      url_id: ``
    }
  };

  urls.forEach(element => {
    config.data.url_id = element.id
    axios(config)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  });

};

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
          localStorage.removeItem('anonymousLinks')
          const data = await getCloudLinks();
        })();

        return () => {};
      }else{
        getCloudLinks()
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
