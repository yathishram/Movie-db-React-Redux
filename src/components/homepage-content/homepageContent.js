import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import MoviesPreview from "../movies-preview/moviesPreview";

class HomepageContent extends Component {
  state = {
    api_key: "566ee703b7c3ef6b2b87a8ec743b2a1e",
    movies: null,
  };
  async componentDidMount() {
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.state.api_key}&language=en-US&page=1`)
      .then((data) => this.setState({ movies: data.data.results }))
      .catch((err) => console.log(err.message));
  }
  render() {
    console.log(this.state.movies);
    if (this.state.movies !== null) {
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
        </Container>
      );
    } else {
      return (
        <Container>
          <h3>Loading</h3>
        </Container>
      );
    }
  }
}

export default HomepageContent;
