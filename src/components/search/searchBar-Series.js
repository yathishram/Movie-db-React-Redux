import React, { Component } from "react";
import axios from "axios";
import { Row, InputGroup, FormControl, Button } from "react-bootstrap";
import { api_key } from "../../config";
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
    console.log(this.state.result);
    return (
      <>
        <div className="search-container">
          <InputGroup className="text-input w-25">
            <FormControl
              placeholder="Search Series"
              aria-label="Search series"
              aria-describedby="basic-addon2"
              onChange={this.onChange}
            />
            <InputGroup.Append>
              <Button variant="outline-primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>

        <Row className="py-3 my-4">
          {this.state.result && this.state.result.map((series) => <SeriesPreview key={series.id} series={series} />)}
        </Row>
      </>
    );
  }
}

export default SearchBarSeries;
