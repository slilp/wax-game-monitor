export interface GetInGameProps {
  code: string;
  wallet: string;
}

export interface AssetInfo {
  id: string;
  immutableData?: any;
  mutableData?: any;
  minted: number;
}

export interface AssetWithProfit extends AssetInfo {
  profit: {
    wax: number;
    thb: number;
  };
}
