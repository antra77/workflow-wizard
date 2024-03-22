import React from "react";
import {
  Chart3DComponent,
  Chart3DSeriesCollectionDirective,
  Chart3DSeriesDirective,
  Inject,
  Legend3D,
  DataLabel3D,
  Category3D,
  Tooltip3D,
  ColumnSeries3D,
  Highlight3D,
} from "@syncfusion/ej2-react-charts";
import SubHeader from "./SubHeader";

const Chart = () => {
  const data = [
    { month: "Jan", tasks: 35 },
    { month: "Feb", tasks: 28 },
    { month: "Mar", tasks: 34 },
    { month: "Apr", tasks: 32 },
    { month: "May", tasks: 40 },
    { month: "Jun", tasks: 32 },
    { month: "Jul", tasks: 35 },
    { month: "Aug", tasks: 55 },
    { month: "Sep", tasks: 38 },
    { month: "Oct", tasks: 30 },
    { month: "Nov", tasks: 25 },
    { month: "Dec", tasks: 32 },
  ];
  const xAxis = {
    valueType: "Category",
    titleStyle: {
      size: "16px",
      color: "grey",
      fontFamily: "Segoe UI",
      fontWeight: "bold",
    },
    title: "Projects",
  };
  const tooltip = {
    enable: true,
    header: "Tasks completed",
    format: "<b>${series.name} : ${point.y}</b>",
  };
  return (
    <div className="flex flex-col gap-10 justify-between">
      <div className="mb-5">
        <SubHeader title="Monthly Statistics" />
      </div>

      <Chart3DComponent
        id="chart"
        width="90%"
        height="50%"
        primaryXAxis={xAxis}
        tooltip={tooltip}
        wallColor="transparent"
        enableRotation={true}
        rotation={7}
        tilt={5}
        depth={100}
        palettes={["#1E3A8A"]}
      >
        <Inject
          services={[
            ColumnSeries3D,
            Legend3D,
            Tooltip3D,
            Category3D,
            DataLabel3D,
            Highlight3D,
          ]}
        />
        <Chart3DSeriesCollectionDirective>
          <Chart3DSeriesDirective
            dataSource={data}
            xName="month"
            yName="tasks"
            type="Column"
          ></Chart3DSeriesDirective>
        </Chart3DSeriesCollectionDirective>
      </Chart3DComponent>
    </div>
  );
};

export default Chart;
