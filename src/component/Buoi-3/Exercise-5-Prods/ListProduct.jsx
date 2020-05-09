import React, { Component } from "react";
import Product from "./Product";

class ListProduct extends Component {
  state = {
    productDetail: {
      tenSP: "Default",
      hinhAnh: "",
      gia: 100000,
    },
  };
  renderProduct = () => {
    let { arrayProduct } = this.props;
    return arrayProduct.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <div>
            <Product prod={product} detail={this.viewDetail}></Product>
          </div>
        </div>
      );
    });
  };
  viewDetail = (productDetail) => {
    this.setState({ productDetail: productDetail });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success ">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {this.state.productDetail.tenSP}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img
                  className="card-img-top"
                  src={this.state.productDetail.hinhAnh}
                  alt={this.state.productDetail.hinhAnh}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProduct;
