import React, { Component } from "react";

class StateUpdating extends Component {
  //state : thuộc tính chứa các giá trị có thể thay đổi khi người dùng thao tác
  state = {
    isLogin: false,
  };

  userName = "Hello!!! hùng";
  login = () => {
    let newState = {
      isLogin: true,
    };
    /** this.setState là 1 phương thưc của class Componnent
     *  mà Component mình tạo kế thừa : Dùng để set giá trị các biến trong State và gọi lại hàm Render() */
    this.setState(newState);
    console.log(this.state.isLogin);
  };
  logout = () => {
    let newState = {
      isLogin: false,
    };
    /** this.setState là 1 phương thưc của class Componnent
     *  mà Component mình tạo kế thừa : Dùng để set giá trị các biến trong State và gọi lại hàm Render() */
    this.setState(newState);
    console.log(this.state.isLogin);
  };
  renderLogin = () => {
    if (this.state.isLogin === true) {
      return (
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">{this.userName}</h3>
          </div>
          <button
            type="button"
            onClick={() => this.logout()}
            className="btn btn-danger"
          >
            Thoát
          </button>
        </div>
      );
    }
    return (
      <button
        type="button"
        onClick={() => this.login()}
        className="btn btn-danger"
      >
        Đăng nhập
      </button>
    );
  };

  render() {
    return <div>{this.renderLogin()}</div>;
  }
}

export default StateUpdating;
