import Cover from "./cover"

export class Output extends Cover{

  set content(val: string) {
    this.node.textContent = val;
  }

  constructor(parentNode: HTMLElement) {
    super(parentNode);
  }
}