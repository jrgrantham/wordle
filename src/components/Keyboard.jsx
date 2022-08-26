// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import KeyboardButton from "./KeyboardButton";

// export default function () {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     const keyboardWidth = document.getElementById("keyboard").offsetWidth;
//     setWidth((keyboardWidth - 60) / 10);
//   });

//   return (
//     <Container id="keyboard">
//       <div className="row">
//         <KeyboardButton width={width} letter="q" />
//         <KeyboardButton width={width} letter="w" />
//         <KeyboardButton width={width} letter="e" />
//         <KeyboardButton width={width} letter="r" />
//         <KeyboardButton width={width} letter="t" />
//         <KeyboardButton width={width} letter="y" />
//         <KeyboardButton width={width} letter="u" />
//         <KeyboardButton width={width} letter="i" />
//         <KeyboardButton width={width} letter="o" />
//         <KeyboardButton width={width} letter="p" />
//       </div>
//       <div className="row">
//         <KeyboardButton width={width} letter="a" />
//         <KeyboardButton width={width} letter="s" />
//         <KeyboardButton width={width} letter="d" />
//         <KeyboardButton width={width} letter="f" />
//         <KeyboardButton width={width} letter="g" />
//         <KeyboardButton width={width} letter="h" />
//         <KeyboardButton width={width} letter="j" />
//         <KeyboardButton width={width} letter="k" />
//         <KeyboardButton width={width} letter="l" />
//       </div>
//       <div className="row">
//         <KeyboardButton width={width} letter="z" />
//         <KeyboardButton width={width} letter="x" />
//         <KeyboardButton width={width} letter="c" />
//         <KeyboardButton width={width} letter="v" />
//         <KeyboardButton width={width} letter="b" />
//         <KeyboardButton width={width} letter="n" />
//         <KeyboardButton width={width} letter="m" />
//       </div>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* border: 1px solid red; */
//   width: 99vw;
//   max-width: 500px;
//   align-items: center;
//   margin-bottom: 5px;
//   .row {
//     display: flex;
//   }
// `;
