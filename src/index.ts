import {KeyBoard} from "./keyboard";

const keyboard = new KeyBoard(document.body);

(window as any).keyboard = keyboard;