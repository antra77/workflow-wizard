import React from "react";
import {
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
  Adaptor,
} from "@syncfusion/ej2-react-heatmap";

import SubHeader from "./SubHeader";

const HeatMap = () => {
  const heatmapData = [
    [73, 39, 26, 39, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, 46, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59],
  ];
  return (
    <div className="flex flex-col gap-10 justify-between">
      <div className="mt-5">
        <SubHeader title="Progress Heatmap" />
      </div>
      <HeatMapComponent
      width="80%"
      height="50%"
        titleSettings={{
          text: "Tasks completed per Employee",
          textStyle: {
            size: "15px",
            fontWeight: "500",
            fontStyle: "Normal",
            fontFamily: "Segoe UI",
          },
        }}
        xAxis={{
          labels: [
            "Nancy",
            "Andrew",
            "Janet",
            "Margaret",
            "Steven",
            "Michael",
            "Robert",
            "Laura",
            "Anne",
            "Paul",
            "Karin",
            "Mario",
          ],
        }}
        yAxis={{
          labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
        }}
        paletteSettings = { {
          palette: [
          { startValue:1, endValue:30, minColor: '#F0F8FF', maxColor: '#0066b2' },
          { startValue:30, endValue:60, minColor: '#B9D9EB', maxColor: '#00308F' },
          { startValue:60, endValue:100, minColor: '#ADD8E6', maxColor: '#002D62' }
      ],
          type: "Gradient"
      } }
      legendSettings = { {
          visible: true,
      } }
      cellSettings = { {
         enableCellHighlighting: true
      } }
        dataSource={heatmapData}
      >
        <Inject services={[Tooltip]} />
      </HeatMapComponent>
    </div>
  );
};

export default HeatMap;
