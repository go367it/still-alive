import { GoogleLogin } from "react-google-login";
import axios from "axios";

export default function LoginGoogle() {
  const onGoogleSuccess = (response) => {
    const access_token = response.tokenId;

    axios({
      method: "post",
      url: "https://chota.ninja/user/auth/google",
      data: {
        token: response.tokenId,
      },
    })
      .then((res) => {
        const { user, token } = res.data.data;

        // Save the JWT inside a cookie
        localStorage.setItem("token", token);
        console.log(res.data)

        window.location.href = "/";
      })
      .catch((err) => {
        // throw new Error(err);
        console.log(err)
      });
  };
  const onGoogleFailure = (err) => {
    //  console.log(err,99900909);
    console.log(err)
  };

  return (
    <div>
      <GoogleLogin
        clientId="199477342550-hurgvv8q5ud9lgv9megn131k5b9pvf8c.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={onGoogleSuccess}
        onFailure={onGoogleFailure}
        className="google-login-button"
      />
    </div>
  );
}
