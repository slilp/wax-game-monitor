import { RequestGetTableRows } from "../../eos/modal";
import { getTableRow } from "../../eos";
import { getAllAssetByGame, imageUrl } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { AssetInfo } from "../modal";
import { spxCode } from "../../game";
interface SpaceCraftConfig {
  key: string;
  value: object;
}

export const configRequest: RequestGetTableRows = {
  code: spxCode,
  table: "config",
  scope: spxCode,
  upperBound: "",
  lowerBound: "",
  limit: 100,
};

export const stakeAssetRequest = (wallet: string): RequestGetTableRows => ({
  code: spxCode,
  table: "stakedassets",
  scope: spxCode,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

export const stakeCrewRequest = (wallet: string): RequestGetTableRows => ({
  code: spxCode,
  table: "stakedcrews",
  scope: spxCode,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

export const stakePlanetRequest = (wallet: string): RequestGetTableRows => ({
  code: spxCode,
  table: "stakedplanet",
  scope: spxCode,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

export const userRequest = (wallet: string): RequestGetTableRows => ({
  code: spxCode,
  table: "users",
  scope: spxCode,
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

const mapToPublicContent = async (rawData: any): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const tool: SpaceCraftConfig[] = rawData?.minting_price;
  const crew: SpaceCraftConfig[] = rawData?.crew_settings;
  const itool: SpaceCraftConfig[] = rawData?.itool_settings;
  const allTool: SpaceCraftConfig[] = tool.concat(crew).concat(itool);

  const allAssetInfo = await getAllAssetByGame(spxCode);
  if (allAssetInfo.data.success) {
    allTool.map((item: SpaceCraftConfig) => {
      const tempData = allAssetInfo.data.data.find(
        (i: AtomicAssetInfo) => i.template_id === item.key.toString()
      );

      result.push({
        id: tempData?.template_id ?? "",
        immutableData: {
          ...item,
          ...tempData?.immutable_data,
          img: `/${spxCode}/${tempData?.immutable_data?.img}.png`,
        },
        mutableData: tempData?.mutable_data,
        minted: tempData?.issued_supply || 0,
      });
    });
  }

  return result;
};

export const getPublicContent = async (): Promise<AssetInfo[]> => {
  const response = await getTableRow(configRequest);
  const result = await mapToPublicContent(response.data.rows[0]);
  return result;
};

export const getWalletContent = async (wallet: string): Promise<any> =>
  await Promise.all([
    getTableRow(userRequest(wallet)),
    getTableRow(stakeAssetRequest(wallet)),
    getTableRow(stakeCrewRequest(wallet)),
    getTableRow(stakePlanetRequest(wallet)),
  ]);
