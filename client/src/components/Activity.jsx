import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  MajorGridLines,
} from "@syncfusion/ej2-react-charts";

const Activity = () => {
  const splineData = [
    { x: "Jan", y: 5 },
    { x: "Feb", y: 7 },
    { x: "Mar", y: 7 },
    { x: "Apr", y: 8 },
    { x: "May", y: 10 },
    { x: "Jun", y: 12 },
    { x: "Jul", y: 15 },
    { x: "Aug", y: 10 },
    { x: "Sep", y: 12 },
    { x: "Oct", y: 15 },
    { x: "Nov", y: 17 },
    { x: "Dec", y: 18 },
  ];
  const primaryxAxis = { title: "Month", valueType: "Category" , majorGridLines: {
    width: 0
},
minorGridLines: {
    width: 0
}};
  const primaryyAxis = { title:"tasks", majorGridLines: {
    width: 0
},
minorGridLines: {
    width: 0
}};

  return (
    <div className="bg-zinc-50 w-3/4 m-5 p-8 rounded-xl drop-shadow-md ">
      <ChartComponent id="charts" primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis}>
        <Inject
          services={[SplineAreaSeries, Legend, Tooltip, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={splineData}
            xName="x"
            yName="y"
            width={1}
            name="Tasks"
            type="SplineArea"
            fill="#477591"
            opacity='0.5'
            marker={{ visible: false }}
            
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Activity;
