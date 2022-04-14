import { Calculator } from "../../../views";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

export interface CalculatorProps {
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
      { params: { name: "diggersworld" } },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<CalculatorProps>> => {
  const response = context?.params?.name;
  return {
    props: {
      code: response + "",
    },
  };
};

export default Calculator;
