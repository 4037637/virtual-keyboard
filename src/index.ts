import {KeyBoard} from "./keyboard";
import {KeyBoardState} from "./state";
import './style.css';

const state = new KeyBoardState({
  content: "",
  langIndex: 0,
  shift: false,
  caps: false
});

const keyboard = new KeyBoard(document.body, state);

(window as any).keyboard = keyboard;