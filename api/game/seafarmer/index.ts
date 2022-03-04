import { RequestGetHistory } from "../../eos/modal";
import { getHistory } from "../../eos";
import { getAllAssetByGame, imageUrl } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { AssetInfo } from "../modal";
import { seaCode, spxCode } from "../../game";

interface MutableInfo {
  [key: string]: {
    Consumption: number;
    Power: number;
  };
}

const CONTRACT = "sfblockchain";

export const getActiveUserHistory = (
  skip: number,
  limit: number,
  after: string
): RequestGetHistory => ({
  account: CONTRACT,
  filter: `${CONTRACT}:mine`,
  skip,
  limit,
  after,
});

const mapToPublicContent = async (): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const allAssetInfo = await getAllAssetByGame(seaCode);
  if (allAssetInfo.data.success) {
    allAssetInfo.data.data.map((item: AtomicAssetInfo) => {
      let mutableData = {};
      if (item?.immutable_data.name === "Magnet") {
        mutableData = magnet?.[item?.template_id];
      } else if (item?.immutable_data.name === "Fishing rod") {
        mutableData = fishingRod?.[item?.template_id];
      } else if (item?.immutable_data.name === "Pickaxe") {
        mutableData = pickaxe?.[item?.template_id];
      }

      result.push({
        id: item?.template_id ?? "",
        immutableData: {
          ...item?.immutable_data,
          img: `/${seaCode}/${item?.immutable_data?.img}.png`,
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

export const getActiveUser = async (
  skip: number,
  limit: number,
  after: string
): Promise<any[]> => {
  const result = await getHistory(getActiveUserHistory(skip, limit, after));
  return result?.data?.actions;
};

// export const getWalletContent = async (wallet: string): Promise<any> =>
//   await Promise.all([
//     getTableRow(userRequest(wallet)),
//     getTableRow(stakeAssetRequest(wallet)),
//     getTableRow(stakeCrewRequest(wallet)),
//     getTableRow(stakePlanetRequest(wallet)),
//   ]);

//should get from atomic api later

export const fishingRod: MutableInfo = {
  ["435543"]: {
    Power: 10,
    Consumption: 1.5,
  },
  ["435544"]: {
    Power: 20,
    Consumption: 3,
  },
  ["435545"]: {
    Power: 40,
    Consumption: 6,
  },
  ["435546"]: {
    Power: 80,
    Consumption: 12,
  },
  ["435547"]: {
    Power: 160,
    Consumption: 24,
  },
};

export const pickaxe: MutableInfo = {
  ["435532"]: {
    Power: 10,
    Consumption: 1.5,
  },
  ["435534"]: {
    Power: 20,
    Consumption: 3,
  },
  ["435535"]: {
    Power: 40,
    Consumption: 6,
  },
  ["435537"]: {
    Power: 80,
    Consumption: 12,
  },
  ["435538"]: {
    Power: 160,
    Consumption: 24,
  },
};

export const magnet: MutableInfo = {
  ["435555"]: {
    Power: 10,
    Consumption: 1.5,
  },
  ["435556"]: {
    Power: 20,
    Consumption: 3,
  },
  ["435557"]: {
    Power: 40,
    Consumption: 6,
  },
  ["435558"]: {
    Power: 80,
    Consumption: 12,
  },
  ["435559"]: {
    Power: 160,
    Consumption: 24,
  },
};
