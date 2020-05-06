import React, { Component } from "react";
import axios from "axios";
import { Row, Form, FormControl, Button } from "react-bootstrap";
import { api_key } from "../../config";
import { withRouter } from "react-router-dom";
import debounce from "lodash/debounce";
import SeriesPreview from "../series-preview/seriesPreview";

class SearchBarSeries extends Component {
  state = {
    result: [],
  };
  onChange = (event) => {
    /* signal to React not to nullify the event object */
    event.persist();
    //event.preventDefault();
    if (!this.debouncedFn) {
      this.debouncedFn = debounce(() => {
        let searchString = event.target.value;
        axios
          .get(
            `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&query=${searchString}&page=1&include_adult=false`
          )
          .then((data) => this.setState({ result: data.data.results }))
          .catch((err) => console.log(err));
      }, 300);
    }
    this.debouncedFn();
  };

  render() {
    const { history } = this.props;
    return (
      <>
        <div className="search-container">
          <Form inline>
            <FormControl type="text" placeholder="Search Series" className="mr-sm-2" onChange={this.onChange} />
            <Button variant="outline-success" onClick={() => history.push("/topseries")}>
              Top Rated
            </Button>
          </Form>
        </div>

        <Row className="py-3 my-4">
          {this.state.result && this.state.result.map((series) => <SeriesPreview key={series.id} series={series} />)}
        </Row>
      </>
    );
  }
}

export default withRouter(SearchBarSeries);
