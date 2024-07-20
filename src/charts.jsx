"use client";

import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import data from "./chartdata";

const AmChartComponent = () => {
  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
        wheelable: true,
        pinchZoom: true,
      })
    );

    let series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        topDepth: 0,
        initialDepth: 0,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        nodePadding: 30,
        centerStrength: 0.8,
      })
    );

    series.get("colors").setAll({
      step: 2,
    });

    series.links.template.set("strength", 0.5);

    series.data.setAll([data]);

    series.set("selectedDataItem", series.dataItems[0]);

    series.nodes.template.setAll({
      interactive: true,
      cursorOverStyle: "pointer",
    });

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "100vh" }}>
      <h1
        style={{
          position: "fixed",
          top: "2vh",
          left: "2vh",
          color: "white",
          fontSize: "35px",
        }}
      >
        UAE Knowledge graph
      </h1>
      <h2
        style={{
          position: "fixed",
          top: "8vh",
          left: "2vh",
          color: "lightgray",
          fontSize: "17px",
        }}
      >
        Interactive Hierarchical Visualization of UAE&apos;s Cities, Industries,
        and Landmarks
      </h2>
    </div>
  );
};

export default AmChartComponent;
