import { GetInGameProps } from "./modal";
import { getAssetSale } from "../atomic";
export const spxCode = "spacecraftxc";
export const seaCode = "seafarmersio";
export const getInGameData = ({ code, wallet }: GetInGameProps) => {};

export const getAtomicSalePrice = async (
  game: string,
  templateId: string
): Promise<number> => {
  const response = await getAssetSale(game, templateId);
  return response?.data?.data.length !== 0
    ? response?.data?.data[0].price.amount / 100000000
    : 0;
};
