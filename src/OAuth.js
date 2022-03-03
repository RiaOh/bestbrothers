const CLIENT_ID = process.env.REACT_APP_ACCESS_KEY;
const REDIRECT_URI =
  "http://bestbrothers-deploy.s3-website.ap-northeast-2.amazonaws.com/oauth/callback/unsplash";

export const UNSPLASH_AUTH_URL = `https://unsplash.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=public&scope=public+write_likes`;
