import "./chart.scss";
import { ResponsiveContainer, Tooltip, Label, AreaChart, Area } from "recharts";

const data = [
  { name: "January", Total: 2000 },
  { name: "February", Total: 2500 },
  { name: "March", Total: 2500 },
  { name: "April", Total: 2600 },
  { name: "May", Total: 2900 },
  { name: "June", Total: 2800 },
];

const Chart = ({ aspect, Lower, Higher }) => {
  return (
    <div className="chart-container" style={{ background: "#ffff" }}>
      {/* Use the correct class name */}
      <div className="line-chart">
        <div className="line-red">
          <div className="red"></div>Lower {Lower}
        </div>
        <div className="line-green">
          <div className="green"></div>Higher {Higher}
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <Label
              value="Your Text Below the Line"
              offset={0}
              position="insideBottom"
            />

            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#fff7ee" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#fff7ee" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Tooltip />

          <Area
            type="monotone"
            dataKey="Total"
            stroke="#ff8f17"
            strokeWidth={3}
            fillOpacity={100}
            fill="#fff7ee"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
