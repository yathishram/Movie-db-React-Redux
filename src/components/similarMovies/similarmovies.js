import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { api_key } from "../../config";
import axios from "axios";
import MoviesPreview from "../movies-preview/moviesPreview";

const SimilarMovies = ({ id }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (movieId) => {
      setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${api_key}&language=en-US&page=1`
      );
      setResult(res.data.results);
      setLoading(false);
    };
    fetchData(id);
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" />
      </Container>
    );
  } else {
    return (
      <Container className="text-center container">
        <h4 className="display-4">Similar Movies</h4>
        <Row className="py-3 my-4">
          {result
            .filter((movie, idx) => idx < 8)
            .map((movie) => (
              <MoviesPreview key={movie.id} movie={movie} />
            ))}
        </Row>
      </Container>
    );
  }
};

export default SimilarMovies;
