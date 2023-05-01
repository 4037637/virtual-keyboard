import Cover from "./cover";
import { KeyBoardState } from "./state";

export class Key extends Cover {
  private data: string;

  constructor(parentNode: HTMLElement, data: string, protected state: KeyBoardState) {
    super(parentNode, "div", "keyboard_key");
    this.data = data;
    this.node.textContent = data;
    this.node.onmousedown = () => {
      this.down();
      document.addEventListener("mouseup", () => {
        this.input();
        this.up();
      }, {once: true});
    };

    this.node.onmouseenter = () => {
      this.node.classList.add("keyboard_key_hover");
    };

    this.node.onmouseleave = () => {
      this.node.classList.remove("keyboard_key_hover");
    };
  }

  handleDown() {
    this.input();
    this.down();
  }

  handleUp() {
    this.up();
  }

  protected input() {
    const state = this.state;
    this.state.data = {...this.state.data, content: state.data.content + this.data};
  }

  protected up() {
    this.node.classList.remove("keyboard_key_down");
  }

  protected down() {
    this.node.classList.add("keyboard_key_down");
  }

  setData(data: string) {
    this.data = data;
    this.node.textContent = data;
  }
}