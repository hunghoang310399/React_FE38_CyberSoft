import React, { Component } from "react";

class ExerciseChosseCar extends Component {
  state = {
    imgCar: "./img/products/black-car.jpg",
  };
  chosseCarImage = (imgCarColor) => {
    this.setState({ imgCar: imgCarColor });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <img className="col-7" src={this.state.imgCar} alt="" />
          <div className="col-5">
            <div className="card text-left">
              <div className="card-header bg-light text-success">
                Chọn màu xe
              </div>
              <div className="card-body">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.chosseCarImage("./img/products/red-car.jpg");
                  }}
                >
                  Xe đỏ
                </button>
                <br />
                <button
                  className="btn btn btn-dark"
                  onClick={() => {
                    this.chosseCarImage("./img/products/black-car.jpg");
                  }}
                >
                  Xe đen
                </button>
                <br />
                <button
                  className="btn btn-light"
                  onClick={() => {
                    this.chosseCarImage("./img/products/silver-car.jpg");
                  }}
                >
                  Xe bạc
                </button>
                <br />
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    this.chosseCarImage("./img/products/steel-car.jpg");
                  }}
                >
                  Xe xám
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseChosseCar;
