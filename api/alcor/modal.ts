export interface WaxPrice {
  wax: {
    usd: number;
  };
}

export interface TokenPrice {
  last_price: number;
  quote_token: {
    symbol: {
      name: string;
      precision: number;
    };
  };
}
