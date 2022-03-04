import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "./LikeOnePhoto.css";
import Swal from "sweetalert2";

export const Photo = styled.img`
  border-radius: 5px;
  height: 300px;
  width: 400px;
`;

export const LikeButton = styled.button`
  color: light-grey;
  width: 40px;
  height: 30px;
  border-radius: 40px;
  border: none;
  font-size: 15px;
`;

// TODO: add catch to promise
const handleLike = (id) => {
  if (!localStorage.getItem("accessToken")) {
    Swal.fire({
      icon: "error",
      title: "로그인해주세요",
      showConfirmButton: false,
      timer: 1000,
    });
  } else {
    axios
      .post(
        `https://api.unsplash.com/photos/${id}/like`,
        { id: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => console.log(res));
  }
};

const handleUnLike = (id) => {
  axios
    .delete(
      `https://api.unsplash.com/photos/${id}/like`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
      { id: id }
    )
    .then((res) => console.log(res));
};

function LikeOnePhoto({ photo }) {
  // TODO: api 응답에 포함된 좋아요 상태 연동
  const [isLike, setIsLike] = useState(false);

  const likeHandler = () => {
    setIsLike(!isLike);
  };

  return (
    <div id="photoandlike">
      <Photo alt="" src={photo.url} />
      <LikeButton
        className={isLike === true ? "likebutton btn1" : "btn1"}
        onClick={() => {
          // eslint-disable-next-line no-lone-blocks
          {
            isLike === false ? handleLike(photo.id) : handleUnLike(photo.id);
          }
          // eslint-disable-next-line no-lone-blocks
          {
            localStorage.getItem("accessToken") ? likeHandler() : <></>;
          }
        }}
      >
        Like
      </LikeButton>
    </div>
  );
}

export default LikeOnePhoto;
