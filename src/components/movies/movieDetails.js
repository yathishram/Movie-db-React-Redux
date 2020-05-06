import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key, image_url_dets } from "../../config";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import SimilarMovies from "../similarMovies/similarmovies";

const MovieDetails = ({ match }) => {
  //const [id, setId] = useState(match.params.movieId)
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (movieId) => {
      setLoading(true);
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`);
      setResult(res.data);
      setLoading(false);
    };
    fetchData(match.params.movieId);
  }, [match.params.movieId]);

  if (loading) {
    return (
      <Container className="content-container text-center">
        <Spinner animation="border" />
      </Container>
    );
  } else {
    return (
      <>
        <Container className="content-container">
          <Row>
            <Col md={6} lg={5}>
              <Image src={image_url_dets + result.poster_path} className="shadow p-3 mb-5 bg-white rounded" />
            </Col>
            <Col md={6} lg={6} className="justify-content-left">
              <h3 className="display-4">{result.title}</h3>
              <p className="text-muted">Overview: {result.overview}</p>
              <p>
                Genre:
                {result.genres &&
                  result.genres.map((genre) => {
                    return <span key={genre.id}> &#10022; {genre.name} </span>;
                  })}
              </p>
              <p>Release Date: {result.release_date}</p>
              <p>Runtime: {result.runtime}mins</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <SimilarMovies id={result.id} />
        </Container>
      </>
    );
  }
};

export default MovieDetails;
