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

class SocialCount extends Component {
  render() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    let socialCount = this.props.info.socialCount;

    const data = [
      { x: new Date("06/10/2019"), y: socialCount[0] },
      { x: new Date("06/11/2019"), y: socialCount[1] },
      { x: new Date("06/12/2019"), y: socialCount[2] },
      { x: new Date("06/13/2019"), y: socialCount[3] },
      { x: new Date("06/14/2019"), y: socialCount[4] },
      { x: new Date("06/15/2019"), y: socialCount[5] },
      { x: new Date("06/16/2019"), y: socialCount[6] },
      { x: new Date("06/17/2019"), y: socialCount[7] },
      { x: new Date("06/18/2019"), y: socialCount[8] },
      { x: new Date("06/19/2019"), y: socialCount[9] }
    ];
    return (
      <div className="App">
        <h2>{this.props.name}</h2>
        <p>{"Number of social posts :" + socialCount[9]}</p>
        <XYPlot xType="time" width={230} height={230}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="Time" />
          <YAxis title="Posts" />
          <LineSeries data={data} />
        </XYPlot>
        <h5>Number of social posts during last 10 days:</h5>
      </div>
    );
  }
}

export default SocialCount;
