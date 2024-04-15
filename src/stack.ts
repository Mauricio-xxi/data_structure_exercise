export class Stack<T> {
  #elements: T[] = [];

  push(element: T): number {
    return this.#elements.push(element);
  }
  pop() {
    return this.#elements.pop();
  }
  peek(): T {
    return this.#elements[this.size() - 1];
  }
  size() {
    return this.#elements.length;
  }
  empty(): boolean {
    return this.size() === 0;
  }
}
