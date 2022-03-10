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

function LikeOnePhoto({ photo }) {
  // TODO: api 응답에 포함된 좋아요 상태 연동
  const [isLike, setIsLike] = useState(false);

  // TODO: add catch to promise
  const handleLike = async(id) => {
    // try-catch 구문을 이용한 예외처리가 필요합니다.
    try {
      if (!localStorage.getItem("accessToken")) {
        Swal.fire({
          icon: "error",
          title: "로그인해주세요",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        const callForLikeAPI = await axios.post(`https://api.unsplash.com/photos/${id}/like`,
          { id: id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        const result = callForLikeAPI.data;
        // TODO:: result 값에 따른 상태 연동이 필요합니다.
        
      }
    }catch (error) {
      console.error(error);
    } finally {}

    // if (!localStorage.getItem("accessToken")) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "로그인해주세요",
    //     showConfirmButton: false,
    //     timer: 1000,
    //   });
    // } else {
    //   axios
    //     .post(
    //       `https://api.unsplash.com/photos/${id}/like`,
    //       { id: id },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //         },
    //       }
    //     )
    //     .then((res) => console.log(res))
    // }
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
  const likeHandler = () => {
    setIsLike(!isLike);
  };

  const changeLikeStatus = () => {
    if(isLike) {
      handleUnLike(photo.id);
    }else {
      handleLike(photo.id);
    }
  }

  return (
    <div className="photoandlike">
      <Photo alt="photo" src={photo.url} />
      <LikeButton
        className={isLike ? "likebutton btn1" : "btn1"}
        // onClick={() => {
        //   {
        //     !isLike ? handleLike(photo.id) : handleUnLike(photo.id);
        //   }
        //   {
        //     localStorage.getItem("accessToken") ? likeHandler() : <></>;
        //   }
        // }}
        onClick={() => changeLikeStatus()}
      >
        Like
      </LikeButton>
    </div>
  );
}

export default LikeOnePhoto;
