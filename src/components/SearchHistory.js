import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HistoryContainer = styled.div`
  padding: 18px;
  font-size: 20px;
  font-weight: 400;
  color: grey;
`;
const HeaderContainer = styled.div`
  overflow: hidden;
`;
const Title = styled.span`
  float: left;
  font-weight: 400;
  color: #666;
  font-size: 20px;
`;
const RemoveText = styled.span`
  float: right;
  color: #a7a7a7;
`;

const ListContainer = styled.ul`
  margin: 10px 0;
`;

//&는 자기 자신을 나타냄
//즉, 나 자신(li)들에서 마지막 요소 값을 제외한 값에 margin-bottom 속성 지정
const KeywordContainer = styled.li`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Keyword = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

function SearchHistory({
  keywords,
  onRemoveKeyword,
  onClearKeywords,
  handleKeyword,
}) {
  console.log("keyword", keywords);
  if (keywords.length === 0) {
    return <HistoryContainer>최근 검색된 기록이 없습니다.</HistoryContainer>;
  }

  return (
    <HistoryContainer>
      <HeaderContainer>
        <Title>최근 검색어</Title>
        <RemoveText onClick={onClearKeywords}>전체삭제</RemoveText>
      </HeaderContainer>
      <ListContainer>
        {keywords.map(({ id, text }) => {
          return (
            <KeywordContainer key={id}>
              <Link
                to={`/photos/${text}`}
                style={{ textDecoration: "none", color: "grey" }}
              >
                <Keyword
                  onClick={() => {
                    handleKeyword(text);
                  }}
                >
                  {text}
                </Keyword>
              </Link>
            </KeywordContainer>
          );
        })}
      </ListContainer>
    </HistoryContainer>
  );
}

export default SearchHistory;
