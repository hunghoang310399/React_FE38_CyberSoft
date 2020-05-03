import React, { Component } from 'react';

class RenderWithMap extends Component {
    products = [
        { code: 1, name: 'IPhone X', price: 2500000 },
        { code: 2, name: 'IPhone XI', price: 3500000 },
        { code: 3, name: 'IPhone XII', price: 4500000 }
    ];
    renderProduct = () => {
        // cách 1 dùng for để render mảng
        // let arrLi = [];
        // for (let i = 0; i < this.products.length; i++) {
        //     let tagLi = <li key={i}>{this.products[i].name}</li>;
        //     arrLi.push(tagLi);
        // }
        // return arrLi;
        let arrLi = this.products.map((product, index) => {
            return <li key={index}>{product.name}</li>;
        })
        return arrLi;
    }
    renderCardProduct = () => {
        // cách 1 dùng for để render mảng
        // let arrLi = [];
        // for (let i = 0; i < this.products.length; i++) {
        //     let tagLi = <li key={i}>{this.products[i].name}</li>;
        //     arrLi.push(tagLi);
        // }
        // return arrLi;
        return this.products.map((product, index) => {
            return (
                <div className="col-4">
                    <div className="card text-left " key={index}>
                        <div className="card-body">
                            <h4 className="card-title">{product.name}</h4>
                            <p className="card-text">{product.price}</p>
                        </div>
                    </div>
                </div>
            );
        })

    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center text-success">Danh sách sản phẩm </h3>
                <ul>
                    {this.renderProduct()}
                </ul>
                <div className="row">
                    {this.renderCardProduct()}
                </div>
            
            </div>
        );
    }
}

export default RenderWithMap;