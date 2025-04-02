import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getSession = async () => {
  const response = await axios.get(`${API_BASE_URL}/session`, {
    withCredentials: true,
  });

  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(
    `${API_BASE_URL}/login`,
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post(
    `${API_BASE_URL}/logout`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

export const loginGoogle = async () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  const scope = "openid profile email";
  const responseType = "code";
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${encodeURIComponent(
    scope
  )}&access_type=offline&prompt=consent`;
  window.location.href = url;
};

export const loginFacebook = async () => {
  const clientId = import.meta.env.VITE_FACEBOOK_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_FACEBOOK_REDIRECT_URI;
  const scope = "email";
  const url = `https://www.facebook.com/v10.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
    scope
  )}`;
  window.location.href = url;
};

export const loginGithub = async () => {
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;
  const scope = "read:user user:email";
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
    scope
  )}`;
  window.location.href = url;
};
