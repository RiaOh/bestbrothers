import axios from "axios";
import { useNavigate } from "react-router-dom";

const UnsplashLogin = ({ LoginHandler }) => {
  const code = new URL(window.location.href).searchParams.get("code"); //인가코드 받음.

  const CLIENT_ID = process.env.REACT_APP_ACCESS_KEY;
  const CLIENT_SECRET = process.env.REACT_APP_SECRET_KEY;
  const REDIRECT_URI =
    "http://bestbrothers-deploy.s3-website.ap-northeast-2.amazonaws.com/oauth/callback/unsplash";

  const makeFormData = (params) => {
    const searchParams = new URLSearchParams();
    Object.keys(params).forEach((key) => {
      searchParams.append(key, params[key]);
    });

    return searchParams;
  };

  const navigate = useNavigate();

  axios({
    method: "POST",
    url: "https://unsplash.com/oauth/token",
    data: makeFormData({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code: code,
    }),
  }).then((res) => {
    console.log(res);
    const ACCESS_TOKEN = res.data.access_token;
    localStorage.setItem("accessToken", ACCESS_TOKEN);
    navigate("/");
  });
  return <></>;
};

export default UnsplashLogin;
