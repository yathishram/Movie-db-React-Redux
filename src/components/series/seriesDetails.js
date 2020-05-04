import React, { useState, useEffect } from "react";
import axios from "axios";
import { api_key, image_url_dets } from "../../config";
import { Container, Row, Col, Image } from "react-bootstrap";
import SimilarSeries from "../similarSeries/similarSeries";
//import SimilarMovies from "../similarMovies/similarmovies";

const SeriesDetails = ({ match }) => {
  //const [id, setId] = useState(match.params.movieId)
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (tvid) => {
      setLoading(true);
      const res = await axios.get(`https://api.themoviedb.org/3/tv/${tvid}?api_key=${api_key}&language=en-US`);
      setResult(res.data);
      setLoading(false);
    };
    fetchData(match.params.seriesId);
  }, [match.params.seriesId]);
  //console.log(result);
  if (loading) {
    return (
      <Container className="content-container text-center">
        <h3>Loading!!</h3>
      </Container>
    );
  } else {
    console.log(result);
    return (
      <>
        <Container className="seriesContainer">
          <Row>
            <Col md={6} lg={5}>
              <Image src={image_url_dets + result.poster_path} className="shadow p-3 mb-5 bg-white rounded" />
            </Col>
            <Col md={6} lg={6} className="justify-content-left">
              <h3 className="display-4">{result.name}</h3>
              <p>Original Title: {result.original_name}</p>
              <p className="text-muted">Overview: {result.overview}</p>
              <p>
                Genre:
                {result.genres &&
                  result.genres.map((genre) => {
                    return <span key={genre.id}> &#10022; {genre.name} </span>;
                  })}
              </p>
              <p>Release Date: {result.first_air_date}</p>
              <p>Last Air Date: {result.last_air_date}</p>
              <p>Status: {result.status}</p>
              <p>Total Episodes: {result.number_of_episodes}</p>
              <p>
                Created By:{" "}
                {result.created_by &&
                  result.created_by.map((creator) => {
                    return <span key={creator.id}> &#10022; {creator.name} </span>;
                  })}
              </p>
              <a href={result.homepage}>
                <p>Where to watch?</p>
              </a>
            </Col>
          </Row>
        </Container>
        {
          <Container>
            <SimilarSeries id={result.id} />
          </Container>
        }
      </>
    );
  }
};

export default SeriesDetails;
