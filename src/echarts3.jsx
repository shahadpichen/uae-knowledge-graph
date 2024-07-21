import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import "echarts/lib/chart/graph";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import graph from "./chartdata2";

const GraphChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    myChart.showLoading();

    setTimeout(() => {
      myChart.hideLoading();

      myChart.setOption({
        tooltip: {},
        legend: {
          data: graph.categories.map((cat) => cat.name),
        },
        series: [
          {
            name: "Graph",
            type: "graph",
            layout: "none",
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              show: true,
              position: "right",
              formatter: "{b}",
            },
            labelLayout: {
              hideOverlap: true,
            },
            scaleLimit: {
              min: 0.4,
              max: 2,
            },
            lineStyle: {
              color: "source",
              curveness: 0.3,
            },
          },
        ],
      });
    }, 1000); // Delay for demo purposes

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default GraphChart;
