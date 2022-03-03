import React from "react";
import { UNSPLASH_AUTH_URL } from "../OAuth";
import { useNavigate } from "react-router-dom";
import "./LoginButton.css";

function LoginButton({ handleKeyword }) {
  const navigate = useNavigate();
  return (
    <div>
      {localStorage.getItem("accessToken") ? (
        <button
          className="loginbutton"
          onClick={() => {
            localStorage.removeItem("accessToken");
            handleKeyword("");
            navigate("/");
          }}
        >
          Log out
        </button>
      ) : (
        <button className="loginbutton">
          <a className="loginlink" href={UNSPLASH_AUTH_URL}>
            Log in
          </a>
        </button>
      )}
    </div>
  );
}

export default LoginButton;
