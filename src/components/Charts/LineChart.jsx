import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

const LineChart = () => {
  const {currentMode} = useContext(StateContext)
  return (
    <ChartComponent
    id="line-chart"
    height="420px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width: 0}}}
    tooltip={{enable: true}}
    background={currentMode === "Dark"? '#33373E': '#FFFFFF'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index)=>(
          <SeriesDirective key={index} {...item}/>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
