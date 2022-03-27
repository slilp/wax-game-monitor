import { getAllAssetByGame } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { AssetInfo } from "../modal";
import { sailorCode } from "../../game";

interface MutableInfo {
  [key: string]: {
    mining: number;
    miningOptional?: number;
    duration: number;
    dubUse: number;
    fuelUse: number;
    durationOptional?: number;
    dubUseOptional?: number;
    fuelUseOptional?: number;
    craftDubUse: number;
    craftWreckUse: number;
  };
}

const mapToPublicContent = async (): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const allAssetInfo = await getAllAssetByGame(sailorCode);
  if (allAssetInfo.data.success) {
    allAssetInfo.data.data.map((item: AtomicAssetInfo) => {
      let mutableData = {};
      if (oilRig.hasOwnProperty(item?.template_id)) {
        mutableData = oilRig?.[item?.template_id];
      } else if (shipExpidition.hasOwnProperty(item?.template_id)) {
        mutableData = shipExpidition?.[item?.template_id];
      }

      result.push({
        id: item?.template_id ?? "",
        immutableData: {
          ...item?.immutable_data,
          img: `/${sailorCode}/${item?.immutable_data?.img}.png`,
        },
        mutableData: {
          ...mutableData,
        },
        minted: item?.issued_supply || 0,
      });

      if (shipExpidition.hasOwnProperty(item?.template_id)) {
        mutableData = shipTrawl?.[item?.template_id];
        result.push({
          id: item?.template_id ?? "",
          immutableData: {
            ...item?.immutable_data,
            img: `/${sailorCode}/${item?.immutable_data?.img}.png`,
          },
          mutableData: {
            ...mutableData,
          },
          minted: item?.issued_supply || 0,
        });
      }
    });
  }

  return result;
};

export const getPublicContent = async (): Promise<AssetInfo[]> => {
  const result = await mapToPublicContent();
  return result;
};

//should get from atomic api later

export const shipTrawl: MutableInfo = {
  ["399288"]: {
    mining: 3.749,
    duration: 2,
    dubUse: 1,
    fuelUse: 1,
    craftDubUse: 0,
    craftWreckUse: 0,
  },
  ["399289"]: {
    mining: 3.749,
    duration: 2,
    dubUse: 1,
    fuelUse: 1,
    craftDubUse: 0,
    craftWreckUse: 0,
  },
  ["437275"]: {
    mining: 3.749,
    duration: 4,
    dubUse: 1,
    fuelUse: 1,
    craftDubUse: 75,
    craftWreckUse: 225,
  },
  ["437276"]: {
    mining: 3.749,
    duration: 4,
    dubUse: 1,
    fuelUse: 1,
    craftDubUse: 75,
    craftWreckUse: 225,
  },
  ["437277"]: {
    mining: 13.1585,
    duration: 6,
    dubUse: 3,
    fuelUse: 2,
    craftDubUse: 162,
    craftWreckUse: 488,
  },
  ["437281"]: {
    mining: 13.1585,
    duration: 6,
    dubUse: 3,
    fuelUse: 2,
    craftDubUse: 162,
    craftWreckUse: 488,
  },
  ["437282"]: {
    mining: 57.5675,
    duration: 12,
    dubUse: 15,
    fuelUse: 10,
    craftDubUse: 327,
    craftWreckUse: 983,
  },
  ["437283"]: {
    mining: 57.5675,
    duration: 12,
    dubUse: 15,
    fuelUse: 10,
    craftDubUse: 327,
    craftWreckUse: 983,
  },
  ["437284"]: {
    mining: 252.225,
    duration: 18,
    dubUse: 68,
    fuelUse: 45,
    craftDubUse: 887,
    craftWreckUse: 2663,
  },
  ["437285"]: {
    mining: 252.225,
    duration: 18,
    dubUse: 68,
    fuelUse: 45,
    craftDubUse: 887,
    craftWreckUse: 2663,
  },
  ["437286"]: {
    mining: 908.58,
    duration: 24,
    dubUse: 245,
    fuelUse: 163,
    craftDubUse: 2225,
    craftWreckUse: 6675,
  },
  ["437287"]: {
    mining: 908.58,
    duration: 24,
    dubUse: 245,
    fuelUse: 163,
    craftDubUse: 2225,
    craftWreckUse: 6675,
  },
};

export const shipExpidition: MutableInfo = {
  ["399288"]: {
    mining: 17.9955,
    duration: 24,
    dubUse: 5,
    fuelUse: 3,
    miningOptional: 35.991,
    durationOptional: 48,
    dubUseOptional: 10,
    fuelUseOptional: 7,
    craftDubUse: 0,
    craftWreckUse: 0,
  },
  ["399289"]: {
    mining: 17.9955,
    duration: 24,
    dubUse: 5,
    fuelUse: 3,
    miningOptional: 35.991,
    durationOptional: 48,
    dubUseOptional: 10,
    fuelUseOptional: 7,
    craftDubUse: 0,
    craftWreckUse: 0,
  },
  ["437275"]: {
    mining: 17.9955,
    duration: 24,
    dubUse: 5,
    fuelUse: 3,
    miningOptional: 35.991,
    durationOptional: 48,
    dubUseOptional: 10,
    fuelUseOptional: 7,
    craftDubUse: 75,
    craftWreckUse: 225,
  },
  ["437276"]: {
    mining: 17.9955,
    duration: 24,
    dubUse: 5,
    fuelUse: 3,
    miningOptional: 35.991,
    durationOptional: 48,
    dubUseOptional: 10,
    fuelUseOptional: 7,
    craftDubUse: 75,
    craftWreckUse: 225,
  },
  ["437277"]: {
    mining: 42.1072,
    duration: 24,
    dubUse: 12,
    fuelUse: 8,
    miningOptional: 84.2144,
    durationOptional: 48,
    dubUseOptional: 25,
    fuelUseOptional: 16,
    craftDubUse: 162,
    craftWreckUse: 488,
  },
  ["437281"]: {
    mining: 42.1072,
    duration: 24,
    dubUse: 12,
    fuelUse: 8,
    miningOptional: 84.2144,
    durationOptional: 48,
    dubUseOptional: 25,
    fuelUseOptional: 16,
    craftDubUse: 162,
    craftWreckUse: 488,
  },
  ["437282"]: {
    mining: 92.108,
    duration: 24,
    dubUse: 27,
    fuelUse: 18,
    miningOptional: 184.216,
    durationOptional: 48,
    dubUseOptional: 55,
    fuelUseOptional: 36,
    craftDubUse: 327,
    craftWreckUse: 983,
  },
  ["437283"]: {
    mining: 92.108,
    duration: 24,
    dubUse: 27,
    fuelUse: 18,
    miningOptional: 184.216,
    durationOptional: 48,
    dubUseOptional: 55,
    fuelUseOptional: 36,
    craftDubUse: 327,
    craftWreckUse: 983,
  },
  ["437284"]: {
    mining: 269.04,
    duration: 24,
    dubUse: 80,
    fuelUse: 53,
    miningOptional: 538.08,
    durationOptional: 48,
    dubUseOptional: 161,
    fuelUseOptional: 107,
    craftDubUse: 887,
    craftWreckUse: 2663,
  },
  ["437285"]: {
    mining: 269.04,
    duration: 24,
    dubUse: 80,
    fuelUse: 53,
    miningOptional: 538.08,
    durationOptional: 48,
    dubUseOptional: 161,
    fuelUseOptional: 107,
    craftDubUse: 887,
    craftWreckUse: 2663,
  },
  ["437286"]: {
    mining: 726.864,
    duration: 24,
    dubUse: 218,
    fuelUse: 145,
    miningOptional: 1453.728,
    durationOptional: 48,
    dubUseOptional: 436,
    fuelUseOptional: 290,
    craftDubUse: 2225,
    craftWreckUse: 6675,
  },
  ["437287"]: {
    mining: 726.864,
    duration: 24,
    dubUse: 218,
    fuelUse: 145,
    miningOptional: 1453.728,
    durationOptional: 48,
    dubUseOptional: 436,
    fuelUseOptional: 290,
    craftDubUse: 2225,
    craftWreckUse: 6675,
  },
};

export const oilRig: MutableInfo = {
  ["446045"]: {
    mining: 49,
    duration: 12,
    dubUse: 29,
    fuelUse: 0,
    craftDubUse: 0,
    craftWreckUse: 0,
  },
  ["446044"]: {
    mining: 569,
    duration: 12,
    dubUse: 342,
    fuelUse: 0,
    craftDubUse: 19710,
    craftWreckUse: 6570,
  },
};
