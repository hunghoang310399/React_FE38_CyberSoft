import React, { Component } from 'react';
import Product from './Product';

class ListProduct extends Component {
    renderProduct = () => {
        let { arrayProduct } = this.props;
        return arrayProduct.map((product, index) => {
            return (
                <div className="col-4" key={index}>
                    <Product prod = {product}></Product>
                  
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success ">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        );
    }
}

export default ListProduct;