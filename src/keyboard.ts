import Cover from "./cover"

const board = {
  'Number1': '3',
  'Number2': '45'
}

export class KeyBoard extends Cover {
  private output: Output;
  private board: Board;

  constructor(parentNode: HTMLElement) {
    super(parentNode);
    this.output = new Output(this.node)
    this.board = new Board(this.node, board, (change) => {
      this.output.content += change
    });

    document.addEventListener('keydown', (el) => {
      console.log(el.code)
    });

    document.addEventListener('keyup', (el) => {
      console.log(el.code)
    });

  }
}

export class Board extends Cover {
  constructor(parentNode: HTMLElement, boardCon: Record<string, string>, input: (change: string) => void) {
    super(parentNode);
    for (let key in boardCon) {
      new Key(this.node, boardCon[key], (change) => {
        input(change)
      });
    }

  }
}

export class Key extends Cover {
  constructor(parentNode: HTMLElement, data: string, input: (change: string) => void) {
    super(parentNode);
    this.node.textContent = data
    this.node.onmousedown = () => {

    }
    this.node.onmouseup = () => {
      input(data)
    }
  }

}

export class Output extends Cover {
  private _content: string = '';

  set content(val: string) {
    this._content = val;
    this.node.textContent = this._content
  }

  get content() {
    return this._content;
  }

  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }

}