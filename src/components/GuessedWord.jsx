import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import WordLetter from "./GuessedLetter";

export default function (props) {
  const { word, wordIndex, guesses } = props;

  return (
    <Container>
      {word.map((letter, index) => {
        return (
          <WordLetter
            wordIndex={wordIndex}
            letterIndex={index}
            key={index}
            letter={letter}
            guesses={guesses}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
