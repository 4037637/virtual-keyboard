import Cover from "./cover"

export class Output extends Cover{
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'keyboard_output');
  }
  
  set content(val: string) {
    this.node.textContent = val;
  }
}