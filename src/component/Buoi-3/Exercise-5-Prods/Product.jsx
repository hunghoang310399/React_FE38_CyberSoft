import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    let { prod, detail } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src={prod.hinhAnh} alt={prod.hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{prod.tenSP}</h4>
            <p className="card-text">{prod.gia}</p>
            <button
              type="button"s
              data-toggle="modal"
              data-target="#modelId"
              className="btn btn-success"
              onClick={() => detail(prod)}
            >
              Xem Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
