import React, { Component } from 'react';

class Product extends Component {
    render() {
        let { prod } = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={prod.hinhAnh} alt={prod.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <p className="card-text">{prod.gia}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;