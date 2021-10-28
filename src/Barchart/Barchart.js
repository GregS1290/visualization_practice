import React, { useState, useCallback, useEffect } from 'react';
import { useData } from '../useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

import { csv, scaleBand, scaleLinear, max, format } from 'd3';

export const Barchart = ({ width, height, margin, xAxisLabelOffset }) => {
  const data = useData();

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = (d) => d.Team;

  const xValue = (d) => d.HR;

  const siFormat = format('.0f');
  const xAxisTickFormat = (tickValue) => siFormat(tickValue);

  const yScale = scaleBand()
    //new instance of a band scale
    .domain(data.map(yValue))
    //range is the pixel space coordinates the domain will map onto
    .range([0, innerHeight])
    .paddingInner(0.15);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className='axis-label'
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor='middle'
        >
          Homeruns
        </text>
        <Marks
          data={data}
          yScale={yScale}
          xScale={xScale}
          xValue={xValue}
          yValue={yValue}
          toolTipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};
