import React, { Component } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import MoviesPreview from "../movies-preview/moviesPreview";
import SeriesPreview from "../series-preview/seriesPreview";

class HomepageContent extends Component {
  state = {
    api_key: "566ee703b7c3ef6b2b87a8ec743b2a1e",
    movies: null,
    seriesList: null,
  };
  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.api_key}&language=en-US&page=1`)
      .then((data) => this.setState({ movies: data.data.results }))
      .catch((err) => console.log(err.message));
    axios
      .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.state.api_key}&language=en-US&page=1`)
      .then((data) => this.setState({ seriesList: data.data.results }))
      .catch((err) => console.log(err));
  }
  render() {
    if (this.state.movies !== null && this.state.seriesList !== null) {
      return (
        <Container className="text-center py-3 my-5 container">
          <h3 className="display-4">Top Movies</h3>
          <Row className="py-3 my-4">
            {this.state.movies
              .filter((movie, idx) => idx < 4)
              .map((movie) => (
                <MoviesPreview key={movie.id} movie={movie} />
              ))}
          </Row>
          <h3 className="display-4">Top Series</h3>
          <Row className="py-3 my-4">
            {this.state.seriesList
              .filter((series, idx) => idx < 4)
              .map((series) => (
                <SeriesPreview key={series.id} series={series} />
              ))}
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Spinner animation="border" />
        </Container>
      );
    }
  }
}

export default HomepageContent;
