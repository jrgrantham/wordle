import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setWordLetter, toggleGuessedLetter } from "../store/user";

export default function (props) {
  const dispatch = useDispatch();
  const { letter, letterIndex, wordIndex, guesses } = props;
  const { character, status } = letter;
  const display = character ? character.toUpperCase() : "";

  const colors = {
    excluded: "#606060",
    correct: "MediumSeaGreen",
    included: "orange",
  };
  const color = colors[status];

  function toggle() {
    if (wordIndex + 1 === guesses)
      dispatch(
        toggleGuessedLetter({
          letterIndex,
          wordIndex,
        })
      );
  }
  
  return (
    <Container onClick={toggle} color={color}>
      <p className="letter">{display}</p>
    </Container>
  );
}

const Container = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  width: 35px;
  height: 35px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
