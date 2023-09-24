export const formatNumber = (amount: number) =>
  new Intl.NumberFormat("en-CA").format(amount);
