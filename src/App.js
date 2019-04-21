import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "fuck",
            poster:
              "https://regalcdn.azureedge.net/CaptainMarvel/HO00008345/TV_SmallPosterImage/20181219-113516399.jpg"
          },
          {
            title: "test",
            poster:
              "https://cdn3.movieweb.com/i/movie/gEh4g0Db8qqSuAVOoGuEqYp9XRTdR2/384:50/Shazam.jpg"
          },
          {
            title: "War",
            poster:
              "https://regalcdn.azureedge.net/CaptainMarvel/HO00008345/TV_SmallPosterImage/20181219-113516399.jpg"
          }
        ]
      });
    }, 4000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
