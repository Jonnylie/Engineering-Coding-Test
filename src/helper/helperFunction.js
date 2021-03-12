const formatNumber = (number) => {
  const twoDecimalResult = (Math.round(number * 100) / 100).toFixed(2);
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  })
    .format(twoDecimalResult)
    .replace("$", "");
};

const calculateQuotePrice = (rate, amount) => {
  if (!rate) return formatNumber(0);
  const result = rate * parseInt(amount);
  return formatNumber(result);
};

export default calculateQuotePrice;
