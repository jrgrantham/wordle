import { createSlice } from "@reduxjs/toolkit";
import words from "an-array-of-english-words";

const initialState = {
  wordLength: 5,
  input: new Array(5).fill({
    character: "",
  }),
  enteredWords: [],
  wordList: [],
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetState: (user, _) => {
      user.wordLength = initialState.wordLength;
      user.input = initialState.input;
      user.enteredWords = initialState.enteredWords;
      user.wordList = initialState.wordList;
    },
    editGuess: (user, action) => {
      const { letterIndex, value } = action.payload;
      user.input[letterIndex].character = value;
      user.input[letterIndex].status = "excluded";
    },
    addWord: (user, _) => {
      user.enteredWords.push(user.input);
      user.input = new Array(5).fill({
        character: "",
      });
    },

    toggleGuessedLetter: (user, action) => {
      const next = {
        excluded: "included",
        included: "correct",
        correct: "excluded",
      };
      const { wordIndex, letterIndex } = action.payload;
      const { status } = user.enteredWords[wordIndex][letterIndex];
      const update = next[status];
      user.enteredWords[wordIndex][letterIndex].status = update;
    },

    getWordList: (user, _) => {
      const length = user.wordLength;
      const sizedWords = words.filter((word) => word.length === length);
      const excludedLetters = [];
      const includedLetters = [];
      const positionedLetters = [];

      user.enteredWords.forEach((word) => {
        word.forEach((letter, letterIndex) => {
          const { character, status } = letter;
          if (!positionedLetters[letterIndex])
            positionedLetters[letterIndex] = { correct: "", incorrect: [] };

          if (status === "correct") {
            positionedLetters[letterIndex].correct = character;
            if (!includedLetters.includes(character))
              includedLetters.push(character);
          }

          if (status === "included") {
            if (!positionedLetters[letterIndex].incorrect.includes(character))
              positionedLetters[letterIndex].incorrect.push(character);
            if (!includedLetters.includes(character))
              includedLetters.push(character);
          }
          if (
            status === "excluded" &&
            !excludedLetters.includes(character) &&
            !includedLetters.includes(character)
          )
            excludedLetters.push(letter.character);
        });
      });
      console.log(positionedLetters);
      console.log(includedLetters);
      console.log(excludedLetters);

      function checkLetters(word) {
        let result = true;
        for (let i = 0; i < word.length; i++) {
          if (
            (positionedLetters[i].correct &&
              positionedLetters[i].correct !== word[i]) ||
            positionedLetters[i].incorrect.includes(word[i])
          ) {
            result = false;
            break;
          }
        }
        return result;
        // return true if letters match
      }

      function excluded(word) {
        let result = true;
        for (let i = 0; i < word.length; i++) {
          if (excludedLetters.includes(word[i])) {
            result = false;
            break;
          }
        }
        return result;
      }

      function included(word) {
        let result = true;
        includedLetters.forEach((letter) => {
          let included = false;
          for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) included = true;
          }
          if (!included) result = false
        });
        return result;
        // return true if word contains all included letters
      }

      const wordList = [];
      // loop through each word of correct length
      sizedWords.forEach((word) => {
        const checkedLetter = checkLetters(word);
        const checkExcluded = excluded(word);
        const checkIncluded = included(word);

        if (checkedLetter && checkExcluded && checkIncluded)
          wordList.push(word);
      });
      console.log(wordList);
      user.wordList = wordList;
    },
  },
});

export const {
  resetState,
  editGuess,
  addWord,
  toggleGuessedLetter,
  getWordList,
} = slice.actions;

export default slice.reducer;
