// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import styled from "styled-components";
// import { toggleKeyboardLetter } from "../store/user";

// export default function (props) {
//   const { letter, width } = props;
//   const dispatch = useDispatch();
//   const status = useSelector((state) => state.user.letters[letter]);

//   // console.log(letter, status === false);

//   const colors = {
//     [false]: "#606060",
//     [true]: "orange",
//     [undefined]: "#a1a1a1",
//   };
//   const color = colors[status];

//   const next = {
//     [false]: true,
//     [true]: undefined,
//     [undefined]: false,
//   };

//   function toggle() {
//     dispatch(
//       toggleKeyboardLetter({
//         letter: letter,
//         status: next[status],
//       })
//     );
//   }

//   return (
//     <Container color={color} width={width} onClick={toggle}>
//       {/* <button onClick={toggle} className="letter"> */}
//       {letter}
//       {/* </button> */}
//     </Container>
//   );
// }

// const Container = styled.button`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   border: none;
//   /* border: 1px solid red; */
//   border-radius: 5px;
//   width: ${(props) => props.width}px;
//   padding: 0 8px;
//   height: 40px;
//   margin: 3px;
//   background-color: ${(props) => props.color};
//   color: white;
//   font-weight: bold;
//   font-size: 18px;
//   cursor: pointer;
// `;
