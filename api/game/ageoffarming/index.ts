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

const extra = 3;

export const axe: MutableInfo = {
  ["486820"]: {
    mining: 5,
    energyUse: extra * 3,
    woodUse: 1,
    stoneUse: 2,
    craftWoodUse: 500,
    craftStoneUse: 670,
  },
  ["486821"]: {
    mining: 11,
    energyUse: extra * 6,
    woodUse: 2,
    stoneUse: 5,
    craftWoodUse: 500 + 430,
    craftStoneUse: 670 + 670,
  },
  ["486822"]: {
    mining: 24,
    energyUse: extra * 12,
    woodUse: 4,
    stoneUse: 10,
    craftWoodUse: 500 + 430 + 820,
    craftStoneUse: 670 + 670 + 1300,
  },
  ["486823"]: {
    mining: 53,
    energyUse: extra * 24,
    woodUse: 8,
    stoneUse: 22,
    craftWoodUse: 500 + 430 + 820 + 2000,
    craftStoneUse: 670 + 670 + 1300 + 2680,
  },
  ["486824"]: {
    mining: 118,
    energyUse: extra * 48,
    woodUse: 16,
    stoneUse: 45,
    craftWoodUse: 500 + 430 + 820 + 2000 + 4000,
    craftStoneUse: 670 + 670 + 1300 + 2680 + 5360,
  },
};

export const pickaxe: MutableInfo = {
  ["486825"]: {
    mining: 5,
    energyUse: extra * 3,
    woodUse: 2,
    stoneUse: 1,
    craftWoodUse: 650,
    craftStoneUse: 500,
  },
  ["486826"]: {
    mining: 11,
    energyUse: extra * 6,
    woodUse: 5,
    stoneUse: 2,
    craftWoodUse: 650 + 650,
    craftStoneUse: 500 + 470,
  },
  ["486827"]: {
    mining: 24,
    energyUse: extra * 12,
    woodUse: 10,
    stoneUse: 4,
    craftWoodUse: 650 + 650 + 1300,
    craftStoneUse: 500 + 470 + 920,
  },
  ["486830"]: {
    mining: 53,
    energyUse: extra * 24,
    woodUse: 22,
    stoneUse: 8,
    craftWoodUse: 650 + 650 + 1300 + 2600,
    craftStoneUse: 500 + 470 + 920 + 2000,
  },
  ["486829"]: {
    mining: 118,
    energyUse: extra * 48,
    woodUse: 45,
    stoneUse: 16,
    craftWoodUse: 650 + 650 + 1300 + 2600 + 5200,
    craftStoneUse: 500 + 470 + 920 + 2000 + 4000,
  },
};

export const spear: MutableInfo = {
  ["486831"]: {
    mining: 4,
    energyUse: extra * 3,
    woodUse: 1,
    stoneUse: 1,
    craftWoodUse: 580,
    craftStoneUse: 580,
  },
  ["486832"]: {
    mining: 8,
    energyUse: extra * 6,
    woodUse: 2,
    stoneUse: 2,
    craftWoodUse: 580 + 580,
    craftStoneUse: 580 + 530,
  },
  ["486833"]: {
    mining: 19,
    energyUse: extra * 12,
    woodUse: 5,
    stoneUse: 4,
    craftWoodUse: 580 + 580 + 1060,
    craftStoneUse: 580 + 530 + 1060,
  },
  ["486834"]: {
    mining: 39,
    energyUse: extra * 24,
    woodUse: 8,
    stoneUse: 8,
    craftWoodUse: 580 + 580 + 1060 + 2120,
    craftStoneUse: 580 + 530 + 1060 + 2120,
  },
  ["486835"]: {
    mining: 92,
    energyUse: extra * 48,
    woodUse: 18,
    stoneUse: 18,
    craftWoodUse: 580 + 580 + 1060 + 2120 + 4240,
    craftStoneUse: 580 + 530 + 1060 + 2120 + 4240,
  },
};
