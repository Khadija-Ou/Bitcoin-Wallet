import { useState } from "react";
import "./tabs.scss";
import React, { useRef, useEffect } from "react"; // Import 'useRef' and 'useEffect' from React

import Chart from "../chart/Chart";
const Tabs = () => {
  const [tab, setTab] = useState(1);

  const toggle = (index) => {
    setTab(index);
  };

  const chartRef = useRef(null); // Define chartRef using useRef

  useEffect(() => {
    const chartContainer = document.querySelector(".chart-container");
    if (chartContainer) {
      const observer = new ResizeObserver(() => {
        if (chartRef.current) {
          chartRef.current.chartWillResize(); // Notify Recharts about the resize
        }
      });

      observer.observe(chartContainer);

      return () => {
        observer.disconnect(); // Disconnect the ResizeObserver when the component is unmounted
      };
    }
  }, []); // Empty dependency array for useEffect
  return (
    <div className="page-container">
      <div className="tabs">
        <div className="chart-container  tabs-chart">
          <div
            className={
              tab === 1 ? "tab active tab-button_active " : "tab tab-button"
            }
            onClick={() => toggle(1)}
          >
            Bitcoin
          </div>
          <div
            className={
              tab === 2 ? "tab active tab-button_active " : "tab tab-button"
            }
            onClick={() => toggle(2)}
          >
            Ethereum
          </div>
          <div
            className={
              tab === 3 ? "tab active tab-button_active " : "tab tab-button"
            }
            onClick={() => toggle(3)}
          >
            Tether
          </div>
          <div
            className={
              tab === 4 ? "tab active tab-button_active " : "tab tab-button"
            }
            onClick={() => toggle(4)}
          >
            Binance
          </div>
        </div>
        <div className="tabs-content">
          <div className={tab === 1 ? "content active" : "content"}>
            <Chart Higher="$29939" Lower="$2,939" aspect={2 / 1} />
          </div>
          <div className={tab === 2 ? "content active" : "content"}>
            <Chart Higher="$9,999" Lower="$1,9939" aspect={2 / 1} />
          </div>
          <div className={tab === 3 ? "content active" : "content"}>
            <Chart Higher="$10,939" Lower="$2,939" aspect={2 / 1} />
          </div>
          <div className={tab === 4 ? "content active" : "content"}>
            <Chart Higher="$11,999" Lower="$3,993" aspect={2 / 1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
