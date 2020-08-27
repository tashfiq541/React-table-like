import React, { Component } from "react";
import Movies from "./components/movies";

class App extends Component {
  state = {
    movies: [
      {
        id: "m01",
        title: "Terminator",
        genre: "Action",
        stock: 6,
        rate: 2.5,
        liked: false,
      },
      {
        id: "m02",
        title: "Die Hard",
        genre: "Action",
        stock: 5,
        rate: 2.5,
        liked: false,
      },
      {
        id: "m03",
        title: "Get Out",
        genre: "Thriller",
        stock: 8,
        rate: 3.5,
        liked: false,
      },
    ],
  };

  movieDeleteHandler = (movieIndex) => {
    const movies = [...this.state.movies];
    movies.splice(movieIndex, 1);
    this.setState({ movies: movies });
  };

  likeHandler = (movieId) => {
    const movieIndex = this.state.movies.findIndex((m) => {
      return m.id === movieId;
    });
    const movie = { ...this.state.movies[movieIndex] };
    movie.liked = !movie.liked;
    const movies = [...this.state.movies];
    movies[movieIndex] = movie;
    this.setState({ movies: movies });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p className="container">There are no movies in database</p>;
    return (
      <div className="container">
        <p>There are {this.state.movies.length} movies in database</p>
        <Movies
          movies={this.state.movies}
          movieDelete={this.movieDeleteHandler}
          movieLiked={this.likeHandler}
        />
      </div>
    );
  }
}

export default App;
