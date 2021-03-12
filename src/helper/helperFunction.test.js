import calculateQuotePrice from "./helperFunction";

test("calculateQuotePriceCorrectly", () => {
  expect(calculateQuotePrice(200.055, 10)).toBe("2,000.55");
});
test("calculateQuotePriceCorrectly2ndTry", () => {
  expect(calculateQuotePrice(2324.12, 12)).toBe("27,889.44");
});
