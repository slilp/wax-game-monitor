import { RequestGetTableRows } from "../../eos/modal";
import { getTableRow } from "../../eos";
import { getAllAssetByGame, imageUrl } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { AssetInfo } from "../modal";
import { seaCode } from "../../game";

const mapToPublicContent = async (): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const allAssetInfo = await getAllAssetByGame(seaCode);
  if (allAssetInfo.data.success) {
    console.log(JSON.stringify(allAssetInfo.data.data));
    allAssetInfo.data.data.map((item: AtomicAssetInfo) => {
      result.push({
        id: item?.template_id ?? "",
        immutableData: {
          ...item?.immutable_data,
          img: `${imageUrl}/${item?.immutable_data?.img}`,
        },
        mutableData: item?.mutable_data,
      });
    });
  }

  return result;
};

export const getPublicContent = async (): Promise<AssetInfo[]> => {
  const result = await mapToPublicContent();
  return result;
};

// export const getWalletContent = async (wallet: string): Promise<any> =>
//   await Promise.all([
//     getTableRow(userRequest(wallet)),
//     getTableRow(stakeAssetRequest(wallet)),
//     getTableRow(stakeCrewRequest(wallet)),
//     getTableRow(stakePlanetRequest(wallet)),
//   ]);
