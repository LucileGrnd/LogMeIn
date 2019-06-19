import React, { Component } from "react";
import AllStocks from "./Allstocks.jsx";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Homepage from "./Homepage.jsx";
import StockDetail from "./StockDetail.jsx";

//class

class UnconnectedApp extends Component {
  constructor() {
    super();
  }

  renderStocks = () => {
    return (
      <div>
        <AllStocks />
      </div>
    );
  };

  renderHomepage = () => {
    return (
      <div>
        <Homepage />
      </div>
    );
  };

  stockDetails = routerData => {
    return (
      <div>
        <StockDetail info={routerData.location.state.info} />
      </div>
    );
  };

  render = () => {
    return (
      <div>
        <Route exact={true} path="/" render={this.renderHomepage} />
        <Route exact={true} path="/stocks/:sid" render={this.stockDetails} />
        <Route exact={true} path="/stocks" render={this.renderStocks} />
      </div>
    );
  };
}

let mapStateToProps = st => {
  return { find: st.find, searchResult: st.searchResult };
};

let App = connect(mapStateToProps)(withRouter(UnconnectedApp));

export default App;
