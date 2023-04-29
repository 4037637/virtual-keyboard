class Cover <NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor (parentNode: HTMLElement | null, tagName = 'div', className = '', content = '') {
    const elem = document.createElement(tagName);
    elem.className = className;
    elem.innerHTML = content;

    if (parentNode) {
      parentNode.append(elem)
    }

    this.node = elem as NodeType;
  }

  destroy(): void {
    this.node.remove();
  }
}

export default Cover;