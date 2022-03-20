import { getAllAssetByGame } from "../../atomic";
import { AtomicAssetInfo } from "../../atomic/modal";
import { getTableRow } from "../../eos";
import { RequestGetTableRows } from "../../eos/modal";
import { AssetInfo } from "../modal";
import { InGameTokenInfo, InGameInfo } from "../../game/modal";
import { galaxyCode } from "../../game";

const inGameAssetRequest = (wallet: string): RequestGetTableRows => ({
  code: "galaxyminers",
  table: "gadgets",
  scope: "galaxyminers",
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
  key_type: "i64",
  index_position: 2,
});

const inGameTokenRequest = (wallet: string): RequestGetTableRows => ({
  code: "galaxyminers",
  table: "players",
  scope: "galaxyminers",
  upperBound: wallet,
  lowerBound: wallet,
  limit: 100,
});

interface MutableInfo {
  [key: string]: {
    mining: number;
    gmoUse: number;
    gmpUse: number;
    craftGmaUse: number;
    craftGmpUse: number;
  };
}

const mapToPublicContent = async (): Promise<AssetInfo[]> => {
  let result: AssetInfo[] = [];

  const allAssetInfo = await getAllAssetByGame(galaxyCode);
  if (allAssetInfo.data.success) {
    allAssetInfo.data.data.map((item: AtomicAssetInfo) => {
      let mutableData = {};
      if (item?.immutable_data.Type === "Oxygen") {
        mutableData = oxygen?.[item?.template_id];
      } else if (item?.immutable_data.Type === "Plasma") {
        mutableData = plasma?.[item?.template_id];
      } else if (item?.immutable_data.Type === "Asteroid") {
        mutableData = asteroid?.[item?.template_id];
      }

      result.push({
        id: item?.template_id ?? "",
        immutableData: {
          ...item?.immutable_data,
          img: `/${galaxyCode}/${item?.immutable_data?.img}.png`,
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

export const getWalletContent = async (wallet: string): Promise<InGameInfo> => {
  try {
    const result = await Promise.all([
      getTableRow(inGameAssetRequest(wallet)),
      getTableRow(inGameTokenRequest(wallet)),
    ]);

    const tempInGameStakeData = result[0].data?.rows;
    const tempInGameTokenData: InGameTokenInfo[] =
      result[1].data?.rows.length === 0
        ? []
        : result[1].data?.rows[0].balances.map((token: any) => {
            const tempToken: InGameTokenInfo = {
              name: token.split(" ")[1],
              amount: parseFloat(token.split(" ")[0]),
            };
            return tempToken;
          });

    return {
      inGameStake: tempInGameStakeData.map((item: any) => item.template_id),
      inGameToken: tempInGameTokenData,
    };
  } catch (error) {
    return {
      inGameStake: [],
      inGameToken: [],
    };
  }
};

//should get from atomic api later

export const plasma: MutableInfo = {
  ["411923"]: {
    mining: 15,
    gmoUse: 4,
    gmpUse: 1,
    craftGmaUse: 3700,
    craftGmpUse: 2000,
  },
  ["411924"]: {
    mining: 65,
    gmoUse: 16,
    gmpUse: 5,
    craftGmaUse: 15000,
    craftGmpUse: 9500,
  },
};

export const asteroid: MutableInfo = {
  ["411906"]: {
    mining: 1,
    gmoUse: 0.4,
    gmpUse: 0.4,
    craftGmaUse: 450,
    craftGmpUse: 300,
  },
  ["438433"]: {
    mining: 4,
    gmoUse: 1,
    gmpUse: 1,
    craftGmaUse: 1350,
    craftGmpUse: 850,
  },
  ["411902"]: {
    mining: 14,
    gmoUse: 2,
    gmpUse: 2,
    craftGmaUse: 4700,
    craftGmpUse: 3200,
  },
  ["411903"]: {
    mining: 42,
    gmoUse: 5,
    gmpUse: 6,
    craftGmaUse: 14200,
    craftGmpUse: 9000,
  },
};

export const oxygen: MutableInfo = {
  ["446583"]: {
    mining: 3,
    gmoUse: 0,
    gmpUse: 0.5,
    craftGmaUse: 700,
    craftGmpUse: 450,
  },
  ["446584"]: {
    mining: 14,
    gmoUse: 0,
    gmpUse: 4,
    craftGmaUse: 3000,
    craftGmpUse: 2000,
  },
  ["446585"]: {
    mining: 50,
    gmoUse: 0,
    gmpUse: 8,
    craftGmaUse: 12500,
    craftGmpUse: 7500,
  },
};
