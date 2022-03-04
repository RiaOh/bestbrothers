import React, { useState, useEffect } from "react";
import axios from "axios";
import LikeOnePhoto from "../components/LikeOnePhoto";
import styled from "styled-components";
import Pagination from "./Pagination";

export const PhotoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(300px, auto);
  justify-items: center;
  align-items: center;
  grid-gap: 1rem;
  height: 100vh;
  grid-row-gap: 60px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

function SearchPage({ Searchingkeyword }) {
  const [photoList, setPhotoList] = useState([]);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 3;

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          "Cache-Control": "public, max-age=600",
        },
        params: {
          query: Searchingkeyword,
          client_id: process.env.REACT_APP_ACCESS_KEY,
          per_page: 40,
        },
      })
      .then((res) => {
        // console.log(res.data.results);
        let obj = {};
        let photos = [];
        for (let i = 0; i < res.data.results.length; i++) {
          obj["id"] = res.data.results[i].id;
          obj["url"] = res.data.results[i].urls.thumb;
          photos.push(obj);
          obj = {};
        }
        // console.log(photos);
        setPhotoList(photos);
      });
  }, [Searchingkeyword]);

  // TODO: 페이지당 아이템 개수를 동적으로 설정
  return (
    <div>
      <PhotoContainer id="photocontainer">
        {photoList.slice(offset, offset + 8).map((photo, id) => {
          return (
            <div key={id}>
              <LikeOnePhoto photo={photo} />
            </div>
          );
        })}
      </PhotoContainer>
      <Pagination length={photoList.length} page={page} setPage={setPage} />
    </div>
  );
}

export default SearchPage;
