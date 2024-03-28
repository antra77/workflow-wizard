import React from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

const settings = {
  width: 200,
  height: 200,
  value: 80,
};

const Progress = () => {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-700 h-1/4 m-5 p-5 pt-5 rounded-xl drop-shadow-md">
      <h1 className="text-center text-xl font-bold pb-4 text-sky-950 dark:text-zinc-50">Progress</h1>
      <p className="text-center text-sm font-semibold pb-4 text-zinc-500 dark:text-zinc-50">your total progress is  at {settings.value}%.</p>
      <Gauge
        {...settings}
        cornerRadius="90%"
        sx={(theme) => ({
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 40,
          },
          [`& .${gaugeClasses.valueArc}`]: {
            fill: "#004B84",
          },
        })}
      />
    </div>
  );
};

export default Progress;
