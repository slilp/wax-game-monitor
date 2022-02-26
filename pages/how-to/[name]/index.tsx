// import { HowTo } from "../../../views";
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface HowToProps {
  source: MDXRemoteSerializeResult;
}

function HowTo({ source }: HowToProps) {
  return <div>{source && <MDXRemote {...source} />}</div>;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "warspace" } },
      { params: { name: "farmerworld" } },
      { params: { name: "spacecraftxc" } },
      { params: { name: "seafarmersio" } },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<HowToProps>> => {
  const { name }: any = context.params;
  const source = `# Example app with MDX
  This example shows using [MDX](https://github.com/mdx-js/mdx) as top level pages for your next.js app.
  
  ## Preview
  
  Preview the example live on [StackBlitz](http://stackblitz.com/):
  
  [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-mdx)
  
  ## Deploy your own
  
  Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):
  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mdx&project-name=with-mdx&repository-name=with-mdx)
  
  ## How to use
  
  Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
  `;
  const mdxSource = await serialize(source);

  return {
    props: {
      source: mdxSource,
    },
  };
};

export default HowTo;
