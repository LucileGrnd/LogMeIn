import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class UnconnectedStock extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render = () => {
    console.log("props", this.props);
    return (
      <div class="container3">
        <h5>{this.props.stock.name}</h5>
        <p>
          <span>Price:</span> {this.props.stock.prices[9] + "$"}
        </p>
        <Link
          className="linkCard"
          to={{
            pathname: "/stocks/" + this.props.stock._id,
            state: {
              info: this.props.stock
            }
          }}
        >
          More details
        </Link>
      </div>
    );
  };
}

let Stock = connect()(withRouter(UnconnectedStock));

export default Stock;
