import axios from "axios";
import {
  GetTableRows,
  RequestGetTableRows,
  BalanceResponse,
  RequestGetHistory,
} from "./modal";

const baseUrl = "https://chain.wax.io/v1/chain";
const eosamsterdamUrl = "https://lightapi.eosamsterdam.net";
const chainUrl = "https://api.waxsweden.org";

export const getBalance = (wallet: string) =>
  axios.get<BalanceResponse>(`${eosamsterdamUrl}/api/balances/wax/${wallet}`);

export const getTableRow = ({
  code,
  table,
  scope,
  upperBound,
  lowerBound,
  limit = 100,
}: RequestGetTableRows) => {
  const request: GetTableRows = {
    code: code,
    table: table,
    scope: scope,
    lower_bound: upperBound,
    upper_bound: lowerBound,
    reverse: false,
    show_payer: false,
    index_position: 1,
    json: true,
    key_type: "",
    limit: limit,
  };
  return axios.post(`${baseUrl}/get_table_rows`, request);
};

export const getHistory = ({
  account,
  filter,
  limit = 100,
  skip = 0,
  after,
}: RequestGetHistory) => {
  const params = {
    account,
    filter,
    limit,
    skip,
    after,
    sort: "asc",
  };

  return axios.get(`${chainUrl}/v2/history/get_actions`, { params });
};
