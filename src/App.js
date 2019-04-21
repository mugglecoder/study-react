import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {
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
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "War",
            poster:
              "https://regalcdn.azureedge.net/CaptainMarvel/HO00008345/TV_SmallPosterImage/20181219-113516399.jpg"
          }
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
