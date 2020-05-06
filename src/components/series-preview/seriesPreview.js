import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import { image_url } from "../../config";

const SeriesPreview = ({ series, history, match, location }) => {
  return (
    <>
      <Col md={6} lg={3} className="text-center">
        <div onClick={() => history.push(`/series/${series.id}`)}>
          <Image src={image_url + series.poster_path} className="shadow p-3 mb-5 bg-white rounded" />
        </div>
      </Col>
    </>
  );
};

export default withRouter(SeriesPreview);
