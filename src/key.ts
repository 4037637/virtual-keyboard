import Cover from "./cover"
import { KeyBoardState } from "./state";

export class Key extends Cover {
  private data: string;

  constructor(parentNode: HTMLElement, data: string, protected state: KeyBoardState) {
    super(parentNode);
    this.data = data;
    this.node.textContent = data;
    this.node.onmousedown = () => {
      this.down()
    }

    this.node.onmouseup = () => {
      this.input();
      this.up()
    }

    this.node.onmouseenter = () => {
      
    }

    this.node.onmouseleave = () => {
      
    }
  }

  handleDown() {
    this.input();
    this.down()
  }

  handleUp() {
    this.up()
  }

  protected input() {
    const state = this.state;
    this.state.data = {...this.state.data, content: state.data.content + this.data}
  }

  protected up() {}

  protected down() {}

  setData(data: string) {
    this.data = data;
    this.node.textContent = data;
  }
}