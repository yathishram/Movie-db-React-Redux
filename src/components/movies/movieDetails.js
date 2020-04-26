import React, { Component } from "react";
import "./movie-styles.css";
import axios from "axios";
import { api_key, image_url_dets } from "../../config";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimilarMovies from "../similarMovies/similarmovies";

class MovieDetails extends Component {
  state = {
    background_image: "",
    genres: null,
    id: "",
    title: "",
    overview: "",
    release_date: "",
    runtime: "",
    vote_average: "",
    vote_count: "",
    image: "",
  };
  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${api_key}&language=en-US`)
      .then((data) =>
        this.setState({
          background_image: data.data.backdrop_path,
          genres: data.data.genres,
          id: data.data.id,
          title: data.data.title,
          overview: data.data.overview,
          release_date: data.data.release_date,
          runtime: data.data.runtime,
          vote_average: data.data.vote_average,
          vote_count: data.data.vote_count,
          image: data.data.poster_path,
        })
      )
      .catch((err) => err.message);
  }
  render() {
    if (this.state.id !== "") {
      return (
        <>
          <Container className="movieContainer">
            <Row>
              <Col md={6} lg={5}>
                <Image src={image_url_dets + this.state.image} className="shadow p-3 mb-5 bg-white rounded" />
              </Col>
              <Col md={6} lg={6} className="justify-content-left">
                <h3 className="display-4">{this.state.title}</h3>
                <p className="text-muted">Overview: {this.state.overview}</p>
                <p>
                  {" "}
                  Genre:
                  {this.state.genres.map((genre) => {
                    return <span key={genre.id}> &#10022; {genre.name} </span>;
                  })}
                </p>
                <p>Release Date: {this.state.release_date}</p>
                <p>Runtime: {this.state.runtime}mins</p>
              </Col>
            </Row>
          </Container>
          <Container>
            <SimilarMovies id={this.state.id} />
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
