import React, { useState } from "react";
import TreeChart from "./echarts";
import LesMiserablesGraph from "./echarts2";
import AmChartComponent from "./charts";
import GraphChart from "./echarts3";
import "./App.css";

function App() {
  const [selectedChart, setSelectedChart] = useState("chart");

  // Determine text color based on selected chart
  const textColor = selectedChart === "TreeChart" ? "#FFFFFF" : "#333333";
  const subTextColor = selectedChart === "TreeChart" ? "#FFFFFF" : "#595959";

  return (
    <main className="App">
      <h1
        style={{
          position: "fixed",
          left: "5vh",
          color: textColor,
          fontSize: "35px",
          zIndex: "10",
        }}
      >
        UAE Knowledge graph
      </h1>
      <h2
        style={{
          position: "fixed",
          top: "6vh",
          left: "5vh",
          color: subTextColor,
          fontSize: "17px",
          zIndex: "10",
        }}
      >
        Interactive Hierarchical Visualization of UAE&apos;s Cities, Industries,
        and Landmarks
      </h2>

      <div className="option">
        <button
          onClick={() => setSelectedChart("chart")}
          style={{ margin: "10px", padding: "10px", cursor: "pointer" }}
        >
          Knowledge Graph
        </button>
        <button
          onClick={() => setSelectedChart("TreeChart")}
          style={{ margin: "10px", padding: "10px", cursor: "pointer" }}
        >
          Graph Chart
        </button>
        <button
          onClick={() => setSelectedChart("GraphChart")}
          style={{ margin: "10px", padding: "10px", cursor: "pointer" }}
        >
          Knowledge Tree Map
        </button>
      </div>

      {selectedChart === "chart" && <AmChartComponent />}
      {selectedChart === "TreeChart" && <TreeChart />}
      {selectedChart === "GraphChart" && <GraphChart />}
    </main>
  );
}

export default App;
