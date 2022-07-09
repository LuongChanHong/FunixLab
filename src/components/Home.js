import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FadeTransform } from "react-animation-components";

import LoadingSpinner from "./LoadingSpinner.js";
import { baseUrl } from "../shared/baseUrl.js";

function RenderCard({ item, isLoading, errmess }) {
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (errmess) {
    return <h4>{errmess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{ exitTransform: "scale(0.5) translateY(-50%)" }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
}

function Home(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-4 my-2">
          <RenderCard
            item={props.dish}
            isLoading={props.dishesLoading}
            errmess={props.dishesErrMess}
          />
        </div>
        <div className="col-4 my-2">
          <RenderCard
            item={props.promotion}
            isLoading={props.promosLoading}
            errmess={props.promosErrMess}
          />
        </div>
        <div className="col-4 my-2">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
