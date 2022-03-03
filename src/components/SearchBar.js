import React, { useState, useEffect } from "react";
import History from "./SearchHistory";
import SearchInputBar from "./SearchInputBar";
import LoginButton from "./LoginButton";
import "./SearchBar.css";
import Logo from "./Logo";

function SearchBar({ handleKeyword, Searchingkeyword }) {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  //검색어 추가
  const handleAddKeyword = (text) => {
    console.log("text", text);
    if (text === "") {
      return;
    } else {
      const newKeyword = {
        id: Date.now(),
        text: text,
      };
      setKeywords([newKeyword, ...keywords]);
    }
  };

  //검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="nav">
        <Logo handleKeyword={handleKeyword} />
        <SearchInputBar
          onAddKeyword={handleAddKeyword}
          handleKeyword={handleKeyword}
          Searchingkeyword={Searchingkeyword}
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        ></SearchInputBar>
        <LoginButton
          handleKeyword={handleKeyword}
          Searchingkeyword={Searchingkeyword}
        />
      </div>
      {isClicked !== true ? (
        <></>
      ) : (
        <History
          keywords={keywords}
          onClearKeywords={handleClearKeywords}
          onRemoveKeyword={handleRemoveKeyword}
          handleKeyword={handleKeyword}
        />
      )}
    </div>
  );
}

export default SearchBar;
