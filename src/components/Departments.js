import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import DepartmentItem from "./DepartmentItem";

// Render ra Presentational Component
const renderDepartments = (list) => {
  return list.map((item) => <DepartmentItem key={item.id} department={item} />);
};

function Departments(props) {
  return (
    <section className="component_bg">
      <Header />
      <div className="container">
        <h1>Phòng ban</h1>
        <hr />
        <div className="row">{renderDepartments(props.departments)}</div>
      </div>
      <Footer />
    </section>
  );
}

export default Departments;
