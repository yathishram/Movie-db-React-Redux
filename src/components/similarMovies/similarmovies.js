import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { api_key } from "../../config";
import axios from "axios";
import MoviesPreview from "../movies-preview/moviesPreview";

class SimilarMovies extends Component {
  state = {
    id: this.props.id,
    result: null,
  };

  fetchData = (movieId, api_key) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US&page=1`)
      .then((data) => this.setState({ result: data.data.results }))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.fetchData(this.state.id, api_key);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.props.id) {
      this.setState({
        id: this.props.id,
      });
      this.fetchData(this.state.id, api_key);
    }
  }

  render() {
    console.log(this.state.result);
    if (this.state.result !== null) {
      return (
        <Container className="text-center container">
          <h4 className="display-4">Similar Movies</h4>
          <Row className="py-3 my-4">
            {this.state.result
              .filter((movie, idx) => idx < 8)
              .map((movie) => (
                <MoviesPreview key={movie.id} movie={movie} />
              ))}
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <h3 className="display-5">Loading</h3>
        </Container>
      );
    }
  }
}

export default SimilarMovies;
