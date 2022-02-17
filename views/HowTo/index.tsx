import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface HowToProps {
  source: MDXRemoteSerializeResult;
}

function HowTo({ source }: HowToProps) {
  return (
    <div>
      <MDXRemote {...source} />
    </div>
  );
}

export default HowTo;
