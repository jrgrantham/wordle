import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InputLetter from "./InputLetter";

export default function () {
  const { input } = useSelector((state) => state.user);

  return (
    <Container>
      {input.map((letter, index) => {
        return (
          <InputLetter
            letterIndex={index}
            key={index}
            letter={letter}
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
