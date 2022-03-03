import React from "react";
import styled from "styled-components";
import Logoimg from "../images/logo.png";
import { useNavigate } from "react-router-dom";

export const Photo = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 30px;
  margin-top: 20px;
  cursor: pointer;
`;

function Logo({ handleKeyword }) {
  const navigate = useNavigate();
  return (
    <div>
      <span
        onClick={() => {
          handleKeyword("");
          navigate("/");
        }}
      >
        <Photo alt="" src={Logoimg} />
      </span>
    </div>
  );
}

export default Logo;
