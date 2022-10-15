import React from "react";

const FormGroup = (props) => {
  return (
    <div className="mb-6 flex flex-col gap-y-3 lg:mb-6">{props.children}</div>
  );
};

export default FormGroup;
