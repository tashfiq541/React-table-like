import React, { Component } from "react";
import Movies from "./components/movies";
import { paginate } from "./utils/paginate";
import Listgroup from "./components/common/listgroup";
import { getGenres } from "./services/fakeGenreService";

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
      {
        id: "m04",
        title: "Trip to Italy",
        genre: "Comedy",
        stock: 7,
        rate: 3.5,
        liked: false,
      },
      {
        id: "m05",
        title: "Airplane",
        genre: "Comedy",
        stock: 7,
        rate: 3.5,
        liked: false,
      },
      {
        id: "m06",
        title: "Wedding Crashers",
        genre: "Comedy",
        stock: 7,
        rate: 3.5,
        liked: false,
      },
      {
        id: "m07",
        title: "Gone Girl",
        genre: "Thriller",
        stock: 7,
        rate: 4.5,
        liked: false,
      },
      {
        id: "m08",
        title: "The Sixth Secnse",
        genre: "Thriller",
        stock: 4,
        rate: 3.5,
        liked: false,
      },
      {
        id: "m09",
        title: "the Avengers",
        genre: "Action",
        stock: 7,
        rate: 3.5,
        liked: false,
      },
    ],
    pageSize: 4,
    currentPage: 1,
    genres: [],
  };

  componentDidMount() {
    this.setState({ genres: getGenres() });
  }

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

  pageChangeHandler = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    if (this.state.movies.length === 0)
      return <p className="container">There are no movies in database</p>;

    const newMovies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Listgroup
              items={this.state.genres}
              onItemSelect={this.handleGenreSelect}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col-md-9">
            <p>There are {this.state.movies.length} movies in database</p>
            <Movies
              movies={this.state.movies}
              movieDelete={this.movieDeleteHandler}
              movieLiked={this.likeHandler}
              pageSize={this.state.pageSize}
              pageChange={this.pageChangeHandler}
              currentPage={this.state.currentPage}
              newMovies={newMovies}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
