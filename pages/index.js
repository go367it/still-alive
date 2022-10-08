import { useEffect, useState } from "react";
import Head from "next/head";
import Container from "../components/uiComponents/Container";
import Image from "next/image";
import axios from "axios";
import cogoToast from "cogo-toast";

// icons
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [link, setLink] = useState(""); // for storing the state of input box
  const [anonymousLinks, setAnonymousLinks] = useState([]); // anonymous links which are not stored in the databasae

  useEffect(() => {
    // checking for local storage and if not there then create a new one
    if (localStorage.getItem("anonymousLinks")) {
      console.log(
        JSON.parse(localStorage.getItem("anonymousLinks")),
        "local useEff"
      );
      // updating the state of anonymousLinks which are stored in local storage
      setAnonymousLinks(JSON.parse(localStorage.getItem("anonymousLinks")));
    } else {
      // creating the local storage if the storage is not already present
      localStorage.setItem("anonymousLinks", JSON.stringify([]));
    }
  }, []);

  // function
  // for creating anonymous link
  const createAnonymousLink = () => {
    if (link != "") {
      // config for sending to the server
      const config = {
        url: "https://chota.ninja/urls/anonymous/shortner",
        method: "post",
        data: {
          redirects_to: `${link}`,
        },
      };
      // calling the api to create anonymous links
      axios(config)
        .then((res) => {
          console.log(res.data);
          const reqData = {
            shortenedLink: res.data.data.shortenedLink,
            actualLink: res.data.data.actualLink,
            id: res.data.data.id,
          };

          localStorage.setItem(
            "anonymousLinks",
            JSON.stringify([...anonymousLinks, reqData])
          );

          setAnonymousLinks([...anonymousLinks, reqData]); // updating the state
          cogoToast.success("Link shortened !");
          setLink(""); // clearing out the previuos link inside the input box
          console.log(anonymousLinks);
        })
        .catch((err) => {
          console.log(err);
          cogoToast.error("Error !");
        });
    } else {
      cogoToast.error("Please Enter Link !");
    }
  };

  // function for copying to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    cogoToast.success("Copied !");
  };

  return (
    <div>
      <Head>
        <title>Chota Ninja</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ninja.ico" />
      </Head>

      {/* Homepage Hero Section  */}
      <Container>
        <div className="md:flex justify-between place-items-center">
          <content className="space-y-6">
            <h2 className=" font-Ribeye text-6xl">
              <span className="text-blue-600">Simple-Ize</span> Your <br />{" "}
              advanced link.
            </h2>
            <p className="text-gray-500 max-w-lg">
              Share your content to audience and maximize potential of your
              social bio link in just one click.
            </p>
          </content>
          <Image
            className=" absolute"
            src="/Images/homepage.svg"
            alt="homepage"
            width="550"
            height="450"
          />
        </div>
      </Container>

      {/* Create Anonymous Link  */}
      <div className="mt-6 bg-[#FED81D]">
        <hr />
        <Container>
          {/* link input section  */}
          <div className="create-link flex gap-6 py-6">
            <input
              value={link}
              placeholder="Shorten your link"
              className="px-3 py-3 outline-none rounded-lg w-full text-gray-600"
              onChange={(e) => setLink(e.target.value)}
            />
            <button
              onClick={() => createAnonymousLink()}
              className="bg-blue-600 px-10 py-3 rounded-lg text-white cursor-pointer hover:bg-blue-500 focus:ring 
              focus:ring-blue-300 transform duration-300"
            >
              Shorten
            </button>
          </div>

          {anonymousLinks.length > 0 ? (
            <div className="link-contianer bg-white my-6 divide-y rounded-lg">
              {anonymousLinks.map((element) => {
                return (
                  <div
                    key={element.id}
                    className="link-holder px-4 py-6  flex justify-between place-items-center"
                  >
                    <p className=" max-w-xs truncate">{element.actualLink}</p>
                    <div className="flex justify-center place-items-center gap-6">
                      <p className="text-blue-600">{element.shortenedLink}</p>
                      <button
                        onClick={() => copyToClipboard(element.shortenedLink)}
                        className="bg-blue-600 px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-blue-500 focus:ring 
                      focus:ring-blue-300 transform duration-300"
                      >
                        <ClipboardDocumentIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </Container>
        <hr />
      </div>
    </div>
  );
}
