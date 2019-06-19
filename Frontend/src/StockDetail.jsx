import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Plot from "./Graphe.jsx";
import SocialCount from "./SocialCount.jsx";

class UnconnectedStockDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {};

  render = () => {
    console.log("props", this.props);
    return (
      <div className="container4">
        <h2>{this.props.info.name}</h2>
        <div className="scroll">
          <Plot info={this.props.info} />
          <SocialCount info={this.props.info} />
          <p>
            Recommendations: <span>{this.props.info.reco}</span>
          </p>
        </div>
      </div>
    );
  };
}

let StockDetail = connect()(UnconnectedStockDetail);

export default StockDetail;
