import React from "react";
import styled from "styled-components";
import Left from "../images/left.png";
import Right from "../images/right.png";

// TODO: position: relative; 를 사용하지 않고 컴포넌트 위치 지정
const Page = styled.nav`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 1000px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: 600px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const CursorButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 0.5rem;
  margin: 0;
  background: white;
  color: black;
  font-size: 0.8rem;
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  border-radius: 30px;
  padding: 0.5rem;
  margin: 0;
  background: white;
  color: black;
  font-size: 1rem;
  cursor: pointer;

  &[aria-current] {
    background: grey;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`;

// TODO: different code quality
function Pagination({ length, page, setPage }) {
  const pages = Math.ceil(length / 5);

  return (
    <>
      <Page id="pagintation">
        <CursorButton
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          src={Left}
        >
          <img src={Left} width="9rem" alt="Left" />
        </CursorButton>
        {Array(pages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <CursorButton
          onClick={() => setPage(page + 1)}
          disabled={page === pages}
        >
          <img src={Right} width="9rem" alt="Right" />
        </CursorButton>
      </Page>
    </>
  );
}

export default Pagination;
