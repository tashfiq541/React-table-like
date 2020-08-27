import React, { Component } from "react";
import Like from "./common/Like";

class Movie extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.stock}</td>
                <td>{movie.rate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.props.movieLiked(movie.id)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.props.movieDelete(index)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movie;
