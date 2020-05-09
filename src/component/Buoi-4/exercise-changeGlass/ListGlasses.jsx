import React, { Component } from "react";
import Glasses from "./Glasses";
class ListGlasses extends Component {
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  //Dữ liệu của kính mặc định
  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderProductList = () => {
    return this.arrProduct.map((product, index) => {
      return (
        <Glasses
          key={index}
          product={product}
          changeGlasses={this.changeGlasses}
        />
      );
    });
  };

  changeGlasses = (newGlasses) => {
    //Mỗi lần click vào kính => lấy dữ liệu kính đó gán vào state
    this.setState({
      glassesCurrent: newGlasses,
    });
  };

  render() {
    let numRandom = Math.round(Math.random() * 1000); //Tạo số ngẫu nhiên

    let animationKeyFrame = `@keyframes animChangeGlasses${numRandom} {
            from {
                width: 0;
                top:0;
                opacity: 0;
                transform:rotate(45deg)
            }
            to { 
                width: 250px;
                top: 150px;
                opacity: .8;
                transform:rotate(0)
            }
        }`;

    const styleGlassesDefault = {
      position: "absolute",
      width: "250px",
      top: "150px",
      left: "115px",
      opacity: ".8",
      animation: `animChangeGlasses${numRandom} 1s`,
    };

    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/bgImg.jpg)",
          minHeight: 2000,
        }}
      >
        <style>{animationKeyFrame}</style>
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", minHeight: 2000 }}>
          <h3
            className="text-center text-light p-5"
            style={{ backgroundColor: "rgba(255,127,36,0.5)" }}
          >
            BÀI TẬP THỬ KÍNH
          </h3>
          <div className="container-fluid">
            <div className="row">
              <div className="col-7">
                <div className="card">
                  <div className="card-header bg-light">
                    <h3> Danh sách mẫu kính</h3>
                  </div>
                  <div className="card-body">
                    <div className="row">{this.renderProductList()}</div>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./glassesImage/model.jpg"
                    alt="model"
                  />
                  <img
                    style={styleGlassesDefault}
                    src={this.state.glassesCurrent.url}
                    alt="glassesDefault"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListGlasses;
