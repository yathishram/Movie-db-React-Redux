import React, { Component } from "react";
import "./movie-styles.css";
import axios from "axios";
import { api_key, image_url_dets } from "../../config";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimilarMovies from "../similarMovies/similarmovies";

class MovieDetails extends Component {
  state = {
    id: this.props.match.params.movieId,
    result: null,
  };
  fetchData = (movieId, api_key) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
      .then((data) =>
        this.setState({
          result: data.data,
        })
      )
      .catch((err) => err.message);
  };
  componentDidMount() {
    this.fetchData(this.state.id, api_key);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.props.match.params.movieId) {
      this.setState({
        id: this.props.match.params.movieId,
      });
      this.fetchData(this.state.id, api_key);
    }
  }

  render() {
    if (this.state.result !== null) {
      return (
        <>
          <Container className="movieContainer">
            <Row>
              <Col md={6} lg={5}>
                <Image
                  src={image_url_dets + this.state.result.poster_path}
                  className="shadow p-3 mb-5 bg-white rounded"
                />
              </Col>
              <Col md={6} lg={6} className="justify-content-left">
                <h3 className="display-4">{this.state.result.title}</h3>
                <p className="text-muted">Overview: {this.state.result.overview}</p>
                <p>
                  {" "}
                  Genre:
                  {this.state.result.genres.map((genre) => {
                    return <span key={genre.id}> &#10022; {genre.name} </span>;
                  })}
                </p>
                <p>Release Date: {this.state.result.release_date}</p>
                <p>Runtime: {this.state.result.runtime}mins</p>
              </Col>
            </Row>
          </Container>
          <Container>
            <SimilarMovies id={this.state.result.id} />
          </Container>
        </>
      );
    } else {
      return (
        <Container className="movieContainer text-center">
          <h3>Loading!!</h3>
        </Container>
      );
    }
  }
}

export default MovieDetails;
