import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    //Thông qua props nhận 2 giá trị (product, changeGlasses)
    // let { product, changeGlasses } = this.props;

    return (
      <div
        className="col-4 mt-3 text-center"
        onClick={() => {
          this.props.changeGlasses(this.props.product);
        }}
      >
        <img
          style={{ width: "150px", cursor: "pointer" }}
          src={this.props.product.url}
          alt={this.props.product.id}
        />
      </div>
    );
  }
}
