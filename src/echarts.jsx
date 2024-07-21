import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SunburstChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const colors = ["#FFAE57", "#FF7853", "#EA5151", "#CC3F57", "#9A2555"];
    const bgColor = "#2E2733";
    const itemStyle = {
      star5: { color: colors[0] },
      star4: { color: colors[1] },
      star3: { color: colors[2] },
      star2: { color: colors[3] },
    };
    const data = [
      {
        name: "UAE",
        itemStyle: {
          color: colors[1],
        },
        children: [
          {
            name: "Dubai",
            children: [
              {
                name: "5☆",
                children: [
                  { name: "Burj Khalifa" },
                  { name: "Dubai Mall" },
                  { name: "Palm Jumeirah" },
                ],
              },
              {
                name: "4☆",
                children: [
                  { name: "Dubai Marina" },
                  { name: "Jumeirah Beach" },
                  { name: "Dubai Creek" },
                ],
              },
              {
                name: "3☆",
                children: [{ name: "Dubai Frame" }, { name: "Global Village" }],
              },
            ],
          },
          {
            name: "Abu Dhabi",
            children: [
              {
                name: "5☆",
                children: [
                  { name: "Sheikh Zayed Grand Mosque" },
                  { name: "Louvre Abu Dhabi" },
                  { name: "Yas Island" },
                ],
              },
              {
                name: "4☆",
                children: [
                  { name: "Emirates Palace" },
                  { name: "Qasr Al Hosn" },
                  { name: "Abu Dhabi Corniche" },
                ],
              },
              {
                name: "3☆",
                children: [
                  { name: "Saadiyat Island" },
                  { name: "Mangrove National Park" },
                ],
              },
            ],
          },
          {
            name: "Sharjah",
            children: [
              {
                name: "5☆",
                children: [
                  { name: "Sharjah Museum of Islamic Civilization" },
                  { name: "Al Noor Island" },
                  { name: "Sharjah Arts Museum" },
                ],
              },
              {
                name: "4☆",
                children: [
                  { name: "Sharjah Aquarium" },
                  { name: "Al Majaz Waterfront" },
                  { name: "Central Souq" },
                ],
              },
              {
                name: "3☆",
                children: [
                  { name: "King Faisal Mosque" },
                  { name: "Sharjah Heritage Museum" },
                ],
              },
            ],
          },
          {
            name: "Ajman",
            children: [
              {
                name: "5☆",
                children: [
                  { name: "Ajman Beach" },
                  { name: "Ajman Museum" },
                  { name: "Ajman Dhow Yard" },
                ],
              },
              {
                name: "4☆",
                children: [
                  { name: "Al Zorah Nature Reserve" },
                  { name: "Ajman City Centre" },
                ],
              },
              {
                name: "3☆",
                children: [
                  { name: "Al Murjan Island" },
                  { name: "Ajman China Mall" },
                ],
              },
            ],
          },
          {
            name: "Fujairah",
            children: [
              {
                name: "5☆",
                children: [
                  { name: "Fujairah Fort" },
                  { name: "Al Bidyah Mosque" },
                  { name: "Fujairah Beach" },
                ],
              },
              {
                name: "4☆",
                children: [
                  { name: "Wadi Wurayah" },
                  { name: "Fujairah Museum" },
                ],
              },
              {
                name: "3☆",
                children: [
                  { name: "Mirbat Beach" },
                  { name: "Fujairah Golf Club" },
                ],
              },
            ],
          },
          {
            name: "Ras Al Khaimah",
            children: [
              {
                name: "5☆",
                children: [
                  { name: "Jebel Jais" },
                  { name: "Al Hamra Village" },
                  { name: "Ras Al Khaimah National Museum" },
                ],
              },
              {
                name: "4☆",
                children: [{ name: "Dhayah Fort" }, { name: "Wadi Shawka" }],
              },
              {
                name: "3☆",
                children: [{ name: "RAK Mall" }, { name: "Saqr Park" }],
              },
            ],
          },
        ],
      },
    ];

    for (let j = 0; j < data.length; ++j) {
      let level1 = data[j].children;
      for (let i = 0; i < level1.length; ++i) {
        let block = level1[i].children;
        let bookScore = [];
        let bookScoreId;
        for (let star = 0; star < block.length; ++star) {
          let style = (function (name) {
            switch (name) {
              case "5☆":
                bookScoreId = 0;
                return itemStyle.star5;
              case "4☆":
                bookScoreId = 1;
                return itemStyle.star4;
              case "3☆":
                bookScoreId = 2;
                return itemStyle.star3;
              case "2☆":
                bookScoreId = 3;
                return itemStyle.star2;
            }
          })(block[star].name);
          block[star].label = {
            color: style.color,
            downplay: { opacity: 0.5 },
          };
          if (block[star].children) {
            style = { opacity: 1, color: style.color };
            block[star].children.forEach(function (book) {
              book.value = 1;
              book.itemStyle = style;
              book.label = { color: style.color };
              let value = 1;
              if (bookScoreId === 0 || bookScoreId === 3) value = 5;
              if (bookScore[bookScoreId]) {
                bookScore[bookScoreId].value += value;
              } else {
                bookScore[bookScoreId] = {
                  color: colors[bookScoreId],
                  value: value,
                };
              }
            });
          }
        }
        level1[i].itemStyle = { color: data[j].itemStyle.color };
      }
    }

    const option = {
      backgroundColor: bgColor,
      color: colors,
      series: [
        {
          type: "sunburst",
          center: ["50%", "48%"],
          data: data,
          sort: function (a, b) {
            if (a.depth === 1) {
              return b.getValue() - a.getValue();
            } else {
              return a.dataIndex - b.dataIndex;
            }
          },
          label: {
            rotate: "radial",
            color: bgColor,
          },
          itemStyle: {
            borderColor: bgColor,
            borderWidth: 2,
          },
          levels: [
            {},
            { r0: 0, r: 40, label: { rotate: 0 } },
            { r0: 40, r: 105 },
            {
              r0: 115,
              r: 140,
              itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: "transparent",
              },
              label: {
                rotate: "tangential",
                fontSize: 10,
                color: colors[0],
              },
            },
            {
              r0: 140,
              r: 145,
              itemStyle: { shadowBlur: 80, shadowColor: colors[0] },
              label: {
                position: "outside",
                textShadowBlur: 5,
                textShadowColor: "#333",
              },
              downplay: { label: { opacity: 0.5 } },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);

    // Resize chart on window resize
    const handleResize = () => {
      if (myChart) {
        myChart.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "100vh" }} />;
};

export default SunburstChart;
