import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { api_key } from "../../config";
import axios from "axios";
import "./movies-list.css";
import MoviesPreview from "../movies-preview/moviesPreview";
const MovieList = () => {
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
      );
      setResults(res.data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Container className="container-movielist text-center">
          <h4 className="display-4">Loading!</h4>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container className="container-movielist text-center">
          <h4 className="display-4">Popular Movies</h4>
          <Row className="py-3 my-4">
            {result.map((movie) => (
              <MoviesPreview key={movie.id} movie={movie} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
};

export default MovieList;
