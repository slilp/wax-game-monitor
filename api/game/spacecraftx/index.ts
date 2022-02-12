import { RequestGetTableRows } from "../../eos/modal";
import { getTableRow } from "../../eos";
import { getAssetTemplateInfo, imageUrl } from "../../atomic";
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
  const itool: any[] = rawData?.itool_settings;
  const templates: string[] = [];
  const allTool = tool.concat(crew).concat(itool);
  allTool.map((item: SpaceCraftConfig) => {
    templates.push(item.key);
  });

  const templateInfo = await getAssetTemplateInfo(templates);

  if (templateInfo.data.success) {
    templateInfo.data.data.map((item: any) => {
      result.push({
        id: item.template_id + "",
        name: item.name + "",
        image: `${imageUrl}/${item.immutable_data.img}`,
      });
    });
  }
  return result.map((asset: AssetInfo) => {
    const value = allTool.find((i) => String(i.key) === asset.id)?.value;
    return {
      ...asset,
      value,
    };
  });
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
