import React, { Component } from "react";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  MarkSeries,
  HeatmapSeries,
  XAxis,
  YAxis,
  Hint,
  LabelSeries,
  VerticalBarSeries,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines
} from "react-vis";

class Plot extends Component {
  render() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    let prices = this.props.info.prices;

    const data = [
      { x: new Date("06/10/2019"), y: prices[0] },
      { x: new Date("06/11/2019"), y: prices[1] },
      { x: new Date("06/12/2019"), y: prices[2] },
      { x: new Date("06/13/2019"), y: prices[3] },
      { x: new Date("06/14/2019"), y: prices[4] },
      { x: new Date("06/15/2019"), y: prices[5] },
      { x: new Date("06/16/2019"), y: prices[6] },
      { x: new Date("06/17/2019"), y: prices[7] },
      { x: new Date("06/18/2019"), y: prices[8] },
      { x: new Date("06/19/2019"), y: prices[9] }
    ];
    return (
      <div className="App">
        <h3>{today}</h3>
        <p>
          Price : <span>{prices[9]}</span>$
        </p>
        <XYPlot xType="time" width={230} height={230}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Time" />
          <YAxis title="Stock Price" />
          <LineSeries data={data} />
        </XYPlot>
        <h5>Stock symbol price during last 10 days</h5>
      </div>
    );
  }
}

export default Plot;
