import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { api_key } from "../../config";
import axios from "axios";
import "./series-list.css";
import SeriesPreview from "../series-preview/seriesPreview";
class SeriesList extends Component {
  state = {
    result: null,
  };

  componentDidMount() {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`)
      .then((data) => this.setState({ result: data.data.results }))
      .catch((err) => console.log(err));
  }
  render() {
    console.log(this.state.result);
    if (this.state.result !== null) {
      return (
        <>
          <Container className="container-serieslist text-center">
            <h4 className="display-4">Popular Series</h4>
            <Row className="py-3 my-4">
              {this.state.result.map((series) => (
                <SeriesPreview key={series.id} series={series} />
              ))}
            </Row>
          </Container>
        </>
      );
    } else {
      return (
        <>
          <Container className="container-movielist">
            <h2>Loading!</h2>
          </Container>
        </>
      );
    }
  }
}

export default SeriesList;
