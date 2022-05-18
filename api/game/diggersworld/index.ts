import { getAllAssetWithNoMintByGame, imageUrl } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { AssetInfo } from "../modal";
import { diggerCode } from "../../game";
import { DiggerWorldTokens } from "../../../config/tokens";

interface MutableInfo {
  [key: string]: {
    mining: number;
    miningToken: DiggerWorldTokens;
    ironUse: number;
    sulfurUse: number;
    diamondUse: number;
    craftIronUse: number;
    craftSulfurUse: number;
    craftDiamondUse: number;
  };
}

const mapToPublicContent = async (): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const allAssetInfo = await getAllAssetWithNoMintByGame(diggerCode);
  if (allAssetInfo.data.success) {
    allAssetInfo.data.data.map((item: AtomicAssetInfo) => {
      let mutableData = {};
      if (pickaxes.hasOwnProperty(item?.template_id)) {
        mutableData = pickaxes?.[item?.template_id];
      } else if (bombs.hasOwnProperty(item?.template_id)) {
        mutableData = bombs?.[item?.template_id];
      } else if (jackhammers.hasOwnProperty(item?.template_id)) {
        mutableData = jackhammers?.[item?.template_id];
      }

      result.push({
        id: item?.template_id ?? "",
        immutableData: {
          ...item?.immutable_data,
          img: `/${diggerCode}/${item?.immutable_data?.img}.png`,
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

export const pickaxes: MutableInfo = {
  ["485369"]: {
    mining: 6,
    miningToken: DiggerWorldTokens.DWS,
    ironUse: 2,
    sulfurUse: 0,
    diamondUse: 1,
    craftIronUse: 900,
    craftSulfurUse: 0,
    craftDiamondUse: 350,
  },
  ["485370"]: {
    mining: 19,
    miningToken: DiggerWorldTokens.DWS,
    ironUse: 6,
    sulfurUse: 0,
    diamondUse: 3,
    craftIronUse: 2650,
    craftSulfurUse: 0,
    craftDiamondUse: 1150,
  },
  ["485371"]: {
    mining: 60,
    miningToken: DiggerWorldTokens.DWS,
    ironUse: 18,
    sulfurUse: 0,
    diamondUse: 9,
    craftIronUse: 7900,
    craftSulfurUse: 0,
    craftDiamondUse: 3500,
  },
};

export const bombs: MutableInfo = {
  ["485363"]: {
    mining: 6,
    miningToken: DiggerWorldTokens.DWI,
    ironUse: 0,
    sulfurUse: 2,
    diamondUse: 1,
    craftIronUse: 0,
    craftSulfurUse: 900,
    craftDiamondUse: 350,
  },
  ["485364"]: {
    mining: 19,
    miningToken: DiggerWorldTokens.DWI,
    ironUse: 0,
    sulfurUse: 6,
    diamondUse: 3,
    craftIronUse: 0,
    craftSulfurUse: 2650,
    craftDiamondUse: 1150,
  },
  ["485365"]: {
    mining: 60,
    miningToken: DiggerWorldTokens.DWI,
    ironUse: 0,
    sulfurUse: 18,
    diamondUse: 9,
    craftIronUse: 0,
    craftSulfurUse: 7900,
    craftDiamondUse: 3500,
  },
};

export const jackhammers: MutableInfo = {
  ["485367"]: {
    mining: 21,
    miningToken: DiggerWorldTokens.DWD,
    ironUse: 9,
    sulfurUse: 9,
    diamondUse: 0,
    craftIronUse: 3300,
    craftSulfurUse: 3300,
    craftDiamondUse: 0,
  },
  ["485368"]: {
    mining: 70,
    miningToken: DiggerWorldTokens.DWD,
    ironUse: 33,
    sulfurUse: 33,
    diamondUse: 0,
    craftIronUse: 8000,
    craftSulfurUse: 8000,
    craftDiamondUse: 0,
  },
};
