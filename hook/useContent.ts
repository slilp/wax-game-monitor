import React, { useEffect, useState } from "react";
import {
  getPublicContent as contentSpaceCraftx,
  game as codeSpaceCraftX,
} from "../api/game/spacecraftx";

interface ContentProps {
  code: string;
}

function useContent({ code }: ContentProps) {
  const [data, setData] = useState<unknown>({});
  const [loading, setLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    setLoading(true);
    let response = [];
    if (code === codeSpaceCraftX) response = await contentSpaceCraftx();
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, [code]);

  return {
    data,
    loading,
  };
}

export default useContent;
