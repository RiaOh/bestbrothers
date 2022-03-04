import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import searchicon from "../images/searchicon.png";

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  background-color: #fff;
  padding: 40px 50px;
  box-sizing: border-box;
`;

const SearchIcon = styled.img`
  ${horizontalCenter}
  right: 10px;
  width: 40px;
  height: 40px;
`;

const RemoveIcon = styled.span`
  ${horizontalCenter}
  right: 25px;
  width: 20px;
  height: 20px;
  background-position: -389px -29px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 99%;
  height: 40px;
  background-color: #eaebed;
  font-weight: 100;
  font-size: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  border: none;
  padding-left: 30px;
`;

function SearchInputBar({
  onAddKeyword,
  handleKeyword,
  Searchingkeyword,
  setIsClicked,
  isClicked,
}) {
  const [keyword, setKeyword] = useState(Searchingkeyword);
  useEffect(() => setKeyword(Searchingkeyword), [Searchingkeyword]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleClearKeyword = () => {
    setKeyword("");
  };

  return (
    <Container>
      <InputContainer>
        <Input
          onClick={() => setIsClicked(!isClicked)}
          placeholder="Search photos"
          value={keyword}
          onChange={handleInputChange}
        />
        {keyword && <RemoveIcon onClick={handleClearKeyword} />}
      </InputContainer>
      {/* TODO: button 또는 input 사용 */}
      <Link to={keyword === "" ? "/" : `/photos/${keyword}`}>
        <SearchIcon
          src={searchicon}
          onClick={() => {
            handleKeyword(keyword);
            onAddKeyword(keyword);
          }}
        ></SearchIcon>
      </Link>
    </Container>
  );
}

export default SearchInputBar;
