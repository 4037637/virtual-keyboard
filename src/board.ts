import Cover from "./cover";
import {Key} from "./key";
import {KeyLang} from "./keyLanguage";
import {KeyBackSpace} from "./keyBackSpace";
import {KeyShift} from "./keyShift";
import {KeyCapsLock} from "./keyCapsLock";
import {KeyTabulation} from "./keyTabulation";
import {KeyAlt} from "./keyAlt";
import {KeyControl} from "./keyControl";
import {KeyEnter} from "./keyEnter";
import { KeyBoardState } from "./state";

const classMap: Record<string, typeof Key> = {
  "Lang": KeyLang,
  "Backspace": KeyBackSpace,
  "ShiftLeft": KeyShift,
  "ShiftRight": KeyShift,
  "CapsLock": KeyCapsLock,
  "Tab": KeyTabulation,
  "Enter": KeyEnter,
  "AltLeft": KeyAlt,
  "AltRight": KeyAlt,
  "ControlLeft": KeyControl,
  "ControlRight": KeyControl
};

export class Board extends Cover {

  private mapKey: Record<string, Key> = {};
  onNextLang: ()=> void;
  onBackSpace: ()=> void;

  constructor(parentNode: HTMLElement, layoutConfig: Array<Array<string>>, state: KeyBoardState) {
    super(parentNode);
      layoutConfig.forEach(row=>{
        const rowView = new Cover(this.node, "div", "keyboard_row");
        row.forEach(keyIn=>{
          const KeyConstructor = classMap[keyIn] || Key;
          const key = new KeyConstructor(rowView.node, keyIn, state);
          this.mapKey[keyIn] = key;
        });
      });
  }

  setLang(boardCon: Record<string, string>) {
    for (const keyIn in boardCon) {
      this.mapKey[keyIn].setData(boardCon[keyIn]);
    }
  }

  handleDown(elemCode: string) {
    const currKey = this.mapKey[elemCode];
    if (currKey) {
      currKey.handleDownHighlight();
    }
  }

  handleUp(elemCode: string) {
    const currKey = this.mapKey[elemCode];
    if (currKey) {
      currKey.handleUpHighlight();
    }
  }
}