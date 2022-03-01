import { getAllAssetWithNoMintByGame, imageUrl } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { AssetInfo } from "../modal";
import { roboCode } from "../../game";

interface MutableInfo {
  [key: string]: {
    mining: number;
    recUse: number;
    regUse: number;
  };
}

const mapToPublicContent = async (): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const allAssetInfo = await getAllAssetWithNoMintByGame(roboCode);
  if (allAssetInfo.data.success) {
    allAssetInfo.data.data.map((item: AtomicAssetInfo) => {
      let mutableData = {};
      if (item?.immutable_data.type === "Metal") {
        mutableData = magneto?.[item?.template_id];
      } else if (item?.immutable_data.type === "Gold") {
        mutableData = drilloid?.[item?.template_id];
      } else if (item?.immutable_data.type === "Crystal") {
        mutableData = spark?.[item?.template_id];
      }

      result.push({
        id: item?.template_id ?? "",
        immutableData: {
          ...item?.immutable_data,
          img: `${imageUrl}/${item?.immutable_data?.img}`,
        },
        mutableData: {
          ...mutableData,
        },
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

//should get from atomic api later

export const magneto: MutableInfo = {
  ["443357"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
  ["443358"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
};

export const drilloid: MutableInfo = {
  ["443353"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
  ["443354"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
  ["443355"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
};

export const spark: MutableInfo = {
  ["443350"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
  ["443351"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
  ["443352"]: {
    mining: 5,
    recUse: 10,
    regUse: 1.5,
  },
};
