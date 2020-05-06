import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import { image_url } from "../../config";

const MoviesPreview = ({ movie, history, match, location }) => {
  return (
    <>
      <Col md={6} lg={3} className="text-center">
        <div onClick={() => history.push(`/movie/${movie.id}`)}>
          <Image src={image_url + movie.poster_path} className="shadow p-3 mb-5 bg-white rounded" />
        </div>
      </Col>
    </>
  );
};

export default withRouter(MoviesPreview);
