import React from "react";

const LoadingSpinner = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center align-items-center mx-2 mt-2 mb-4">
            <div className="fa fa-spinner fa-pulse fa-3x fa-fw text-danger"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingSpinner;
