import { describe, expect, it } from "vitest";
import { checkPairs } from "./exercise";

describe("Symbol Pair Verification", () => {
  it('Given the string "[({[]})]", when the checkPairs function is called, then it should return true', () => {
    expect(checkPairs("[({[]})]")).toBe(true);
  });

  it('Given the string "", when the checkPairs function is called, then it should return true', () => {
    expect(checkPairs("")).toBe(true);
  });

  it('Given the string "[{}", when the checkPairs function is called, then it should return false', () => {
    expect(checkPairs("[{}")).toBe(false);
  });

  it('Given the string "([)]", when the checkPairs function is called, then it should return false', () => {
    expect(checkPairs("([)]")).toBe(false);
  });
});
