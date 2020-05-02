import React, { Component } from "react";

class EventHandle extends Component {
  hocVien = {
    maHV: 1,
    tenHV: "Hoàng Phi Hùng",
    age: 21,
  };
  handleOnClick = (hocVien) => {
    alert(hocVien.tenHV);
  };

  render() {
    // let { maHV, tenHV, age } = this.hocVien;
    return (
      <div>
        <button
          type="button"
          onClick={() => this.handleOnClick(this.hocVien)}
          class="btn btn-danger"
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default EventHandle;
