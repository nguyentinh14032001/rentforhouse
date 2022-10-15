import React from "react";

const FormThreeCol = (props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-x-[20px]">{props.children}</div>
    </div>
  );
};

export default FormThreeCol;
