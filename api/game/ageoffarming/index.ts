import { getAllAssetByGame, imageUrl } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { AssetInfo } from "../modal";
import { aofCode } from "../../game";

interface MutableInfo {
  [key: string]: {
    mining: number;
    energyUse: number;
    woodUse: number;
    stoneUse: number;
    craftWoodUse: number;
    craftStoneUse: number;
  };
}

const mapToPublicContent = async (): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const allAssetInfo = await getAllAssetByGame(aofCode);
  if (allAssetInfo.data.success) {
    allAssetInfo.data.data.map((item: AtomicAssetInfo) => {
      let mutableData = {};
      if (axe.hasOwnProperty(item?.template_id)) {
        mutableData = axe?.[item?.template_id];
      } else if (pickaxe.hasOwnProperty(item?.template_id)) {
        mutableData = pickaxe?.[item?.template_id];
      } else if (spear.hasOwnProperty(item?.template_id)) {
        mutableData = spear?.[item?.template_id];
      }

      result.push({
        id: item?.template_id ?? "",
        immutableData: {
          ...item?.immutable_data,
          img: `/${aofCode}/${
            item?.immutable_data?.img === undefined
              ? item?.immutable_data?.video
              : item?.immutable_data?.img
          }.png`,
        },
        mutableData: {
          ...mutableData,
        },
        minted: item?.issued_supply || 0,
      });
    });
  }

  return result;
};

export const getPublicContent = async (): Promise<AssetInfo[]> => {
  const result = await mapToPublicContent();
  return result;
};

//should get from atomic api later

export const axe: MutableInfo = {
  ["486820"]: {
    mining: 5,
    energyUse: 2,
    woodUse: 1,
    stoneUse: 2,
    craftWoodUse: 500,
    craftStoneUse: 670,
  },
  ["486821"]: {
    mining: 11,
    energyUse: 4,
    woodUse: 2,
    stoneUse: 5,
    craftWoodUse: 430,
    craftStoneUse: 670,
  },
  ["486822"]: {
    mining: 24,
    energyUse: 10,
    woodUse: 4,
    stoneUse: 10,
    craftWoodUse: 820,
    craftStoneUse: 1300,
  },
  ["486823"]: {
    mining: 53,
    energyUse: 15,
    woodUse: 8,
    stoneUse: 22,
    craftWoodUse: 2000,
    craftStoneUse: 2680,
  },
  ["486824"]: {
    mining: 118,
    energyUse: 32,
    woodUse: 16,
    stoneUse: 45,
    craftWoodUse: 4000,
    craftStoneUse: 5360,
  },
};

export const pickaxe: MutableInfo = {
  ["486825"]: {
    mining: 5,
    energyUse: 2,
    woodUse: 2,
    stoneUse: 1,
    craftWoodUse: 650,
    craftStoneUse: 500,
  },
  ["486826"]: {
    mining: 11,
    energyUse: 4,
    woodUse: 5,
    stoneUse: 2,
    craftWoodUse: 650,
    craftStoneUse: 470,
  },
  ["486827"]: {
    mining: 24,
    energyUse: 9,
    woodUse: 10,
    stoneUse: 4,
    craftWoodUse: 1300,
    craftStoneUse: 920,
  },
  ["486829"]: {
    mining: 53,
    energyUse: 16,
    woodUse: 22,
    stoneUse: 8,
    craftWoodUse: 2600,
    craftStoneUse: 2000,
  },
  ["486830"]: {
    mining: 118,
    energyUse: 32,
    woodUse: 45,
    stoneUse: 16,
    craftWoodUse: 5200,
    craftStoneUse: 4000,
  },
};

export const spear: MutableInfo = {
  ["486831"]: {
    mining: 4,
    energyUse: 2,
    woodUse: 1,
    stoneUse: 1,
    craftWoodUse: 580,
    craftStoneUse: 580,
  },
  ["486832"]: {
    mining: 8,
    energyUse: 4,
    woodUse: 2,
    stoneUse: 2,
    craftWoodUse: 580,
    craftStoneUse: 530,
  },
  ["486833"]: {
    mining: 19,
    energyUse: 10,
    woodUse: 5,
    stoneUse: 4,
    craftWoodUse: 1060,
    craftStoneUse: 1060,
  },
  ["486834"]: {
    mining: 39,
    energyUse: 16,
    woodUse: 8,
    stoneUse: 8,
    craftWoodUse: 2120,
    craftStoneUse: 2120,
  },
  ["486835"]: {
    mining: 92,
    energyUse: 30,
    woodUse: 18,
    stoneUse: 18,
    craftWoodUse: 4240,
    craftStoneUse: 4240,
  },
};
