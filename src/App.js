import AmChartComponent from "./charts";
import TreeChart from "./echarts";
import "./App.css";

function App() {
  return (
    <main className="App">
      <h1
        style={{
          position: "fixed",
          left: "2vh",
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
          left: "2vh",
          color: "#595959",
          fontSize: "17px",
        }}
      >
        Interactive Hierarchical Visualization of UAE&apos;s Cities, Industries,
        and Landmarks
      </h2>
      <TreeChart />
      {/* <AmChartComponent /> */}
    </main>
  );
}

export default App;
