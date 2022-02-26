export interface WaxPrice {
  wax: {
    usd: number;
  };
}

export interface WaxPriceInTHB {
  data: {
    2300: {
      quote: {
        2809: {
          price: number;
        };
      };
    };
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
