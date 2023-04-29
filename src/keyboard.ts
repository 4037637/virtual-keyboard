import Cover from "./cover"
import {KeyBoardState} from "./keyboard-state";

// Languages

export const board = {
  'letter1': 'q',
  'letter2': 'w',
  'Lang': 'Lang',
  'Backspace': 'Backspace'
}

export const boardRU = {
  'letter1': 'й',
  'letter2': 'ц',
  'Lang': 'Lang',
  'Backspace': 'Backspace'
}

// KeyBoard and elements

export class KeyBoard extends Cover {
  private output: Output;
  private board: Board;
  // private langs = [
  //   board,
  //   boardRU
  // ];
  private langIndex = 0;

  constructor(parentNode: HTMLElement, state: KeyBoardState) {
    super(parentNode);
// 
    state.onChange.add((data) => {
      this.output.content = data.content;
      this.board.changeLang(state.langs[data.langIndex])
    })
// 
    this.output = new Output(this.node)

    this.board = new Board(this.node, state.langs[this.langIndex], state);

    // this.board = new Board(this.node, this.langs[this.langIndex], (change) => {
    //   this.output.content += change
    // });

    // // Language changing
    // this.board.nextLang = () => {
    //   this.langIndex = (this.langIndex + 1) % this.langs.length;
    //   this.board.changeLang(this.langs[this.langIndex])
    // }

    // // Letter deleting
    // this.board.backSpace = () => {
    //   this.output.content = this.output.content.slice(0, -1);
    // }

    document.addEventListener('keydown', (el) => {
      console.log(el.code)
      this.board.handleDown(el.code)
    });

    document.addEventListener('keyup', (el) => {
      console.log(el.code)
      this.board.handleUp(el.code)
    });

  }
}

export class Board extends Cover {

  private mapKey: Record<string, Key> = {}
  nextLang: () => void;
  backSpace: () => void;

  constructor(parentNode: HTMLElement, boardCon: Record<string, string>, state: KeyBoardState/* input: (change: string) => void */) {
    super(parentNode);

    for (let keyIn in boardCon) {
      let key: Key = null
      switch (keyIn) {
        case 'Lang':
          key = new KeyLang(this.node, boardCon[keyIn], state);
          break;
          case 'Backspace':
          key = new KeyBackSpace(this.node, boardCon[keyIn], state)
          break;
        default:
          key = new Key(this.node, boardCon[keyIn], state/* (change) => {
            // input(change)
          }*/);
      }
      this.mapKey[keyIn] = key
    }
  }

  changeLang(boardCon: Record<string, string>) {
    for (let keyIn in boardCon) {
      this.mapKey[keyIn].setLang(boardCon[keyIn]);
    }
  }

  handleDown(keyIn: string) {
    const currKey = this.mapKey[keyIn]
    if (currKey) {currKey.handleDown()}
  }

  handleUp(keyIn: string) {
    const currKey = this.mapKey[keyIn]
    if (currKey) {currKey.handleUp()}
  }
}

export class Key extends Cover {

  // private input: (change: string) => void
  private data: string;

  constructor(parentNode: HTMLElement, data: string, protected state: KeyBoardState) {
    super(parentNode);
    this.data = data;
    // this.input = input;
    this.node.textContent = data

    this.node.onmousedown = () => {
    }

    this.node.onmouseup = () => {
      this.inputLang()
    }
  }

  handleDown() {
    // this.input(this.data)
  }


  handleUp() {}

  protected inputLang() {
    // this.input(this.data)
    const state = this.state;
    state.info = {...state.info, content: state.info.content + this.data}
  }

  setLang(data: string) {
    this.data = data
    this.node.textContent = data
  }
}

class KeyLang extends Key {
  protected input() {
    // this.input(this.data)
    const state = this.state;
    state.info = {
      ...state.info, 
      langIndex: (state.info.langIndex + 1) % state.langs.length
    }
  }
} 

class KeyBackSpace extends Key {
  protected input() {
    // this.input(this.data)
    const state = this.state;
    state.info = {
      ...state.info, 
      content: state.info.content.slice(0, -1)
    }
  }
} 

export class Output extends Cover {
  private _content: string = '';

  set content(val: string) {
    this._content = val;
    this.node.textContent = val;
  }

  get content() {
    return this._content;
  }

  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}