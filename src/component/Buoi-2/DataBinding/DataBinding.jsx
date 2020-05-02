import React, { Component } from "react";

class DataBinding extends Component {
  userName = "hung";
  hocVien = {
    maHV: 1,
    tenHV: "Hoàng Phi Hùng",
    age: 21,
  };
  renderImg = () => {
    //khi binding data = phương thức thì dữ liệu trã về phải là component hoặc text ,number
    return (
        <img src="https://aphoto.vn/wp-content/uploads/2018/02/anh-dep-chup-dien-thoai.jpg" alt="" />
    );
  };
  render() {
    let { maHV, tenHV, age } = this.hocVien;
    return (
      <div>
        {this.renderImg()}
        <ul>
          <li>Mã : {maHV}</li>
          <li>Tên: {tenHV} </li>
          <li>Tuổi : {age}</li>
        </ul>
      </div>
    );
  }
}

export default DataBinding;
