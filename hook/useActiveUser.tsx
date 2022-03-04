import React, { useEffect, useState } from "react";
import { getActiveUser as contentSeaFarmer } from "../api/game/seafarmer";

import { spxCode, seaCode, roboCode, galaxyCode } from "../api/game";

interface ContentProps {
  code: string;
}

function useActiveUser({ code }: ContentProps) {
  const [data, setData] = useState<any[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(100);
  const [afterDate, setAfterDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [loading, setLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    setLoading(true);
    let response: any[] = [];
    if (code === seaCode)
      response = await contentSeaFarmer(skip, limit, afterDate);

    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, [code]);

  return {
    data,
    loading,
    setSkip,
    setLimit,
  };
}

export default useActiveUser;
