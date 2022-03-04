export interface GetTableRows {
  code: string;
  table: string;
  scope: string;
  lower_bound: string;
  upper_bound: string;
  reverse: boolean;
  show_payer: boolean;
  index_position: number;
  json: true;
  key_type: string;
  limit: number;
}

export interface RequestGetHistory {
  account: string;
  filter: string;
  skip: number;
  limit: number;
  after: string;
}

export interface RequestGetTableRows {
  code: string;
  table: string;
  scope: string;
  lowerBound: string;
  upperBound: string;
  limit: number;
}

export interface BalanceResponse {
  account_name: string;
  balances: BalanceInfo[];
}

interface BalanceInfo {
  amount: string;
  currency: string;
  decimals: string;
}
