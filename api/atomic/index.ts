import axios from "axios";
import { TemplateInfo } from "./modal";
const atomicAssetUrl = "https://wax-atomic-api.eosphere.io";
export const imageUrl = "https://ipfs.atomichub.io/ipfs";

export const getAssetTemplateInfo = (templateIds: string[]) => {
  const request = templateIds.reduce((prev, current) => prev + "," + current);
  return axios.get<TemplateInfo>(
    `${atomicAssetUrl}/atomicassets/v1/templates?ids=${request}`
  );
};
