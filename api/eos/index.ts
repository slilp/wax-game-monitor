import axios from "axios";
import { GetTableRows, RequestGetTableRows } from "./modal";

const baseUrl = "https://chain.wax.io/v1/chain";

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
