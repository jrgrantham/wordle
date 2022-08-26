import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function () {
  const { wordList } = useSelector((state) => state.user);

  return (
    <Container>
      {wordList.map((word, index) => {
        return (
          <div className="word" key={index}>
            <p>{word}</p>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin-top: 10px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;

  .word {
    display: flex;
    justify-content: center;
    width: 20%;
  }
  p {
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin: 5px;
  }
`;
