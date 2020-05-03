import React, { Component } from 'react';

class PropsDemo extends Component {
    // this.state : Dùng để lưu các giá trị thay đổi khi người dùng thao tác
    //this.prods : Dùng để nhận dữ liệu từ component Cha truyền vào
    // this.setState() : dùng để thay đổi giá trị stat và render lại giao diện 
    // phỏng vấn phân biệt state và prods
    // State có thẻ gán  lại giá trị thông qua setState còn Prods không thể gán lại
    render() {
        let stu = this.props.student;
        return (
            <div className="container">
                <h4 className="text-center text-success ">{this.props.title} </h4>
                <div className="card text-left">
                    <div className="card-body">
                        <h4 className="card-title">{stu?.name}</h4>
                        <p className="card-text">{stu?.age}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PropsDemo;