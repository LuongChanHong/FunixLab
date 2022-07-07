import React from "react";

function LoadingSpinner(props) {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-success"></span>
          <p>Loading...</p>
        </div>
      </div>
    </section>
  );
}

export default LoadingSpinner;
