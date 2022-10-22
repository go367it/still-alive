import Container from "../../components/uiComponents/Container";
import { useEffect } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import syncLocalUrls from "../../middleWare/syncLocalUrls";
import getCloudLinks from "../../middleWare/getCloudLinks";

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
        // syncing local urls to cloud
        (async () => {
          await syncLocalUrls(anonymousLinks); // calling api for syncing local urls
          localStorage.removeItem("anonymousLinks"); // clearing localStorage
          toast.success("Sync successfull");
          const data = await getCloudLinks(); // calling api for cloud urls
        })();

        return () => {};
      } else {
        getCloudLinks(); // calling api for cloud urls
      }
    } else {
      // changing the location if the token is not present
      window.location = "/login";
    }
  }, []);

  return (
    <div>
      <Container>Dashboard</Container>
    </div>
  );
}
