import axios from "axios";
import { TemplateInfo, AtomicAssetInfo } from "./modal";
const atomicAssetUrl = "https://wax-atomic-api.eosphere.io";
export const imageUrl = "https://ipfs.atomichub.io/ipfs";

export const getAssetTemplateInfo = (templateIds: string[]) => {
  const request = templateIds.reduce((prev, current) => prev + "," + current);
  return axios.get<TemplateInfo>(
    `${atomicAssetUrl}/atomicassets/v1/templates?ids=${request}`
  );
};

export const getAllAssetByGame = (game: string) => {
  return axios.get<TemplateInfo>(
    `${atomicAssetUrl}/atomicassets/v1/templates?collection_name=${game}&has_assets=true&limit=1000`
  );
};
