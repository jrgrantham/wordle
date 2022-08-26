import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getWordList, addWord, resetState } from "../store/user";

export default function () {
  const dispatch = useDispatch();
  const { input, enteredWords } = useSelector((state) => state.user);

  function reset() {
    dispatch(resetState());
  }

  function add() {
    let proceed = true;
    input.forEach((letter) => {
      if (letter.character === "") return (proceed = false);
    });
    if (proceed) dispatch(addWord());
  }

  function run() {
    if (enteredWords.length) dispatch(getWordList());
  }

  return (
    <Container>
      <button onClick={reset}>Reset</button>
      <button onClick={add}>Add word</button>
      <button onClick={run}>Run</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  button {
    margin: 10px;
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 20px;
    min-width: 80px;
    color: black;
    background-color: orange;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
  }
`;
