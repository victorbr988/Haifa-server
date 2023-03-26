import {it, expect, describe} from "vitest";

describe("primeiro teste", () => {
  it("verifica cáculo", () => {
    expect(Math.sqrt(4)).to.be.equal(2);
  });
});