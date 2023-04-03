export const convertCurrency = (value) => {
  const toUSDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return toUSDollar.format(value);
};
