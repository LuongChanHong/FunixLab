import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import LoadingSpinner from "./LoadingSpinner.js";

function RenderCard({ item, isLoading, errmess }) {
  if (isLoading) {
    return <LoadingSpinner />;
  } else if (errmess) {
    return <h4>{errmess}</h4>;
  } else {
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? (
            <CardSubtitle>{item.designation}</CardSubtitle>
          ) : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
    // if (item != undefined) {
    //   return (
    //     <Card>
    //       <CardImg src={item.image} alt={item.name} />
    //       <CardBody>
    //         <CardTitle>{item.name}</CardTitle>
    //         {item.designation ? (
    //           <CardSubtitle>{item.designation}</CardSubtitle>
    //         ) : null}
    //         <CardText>{item.description}</CardText>
    //       </CardBody>
    //     </Card>
    //   );
    // }
  }
}

function Home(props) {
  console.log("props:", props);
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
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-4 my-2">
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  );
}

export default Home;
