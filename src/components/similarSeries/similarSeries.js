import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { api_key } from "../../config";
import axios from "axios";
import SeriesPreview from "../series-preview/seriesPreview";
const SimilarSeries = ({ id }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (tvid) => {
      setLoading(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${tvid}/similar?api_key=${api_key}&language=en-US&page=1`
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
        <h4 className="display-4">Similar Series</h4>
        <Row className="py-3 my-4">
          {result
            .filter((series, idx) => idx < 8)
            .map((series) => (
              <SeriesPreview key={series.id} series={series} />
            ))}
        </Row>
      </Container>
    );
  }
};

export default SimilarSeries;
