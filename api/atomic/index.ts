import axios from "axios";
import { TemplateInfo, AtomicAssetInfo, AtomicSale } from "./modal";
const atomicAssetUrl = "https://wax.api.atomicassets.io";
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

export const getAllAssetWithNoMintByGame = (game: string) => {
  return axios.get<TemplateInfo>(
    `${atomicAssetUrl}/atomicassets/v1/templates?collection_name=${game}&has_assets=empty&limit=1000`
  );
};

export const getAssetSale = (game: string, templateId: string) => {
  return axios.get<AtomicSale>(
    `${atomicAssetUrl}/atomicmarket/v2/sales?collection_name=${game}&limit=1&order=asc&sort=price&template_id=${templateId}&state=1`
  );
};
