import React from "react";
import styled from "styled-components";

export const Photo = styled.img`
  border-radius: 5px;
  background-color: #fffaf0;
  height: 300px;
  width: 400px;
`;

export const LikeButton = styled.button`
  color: blue;
  background: pink;
`;

function OnePhoto({ photo }) {
  return (
    <div>
      <Photo alt="" src={photo} />
    </div>
  );
}

export default OnePhoto;
