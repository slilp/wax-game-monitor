export interface GetInGameProps {
  code: string;
  wallet: string;
}

export interface AssetInfo {
  id: string;
  name: string;
  image: string;
  value?: any;
}
