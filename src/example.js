import React from "react";
import { PieChart } from "reaviz";

export const data = [
  {
    key: "Apple",
    data: 10
  },
  {
    key: "NetFlix",
    data: 14
  },
  {
    key: "FaceBook",
    data: 5
  },
  {
    key: "Amazon",
    data: 18
  }
];

export default () => (
  <div style={{ margin: "55px", textAlign: "center" }}>
    <h1>Portfolio Holdings</h1>
    <PieChart width={500} height={500} data={data} />
  </div>
);
