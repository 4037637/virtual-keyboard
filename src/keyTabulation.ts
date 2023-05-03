import { Key } from "./key";

export class KeyTabulation extends Key{
  protected input() {
    const state = this.state;
    this.state.data = {
      ...state.data,
      content: state.data.content + " "
    };
  }
}