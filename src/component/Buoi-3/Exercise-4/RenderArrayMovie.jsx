import React, { Component } from "react";
import films from "./Data/Films.json";
class RenderArrayMovie extends Component {
    ArrayMovies = films;
    renderCardmovie = () => {
        // cách 1 dùng for để render mảng
        // let arrLi = [];
        // for (let i = 0; i < this.movies.length; i++) {
        //     let tagLi = <li key={i}>{this.movies[i].name}</li>;
        //     arrLi.push(tagLi);
        // }
        // return arrLi;
        return this.ArrayMovies.map((movie, index) => {
            return (
                <div className="col-3 mt-3" key={index}>
                    <div className="card text-left "   >
                        <img
                            src={movie.hinhAnh}
                            style={{ height: 300 }} className="card-img-top" alt=""
                        />
                        <div className="card-body">
                            <h4 className="card-title">
                                {movie.tenPhim.length > 10 ? <h4> {movie.tenPhim.substr(0, 10)}...</h4> : <h4>{movie.tenPhim}</h4>}
                            </h4>
                            <p>
                                Đánh giá: {movie.danhGia}
                            </p>
                            <p>
                                Ngày chiếu: {movie.ngayKhoiChieu}
                            </p>
                            <p class="card-text">
                                <strong>Mô tả</strong>:
                                 {movie.moTa.length > 40 ? <p> {movie.moTa.substr(0, 40)}...</p> : <p>{movie.moTa}</p>}
                            </p>
                        </div>
                    </div>
                </div>
            );
        });
    };
    render() {
        return (
            <div>
                <h3 className="text-center text-success">
                    Danh sách phim
                </h3>
                <div className="row">{this.renderCardmovie()}</div>
            </div>
        );
    }
}

export default RenderArrayMovie;
