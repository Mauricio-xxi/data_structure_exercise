import { CheckPairSymbolsStack } from "./checkPairSymbols";

export const checkPairs = (data: string): boolean => {
  const checkPairsStack = new CheckPairSymbolsStack();

  for (let symbol of data) {
    if (checkPairsStack.isEmpty() || checkPairsStack.isOpenKey(symbol)) {
      checkPairsStack.push(symbol);
      continue;
    }
    if (checkPairsStack.isMatchingClosingSymbol(symbol)) {
      checkPairsStack.pop();
      continue;
    }
    return false;
  }
  return checkPairsStack.isEmpty();
};

