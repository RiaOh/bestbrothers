import React, { useState } from "react";
import MainPage from "./pages/MainPage.js";
import SearchPage from "./pages/SearchPage.js";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import UnsplashLogin from "./UnsplashLogin.js";

// TODO: jsx 확장자 사용
function App() {
  const [Searchingkeyword, setSearchingKeyword] = useState("");

  const handleKeyword = (word) => {
    setSearchingKeyword(word);
  };

  return (
    <div className="App">
      <SearchBar
        handleKeyword={handleKeyword}
        Searchingkeyword={Searchingkeyword}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/photos/:id"
          element={<SearchPage Searchingkeyword={Searchingkeyword} />}
        />
        <Route path="/oauth/callback/unsplash" element={<UnsplashLogin />} />
      </Routes>
    </div>
  );
}

export default App;
