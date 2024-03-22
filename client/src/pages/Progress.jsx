import React from "react";
import { Header, Chart, HeatMap } from "../components/index";
const Progress = () => {
  return (
    <div className='className="m-2 md:m-10 p-2 md:10 '>
      <Header category="Page" title="Progress Dashboard" />
      <Chart />
      <HeatMap />
    </div>
  );
};

export default Progress;
