import React, { Component } from "react";
import axios from "axios";
import { Row, Form, FormControl, Button } from "react-bootstrap";
import { api_key } from "../../config";
import { withRouter } from "react-router-dom";
import debounce from "lodash/debounce";
import MoviesPreview from "../movies-preview/moviesPreview";

class SearchBar extends Component {
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
            `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchString}&page=1&include_adult=false`
          )
          .then((data) => this.setState({ result: data.data.results }))
          .catch((err) => console.log(err));
      }, 300);
    }
    this.debouncedFn();
  };

  render() {
    const { history } = this.props;
    console.log(this.state.result);
    return (
      <>
        <div className="search-container">
          <Form inline>
            <FormControl type="text" placeholder="Search Movies" className="mr-sm-2" onChange={this.onChange} />
            <Button variant="outline-success" onClick={() => history.push("/topmovies")}>
              Top Rated
            </Button>
          </Form>
        </div>

        <Row className="py-3 my-4">
          {this.state.result && this.state.result.map((movie) => <MoviesPreview key={movie.id} movie={movie} />)}
        </Row>
      </>
    );
  }
}

export default withRouter(SearchBar);
