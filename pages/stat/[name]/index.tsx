import { Stat } from "../../../views";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

export interface StatProps {
  code: string;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "warspace" } },
      { params: { name: "farmerworld" } },
      { params: { name: "spacecraftxc" } },
      { params: { name: "seafarmersio" } },
      { params: { name: "roboempireio" } },
      { params: { name: "galaxyminerx" } },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<StatProps>> => {
  const response = context?.params?.name;
  return {
    props: {
      code: response + "",
    },
  };
};

export default Stat;
