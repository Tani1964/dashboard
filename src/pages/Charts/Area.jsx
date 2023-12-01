import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";
import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";

const Area = () => {
  const {currentMode} = useContext(StateContext)
  return (
    
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-xl'>
      <Header category="Area" title="Inflation Rate in Percentage"/>

    <ChartComponent
    id="line-chart"
    height="420px"
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width: 0}}}
    tooltip={{enable: true}}
    background={currentMode === "Dark"? '#33373E': '#FFFFFF'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index)=>(
          <SeriesDirective key={index} {...item}/>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  );
};

export default Area;
