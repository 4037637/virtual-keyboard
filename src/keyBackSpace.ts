import { Key } from "./key";

export class KeyBackSpace extends Key{
  protected input() {
    const state = this.state;
    console.log('I am backspace')
    this.state.data = {
      ...state.data,
      content: state.data.content.slice(0, -1)
    };
  }
}