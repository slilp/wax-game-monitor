import { RequestGetTableRows } from "../../eos/modal";
import { getTableRow } from "../../eos";

export const game = "spacecraftxc";

export const configRequest: RequestGetTableRows = {
  code: game,
  table: "config",
  scope: game,
  upperBound: "",
  lowerBound: "",
  limit: 100,
};

export const stakeAssetRequest = (wallet: string): RequestGetTableRows => ({
  code: game,
  table: "stakedassets",
  scope: game,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

export const stakeCrewRequest = (wallet: string): RequestGetTableRows => ({
  code: game,
  table: "stakedcrews",
  scope: game,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

export const stakePlanetRequest = (wallet: string): RequestGetTableRows => ({
  code: game,
  table: "stakedplanet",
  scope: game,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

export const userRequest = (wallet: string): RequestGetTableRows => ({
  code: game,
  table: "users",
  scope: game,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

export const getPublicContent = async (): Promise<any> =>
  await getTableRow(configRequest);

export const getWalletContent = async (wallet: string): Promise<any> =>
  await Promise.all([
    getTableRow(userRequest(wallet)),
    getTableRow(stakeAssetRequest(wallet)),
    getTableRow(stakeCrewRequest(wallet)),
    getTableRow(stakePlanetRequest(wallet)),
  ]);
