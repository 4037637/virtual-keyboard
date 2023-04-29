import {KeyBoard} from "./keyboard";
import {KeyBoardState} from "./keyboard-state";

const state = new KeyBoardState({
  content: '',
  langIndex: 0
});
const keyboard = new KeyBoard(document.body, state);

(window as any).keyboard = keyboard;