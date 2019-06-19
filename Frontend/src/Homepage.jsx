import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Search from "./Search.jsx";
import "./app.css";

class UnconnectedHomepage extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      result: []
    };
  }

  render = () => {
    return (
      <div className="container1">
        <h1 className="title">Stock Market Recommender</h1>
        <img src="/gazette.png" width="70px" height="70px" />
        <Search className="search" />
        <Link className="linkHome" to="/stocks">
          See all stock symbols
        </Link>
      </div>
    );
  };
}

const maStateToProps = st => {
  return { data: st.data };
};

let Homepage = connect(maStateToProps)(withRouter(UnconnectedHomepage));

export default Homepage;
