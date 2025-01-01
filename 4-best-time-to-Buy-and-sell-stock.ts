function maxProfit(prices: number[]): number {
  let profit = 0;
  let lowest = Infinity;

  prices.forEach((price) => {
    profit = Math.max(profit, price - lowest);
    lowest = Math.min(lowest, price);
  });

  return profit;
}
