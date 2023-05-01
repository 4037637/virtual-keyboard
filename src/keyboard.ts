import Cover from "./cover";
import {Output} from "./output";
import {Board} from "./board";
import {NKeyBoardData, KeyBoardState} from "./state";
import layout from "./langs/baseLang";

export class KeyBoard extends Cover{
  private output: Output;
  private board: Board;

  private langIndex = 0;

  constructor(parentNode: HTMLElement, state: KeyBoardState) {
    super(parentNode);
    const update = (data: NKeyBoardData) => {
      this.output.content = data.content;
      const currBoard = state.langs[data.langIndex];
      if (data.shift) {
        this.board.setLang(currBoard.shift);
      } else if (data.caps) {
        this.board.setLang(currBoard.caps);
      } else {
        this.board.setLang(currBoard.base);
      }
    };
    state.onChange.add(update);
    this.output = new Output(this.node);
    this.board = new Board(this.node, layout, state);

    document.addEventListener("keydown", (el) => {
      console.log(el.code);
      this.board.handleDown(el.code);
    });

    document.addEventListener("keyup", (el) => {
      console.log(el.code);
      this.board.handleUp(el.code);
    });

    update(state.data);
  }
}
