import React from "react";

const FormGroup = (props) => {
  return (
    <div className="mb-[24px] flex flex-col gap-y-3 lg:mb-[24px]">
      {props.children}
    </div>
  );
};

export default FormGroup;
