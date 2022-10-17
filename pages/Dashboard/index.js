import Container from "../../components/uiComponents/Container";
import { useEffect } from "react";
import axios from "axios";
import cogoToast from 'cogo-toast'

// function for syncing urls 
// from localstorage to cloud
const syncLocalUrls = () => {

    cogoToast.loading('Syncing Urls!')

}

export default function Dashboard() {

    // function when 
  useEffect(() => {

    cogoToast.loading('Loading ...')

    console.log(JSON.parse( localStorage.getItem('anonymousLinks')))
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log('test')
  }, []);

  return (
    <div>
      <Container>Dashboard</Container>
    </div>
  );
}
