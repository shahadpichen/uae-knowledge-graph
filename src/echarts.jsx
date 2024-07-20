import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import "echarts/lib/chart/tree";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import data from "./chartdata";

const TreeChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    myChart.showLoading();

    setTimeout(() => {
      myChart.hideLoading();

      data.children.forEach((datum, index) => {
        if (index % 2 === 0) {
          datum.collapsed = true;
        }
      });

      myChart.setOption({
        tooltip: {
          trigger: "item",

          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            data: [data],
            top: "1%",
            left: "7%",
            bottom: "1%",
            right: "20%",
            symbolSize: 7,
            label: {
              position: "left",
              verticalAlign: "middle",
              align: "right",
              fontSize: 13,
            },
            leaves: {
              label: {
                position: "right",
                verticalAlign: "middle",
                align: "left",
              },
            },
            emphasis: {
              focus: "descendant",
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      });
    }, 1000);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default TreeChart;
