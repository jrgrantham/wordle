import { Provider } from "react-redux";
import { store } from "./store";
import styled from "styled-components";

import Confirm from "./components/Confirm";
import Keyboard from "./components/Keyboard";
import Title from "./components/Title";
import Word from "./components/GuessedWords";
import WordList from "./components/WordList";
import InputWord from "./components/InputWord";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Title />
        <Word />
        <InputWord />
        {/* <Keyboard /> */}
        <Confirm />
        <WordList />
      </Container>
    </Provider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid red; */
  margin: auto;
`;
