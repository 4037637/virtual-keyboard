import { Key } from "./key";

export class KeyCapsLock extends Key{
  protected input() {
    const state = this.state;
    state.data = {
      ...state.data,
      caps: !state.data.caps
    };
    if (state.data.caps) {
      this.node.classList.add("keyboard_key_down");
    } else {
      this.node.classList.remove("keyboard_key_down");
    }
  }

  /*protected down() {
  }

  protected up() {
  }*/
}