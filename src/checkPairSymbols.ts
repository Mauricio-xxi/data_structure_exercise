import { Stack } from "./stack";
interface ISymbolPairs {
  [key: string]: string;
}
const symbolPairs: ISymbolPairs = {
  "[": "]",
  "(": ")",
  "{": "}",
};

export class CheckPairSymbolsStack {
  #stack: Stack<string> = new Stack<string>();
  #pairs = symbolPairs;
  #openKeys = Object.keys(symbolPairs);

  isEmpty(): boolean {
    return this.#stack.empty();
  }

  isOpenKey(symbol: string): boolean {
    return this.#openKeys.includes(symbol);
  }

  isMatchingClosingSymbol(symbol: string): boolean {
    if (this.isEmpty()) return false;
    const key = this.#stack.peek();
    return this.#pairs[key] === symbol;
  }

  push(symbol: string) {
    this.#stack.push(symbol);
  }

  pop() {
    this.#stack.pop();
  }
}
