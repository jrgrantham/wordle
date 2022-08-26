import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editGuess, setWordLetter } from "../store/user";

export default function (props) {
  const dispatch = useDispatch();
  const { wordLength } = useSelector((state) => state.user);

  const { letter, letterIndex } = props;
  const { character } = letter;
  const id = "input" + letterIndex;
  const nextId =
    letterIndex + 1 === wordLength ? id : "input" + (letterIndex + 1);
  const prevId = letterIndex === 0 ? id : "input" + (letterIndex - 1);

  function handleChange(e) {
    const value = e.target.value;
    dispatch(editGuess({ letterIndex, value }));
    // console.log("change", e.keyCode);
    // if (e.keyCode !== 8) document.getElementById(nextId).focus();
  }

  function move(e) {
    let focus;
    if (e.keyCode !== 8) focus = nextId;
    else if (e.keyCode === 8 && character) focus = id;
    else focus = prevId;

    if (e.keyCode === 8 && letterIndex > 0) {
      dispatch(
        editGuess({
          letterIndex: letterIndex - 1,
          value: "",
        })
      );
    }
    document.getElementById(focus).focus();
  }

  return (
    <Container>
      <input
        id={id}
        maxLength="1"
        className="letter"
        value={character}
        onChange={handleChange}
        onKeyUp={move}
      />
    </Container>
  );
}

const Container = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  .letter {
    width: 25px;
    height: 25px;
    text-align: center;
    border: none;
    border-radius: 5px;
    margin: auto;
    font-size: 20px;
    font-weight: bold;
  }
`;
