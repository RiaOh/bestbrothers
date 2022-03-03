import React, { useState, useEffect } from "react";
import axios from "axios";
import OnePhoto from "./OnePhoto";
import styled from "styled-components";
import "./MainAllPhotolist.css";

export const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(300px, auto);
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  height: 100vh;
  margin: 20px;
`;

function MainAllPhotolist() {
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos", {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`,
        },
        params: {
          per_page: 30,
        },
      })
      .then((res) => {
        // console.log(res.data);
        let photos = [];
        for (let i = 0; i < res.data.length; i++) {
          photos.push(res.data[i].urls.thumb);
        }
        // console.log(photos);
        setPhotoList(photos);
      });
  }, []);

  return (
    <div>
      <PhotoContainer id="photocontainer">
        {photoList.map((photo, id) => {
          return (
            <div key={id}>
              <OnePhoto photo={photo} />
            </div>
          );
        })}
      </PhotoContainer>
    </div>
  );
}

export default MainAllPhotolist;
