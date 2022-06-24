import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function DepartmentItem(props) {
  let department = props.department;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 my-2">
      <Card>
        <CardBody>
          <CardTitle>Phòng {department.name}</CardTitle>
          <CardText>Số nhân viên: {department.numberOfStaff}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default DepartmentItem;
