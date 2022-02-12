import axios from "axios";
import { TemplateInfo } from "./modal";
const atomicAssetUrl = "https://aa-api-wax.eosauthority.com";
export const imageUrl = "https://cloudflare-ipfs.com/ipfs";

export const getAssetTemplateInfo = (templateIds: string[]) => {
  const request = templateIds.reduce((prev, current) => prev + "," + current);
  return axios.get<TemplateInfo>(
    `${atomicAssetUrl}/atomicassets/v1/templates?ids=${request}`
  );
};
