import React, { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/GregS1290/594216a88df6cce70f1dbdc948954073/raw/eba521f57a0463ea74009b7613db927af65d857d/mlbTeamBatting2021.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then((data) => {
      setData(data);
    });
  }, []);

  return data;
};
