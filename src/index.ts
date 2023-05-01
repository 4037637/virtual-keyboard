console.log('I work')

import {KeyBoard} from "./keyboard";
import {KeyBoardState, NKeyBoardData} from "./state";
import "./style.css";

const def: NKeyBoardData = {
  content: "",
  langIndex: 0,
  shift: false,
  caps: false
};

class KeyBoardInfo implements NKeyBoardData{
  content: string;
  langIndex: number;
  shift: boolean;
  caps: boolean;
  constructor(info: NKeyBoardData) {
    if (typeof info.content != "string") throw new Error("Wrong content type. It should be 'string'!");
    if (typeof info.langIndex != "number") throw new Error("Wrong langIndex type. It should be 'number'!");
    if (typeof info.shift != "boolean") throw new Error("Wrong shift type. It should be 'boolean'!");
    if (typeof info.caps != "boolean") throw new Error("Wrong caps type. It should be 'boolean'!");

    this.content = info.content;
    this.langIndex = info.langIndex;
    this.shift = info.shift;
    this.caps = info.caps;
  }

  static loadInfo() {
    const local = localStorage.getItem("localState");
    return new KeyBoardInfo(JSON.parse(local));
  }

  saveInfo() {
    localStorage.setItem("localState", JSON.stringify(this));
  }
}

let info: KeyBoardInfo;
try {
  info = KeyBoardInfo.loadInfo();
}
catch(el) {
  info = new KeyBoardInfo(def);
}

const state = new KeyBoardState(info);

const keyboard = new KeyBoard(document.body, state);

(window as any).keyboard = keyboard;

window.onbeforeunload = () => {
  new KeyBoardInfo(state.data).saveInfo();
};