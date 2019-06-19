import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class UnconnectedSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    };
  }

  handleChange = event => {
    let newInput = event.target.value;
    this.setState({ searchInput: newInput });
  };

  handleSubmit = event => {
    event.preventDefault();
    let search = this.state.searchInput;
    this.props.dispatch({
      type: "found",
      search: search
    });
    this.setState({ searchInput: "" });
    this.props.history.push("/stocks");
  };

  render = () => {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchInput}
          onChange={this.handleChange}
          placeholder="Search stock symbol"
          className="input"
        />
        <input className="submit" type="submit" value="ok" />
      </form>
    );
  };
}

let Search = connect()(withRouter(UnconnectedSearch));

export default Search;
