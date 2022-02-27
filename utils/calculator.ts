interface ExchangePrice {
  [key: string]: {
    WAX: number;
    USD: number;
    THB: number;
  };
}

export const calculateTHB = (
  prices: ExchangePrice,
  amount: number,
  token: string
) => {
  const thb = prices?.[token]?.THB;
  return thb ? thb * amount : 0;
};

export const calculateWAX = (
  prices: ExchangePrice,
  amount: number,
  token: string
) => {
  const thb = prices?.[token]?.WAX;
  return thb ? thb * amount : 0;
};
