import { Key } from "./key";

export class KeyBackSpace extends Key{
  protected input() {
    // this.onInput(this.data)
    const state = this.state;
    this.state.data = {
      ...state.data,
      content: state.data.content.slice(0, -1)
    }
  }
}