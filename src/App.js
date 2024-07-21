import React, { useState } from "react";
import TreeChart from "./echarts";
import LesMiserablesGraph from "./echarts2";
import AmChartComponent from "./charts";
import GraphChart from "./echarts3";
import "./App.css";

function App() {
  const [selectedChart, setSelectedChart] = useState("chart");

  return (
    <main className="App">
      <h1
        style={{
          position: "fixed",
          left: "5vh",
          color: "#333333",
          fontSize: "35px",
        }}
      >
        UAE Knowledge graph
      </h1>
      <h2
        style={{
          position: "fixed",
          top: "6vh",
          left: "5vh",
          color: "#595959",
          fontSize: "17px",
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
          Force-Directed Tree
        </button>
        <button
          onClick={() => setSelectedChart("GraphChart")}
          style={{ margin: "10px", padding: "10px", cursor: "pointer" }}
        >
          Show GraphChart
        </button>
        <button
          onClick={() => setSelectedChart("TreeChart")}
          style={{ margin: "10px", padding: "10px", cursor: "pointer" }}
        >
          Show TreeChart
        </button>
        <button
          onClick={() => setSelectedChart("LesMiserablesGraph")}
          style={{ margin: "10px", padding: "10px", cursor: "pointer" }}
        >
          Show LesMiserablesGraph
        </button>
      </div>

      {selectedChart === "chart" && <AmChartComponent />}

      {selectedChart === "TreeChart" && <TreeChart />}
      {selectedChart === "LesMiserablesGraph" && <LesMiserablesGraph />}
      {selectedChart === "GraphChart" && <GraphChart />}
    </main>
  );
}

export default App;
