import React, { Component } from "react";
import { connect } from "react-redux";
import Stock from "./Stock.jsx";

class UnconnectedAllStocks extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      search: ""
    };
  }

  componentDidMount = () => {
    if (this.props.search !== "") {
      let stockSearch = this.props.stocks.filter(stock => {
        for (let key in stock) {
          return stock[key] === this.props.search;
        }
      });
      this.setState({ search: this.props.search, stocks: stockSearch });
      return;
    }
    this.setState({ stocks: this.props.stocks });
  };

  handleChange = event => {
    let newInput = event.target.value;
    this.setState({ search: newInput });
  };

  handleSearch = event => {
    event.preventDefault();
    let search = this.state.search;
    let result = [];
    if (search === "") {
      result = this.props.stocks;
      this.setState({ stocks: result, search: "" });
      return;
    }
    result = this.props.stocks.filter(stock => {
      for (let key in stock) {
        return stock[key] === search;
      }
    });
    this.setState({ stocks: result, search: "" });
  };

  render = () => {
    return (
      <div className="container2">
        <h4 className="title2">List of Stocks symbols</h4>
        <form className="search2" onSubmit={this.handleSearch}>
          <input
            className="input2"
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="Search stock symbol"
          />
          <input className="submit2" type="submit" value="ok" />
        </form>
        <ul className="flex">
          {this.state.stocks.map(stock => {
            return (
              <div key={stock._id}>
                <Stock stock={stock} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  };
}

let mapStateToProps = st => {
  return { search: st.search, stocks: st.stocks };
};

let AllStocks = connect(mapStateToProps)(UnconnectedAllStocks);
export default AllStocks;
