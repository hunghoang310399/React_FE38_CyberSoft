import React, { Component } from "react";
import style from './ExerciseChosseCar.module.css';
class ExerciseChosseCar extends Component {
  state = {
    imgCar: "./img/products/black-car.jpg",
  };
  chosseCarImage = (imgCarColor) => {
    this.setState({ imgCar: imgCarColor });
  };
  render() {
    const styleCursor = {
      cursor: "pointer",
    }

    return (
      <div className="container-fluid">
        <h1 className={style.txtColor}>Bài tập chọn xe</h1>

        <div className="row">
          <img className="col-7" src={this.state.imgCar} alt="" />
          <div className="col-5">
            <div className="card text-left">
              <div className="card-header bg-light text-success">
                Chọn màu xe
              </div>
              <div className="card-body " data-toggle="buttons">
                <div style={styleCursor} className=" btn-outline-danger row pt-3 pb-3 mt-3 border border-light" onClick={() => {
                  this.chosseCarImage("./img/products/red-car.jpg");
                }}>
                  <img src="./img/icons/icon-red.jpg" alt="icon-red" className="col-2" />
                  <div className="col-10">
                    <h3>Rally Red </h3>
                    <p>

                    </p>
                  </div>
                </div>
                <br />
                <div style={styleCursor} className="row pt-3 pb-3 mt-3 border border-light btn-outline-dark" onClick={() => {
                  this.chosseCarImage("./img/products/black-car.jpg");
                }}>
                  <img src="./img/icons/icon-black.jpg" alt="icon-black" className="col-2" />
                  <div className="col-10">
                    <h3>Crystal Black </h3>
                    <p>
                      Pearl
                    </p>
                  </div>
                </div>
                <br />

                <div style={styleCursor} className="row pt-3 pb-3 mt-3 border border-light" onClick={() => {
                  this.chosseCarImage("./img/products/silver-car.jpg");
                }}>
                  <img src="./img/icons/icon-silver.jpg" alt="icon-silver" className="col-2" />
                </div>
                <br />
                <div style={styleCursor} className=" row pt-3 pb-3 mt-3 border border-light" onClick={() => {
                  this.chosseCarImage("./img/products/steel-car.jpg");
                }}>
                  <img src="./img/icons/icon-steel.jpg" alt="icon-steel" className="col-2" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseChosseCar;
