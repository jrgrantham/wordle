import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GuessedWord from "./GuessedWord";

export default function () {
  const { enteredWords } = useSelector((state) => state.user);
  const guesses = enteredWords.length;

  return (
    <Container>
      {enteredWords.map((word, index) => {
        return (
          <GuessedWord
            wordIndex={index}
            key={index}
            word={word}
            guesses={guesses}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;
