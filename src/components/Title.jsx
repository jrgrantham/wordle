import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function () {
  return (
    <Container>
      <h3>Jean vs Mally</h3>
    </Container>
  );
}

const Container = styled.div`
/* border: 1px solid red; */
h3 {
  margin: 15px;
  color: orange;
  font-size: 35px;
  font-style: italic;
}
`;
