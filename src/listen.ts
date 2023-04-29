class Listen <ListenerType> {
  private listeners: Array<(parameters: ListenerType) => void>;
  constructor() {
    this.listeners = []
  }

  add(listener: (parameters: ListenerType) => void) {
    this.listeners.push(listener);
  }

  remove(listener: (parameters: ListenerType) => void) {
    this.listeners = this.listeners.filter((elem) => elem !== listener)
  }

  edit(parameters: ListenerType) {
    this.listeners.forEach((listener) => listener(parameters));
  }
}

export default Listen;