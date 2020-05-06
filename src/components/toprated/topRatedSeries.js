import React, { useState, useEffect } from "react";
import { Container, Row, Spinner, Button } from "react-bootstrap";
import { api_key } from "../../config";
import axios from "axios";
//import MoviesPreview from "../movies-preview/moviesPreview";
import SeriesPreview from "../series-preview/seriesPreview";

const TopSeriesList = () => {
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&language=en-US&page=${pageNumber}`
      );
      setResults(res.data.results);
      setLoading(false);
    };
    fetchData();
  }, [pageNumber]);

  const nextPageClick = (pageNumber) => {
    setPageNumber(pageNumber + 1);
  };

  const previousPageClick = (pageNumber) => {
    if (pageNumber === 1) {
      setPageNumber(pageNumber);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  if (loading) {
    return (
      <>
        <Container className="list-container text-center">
          <Spinner animation="border" />
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container className="container-list text-center">
          <h4 className="display-4">Top Rated Series</h4>
          <Row className="py-3 my-4">
            {result.map((series) => (
              <SeriesPreview key={series.id} series={series} />
            ))}
          </Row>
          <Button variant="outline-primary" className="p-3 m-3" onClick={() => previousPageClick(pageNumber)}>
            Previous
          </Button>{" "}
          <Button variant="outline-secondary" className="p-3 m-3" onClick={() => nextPageClick(pageNumber)}>
            Next
          </Button>{" "}
        </Container>
      </>
    );
  }
};

export default TopSeriesList;
